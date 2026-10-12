# Owner todo

Items only the owner can confirm or finish. The site does not invent an address, hours, reviews, years in business, or a staff list.

## Tracking number

- Confirm `(703) 703-7855` is the live partner tracking number before this goes to production traffic.
- Display, `tel:+17037037855`, and schema `+1-703-703-7855` all come from `src/lib/site.ts`.
- Overrides, if the number changes: `NEXT_PUBLIC_PHONE_DISPLAY` and `NEXT_PUBLIC_PHONE_TEL` (digits only). Recheck meta descriptions after a change. Several are written to land between 140 and 160 characters with the current number.

## Domain and hosting

The site is a static export for Hostinger shared hosting, not a Node server and not Vercel. Follow `docs/deploy-hostinger.md`.

- Add GitHub Actions secrets `FTP_SERVER`, `FTP_USERNAME`, and `FTP_PASSWORD`. Set optional `FTP_DIR` to the domain’s `public_html/` if the FTP account does not already open there.
- Point `freeporthvacil.com` DNS at Hostinger, then enable the free SSL certificate for the apex and `www`.
- `www` and `http` redirect to `https://freeporthvacil.com` from `public/.htaccess`. Old URLs 301 in one hop to the current page.
- Leave `NEXT_PUBLIC_SITE_URL` unset, or set it to `https://freeporthvacil.com`. Do not use any other host as the canonical origin.
- After the first upload, delete leftover files in `public_html` that this project does not ship. The workflow does not wipe the folder.

## Analytics and Search Console

- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` for the production build when a GA4 property exists. Until then the site does not load Google Analytics. Call clicks are wired to `call_click` once that ID is present. The value is baked in at build time.
- Search Console: the HTML-tag token in `src/lib/site.ts` (`EXISTING_GOOGLE_SITE_VERIFICATION`) and `/google7129b29a73db544e.html` are already in the repo. Confirm that token belongs to the property for `https://freeporthvacil.com`, then submit `https://freeporthvacil.com/sitemap.xml`.
- Do not create a Google Business Profile or directory citations with an invented address. See `docs/local-seo-checklist.md`.

## Facts this site states, and what is not verified by the owner

- Nicor Gas emergency number `888-642-6748` was checked on October 12, 2026 against Nicor’s emergency page (`nicorgas.com/safety/emergency-information.html`). Recheck it if Nicor changes the published number. The about page “last reviewed” line uses that date.
- Climate lines (“on the order of 6,956 heating degree days,” “about 690 cooling degree days,” snow “around 33 to 35 inches”) are rounded public-climate context, not a weather-station citation the owner has signed. Soften or replace them if you do not want those figures on the site.
- The about line that the name comes from mill races along the Pecatonica is brand copy. Confirm it is the story you want, or replace it.
- ZIP and town list (Freeport 61032, Lena 61048, Cedarville 61013, Dakota 61018, Pearl City 61062, Orangeville 61060, Ridott 61067, German Valley 61039, Davis 61019, Rock City 61070, Winslow 61089) should be confirmed if the partner’s actual travel area is smaller.
- No business hours are published. Leave `NEXT_PUBLIC_BUSINESS_HOURS` empty unless a real schedule exists. Do not add 24/7 language.
