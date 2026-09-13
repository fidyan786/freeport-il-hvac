# Millrace Heating & Air — Freeport, Illinois

HVAC website for **Freeport, Illinois (61032), Stephenson County**.

Primary action: **call** when a production number is configured. Until then, CTAs go to `/contact/` and never show a fake phone number.

## Stack

Next.js App Router 16, React 19, TypeScript, Tailwind CSS 4. Vercel.

## Configure

Copy `.env.example`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BUSINESS_NAME` | Optional override (defaults to Millrace Heating & Air) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Public phone, e.g. `(815) 555-0100` |
| `NEXT_PUBLIC_PHONE_TEL` | Digits for `tel:` |
| `NEXT_PUBLIC_BUSINESS_HOURS` | Optional hours string |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional GA4 |
| `FORM_WEBHOOK` | Optional lead delivery |
| `AI_GATEWAY_API_KEY` | Optional chat polish |

Do not invent reviews, licenses, ratings, 24/7 claims, or prices.

## Local

```bash
npm install
npm run dev
npm run test:chat
npm run build
```
