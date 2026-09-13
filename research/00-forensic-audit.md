# Forensic audit — Freeport HVAC site

Date: 2026-09-13  
Live: https://freeport-il-hvac.vercel.app/  
Repo: Next.js 16.3.5 / React 19.2.8 / Tailwind 4

## Verdict (before rebuild)

The live site was a structurally honest but unfinished HVAC shell. Climate facts and safety copy were stronger than most mills. Branding, imagery, navigation, conversion UX, and URL architecture were not competitive with Loescher or Bomar. Customer-facing placeholders (`[BUSINESS NAME]`, `[PHONE NUMBER]`, `[BUSINESS HOURS]`, `[REAL REVIEWS TO BE ADDED]`) made the site look fake.

## Live vs local (pre-rebuild)

| Area | Finding |
| --- | --- |
| Brand | Placeholder NAP leaked into header, hero, footer, FAQs, OG |
| Visual | Gradient-only hero, no photography, text-only logo, unused create-next-app SVGs |
| Nav | Flat links + a basic services list; no mega-menu; mobile was a shrink of desktop |
| IA | 10 service URLs at root; missing dedicated AC maintenance/replacement, heating repair, commercial split, IAQ splits |
| CRO | Phone-first intent was correct; labels printed placeholders when `tel:` was unset |
| Chat | Working qualification engine; generic ChatGPT-adjacent UI |
| SEO | Canonicals, sitemap, robots, HVACBusiness schema present; titles polluted by placeholders |
| Honesty | No fake ratings, 24/7, licenses, or prices — keep this |

## What was worth keeping

- `src/lib/site.ts` as the single NAP source
- Chat engine + safety path (911 / Nicor)
- Schema honesty (no AggregateRating)
- Climate-local writing posture
- Trailing-slash App Router + sitemap/robots

## What had to be rebuilt

- Brand identity (Millrace Heating & Air)
- Design tokens, typography, logo, favicon
- Header mega-menu and mobile drawer
- Homepage storytelling + imagery
- `/services/{slug}/` architecture with unique pages
- Guides cluster
- Chatbot visual identity
- CTA labels that never print placeholders
