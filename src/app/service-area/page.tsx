import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { nearbyCommunities } from "@/lib/nav";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Do you serve ZIP 61032?",
    a: "Yes. Freeport 61032 is the primary market for Millrace Heating & Air. That is the city this site is written for.",
  },
  {
    q: "Do you cover all of Stephenson County?",
    a: "Nearby towns can often be served, but coverage is confirmed on the call. Weather, distance, and current work all matter. Do not assume a truck is already assigned.",
  },
  {
    q: "I live in Lena, Cedarville, Dakota, or Pearl City. Should I still call?",
    a: "Call and give the town and ZIP. If we can take the job, we will say so. If we cannot, you will not get a vague maybe.",
  },
  {
    q: "When should I call instead of waiting?",
    a: "Call when the house is losing heat, the air conditioner will not cool, or the system will not start. If you smell gas or a carbon monoxide alarm is sounding, leave first and use 911 and Nicor Gas.",
  },
];

export const metadata = pageMetadata({
  title: "HVAC Near Freeport, IL | Service Area 61032",
  description:
    "HVAC service area for Freeport, Illinois 61032 in Stephenson County. Nearby towns such as Lena, Cedarville, Dakota, and Pearl City are confirmed by phone.",
  path: "/service-area/",
});

export default function ServiceAreaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Area", path: "/service-area/" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="max-w-3xl font-serif text-4xl sm:text-5xl">
            HVAC near Freeport, IL — service area 61032
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Primary city: {site.city} {site.zip}, {site.county}. Nearby
            communities are listed so you can ask whether we can reach you —
            not as a set of extra websites.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Service Area" },
          ]}
        />
        <h2 className="mt-8 font-serif text-3xl text-navy">Freeport coverage</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Freeport is home. Heating demand is the high-stakes season. Cooling
          still matters, especially after equipment sits idle through winter.
          If you searched HVAC near me in Freeport, IL, this is the city that
          page is written for — ZIP 61032 first, not a regional dump of towns.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          January nights here sit near 11°F. Outdoor air conditioners spend
          months unused. Those two facts shape which jobs we take and how we
          talk about them. The address on the truck is less important than
          whether we can actually reach your street when you call.
        </p>
        <h2 className="mt-10 font-serif text-3xl text-navy">
          Stephenson County coverage
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Stephenson County is the surrounding market, not a promise that every
          township is on the same route every day. Distance, weather, and
          current work decide whether a nearby town is in play. We confirm that
          on the phone instead of publishing a map we cannot stand behind.
        </p>
        <h2 className="mt-10 font-serif text-3xl text-navy">
          Nearby communities
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          These towns come up on Freeport-area calls. Listing them here is so
          you can name yours when you call. It is not a doorway page for each
          place, and it is not a claim that every one is automatically in
          range tonight.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {nearbyCommunities.map((town) => (
            <li key={town.zip} className="rounded-brand bg-white px-4 py-3 ring-1 ring-line">
              <span className="font-semibold text-navy">{town.name}</span>
              <span className="ml-2 text-sm text-muted">{town.zip}</span>
            </li>
          ))}
        </ul>
        <h2 className="mt-10 font-serif text-3xl text-navy">When to call</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>The house is losing heat or the furnace will not stay running.</li>
          <li>The air conditioner will not cool after sitting through winter.</li>
          <li>The system will not start, or one floor is a different season than the rest.</li>
          <li>You already checked the thermostat, the switch, and the filter.</li>
        </ul>
        <p className="mt-6 text-sm text-muted">
          Need a specific service in 61032? Start at{" "}
          <Link href="/services/" className="font-semibold text-navy underline underline-offset-2">
            HVAC services
          </Link>
          ,{" "}
          <Link href="/services/furnace-repair-freeport-il/" className="font-semibold text-navy underline underline-offset-2">
            furnace repair
          </Link>
          ,{" "}
          <Link href="/services/ac-repair-freeport-il/" className="font-semibold text-navy underline underline-offset-2">
            AC repair
          </Link>
          , or{" "}
          <Link href="/contact/" className="font-semibold text-navy underline underline-offset-2">
            request a callback
          </Link>
          .
        </p>
        <h2 className="mt-12 font-serif text-3xl text-navy">Service area questions</h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
      </div>
      <FinalCta
        title="Confirm coverage for your ZIP"
        body="Freeport 61032 is the home market. Other Stephenson County towns are confirmed by phone."
        context="service-area-final"
      />
    </>
  );
}
