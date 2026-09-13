# Millrace Heating & Air — Freeport, Illinois

HVAC website for **Freeport, Illinois (61032), Stephenson County**.

Primary action: **call 888-989-8898**. Override with `NEXT_PUBLIC_PHONE_DISPLAY` / `NEXT_PUBLIC_PHONE_TEL` for a tracking number. Hours stay blank until a real schedule is provided.

## Stack

Next.js App Router 16, React 19, TypeScript, Tailwind CSS 4. Vercel.

## Configure

Copy `.env.example`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BUSINESS_NAME` | Optional override (defaults to Millrace Heating & Air) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Public phone (default `888-989-8898`) |
| `NEXT_PUBLIC_PHONE_TEL` | Digits for `tel:` (default `8889898898`) |
| `NEXT_PUBLIC_BUSINESS_HOURS` | Optional hours string |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional GA4 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional GSC HTML-tag token override |
| `FORM_WEBHOOK` | Optional lead delivery. Without this, the contact form returns 503 and asks the visitor to call. |
| `AI_GATEWAY_API_KEY` | Optional chat polish |

Do not invent reviews, licenses, ratings, 24/7 claims, or prices.

## Local

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test:chat
npm run build
```
