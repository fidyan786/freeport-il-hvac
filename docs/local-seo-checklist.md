# Local SEO checklist for this affiliate site

Millrace Heating & Air (`freeporthvacil.com`) connects callers with independent local heating and cooling professionals. It is not a contractor. Do not build the off-site footprint a real HVAC company would build.

## Do this

- Keep the phone number in `src/lib/site.ts` as the only number on the site. Titles and descriptions pick it up from that config on service pages. If you change the number, recheck that meta descriptions are still 140–160 characters.
- Keep one canonical host: `https://freeporthvacil.com`. `www` and `http` 301 to that apex from `public/.htaccess` on Hostinger. Do not add a second public site.
- Search Console: the verification meta tag and `google7129b29a73db544e.html` are already in the repo. After the domain is attached, submit `https://freeporthvacil.com/sitemap.xml`.
- Leave the merged URLs as 301s. Do not rebuild thin city pages or the old split service URLs (separate mini-split repair, separate AC replacement, and so on).
- When you change a guide, update the visible “Last updated” date (`GUIDES_LAST_UPDATED` or the guide’s `dateModified`).
- Recheck the Nicor Gas emergency number against [nicorgas.com/safety/emergency-information.html](https://www.nicorgas.com/safety/emergency-information.html) if you edit safety copy. It was `888-642-6748` on October 12, 2026.

## Do not do this

- Do not create a Google Business Profile. A profile needs a real business that customers visit or that sends its own technicians. This site has no shop address and no crew. A listing at a virtual office, a home, or a partner’s address would be a fake listing.
- Do not buy citations (Yelp, BBB, Apple Maps, data aggregators) that require a street address, a license number, or “owner” photos. There is nothing honest to put in those fields.
- Do not publish star ratings, review widgets, or “rated” copy. Do not ask customers for reviews by text or email. The people who do the work are independent. Their reviews belong on their own listings, if they have them. This site should not solicit reviews for a business it is not.
- Do not add LocalBusiness or HVACBusiness schema, an address, `aggregateRating`, or opening hours you cannot verify. Organization and WebSite, plus Service / FAQ / Article / Breadcrumb on the pages that have them, is the honest set.
- Do not write prices, discounts, “free” estimates, guarantees, “best,” “#1,” “licensed,” “insured,” “24/7,” or equipment brand names. Do not speak as the contractor (“our technicians,” “we installed”).
- Do not spin up a page per town. Stephenson County towns stay on `/service-area/`.

## If a real contractor later owns the brand

Stop and treat that as a different business. A contractor can consider a Google Business Profile at their actual location, citations that match that location, and review requests for jobs they performed. None of that transfers to this call-connector site while it has no address and no technicians.
