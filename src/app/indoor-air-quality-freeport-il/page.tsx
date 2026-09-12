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
    q: "Why does indoor air feel worse in a Freeport winter?",
    a: "Windows stay shut for months. Forced-air heat dries the house. Dust, cooking, and whatever is in the ducts recirculate. That is a building-and-HVAC issue, not a reason to invent medical claims.",
  },
  {
    q: "Will a new filter fix everything?",
    a: "A crushed or overdue filter can wreck airflow and comfort. It will not fix a cracked heat exchanger, a moldy coil, or a house with no ventilation plan.",
  },
];

export const metadata = pageMetadata({
  title: "Indoor Air Quality in Freeport, IL",
  description:
    "Indoor air quality help in Freeport, Illinois for closed-up winter homes: filtration, humidity, and HVAC-related air issues. Call to discuss indoor air concerns.",
  path: "/indoor-air-quality-freeport-il/",
});

export default function IaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Indoor Air Quality", path: "/indoor-air-quality-freeport-il/" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Indoor Air Quality in Freeport, IL",
          description: "Filtration and indoor air HVAC services in Freeport.",
          path: "/indoor-air-quality-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Closed-up winter homes"
        title="Indoor air quality in Freeport when the house stays shut for months."
        lede="Stephenson County winters keep windows closed. Heat runs almost constantly. Dust and dryness follow. This page is about HVAC-related air — not miracle health claims."
        context="iaq-hero"
        ctaLabel={`Call about indoor air · ${site.phoneDisplay}`}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Indoor Air Quality" },
          ]}
        />
        <article className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            Indoor air problems that actually connect to HVAC usually look
            like: filters that collapse, coils that should be cleaned, humidity
            that is too low in January, or a system that short cycles and never
            filters a full air change. Those are service issues.
          </p>
          <p>
            Carbon monoxide and gas odors are not IAQ accessories. They are
            leave-the-house emergencies. See the{" "}
            <a className="font-semibold text-navy underline" href="/emergency-hvac-freeport-il/">
              emergency page
            </a>{" "}
            and Nicor Gas guidance.
          </p>
          <p>
            For the seasonal context, read{" "}
            <a className="font-semibold text-navy underline" href="/blog/indoor-air-closed-up-winter-homes/">
              indoor air in closed-up winter homes
            </a>
            . Maintenance still comes first:{" "}
            <a className="font-semibold text-navy underline" href="/hvac-maintenance-freeport-il/">
              HVAC maintenance
            </a>
            .
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
                label: "HVAC maintenance",
                note: "Filters, coils, and airflow checks.",
              },
              {
                href: "/furnace-repair-freeport-il/",
                label: "Furnace repair",
                note: "If the heat is the source of the complaint.",
              },
              {
                href: "/contact/",
                label: "Contact",
                note: "Describe the air issue without self-diagnosing.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call about indoor air concerns in Freeport"
        body="Tell us what you are noticing — dryness, dust, odors from the system, or rooms that never feel right."
        context="iaq-final"
      />
    </>
  );
}
