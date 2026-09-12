# Freeport, Illinois HVAC — Local SEO + Pay-Per-Call Research Dossier

Prepared for: Cursor build of the Freeport HVAC lead-generation website  
Primary market: Freeport, Illinois  
County: Stephenson County  
ZIP: 61032  
Area code: 815  
Climate station used: NOAA FREEPORT WASTE WTP, IL (USC00113262), 1991–2020 normals  

This dossier was compiled because `freeport-il-hvac-research-dossier.md` was not present in the empty workspace. Sources: NOAA / NCEI climate normals, Nicor Gas public safety guidance, Stephenson County geography, and publicly visible competitor websites. Competitor copy, testimonials, ratings, and branding were not reused.

---

## 1. Market snapshot

Freeport is the county seat of Stephenson County in northwest Illinois. It is a heating-first HVAC market, not an AC-first Sun Belt market.

Verified climate facts (NOAA 1991–2020 normals, Freeport Waste WTP):

- January average high / low: about 28°F / 11°F
- July average high / low: about 82°F / 62°F
- Annual heating degree days (base 65°F): about 6,956
- Annual cooling degree days (base 65°F): about 690
- Roughly 148 days per year with a low at or below freezing
- Annual snowfall around 33–35 inches
- Annual precipitation around 36–38 inches, wettest in June

Implication for content and conversion:

- No-heat and furnace-failure intent should lead the homepage, emergency page, and winter messaging.
- AC still matters, but the local story is different: systems sit idle through a long winter, then fail on the first sustained hot stretch.
- Maintenance content should be seasonal: fall heating preparation, then spring/early-summer cooling checks.
- Heat pumps need honest cold-climate framing. Do not write Florida-style heat-pump copy.

Natural gas is the dominant heating fuel in this part of Illinois. Nicor Gas is the local gas utility. Any gas-smell or combustion-safety content must send people out of the house and to 911 / Nicor Gas before HVAC troubleshooting.

Nicor Gas emergency (public, verified): leave immediately, do not create sparks, then call **888-642-6748** and **911** from a safe location.

Electric utility in the area is commonly ComEd. Do not invent franchise or rebate claims.

---

## 2. Business facts that are NOT known

Do not invent:

- Legal business name
- Phone number / tracking number
- Street address / Google Business Profile pin
- Hours, including 24/7 or after-hours claims
- Licenses, insurance, NATE, manufacturer badges
- Reviews, ratings, review counts
- Years in business, owner names, technician names
- Warranties, financing, “free estimates”
- Exact service-area radius beyond Freeport 61032

Site architecture must use configurable placeholders:

- `[BUSINESS NAME]`
- `[PHONE NUMBER]`
- `[BUSINESS HOURS]`
- Reviews: empty state until real reviews exist

This is a service-area business until a verified address exists. Schema must not include geo coordinates, AggregateRating, or a fake PostalAddress.

---

## 3. SERP and competitor landscape

Publicly visible HVAC operators serving or targeting Freeport include:

| Operator | What the public site emphasizes | Weakness to exploit (do not copy) |
| --- | --- | --- |
| Loescher Heating & Air Conditioning | Regional brand, Freeport office on S. Walnut, 24/7 emergency, huge town list across NW Illinois / WI / IA | Broad tri-state claims dilute Freeport-specific intent. Heavy “60 years / we do everything” brochure tone. |
| Jansen Heating | Ruud partner microsite, Freeport address on Rolling Hills Lane | Manufacturer template. Thin unique content. Weak symptom/emergency architecture. |
| Bomar Heating and Cooling | Local Freeport company, testimonials, financing offers | Review/testimonial-led. Public site leans social proof and promotions rather than diagnostic intent pages. **Do not scrape or republish their reviews.** |
| Pearson Plumbing, Heating & AC | Rockford-area multi-location brand with a Freeport phone listing | Freeport is a satellite of a larger Rockford footprint. Plumbing-first brand. Location-page copy is generic. |
| Edelman | Multi-city IL/WI brand listing Freeport among many markets | Not a Freeport-native site. Trust widgets and 24/7 claims. Thin local relevance. |

Competitive gaps this site should fill:

1. **Hyper-local Freeport + Stephenson County language** instead of a 40-town footer dump.
2. **Problem → trust → call** emergency pages (no heat / no cooling), not brochure service lists.
3. **Heating-first climate truth** (HDD >> CDD), which most templates ignore.
4. **Safety-first gas / CO content** that does not DIY-repair people into danger.
5. **No fake stars, no pricing tables, no “starting at $X”.** Several competitors push financing, estimates, and review widgets as the main trust play. This site wins on clarity and local usefulness instead.
6. **Unique service-page depth** (short cycling in deep cold, first-hot-day AC failure, older Freeport housing / forced-air systems) instead of cloned “we repair all brands” paragraphs.

Do not clone layouts, unique phrases, testimonials, or visual identity from any of the above.

---

## 4. Search intent and keyword clusters

Target high-intent service queries. Do **not** build cost pages even if cost modifiers appear in keyword tools.

### Primary (build pages)

- hvac Freeport IL / HVAC Freeport Illinois
- furnace repair Freeport IL
- no heat Freeport / furnace not working Freeport
- emergency HVAC Freeport IL
- AC repair Freeport IL
- AC not cooling Freeport
- furnace installation / replacement Freeport IL
- AC installation / replacement Freeport IL
- HVAC maintenance Freeport / furnace tune up Freeport
- heat pump Freeport IL
- mini split / ductless Freeport IL
- indoor air quality Freeport
- commercial HVAC Freeport (secondary, thinner demand)

### Supporting content (blog, not thin city pages)

- furnace short cycling in cold weather
- what to do if the furnace stops during a freeze
- why AC fails after sitting all winter
- closed-up winter indoor air in Stephenson County homes
- heat pumps in a heating-dominated northern Illinois climate

### Explicitly do not target as pages

- HVAC cost / repair cost / installation cost
- cheap HVAC
- price comparison
- “how much does a furnace cost in Freeport”

Pricing keywords may exist. They are low-priority and off-strategy. Conversion path is call, not calculator.

---

## 5. Local SEO geography

**Primary:** Freeport, Illinois 61032  
**County:** Stephenson County  

Incorporated nearby communities (real places; do not auto-create doorway pages):

- Lena
- Cedarville
- Dakota
- Pearl City
- Orangeville
- Ridott
- German Valley
- Davis
- Rock City
- Winslow

Implementation rule:

- Freeport is the only confirmed primary service city until the owner expands coverage.
- Nearby Stephenson County towns may be listed as “call to confirm coverage,” not as guaranteed service cities.
- No individual `/hvac-lena-il/` style doorway pages.
- Do not claim Rockford, Sterling, Dixon, Monroe WI, or Galena unless the owner later verifies those markets. Regional competitors already occupy that positioning.

---

## 6. Site architecture (approved)

```
/
├── emergency-hvac-freeport-il/
├── furnace-repair-freeport-il/
├── ac-repair-freeport-il/
├── furnace-installation-replacement-freeport-il/
├── ac-installation-replacement-freeport-il/
├── hvac-maintenance-freeport-il/
├── heat-pump-services-freeport-il/
├── ductless-mini-split-freeport-il/
├── indoor-air-quality-freeport-il/
├── commercial-hvac-freeport-il/
├── service-areas/
├── about/
├── reviews/
├── contact/
├── blog/
├── privacy-policy/
└── terms/
```

Trailing slashes on. One H1 per page. Unique titles and meta descriptions. Homepage is the strongest overall page. Emergency is the strongest conversion page.

---

## 7. Conversion strategy

Business model: pay-per-call HVAC lead generation.

Primary conversion: **phone call**  
Secondary: short service request (name, phone, service needed, message)

Every important page: header phone, in-content phone CTA, final phone band. Mobile: persistent bottom call bar that does not cover body copy (page padding).

CTA language by context:

- Emergency: Call for emergency HVAC help
- Repair: Call for furnace / AC repair
- Install: Call to discuss replacement
- Maintenance: Call to schedule a seasonal check
- Generic: Call for HVAC service in Freeport

Do not put a long form above the fold on the homepage. Do not use pricing as a conversion lever.

Trust: only real, configurable facts. Until then, trust comes from:

- Clear Freeport/Stephenson County focus
- Honest process
- Safety guidance
- No fake reviews
- Useful symptom explanations that lead to professional service

---

## 8. Content gaps vs typical HVAC templates

Write unique pages around:

1. No heat during a Freeport freeze (safety, what to check that is actually safe, when to stop and call)
2. No cooling / first hot day after a long idle winter
3. Furnace short cycling, weak heat, and airflow in older forced-air homes
4. Replacement as a reliability/comfort/sizing decision — never a price table
5. Maintenance timed to HDD-heavy winters
6. Heat pumps that must actually heat near 11°F night-time normals
7. Ductless for additions and rooms that never get heat
8. Winter indoor air (closed windows, dry heat, filtration) without medical claims
9. Small commercial in Freeport — offices, shops, churches — not invented industrial plants

Avoid: “we are your trusted local HVAC experts,” keyword-stuffed Freeport IL loops, DIY repair that keeps people off the phone or puts them at risk.

---

## 9. Technical SEO and schema

- Next.js App Router, static where practical
- Unique metadata, canonical, Open Graph
- `sitemap.xml`, `robots.txt`
- JSON-LD: HVACBusiness (service-area), WebSite, Service, BreadcrumbList, FAQPage
- No invented geo, rating, hours, or address
- No localhost in production metadata
- Phone CTAs from one config value (`PHONE_NUMBER`) for later call tracking
- GA4 / Search Console hooks via env vars, off unless IDs exist

---

## 10. 90-day SEO notes (owner-dependent)

These are not website-build blockers:

1. Insert real business name, 815 tracking number, hours
2. Google Business Profile as a service-area business or with a verified address
3. Citations only with real NAP
4. Collect real Google reviews after completed jobs — then display them
5. Illinois HVACR licensing display when the operator is assigned
6. Search Console + GA4
7. Internal links from seasonal blog posts into emergency / repair pages
8. Do not publish cost content as a ranking shortcut

---

## 11. Design direction

Not a WordPress contractor template. Not Loescher-blue brochure. Not Ruud partner chrome.

Visual system:

- Deep navy foundation
- Warm copper/ember accent (heat, winter urgency)
- Paper / stone neutrals
- Strong typography, generous spacing, high-contrast CTAs
- Original CSS/SVG visuals — no fake technician stock photos, no invented team photos
- Mobile-first, tap targets, sticky call bar

---

## 12. Build implication summary

The website should feel like a serious Freeport heating-and-cooling company that happens to generate phone leads — not like a keyword site, not like a price shop, and not like a cloned manufacturer landing page.
