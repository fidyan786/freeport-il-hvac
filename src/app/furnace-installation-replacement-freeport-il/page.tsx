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
    q: "How do I know if the furnace should be replaced?",
    a: "Repeated no-heat calls, a cracked heat exchanger, parts that are no longer practical to source, or a system that cannot keep up on design-cold nights are the usual reasons. A technician should inspect the equipment rather than using age as the only rule.",
  },
  {
    q: "Do you publish furnace prices?",
    a: "No. Equipment, ductwork, venting, and electrical conditions are not the same in every Freeport house. Call to discuss replacement instead of shopping a website number.",
  },
  {
    q: "Does sizing matter in this climate?",
    a: "Yes. An oversized furnace short cycles. An undersized furnace never recovers on a night near 11°F. Proper sizing is part of the assessment, not an upsell slogan.",
  },
];

export const metadata = pageMetadata({
  title: "Furnace Installation & Replacement in Freeport, IL",
  description:
    "Furnace installation and replacement in Freeport, Illinois. Comfort, reliability, and proper sizing for Stephenson County winters — not a pricing page. Call to discuss replacement.",
  path: "/furnace-installation-replacement-freeport-il/",
});

export default function FurnaceInstallPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Furnace Installation",
            path: "/furnace-installation-replacement-freeport-il/",
          },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Furnace Installation in Freeport, IL",
          description: "Furnace replacement for Freeport, Illinois homes.",
          path: "/furnace-installation-replacement-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Replacement · Freeport heating"
        title="Furnace installation in Freeport when repair is no longer the reliable plan."
        lede="Stephenson County winters punish undersized, leaking, or aging heat. Replacement is a comfort and reliability decision. It is not a shopping cart."
        context="furnace-install-hero"
        ctaLabel={`Call to discuss replacement · ${site.phoneDisplay}`}
        secondaryHref="/furnace-repair-freeport-il/"
        secondaryLabel="Need repair instead?"
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Furnace Installation" },
          ]}
        />
        <article className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            Homeowners usually arrive at replacement after a pattern: more
            lockouts, more no-heat mornings, or a repair that would put serious
            money into a cabinet that cannot carry another polar-vortex week.
            That pattern is common in older Freeport houses with original or
            long-serving forced-air systems.
          </p>
          <h2 className="font-serif text-3xl text-navy">
            What a replacement assessment covers
          </h2>
          <ul className="grid gap-3">
            <li>How the current furnace actually heats the house on cold nights</li>
            <li>Duct condition, return-air paths, and rooms that never catch up</li>
            <li>Venting and combustion-air requirements for the home</li>
            <li>Whether the outdoor AC coil and indoor furnace should stay a pair</li>
            <li>Controls, including thermostats that no longer match the equipment</li>
          </ul>
          <p>
            Proper sizing matters here more than in a mild climate. A furnace
            that short cycles will be noisy, less comfortable, and harder on
            parts. A furnace that cannot meet the load will run continuously
            and still leave bedrooms cold. We talk through that on site.
          </p>
          <p>
            If you are still in the repair window, start with{" "}
            <a className="font-semibold text-navy underline" href="/furnace-repair-freeport-il/">
              furnace repair
            </a>
            . If you want fewer surprises next winter, pair a new system with{" "}
            <a className="font-semibold text-navy underline" href="/hvac-maintenance-freeport-il/">
              seasonal maintenance
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
                href: "/heat-pump-services-freeport-il/",
                label: "Heat pump services",
                note: "When a heat pump is part of the conversation.",
              },
              {
                href: "/ac-installation-replacement-freeport-il/",
                label: "AC installation",
                note: "Matching cooling to a new indoor unit.",
              },
              {
                href: "/contact/",
                label: "Contact",
                note: "Request a replacement assessment.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call about furnace replacement in Freeport"
        body="We will look at the house and the equipment. We will not publish a fake starting price."
        context="furnace-install-final"
      />
    </>
  );
}
