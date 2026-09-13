# Security hardening — Millrace Heating & Air

**Date:** 13 September 2026  
**Live:** https://freeport-il-hvac.vercel.app/

## Source of truth

Security response headers are set in **one place**: `next.config.ts` `headers()`.

Do not add a second copy in `vercel.json` or middleware unless `next.config.ts` is removed.

`poweredByHeader: false` remains set.

## Headers implemented

| Header | Value | Notes |
| --- | --- | --- |
| Content-Security-Policy | Production-safe policy allowing Next.js, self-hosted fonts, images, GA4 if configured, Vercel vitals | `script-src` includes `'unsafe-inline'` because Next.js bootstraps inline. Not nonce-based in this App Router build. |
| X-Content-Type-Options | `nosniff` | |
| Referrer-Policy | `strict-origin-when-cross-origin` | Chosen over `no-referrer` so same-origin and HTTPS analytics still receive a useful origin. |
| X-Frame-Options | `DENY` | Complements CSP `frame-ancestors 'none'`. |
| Permissions-Policy | camera, microphone, geolocation, payment, usb, interest-cohort, browsing-topics disabled | |
| Strict-Transport-Security | `max-age=63072000; includeSubDomains; preload` | Applied when `NODE_ENV=production` or `VERCEL` is set so local HTTP is not HSTS-pinned. |
| X-DNS-Prefetch-Control | `off` | |

## CSP inventory (why these sources)

- `'self'` — app JS, CSS, images, API routes (`/api/contact/`, `/api/chat/`, `/api/leads/`).
- `'unsafe-inline'` styles/scripts — Next.js runtime and GA snippet when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
- `https://www.googletagmanager.com` / `https://www.google-analytics.com` / `https://analytics.google.com` / `https://stats.g.doubleclick.net` — GA4 if enabled.
- `https://va.vercel-scripts.com` / `https://vitals.vercel-insights.com` — Vercel platform scripts if present.
- `img-src https:` — remote images if a future CMS is added; current photos are `/photos/*` on self.
- `font-src 'self' data:` — `next/font` (Manrope, Fraunces) is self-hosted.

Chatbot does not load a third-party widget. It uses same-origin `/api/chat/`.

## security.txt

File: `public/.well-known/security.txt`

```
Contact: https://freeport-il-hvac.vercel.app/contact/
Expires: 2027-09-13T00:00:00.000Z
Preferred-Languages: en
Canonical: https://freeport-il-hvac.vercel.app/.well-known/security.txt
Policy: https://freeport-il-hvac.vercel.app/privacy-policy/
```

No security email is published because none is configured. Do not invent one. When a verified mailbox exists, add `Contact: mailto:…` in this file and in central config.

## robots.txt

`src/app/robots.ts` allows `/` and points to the sitemap.

Private/debug/admin routes are **not listed**. Listing them would advertise them. There is no admin app in this project. API routes are POST handlers and are not linked from the public sitemap.

## Remaining findings that cannot be fully removed

| Finding | Why it stays |
| --- | --- |
| Next.js / Vercel framework fingerprint | Platform HTML/runtime. Hiding it with fake headers would not add real security and can break deployments. |
| CSP `'unsafe-inline'` for scripts | Required for Next.js inline bootstrap (and GA if enabled) without a nonce pipeline. |
| No security mailbox | No verified address exists. Contact URI is the public contact page. |

## Pentest follow-up target

Start: 0 Critical, 0 High, 0 Medium, 5 Low, 1 Informational.

Goal after this pass: 0 / 0 / 0. Remaining lows should be limited to framework fingerprinting and the documented CSP inline exception.

Live response headers must be checked on the production URL after deploy. Do not mark CSP/HSTS complete from local `next start` only.
