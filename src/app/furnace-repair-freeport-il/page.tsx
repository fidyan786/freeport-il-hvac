import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SafetyCallout } from "@/components/SafetyCallout";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Why did my Freeport furnace stop overnight?",
    a: "Cold snaps expose weak ignition, dirty flame sensors, failing pressure switches, and undersized or restricted venting. A house that was “fine yesterday” can still lose heat when outdoor temperatures drop into the teens.",
  },
  {
    q: "Is weak heat a repair or a replacement?",
    a: "Weak heat can be a clogged filter, a blower issue, duct leaks, or a furnace that can no longer keep up with the load. That decision belongs on site, not on a website.",
  },
  {
    q: "Do you work on older furnaces?",
    a: "Yes. Age is one factor. Heat exchanger condition, parts availability, and how often the system is failing matter more than a round-number birthday.",
  },
];

export const metadata = pageMetadata({
  title: "Furnace Repair in Freeport, IL",
  description:
    "Furnace repair in Freeport, Illinois for no heat, furnaces that will not start, weak heat, short cycling, and strange noises. Call for heating help in 61032.",
  path: "/furnace-repair-freeport-il/",
});

export default function FurnaceRepairPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Furnace Repair", path: "/furnace-repair-freeport-il/" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Furnace Repair in Freeport, IL",
          description: "Heating repair for Freeport and Stephenson County homes.",
          path: "/furnace-repair-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Heating repair · Freeport 61032"
        title="Furnace repair in Freeport when the house will not stay warm."
        lede="No heat, a furnace that will not start, weak airflow, or a unit that short cycles through a Stephenson County night — those are the calls this page is for."
        context="furnace-repair-hero"
        ctaLabel={`Call for furnace repair · ${site.phoneDisplay}`}
        secondaryHref="/emergency-hvac-freeport-il/"
        secondaryLabel="Is this an emergency?"
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Furnace Repair" },
          ]}
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="max-w-3xl">
            <p className="leading-relaxed text-muted">
              Gas furnaces in Freeport work harder than the same equipment in
              a milder climate. With roughly 7,000 heating degree days, ignition
              hardware, inducer motors, and heat exchangers accumulate a full
              season of cycles. When something fails, the symptom is usually
              obvious: the house cools off.
            </p>
            <h2 className="mt-10 font-serif text-3xl text-navy">
              Problems we diagnose
            </h2>
            <ul className="mt-4 grid gap-3 text-muted">
              <li>
                <strong className="text-navy">No heat.</strong> The thermostat
                calls, nothing useful happens, and indoor temperature falls.
              </li>
              <li>
                <strong className="text-navy">Furnace will not start.</strong>{" "}
                No inducer, no igniter glow, or a lockout after several tries.
              </li>
              <li>
                <strong className="text-navy">Weak heat.</strong> The unit runs
                but rooms farthest from the furnace never recover.
              </li>
              <li>
                <strong className="text-navy">Strange noises.</strong> Booming
                on startup, squealing belts, or metal rattling in the cabinet.
              </li>
              <li>
                <strong className="text-navy">Short cycling.</strong> Burners
                fire briefly, stop, and repeat. See the{" "}
                <a className="font-semibold text-navy underline" href="/blog/furnace-short-cycling-cold-weather/">
                  short-cycling guide
                </a>
                .
              </li>
              <li>
                <strong className="text-navy">Airflow problems.</strong> Closed
                registers, crushed returns, or a filter that has become a wall.
              </li>
            </ul>
            <p className="mt-6 leading-relaxed text-muted">
              If the system is down in dangerous weather, use the{" "}
              <a className="font-semibold text-navy underline" href="/emergency-hvac-freeport-il/">
                emergency HVAC page
              </a>{" "}
              and call. If the furnace is running but you are tired of repeat
              visits,{" "}
              <a className="font-semibold text-navy underline" href="/furnace-installation-replacement-freeport-il/">
                replacement
              </a>{" "}
              may be the better conversation — after a diagnosis, not before.
            </p>
          </article>
          <aside className="space-y-5">
            <SafetyCallout />
            <div className="border border-line bg-white p-5">
              <h2 className="font-semibold text-navy">What happens on the visit</h2>
              <ol className="mt-3 grid gap-2 text-sm text-muted">
                <li>1. Confirm the home is safe to work in.</li>
                <li>2. Verify thermostat, power, gas, and venting basics.</li>
                <li>3. Diagnose the failed part or airflow restriction.</li>
                <li>4. Explain repair versus replace in plain language.</li>
              </ol>
            </div>
          </aside>
        </div>
        <div className="mt-12">
          <FaqList items={faqs} />
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              {
                href: "/emergency-hvac-freeport-il/",
                label: "Emergency HVAC",
                note: "No heat during a freeze.",
              },
              {
                href: "/hvac-maintenance-freeport-il/",
                label: "HVAC maintenance",
                note: "Catch ignition and airflow issues before January.",
              },
              {
                href: "/service-areas/",
                label: "Service area",
                note: "Freeport 61032 and nearby towns to confirm.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call for furnace repair in Freeport"
        body="If the heat is already out, skip the rest of the internet and use the number."
        context="furnace-repair-final"
      />
    </>
  );
}
