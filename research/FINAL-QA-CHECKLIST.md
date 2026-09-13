# Final QA checklist — Millrace Heating & Air

Live: https://freeport-il-hvac.vercel.app/  
Verified: 13 September 2026 against production after deploy `2626e1a`.

## Desktop / tablet / mobile

- [x] Desktop checked — 1440px Chromium. Header, hero, mega menu, services index.
- [x] Tablet checked — 1024px+ desktop nav (`lg`). Compact header at narrower widths uses the hamburger.
- [x] Mobile checked — 375-class layout: hamburger + sticky Call CTA + chat launcher above it.
- [x] Services dropdown checked — click opens; opaque white 3-column panel; links to real `/services/…` routes; Escape/outside-click wired in code.
- [x] Mobile Services accordion checked — hamburger drawer with Cooling / Heating / Heat Pumps / IAQ / Commercial / Emergency expanders.
- [x] No horizontal overflow — at 1440px, `scrollWidth` was not greater than `innerWidth` (minor scrollbar delta only). Overflow was caused by too many primary nav items, not by `overflow-x: hidden` on `html`.
- [x] No clipped content — mega menu sits below the header and is fully readable after paint.

## Content and interaction

- [x] No placeholder text — public pages do not show `[BUSINESS NAME]`, `[PHONE NUMBER]`, or `[BUSINESS HOURS]`.
- [x] No dead buttons — header Call / Request Service, Explore Services, footer, chatbot launcher all resolve.
- [x] No broken links — crawled `/`, `/services/`, core service URLs, `/contact/`, `/about/`, `/service-area/`, `/guides/`, `/privacy-policy/`, `/terms/` → 200. Unknown path → 404.
- [x] No console errors — none observed during live homepage / services / mega-menu interaction in the automation browser.
- [x] No hydration errors — none observed on live homepage.
- [x] Forms checked — handler returns 503 when `FORM_WEBHOOK` is unset. The UI does not fake success. A live POST was not sent to production.
- [x] Chatbot checked — launcher present, does not cover the sticky mobile CTA (hidden while chat is open).

## SEO and files

- [x] SEO checked — unique titles (homepage “Heating & Cooling Service in Freeport, IL”; services “HVAC Services in Freeport, IL | Millrace”); one H1 per checked page; canonicals via `pageMetadata`.
- [x] Sitemap checked — `https://freeport-il-hvac.vercel.app/sitemap.xml` → 200.
- [x] Robots checked — allows `/`, points at the sitemap; does not list private debug paths.
- [x] Security.txt checked — `/.well-known/security.txt` → 200. Contact is the public `/contact/` URL (no invented email).

## Security headers (live response)

- [x] CSP checked
- [x] X-Content-Type-Options checked (`nosniff`)
- [x] Referrer-Policy checked (`strict-origin-when-cross-origin`)
- [x] Permissions-Policy checked
- [x] HSTS checked (`max-age=63072000; includeSubDomains; preload`)
- [x] Frame protection checked (`X-Frame-Options: DENY` + CSP `frame-ancestors 'none'`)

## Ship

- [x] Production build checked — `npm run build` succeeded locally (55 static routes) before deploy.
- [x] LIVE site checked
- [x] Final visual inspection checked — charcoal header, split hero, editorial services index, opaque Services menu.

---

## Notes

- No production phone number is configured. Call CTAs go to `/contact/` labeled **Call for Service**. That is intentional.
- Form delivery requires `FORM_WEBHOOK`. Until that env is set, the form must keep returning 503 / the honest unavailable message.
- Browser QA here used Chromium automation. Firefox and Safari were not available in this session.
- Remaining Low/Informational security items: Next/Vercel fingerprint; CSP `'unsafe-inline'` required for Next.js (see `SECURITY-HARDENING.md`).
