# Final QA checklist — Millrace Heating & Air

Mark an item complete only after it was actually tested.

Live: https://freeport-il-hvac.vercel.app/

## Desktop / tablet / mobile

- [ ] Desktop checked
- [ ] Tablet checked
- [ ] Mobile checked
- [ ] Services dropdown checked
- [ ] Mobile Services accordion checked
- [ ] No horizontal overflow
- [ ] No clipped content

## Content and interaction

- [ ] No placeholder text
- [ ] No dead buttons
- [ ] No broken links
- [ ] No console errors
- [ ] No hydration errors
- [ ] Forms checked
- [ ] Chatbot checked

## SEO and files

- [ ] SEO checked
- [ ] Sitemap checked
- [ ] Robots checked
- [ ] Security.txt checked

## Security headers (live response)

- [ ] CSP checked
- [ ] X-Content-Type-Options checked
- [ ] Referrer-Policy checked
- [ ] Permissions-Policy checked
- [ ] HSTS checked
- [ ] Frame protection checked

## Ship

- [ ] Production build checked
- [ ] LIVE site checked
- [ ] Final visual inspection checked

---

## Test notes (fill during QA)

### Overflow

Command used in browser:

```
document.documentElement.scrollWidth === window.innerWidth
```

Viewports to check: 320, 360, 375, 390, 414, 430, 480, 768, 820, 1024, 1280, 1366, 1440, 1536, 1920.

### Services menu

Desktop: click to open, click outside to close, Escape to close, Tab into links, ArrowDown from Services button.

Mobile: accordion expand/collapse; no nested scroll trap.

### Form

Valid submit only succeeds if `FORM_WEBHOOK` is set. Otherwise the UI must say online requests are unavailable — never a fake success.

### Phone

If `NEXT_PUBLIC_PHONE_DISPLAY` is unset, CTAs go to `/contact/` labeled **Call for Service**. No `[PHONE NUMBER]`.
