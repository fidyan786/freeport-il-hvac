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
    q: "Should I replace the AC at the same time as the furnace?",
    a: "Often the indoor coil and outdoor unit should stay matched. If one side is failing and the other is far along in its life, replacing them together can avoid a mismatch. That is an equipment decision, not a sales script.",
  },
  {
    q: "Do you list AC installation prices?",
    a: "No. Electrical service, line-set condition, ductwork, and equipment selection change the job. Call to discuss the house.",
  },
];

export const metadata = pageMetadata({
  title: "AC Installation & Replacement in Freeport, IL",
  description:
    "Air conditioner installation and replacement in Freeport, Illinois. Comfort, humidity control, and matched equipment — not a cost guide. Call to discuss cooling replacement.",
  path: "/ac-installation-replacement-freeport-il/",
});

export default function AcInstallPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "AC Installation",
            path: "/ac-installation-replacement-freeport-il/",
          },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "AC Installation in Freeport, IL",
          description: "Central air replacement for Freeport homes.",
          path: "/ac-installation-replacement-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Cooling replacement · 61032"
        title="AC installation in Freeport for homes that cannot keep summer out."
        lede="When repair keeps returning, or the outdoor unit is no longer a match for the indoor coil, replacement is about comfort and humidity — not a price grid."
        context="ac-install-hero"
        ctaLabel={`Call to discuss AC replacement · ${site.phoneDisplay}`}
        secondaryHref="/ac-repair-freeport-il/"
        secondaryLabel="Need repair instead?"
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "AC Installation" },
          ]}
        />
        <article className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            Freeport only books about 690 cooling degree days a year, but those
            days are humid and they arrive after the system has sat still.
            Replacement conversations here are usually about reliability on
            that first hot week, noise, and whether the indoor coil still
            belongs with the box in the yard.
          </p>
          <h2 className="font-serif text-3xl text-navy">
            What we look at before recommending new equipment
          </h2>
          <ul className="grid gap-3">
            <li>How the current system cools and dries the house</li>
            <li>Electrical service and disconnect condition</li>
            <li>Line-set path, outdoor pad, and clearances</li>
            <li>Duct airflow — a new condenser cannot fix starved returns</li>
            <li>Whether a heat pump or ductless system is a better fit</li>
          </ul>
          <p>
            If rooms never cooled even when the old unit was new, the problem
            may be distribution, not the nameplate. That is why this page does
            not pretend a bigger outdoor unit is automatically the answer.
          </p>
          <p>
            Related options:{" "}
            <a className="font-semibold text-navy underline" href="/ductless-mini-split-freeport-il/">
              ductless mini splits
            </a>{" "}
            for additions and chronic hot rooms, and{" "}
            <a className="font-semibold text-navy underline" href="/heat-pump-services-freeport-il/">
              heat pumps
            </a>{" "}
            when heating and cooling should share one outdoor unit.
          </p>
        </article>
        <div className="mt-12">
          <FaqList items={faqs} />
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              {
                href: "/ac-repair-freeport-il/",
                label: "AC repair",
                note: "If the current system might still be the right machine.",
              },
              {
                href: "/furnace-installation-replacement-freeport-il/",
                label: "Furnace installation",
                note: "When indoor and outdoor equipment should be planned together.",
              },
              {
                href: "/service-areas/",
                label: "Service area",
                note: "Confirm Freeport and nearby coverage.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call about AC replacement in Freeport"
        body="Describe the house, the rooms that overheat, and what the current system is doing. We take it from there."
        context="ac-install-final"
      />
    </>
  );
}
