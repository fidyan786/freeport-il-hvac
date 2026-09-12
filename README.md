# Freeport, Illinois HVAC — Pay-Per-Call Website

Local SEO website for HVAC lead generation in **Freeport, Illinois (61032), Stephenson County**.

Primary conversion: **phone call**.

Research: [`freeport-il-hvac-research-dossier.md`](./freeport-il-hvac-research-dossier.md)

## Stack

Next.js App Router, TypeScript, Tailwind CSS. Static pages. Vercel-ready.

## Configure before advertising

Copy `.env.example` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BUSINESS_NAME` | Replaces `[BUSINESS NAME]` |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Replaces `[PHONE NUMBER]` |
| `NEXT_PUBLIC_PHONE_TEL` | Digits for `tel:` links |
| `NEXT_PUBLIC_BUSINESS_HOURS` | Replaces `[BUSINESS HOURS]` |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, e.g. `https://example.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional GA4 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console |
| `FORM_WEBHOOK` | Optional POST endpoint for the contact form |

Do not invent reviews, licenses, ratings, 24/7 claims, or prices.

## Local

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```
