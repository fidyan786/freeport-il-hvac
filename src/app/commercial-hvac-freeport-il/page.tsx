import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Do you handle large industrial plants?",
    a: "This page is for small commercial spaces in Freeport — offices, shops, churches, and similar buildings. Specialized industrial work is only claimed if the operator later verifies that capability.",
  },
  {
    q: "Can a business get after-hours help?",
    a: `Call ${site.phoneDisplay}. Published hours are ${site.hours}. After-hours commercial coverage is not invented on this website.`,
  },
];

export const metadata = pageMetadata({
  title: "Commercial HVAC in Freeport, IL",
  description:
    "Commercial HVAC service in Freeport, Illinois for offices, shops, and other small business spaces. Call to discuss heating and cooling for local commercial buildings.",
  path: "/commercial-hvac-freeport-il/",
});

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Commercial HVAC", path: "/commercial-hvac-freeport-il/" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Commercial HVAC in Freeport, IL",
          description: "Small commercial heating and cooling in Freeport.",
          path: "/commercial-hvac-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Small commercial · Freeport"
        title="Commercial HVAC in Freeport for spaces that cannot wait on comfort."
        lede="Offices, storefronts, and other small buildings in 61032 still need heat that holds overnight and cooling that shows up when customers do. Call to talk through the equipment on site."
        context="commercial-hero"
        ctaLabel={`Call about commercial HVAC · ${site.phoneDisplay}`}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Commercial HVAC" },
          ]}
        />
        <article className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            Downtown and corridor buildings in Freeport are often a mix of older
            rooftop units, split systems, and equipment that has been patched
            through several owners. This page does not claim a warehouse
            division or a 24-hour industrial crew that has not been verified.
          </p>
          <p>
            Typical requests: a unit that failed before opening, a zone that
            froze pipes over a weekend, or cooling that cannot keep a shop
            usable in July. Those map to the same core work as residential —{" "}
            <a className="font-semibold text-navy underline" href="/furnace-repair-freeport-il/">
              heating repair
            </a>
            ,{" "}
            <a className="font-semibold text-navy underline" href="/ac-repair-freeport-il/">
              cooling repair
            </a>
            , and{" "}
            <a className="font-semibold text-navy underline" href="/emergency-hvac-freeport-il/">
              emergency HVAC
            </a>{" "}
            — with building access and business hours in the conversation.
          </p>
        </article>
        <div className="mt-12">
          <FaqList items={faqs} />
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              {
                href: "/hvac-maintenance-freeport-il/",
                label: "Maintenance",
                note: "Seasonal checks before weather events.",
              },
              {
                href: "/service-areas/",
                label: "Service area",
                note: "Freeport first, nearby towns by confirmation.",
              },
              {
                href: "/contact/",
                label: "Contact",
                note: "Include the building type and the symptom.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call about commercial HVAC in Freeport"
        body="Describe the building and what failed. We will not invent a commercial fleet we do not have."
        context="commercial-final"
      />
    </>
  );
}
