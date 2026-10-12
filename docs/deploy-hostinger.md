# Deploy on Hostinger

This site is a static export. `npm run build` writes HTML, CSS, JavaScript, images, `sitemap.xml`, `robots.txt`, Open Graph images, and icons into `out/`. Nothing in the public site needs a Node.js server. Hostinger shared hosting (Apache or LiteSpeed, files in `public_html`) is the right plan. Hostinger Node.js hosting is unnecessary for this project.

Redirects (www to the apex, http to https, old URLs, trailing slashes) and security headers live in `public/.htaccess`, which the build copies into `out/`. A missing page uses `ErrorDocument 404 /404.html`.

## 1. Create the GitHub secrets

In the GitHub repository, open Settings → Secrets and variables → Actions → New repository secret.

| Secret | Value |
| --- | --- |
| `FTP_SERVER` | Hostname from Hostinger hPanel → Files → FTP Accounts. Use the hostname only, such as `ftp.freeporthvacil.com`. Do not include `ftp://`. |
| `FTP_USERNAME` | The FTP username from that same screen. |
| `FTP_PASSWORD` | The FTP password. |
| `FTP_DIR` | Optional. The folder that is the site root, often `public_html/` or `./` if the FTP account already lands in `public_html`. Leave it unset to upload into the FTP login directory. Do not point this at your home directory if that directory holds other sites. |

The workflow `.github/workflows/deploy-hostinger.yml` runs on every push to `main`, and when you start it by hand. It builds `out/` and uploads it with FTP over TLS. If the host only accepts plain FTP, change `protocol: ftps` to `protocol: ftp` in that file.

The upload does not delete files that are no longer in `out/`. After the first successful deploy, remove any old site files in `public_html` that this project does not ship.

## 2. Point freeporthvacil.com at Hostinger

In Hostinger hPanel, add the domain `freeporthvacil.com` if it is not already on the account.

At the registrar (or in Hostinger if the domain is registered there), set the domain to the nameservers Hostinger shows, or set these records if you are keeping DNS elsewhere:

- `A` record for `@` (the apex) to the Hostinger server IP shown in hPanel.
- `A` or `CNAME` for `www` to the same hosting. The `.htaccess` file sends `www` to `https://freeporthvacil.com`.

Wait until both names resolve to Hostinger before you expect the certificate to issue.

## 3. Turn on the free SSL certificate

In hPanel, open SSL for `freeporthvacil.com` and enable the free Let’s Encrypt certificate. Cover the apex and `www`. After it is active, confirm HTTPS is forced. The `.htaccess` file also redirects `http` to `https://freeporthvacil.com`.

## 4. Verify after the first deploy

- `https://freeporthvacil.com/` returns the homepage, not a Hostinger placeholder.
- `https://www.freeporthvacil.com/` returns **301** to `https://freeporthvacil.com/`.
- `http://freeporthvacil.com/` returns **301** to the https apex. The rule skips the redirect when the request already has `X-Forwarded-Proto: https`, so a Hostinger TLS proxy does not loop.
- `https://freeporthvacil.com/ac-repair-freeport-il` returns **301** to `https://freeporthvacil.com/services/ac-repair-freeport-il/`.
- `https://freeporthvacil.com/this-page-does-not-exist/` returns **404** and shows the site’s own “Page not found” page.
- `https://freeporthvacil.com/sitemap.xml` and `https://freeporthvacil.com/robots.txt` open as files.
- View source on the homepage and confirm the canonical URL is `https://freeporthvacil.com/`.

## Phone and analytics

The tracking number and GA4 measurement ID are not FTP secrets. Set `NEXT_PUBLIC_PHONE_DISPLAY`, `NEXT_PUBLIC_PHONE_TEL`, and `NEXT_PUBLIC_GA_MEASUREMENT_ID` as GitHub Actions repository variables or secrets only if you also wire them into the workflow `env:` block. Until then the defaults in `src/lib/site.ts` are baked in at build time. Do not set `NEXT_PUBLIC_SITE_URL` to any host other than `https://freeporthvacil.com`.
