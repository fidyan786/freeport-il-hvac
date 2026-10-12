/**
 * Next writes icon and Open Graph routes as extensionless PNG files and
 * links them with a trailing slash. Apache will not serve those as images.
 * Rename them to .png and point the exported HTML at the files.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "out");

async function walk(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, files);
    else files.push(full);
  }
  return files;
}

// charSet and charset are the same length, so this does not break Next's
// length-prefixed flight payload. Do not rewrite other strings in that payload.
let rewritten = 0;
for (const file of await walk(OUT)) {
  if (path.extname(file) !== ".html") continue;
  const html = await readFile(file, "utf8");
  const next = html.replaceAll("charSet=", "charset=");
  if (next !== html) {
    await writeFile(file, next);
    rewritten += 1;
  }
}

const home = await readFile(path.join(OUT, "index.html"), "utf8");
if (!home.includes("charset=") || home.includes("opengraph-image.png")) {
  console.error("static-assets: homepage charset or image URLs look wrong");
  process.exit(1);
}
console.log(`static-assets: normalized charset in ${rewritten} html files`);
