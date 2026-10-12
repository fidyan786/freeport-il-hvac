/**
 * Writes a harmless public/.htaccess.
 * The live site is a Hostinger Node.js Web App. Apache rewrite rules in this
 * file can replace Hostinger's Node.js proxy, so this script does not emit any.
 */
import { writeFileSync } from "node:fs";
import path from "node:path";

const htaccess = `# freeporthvacil.com runs as a Hostinger Node.js Web App.
# Hostinger writes the Apache proxy rules in public_html itself.
# This file intentionally has no RewriteRules, redirects, ErrorDocument,
# or security headers, so it cannot replace that proxy.
# Redirects live in src/proxy.ts. Security headers live in next.config.ts.
`;

writeFileSync(path.join(process.cwd(), "public/.htaccess"), htaccess);
console.log("write-htaccess: wrote a comment-only public/.htaccess");
