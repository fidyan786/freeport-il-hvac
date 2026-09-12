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
    q: "Do heat pumps work in Freeport winters?",
    a: "Some cold-climate heat pumps can heat in this weather. Many older or poorly selected units struggle as outdoor temperatures fall toward the January normals. The equipment has to be chosen for northern Illinois, not a brochure climate.",
  },
  {
    q: "Can a heat pump replace a gas furnace here?",
    a: "Sometimes, with the right equipment and a house that can be heated efficiently. Dual-fuel setups are also common in heating-dominated climates. That is an on-site decision.",
  },
];

export const metadata = pageMetadata({
  title: "Heat Pump Services in Freeport, IL",
  description:
    "Heat pump repair, service, and installation conversations for Freeport, Illinois. Honest cold-climate framing for Stephenson County winters. Call to discuss heat pumps.",
  path: "/heat-pump-services-freeport-il/",
});

export default function HeatPumpPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Heat Pump Services", path: "/heat-pump-services-freeport-il/" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Heat Pump Services in Freeport, IL",
          description: "Heat pump service for Freeport, Illinois.",
          path: "/heat-pump-services-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Heat pumps · northern Illinois"
        title="Heat pump services in Freeport, written for a heating-dominated climate."
        lede="January lows near 11°F are not a footnote. If a heat pump is going to heat a 61032 house, it has to be the right machine, installed and serviced for this weather."
        context="heat-pump-hero"
        ctaLabel={`Call about heat pumps · ${site.phoneDisplay}`}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Heat Pump Services" },
          ]}
        />
        <article className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            Heat pumps are showing up in northern Illinois because they heat
            and cool from one outdoor unit. They are not magic. Capacity falls
            as it gets colder. A system that looks fine in a shoulder-season
            demo can leave rooms behind on a design-cold night if it was never
            selected for this load.
          </p>
          <p>
            Service calls are often defrost issues, outdoor fans that ice up,
            auxiliary heat that never stops, or a unit that “runs” without
            moving enough heat indoors. Those are diagnosis problems, same as{" "}
            <a className="font-semibold text-navy underline" href="/furnace-repair-freeport-il/">
              furnace repair
            </a>
            .
          </p>
          <p>
            If you are comparing a heat pump to a furnace replacement, read{" "}
            <a className="font-semibold text-navy underline" href="/blog/heat-pumps-northern-illinois/">
              heat pumps in northern Illinois
            </a>{" "}
            and then call. We will not pretend every house should rip out gas
            heat, and we will not pretend heat pumps never belong here.
          </p>
        </article>
        <div className="mt-12">
          <FaqList items={faqs} />
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              {
                href: "/ductless-mini-split-freeport-il/",
                label: "Ductless mini splits",
                note: "Heat pumps without relying on existing ducts.",
              },
              {
                href: "/furnace-installation-replacement-freeport-il/",
                label: "Furnace replacement",
                note: "When gas heat remains the better primary system.",
              },
              {
                href: "/hvac-maintenance-freeport-il/",
                label: "Maintenance",
                note: "Seasonal checks for heat pump systems too.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call about heat pump service in Freeport"
        body="Tell us whether the unit is not heating, not cooling, or you are considering one for a replacement."
        context="heat-pump-final"
      />
    </>
  );
}
