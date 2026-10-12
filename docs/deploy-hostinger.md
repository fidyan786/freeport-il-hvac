# Deploy on Hostinger

`freeporthvacil.com` is a Hostinger **Node.js Web App**, not a static site in `public_html`. Hostinger’s Next.js preset always builds in server mode. It wraps `next.config.ts` and sets `output: "standalone"` itself, then starts the server in `.next`. Setting `output: "export"` does nothing on that preset and does not create an `out/` directory.

`npm run build` is `next build --webpack`. Hostinger’s Turbopack build fails on `globals.css` (`TurbopackInternalError` in PostCSS). The webpack build is the one that succeeds there.

Redirects (www to the apex, http to https when `X-Forwarded-Proto` is `http`, old URLs, lowercase paths, trailing slashes) are a single **301** from `src/proxy.ts`. Security headers are in `next.config.ts`. A missing page is the App Router `not-found` page (HTTP 404). `public/.htaccess` is comments only, so it cannot replace the proxy rules Hostinger writes in `public_html`.

## Settings to enter when connecting the repo

In hPanel: **Websites → Add Website → Node.js web app → Import Git repository**. Connect GitHub, pick this repo, and set:

| Field | Enter this |
| --- | --- |
| Framework / application type | `next` (Next.js). Do not choose Other, and do not treat it as a static site. |
| Branch | `main` |
| Node.js version | `22.x` |
| Root directory | `/` (the repository root; leave it empty if the form has no root field) |
| Package manager | `npm` |
| Install command | `npm install` (Hostinger’s default; do not change it) |
| Build script / build command | `build` if the field is the npm script name, or `npm run build` if the field is the full command |
| Output directory | `.next` |
| Entry file | Leave empty. Hostinger ignores it for the Next.js preset and starts the standalone server. |
| Environment variables | Leave `NEXT_PUBLIC_SITE_URL` unset, or set it to `https://freeporthvacil.com`. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` only when a real GA4 property exists. |

Do not set the output directory to `out`. Do not add a start command unless the form requires one. If it does, leave the preset’s value. The official Next.js preset starts `.next/standalone` for you.

Turn on automatic deploys for `main`. Each push installs, runs `npm run build`, and restarts the app.

## DNS and SSL

The domain is already on this Hostinger account. Confirm:

- `freeporthvacil.com` and `www` resolve to this Node.js app, not to an old `public_html` upload.
- The free Let’s Encrypt certificate covers the apex and `www`.
- In the domain panel, force HTTPS and send `www` to `https://freeporthvacil.com`. The app also 301s `www`, and 301s plain `http` when it sees `X-Forwarded-Proto: http`. It does not redirect when that header is missing, so Hostinger’s internal hop cannot loop.

## Verify after the first Git deploy

- `https://freeporthvacil.com/` returns the homepage.
- `https://www.freeporthvacil.com/` returns **301** to `https://freeporthvacil.com/`.
- `http://freeporthvacil.com/` returns **301** to the https apex.
- `https://freeporthvacil.com/ac-repair-freeport-il` returns **301** to `https://freeporthvacil.com/services/ac-repair-freeport-il/`.
- `https://freeporthvacil.com/this-page-does-not-exist/` returns **404** and the site’s own “Page not found” page.
- `https://freeporthvacil.com/sitemap.xml` and `https://freeporthvacil.com/robots.txt` open.
- View source on the homepage and confirm the canonical URL is `https://freeporthvacil.com/`.

## Optional FTP workflow

`.github/workflows/deploy-hostinger.yml` still exists. It runs on pushes to `main` and when started by hand. If `FTP_SERVER`, `FTP_USERNAME`, and `FTP_PASSWORD` are not set, the job exits successfully and uploads nothing. If those secrets are set, it builds and uploads `out/` only when that folder exists. This Node.js app does not create `out/`, so the upload is skipped. Do not add those secrets for the Web App deploy.
