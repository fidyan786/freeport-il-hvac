# CRO strategy — Millrace Heating & Air

Goal: high-intent visitor → phone conversation. Not visitor → price comparison.

## Hierarchy

1. **Primary:** Call / request HVAC service (one number from `src/lib/site.ts`)
2. **Secondary:** Contact form (name, phone, service, problem, ZIP, preferred method)
3. **Assist:** Millrace Assistant chatbot — intent chips, short qualification, Call Now, emergency safety

If no production number is configured, every CTA goes to `/contact/` labeled **Request HVAC Service**. Never print `[PHONE NUMBER]`.

## Page rules

- Hero: one primary CTA + one problem-path secondary
- Mobile: sticky “Call HVAC Service” with safe-area; hides when chat is open
- Emergency: visually distinct copper band; no 24/7 / same-day / 60-minute claims
- Forms never outrank the phone block on contact
- Chatbot asks only useful questions; high intent surfaces Call Now immediately
- Gas / CO / fire: 911 + Nicor Gas 888-642-6748, no DIY on gas/electrical

## Events (dataLayer / gtag)

`call_clicked`, `chatbot_open`, `chatbot_started`, `intent_selected`, `lead_started`, `lead_completed`, `form_started`, `form_submitted`, `service_page` views via existing track helper.

Do not send raw lead PII into analytics event parameters beyond service/intent/status.

## Trust without fiction

No star widgets until owned reviews exist. Use value statements: diagnosis before pitch, Freeport climate, safety first. Reviews page redirects to About until real comments are configured.
