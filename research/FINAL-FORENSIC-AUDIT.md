# Final forensic audit — Millrace Heating & Air

**Audited:** 13 September 2026  
**Live at start of this pass:** https://freeport-il-hvac.vercel.app/  
**Local:** this repository (Next.js 16 App Router)

Local and live were compared before the rebuild. Content matched. Defects below were in **both**. This pass fixes them in code; live verification is recorded in `FINAL-QA-CHECKLIST.md` after deploy.

## CRITICAL

1. **Desktop header overflow (1280–1440).** Primary nav included Services, Heating, Cooling, Indoor Air Quality, Commercial, Service Areas, About, Contact, plus CTA. At 1280px this row exceeded the viewport. This was the reported “content going outside the screen.”
2. **Services mega menu overflow.** Full-bleed panel with six groups, icons, and descriptions. Wide rows plus extra chrome clipped or forced horizontal scroll.
3. **Customer-facing strategy copy.** Homepage, about, service-area, and some service FAQs talked about invented reviews, “website theater,” doorway pages, price lists, and configuration.
4. **No security headers in app config.** Pentest lows: missing CSP, X-Content-Type-Options, Referrer-Policy. No `security.txt`. No Permissions-Policy / frame-ancestors in project config (Vercel supplies HSTS on HTTPS).

## HIGH

5. Header `setState` during render on pathname change (anti-pattern; hydration risk).
6. Mega menu opened on hover *and* click; hover-then-click closed it.
7. Desktop nav did not match a professional HVAC information architecture (too many peer items).
8. Hero was text-on-photo with a second “Talk with Millrace” card repeating the CTA — SEO-landing feel.
9. Services index was a wall of identical image cards.
10. Contact form copy mentioned “form endpoint is configured.”
11. About page section “What we will not invent” read as a compliance memo.

## MEDIUM

12. Green spruce system read more “eco brand” than mature American HVAC charcoal.
13. Decorative floating ring in the hero sat outside the intended composition.
14. Chat launcher vs sticky bar stacking was handled, but panel CSS could fight desktop card sizing.
15. Copy still said “if a phone number is configured.”
16. No Resources item in desktop primary nav.
17. Dual CTAs when phone is unset both go to `/contact/` — acceptable if labeled Call for Service and Request Service.

## LOW

18. Metadata `keywords` array (unused by Google).
19. Footer listed nearby towns; fine if not presented as office locations.
20. `poweredByHeader: false` already set; remaining framework fingerprints are Next/Vercel platform-level.

## POLISH

21. Pill-shaped buttons everywhere.
22. Ken Burns hero motion on full-bleed photos.
23. Service glyphs in the mega menu added noise.

## Fixes in this pass

- Slim header: Logo · Services ▾ · Service Areas · About · Resources · Call · Request Service.
- Click/keyboard mega menu, text columns only, contained in `max-w-6xl`. No `overflow-x: hidden` on `html`.
- Mobile Services accordion (not the desktop mega menu).
- Charcoal / off-white / restrained copper tokens.
- Homepage split hero with a natural H1.
- Editorial services index.
- Customer-facing copy rewrite; no placeholders.
- Honest contact form (503 if webhook missing; no fake success).
- Security headers in `next.config.ts` plus `public/.well-known/security.txt` (contact is the public `/contact/` URL; no invented email).
- Trust section that shows reviews only when `site.reviews` is populated.

Do **not** use `overflow-x: hidden` on `html` as the overflow fix. Nav width and mega-menu columns were the actual cause.
