# Millrace Heating & Air — Freeport, Illinois

HVAC website for **Freeport, Illinois (61032), Stephenson County**.

Primary action: **call (703) 703-7855**. Override with `NEXT_PUBLIC_PHONE_DISPLAY` / `NEXT_PUBLIC_PHONE_TEL` for a tracking number. The site is call-only. It connects callers with independent local service providers and is not itself a contractor.

## Stack

Next.js App Router 16, React 19, TypeScript, Tailwind CSS 4. Vercel.

## Configure

Copy `.env.example`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BUSINESS_NAME` | Optional override (defaults to Millrace Heating & Air) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Public phone (default `(703) 703-7855`) |
| `NEXT_PUBLIC_PHONE_TEL` | Digits for `tel:` (default `7037037855`, link `tel:+17037037855`) |
| `NEXT_PUBLIC_BUSINESS_HOURS` | Optional hours string |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional GA4 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional GSC HTML-tag token override |

Do not invent reviews, licenses, ratings, around-the-clock claims, or prices.

## Local

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```
