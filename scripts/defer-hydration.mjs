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

const APP_DIR = path.join(process.cwd(), ".next", "server", "app");
const MARK = "data-defer-hydration";

const LOADER = `<script ${MARK}>
(function () {
  function load() {
    var nodes = document.querySelectorAll("script[data-src]");
    for (var i = 0; i < nodes.length; i++) {
      var oldNode = nodes[i];
      var created = document.createElement("script");
      created.src = oldNode.getAttribute("data-src");
      if (oldNode.id) created.id = oldNode.id;
      if (oldNode.hasAttribute("nomodule")) created.noModule = true;
      else created.async = true;
      oldNode.replaceWith(created);
    }
  }
  function afterPaint() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTimeout(load, 0);
      });
    });
  }
  if (document.readyState === "complete") afterPaint();
  else window.addEventListener("load", afterPaint, { once: true });
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
  path.join(APP_DIR, "services", "furnace-repair-freeport-il.html"),
  "utf8",
);
const stillEager = sample.includes('<script src="/_next/static/chunks/');
if (stillEager || !sample.includes(MARK)) {
  console.error("defer-hydration: furnace page still loads chunks during parse");
  process.exit(1);
}
console.log(`defer-hydration: updated ${changed} of ${files.length} html files`);
