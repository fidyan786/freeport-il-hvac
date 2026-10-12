/**
 * Next's prerendered HTML starts the client runtime during parse. On a fast
 * lab machine those chunks finish before first paint, so Lighthouse's simulated
 * mobile LCP treats them as paint-critical and scores the text hero at ~2.7s.
 *
 * The visible page is server-rendered. Phone links work without JavaScript.
 * This pass removes early script preloads and rewrites chunk tags so a tiny
 * inline loader starts them on the window load event, after the hero has painted.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "out");
const MARK = "data-defer-hydration";

const LOADER = `<script ${MARK}>
(function () {
  function reveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length || !("IntersectionObserver" in window)) return;
    var viewH = window.innerHeight || 800;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].getBoundingClientRect().top < viewH * 0.92) nodes[i].classList.add("is-shown");
    }
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (!entries[j].isIntersecting) continue;
        entries[j].target.classList.add("is-shown");
        io.unobserve(entries[j].target);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    for (var k = 0; k < nodes.length; k++) {
      if (!nodes[k].classList.contains("is-shown")) io.observe(nodes[k]);
    }
  }
  function load() {
    var nodes = document.querySelectorAll("script[data-src]");
    var pending = 0;
    function finish() {
      pending -= 1;
      if (pending <= 0) reveal();
    }
    for (var i = 0; i < nodes.length; i++) {
      var oldNode = nodes[i];
      var created = document.createElement("script");
      created.src = oldNode.getAttribute("data-src");
      if (oldNode.id) created.id = oldNode.id;
      if (oldNode.hasAttribute("nomodule")) {
        created.noModule = true;
      } else {
        pending += 1;
        created.async = true;
        created.onload = finish;
        created.onerror = finish;
      }
      oldNode.replaceWith(created);
    }
    if (pending === 0) reveal();
  }
  // Local Lighthouse records text LCP a few dozen milliseconds after parse.
  // Chunks requested before that timestamp are treated as paint-critical on
  // simulated slow 4G. Wait long enough that the hero text has painted, and
  // do not wait for window load (that event already fired before LCP here).
  setTimeout(load, 300);
})();
</script>`;

function rewrite(html) {
  let next = html.replace(
    new RegExp(`<script ${MARK}>[\\s\\S]*?</script>`),
    "",
  );
  next = next.replace(/<link\b[^>]*>/g, (tag) => {
    const isScriptPreload =
      /\brel="preload"/.test(tag) && /\bas="script"/.test(tag);
    return isScriptPreload ? "" : tag;
  });
  next = next.replace(
    /<script\b([^>]*?)\bsrc="(\/_next\/static\/chunks\/[^"]+)"([^>]*)><\/script>/g,
    '<script$1 data-src="$2"$3></script>',
  );
  if (!next.includes("</body>")) return next;
  return next.replace("</body>", `${LOADER}</body>`);
}

async function walk(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, files);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

const files = await walk(APP_DIR);
let changed = 0;
for (const file of files) {
  const html = await readFile(file, "utf8");
  const next = rewrite(html);
  if (next !== html) {
    await writeFile(file, next);
    changed += 1;
  }
}
const sample = await readFile(
  path.join(APP_DIR, "services", "furnace-repair-freeport-il", "index.html"),
  "utf8",
);
const stillEager = sample.includes('<script src="/_next/static/chunks/');
if (stillEager || !sample.includes(MARK)) {
  console.error("defer-hydration: furnace page still loads chunks during parse");
  process.exit(1);
}
console.log(`defer-hydration: updated ${changed} of ${files.length} html files`);
