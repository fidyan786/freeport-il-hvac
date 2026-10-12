import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { SectionCall } from "@/components/SectionCall";
import { nearbyCommunities } from "@/lib/nav";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Is ZIP 61032 covered?",
    a: "Freeport 61032 is the city this site is written for. Call to be connected with a local heating and cooling professional and give the ZIP.",
  },
  {
    q: "Is all of Stephenson County listed the same way?",
    a: "Nearby towns can often be reached, but coverage is confirmed on the call. Distance and the day's schedule matter. Do not assume a visit is already assigned.",
  },
  {
    q: "I live in Lena, Cedarville, Dakota, or Pearl City. Should I still call?",
    a: "Call and give the town and ZIP. Call to be connected with a local heating and cooling professional who can say whether that address can be reached.",
  },
  {
    q: "When should I call instead of waiting?",
    a: "Call when the house is losing heat, the air conditioner will not cool, or the system will not start. If you smell gas or a carbon monoxide alarm is sounding, leave first and use 911 and Nicor Gas.",
  },
];

export const metadata = pageMetadata({
  title: "HVAC Near Freeport, IL | Service Area 61032",
  description:
    "Heating and cooling calls for Freeport, Illinois 61032 in Stephenson County. Nearby towns such as Lena, Cedarville, Dakota, and Pearl City are confirmed by phone.",
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
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="max-w-3xl text-4xl text-navy">
            Heating and cooling near Freeport, IL
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Primary city: {site.city} {site.zip}, {site.county}. Nearby
            communities are listed so you can name yours on the call. They are
            not separate websites.
          </p>
          <SectionCall context="service-area-hero" />
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Service Area" },
          ]}
        />
        <h2 className="mt-8 text-3xl text-navy">Freeport coverage</h2>
        <p className="mt-4 text-muted">
          Freeport is the city these pages are written for. Heating demand is
          the high-stakes season. Cooling still matters after equipment sits
          idle through winter. ZIP 61032 comes first.
        </p>
        <p className="mt-4 text-muted">
          January nights here sit near 11°F. Outdoor air conditioners spend
          months unused. Call to be connected with a local heating and cooling
          professional and say which street you are on.
        </p>
        <SectionCall context="service-area-freeport" />
        <h2 className="mt-10 text-3xl text-navy">Stephenson County</h2>
        <p className="mt-4 text-muted">
          Stephenson County is the surrounding area, not a promise that every
          township is on the same route every day. Distance, weather, and the
          day&apos;s work decide whether a nearby town can be reached. That is
          confirmed on the phone.
        </p>
        <h2 className="mt-10 text-3xl text-navy">Nearby communities</h2>
        <p className="mt-4 text-muted">
          These towns come up on Freeport-area calls. Listing them here is so
          you can name yours. It is not a separate page for each place, and it
          is not a claim that every one can be reached tonight.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {nearbyCommunities.map((town) => (
            <li key={town.zip} className="rounded-brand bg-white px-4 py-3 ring-1 ring-line">
              <span className="font-semibold text-navy">{town.name}</span>
              <span className="ml-2 text-muted">{town.zip}</span>
            </li>
          ))}
        </ul>
        <SectionCall context="service-area-towns" />
        <h2 className="mt-10 text-3xl text-navy">When to call</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>The house is losing heat or the furnace will not stay running.</li>
          <li>The air conditioner will not cool after sitting through winter.</li>
          <li>The system will not start, or one floor is a different season than the rest.</li>
          <li>You already checked the thermostat, the switch, and the filter.</li>
        </ul>
        <p className="mt-6 text-muted">
          Need a topic page for 61032? Start at{" "}
          <Link href="/services/" className="font-semibold text-navy underline underline-offset-2">
            heating and cooling topics
          </Link>
          ,{" "}
          <Link href="/services/furnace-repair-freeport-il/" className="font-semibold text-navy underline underline-offset-2">
            furnace repair
          </Link>
          , or{" "}
          <Link href="/services/ac-repair-freeport-il/" className="font-semibold text-navy underline underline-offset-2">
            AC repair
          </Link>
          .
        </p>
        <SectionCall context="service-area-when" />
        <h2 className="mt-12 text-3xl text-navy">Service area questions</h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
        <SectionCall context="service-area-faq" />
      </div>
      <FinalCta
        title="Confirm the ZIP on the call"
        body="Freeport 61032 is the city this site covers. Other Stephenson County towns are confirmed by phone."
        context="service-area-final"
      />
    </>
  );
}
