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
    q: "When should Freeport homeowners schedule HVAC maintenance?",
    a: "Heating checks belong in early fall, before the first hard freeze. Cooling checks belong in spring, before the first humid stretch. Waiting until the system fails on a 10°F night is not maintenance.",
  },
  {
    q: "Does maintenance prevent every breakdown?",
    a: "No. It finds dirty burners, weak capacitors, unsafe venting, and airflow problems earlier. Parts still fail. The point is fewer surprises and safer operation.",
  },
];

export const metadata = pageMetadata({
  title: "HVAC Maintenance in Freeport, IL",
  description:
    "HVAC maintenance in Freeport, Illinois for fall heating preparation and spring cooling checks. Seasonal service for Stephenson County conditions. Call to schedule a check.",
  path: "/hvac-maintenance-freeport-il/",
});

export default function MaintenancePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "HVAC Maintenance", path: "/hvac-maintenance-freeport-il/" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "HVAC Maintenance in Freeport, IL",
          description: "Seasonal heating and cooling maintenance in Freeport.",
          path: "/hvac-maintenance-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Seasonal service · Stephenson County"
        title="HVAC maintenance in Freeport, timed to a heating-heavy climate."
        lede="A furnace that will run 6,900-plus heating degree days needs more than a filter reminder in May. Fall heating checks and spring cooling checks are the rhythm that fits 61032."
        context="maintenance-hero"
        ctaLabel={`Call to schedule a check · ${site.phoneDisplay}`}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "HVAC Maintenance" },
          ]}
        />
        <article className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            Maintenance here is about reliability through long cold stretches,
            catching cracked-heat-exchanger symptoms and ignition problems
            before they become a no-heat night, and making sure the AC can
            actually start after sitting under snow and freeze-thaw.
          </p>
          <h2 className="font-serif text-3xl text-navy">Fall heating preparation</h2>
          <p>
            Before nights stay below freezing, a heating check looks at
            ignition, flame sensing, venting, filters, blower operation, and
            whether the system is cycling the way it should. That visit is also
            when unsafe combustion conditions should be caught — not during a
            2 a.m.{" "}
            <a className="font-semibold text-navy underline" href="/emergency-hvac-freeport-il/">
              emergency call
            </a>
            .
          </p>
          <h2 className="font-serif text-3xl text-navy">Spring cooling preparation</h2>
          <p>
            Outdoor units in Freeport spend winter idle. Capacitors, contactors,
            and fans fail in that gap. A spring check is cheaper than discovering
            the problem in July humidity. See{" "}
            <a className="font-semibold text-navy underline" href="/ac-repair-freeport-il/">
              AC repair
            </a>{" "}
            if the system already will not cool.
          </p>
          <h2 className="font-serif text-3xl text-navy">What maintenance is not</h2>
          <p>
            It is not a lifetime guarantee, a coupon book, or a reason to skip
            calling when the furnace is already down. It is a way to identify
            problems early and keep equipment in a climate that asks a lot of
            it.
          </p>
        </article>
        <div className="mt-12">
          <FaqList items={faqs} />
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              {
                href: "/furnace-repair-freeport-il/",
                label: "Furnace repair",
                note: "If heat is already failing.",
              },
              {
                href: "/indoor-air-quality-freeport-il/",
                label: "Indoor air quality",
                note: "Filters, humidity, and closed-up winter air.",
              },
              {
                href: "/blog/furnace-stops-working-freeport-winter/",
                label: "Furnace winter guide",
                note: "What to do when heat stops.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call to schedule HVAC maintenance in Freeport"
        body="Tell us whether you need a heating check, a cooling check, or both. We will not invent a membership price on this page."
        context="maintenance-final"
      />
    </>
  );
}
