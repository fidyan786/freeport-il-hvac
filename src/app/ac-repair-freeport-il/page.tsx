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
    q: "Why does AC fail on the first hot day in Freeport?",
    a: "The outdoor unit sat through months of snow, freeze-thaw, and idle capacitors. A weak capacitor, stuck contactor, or neglected spring start-up often shows up the first afternoon the thermostat actually calls for cooling.",
  },
  {
    q: "The AC is running. Why is the air warm?",
    a: "The indoor blower can move air while the refrigeration circuit is not doing work. Low refrigerant, a failed compressor, a dirty coil, or a fan that is not spinning can all produce that symptom.",
  },
  {
    q: "Should I add refrigerant myself?",
    a: "No. Refrigerant work is regulated and guessing the charge hides leaks. Call for AC repair.",
  },
];

export const metadata = pageMetadata({
  title: "AC Repair in Freeport, IL",
  description:
    "AC repair in Freeport, Illinois for systems that will not cool, blow warm air, will not start, or fail after sitting through winter. Call for cooling help in 61032.",
  path: "/ac-repair-freeport-il/",
});

export default function AcRepairPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AC Repair", path: "/ac-repair-freeport-il/" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "AC Repair in Freeport, IL",
          description: "Air conditioning repair for Freeport, Illinois homes.",
          path: "/ac-repair-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Cooling repair · Freeport 61032"
        title="AC repair in Freeport when the system will not cool the house."
        lede="Freeport summers are shorter than the winters, but 82°F July afternoons still matter. If the air conditioner will not start, blows warm air, or died after sitting all winter, call."
        context="ac-repair-hero"
        ctaLabel={`Call for AC repair · ${site.phoneDisplay}`}
        secondaryHref="/emergency-hvac-freeport-il/"
        secondaryLabel="Need it today?"
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "AC Repair" },
          ]}
        />
        <article className="mt-8 max-w-3xl">
          <p className="leading-relaxed text-muted">
            Cooling equipment in Stephenson County lives a strange life. It is
            ignored from October through May, then expected to pull humidity
            and heat on short notice. That idle season is why “it worked last
            August” is not a diagnosis.
          </p>
          <h2 className="mt-10 font-serif text-3xl text-navy">
            Symptoms that belong on a service call
          </h2>
          <ul className="mt-4 grid gap-3 text-muted">
            <li>
              <strong className="text-navy">AC not cooling.</strong> Indoor
              temperature climbs even though the thermostat is set to cool.
            </li>
            <li>
              <strong className="text-navy">Blowing warm air.</strong> Supply
              vents feel like attic air. The blower is not the same thing as
              air conditioning.
            </li>
            <li>
              <strong className="text-navy">Will not turn on.</strong> Outdoor
              fan still, no hum, or a click with no start.
            </li>
            <li>
              <strong className="text-navy">Weak airflow.</strong> A few vents
              whisper. Others do nothing. Filters and blowers are the first
              suspects; ducts in older Freeport houses are next.
            </li>
            <li>
              <strong className="text-navy">Unusual noises.</strong> Grinding
              outdoor fans, rattling panels, or a compressor that sounds
              strained.
            </li>
            <li>
              <strong className="text-navy">Short cycling.</strong> The outdoor
              unit starts and stops every few minutes instead of running a
              full cooling cycle.
            </li>
          </ul>
          <p className="mt-6 leading-relaxed text-muted">
            Read{" "}
            <a className="font-semibold text-navy underline" href="/blog/ac-fails-after-illinois-winter/">
              why AC fails after an Illinois winter
            </a>{" "}
            if you want the seasonal context. If the equipment is at the end
            of its useful life, see{" "}
            <a className="font-semibold text-navy underline" href="/ac-installation-replacement-freeport-il/">
              AC installation and replacement
            </a>
            . Neither page is a price list.
          </p>
        </article>
        <div className="mt-12">
          <FaqList items={faqs} />
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              {
                href: "/emergency-hvac-freeport-il/",
                label: "Emergency HVAC",
                note: "No cooling during a heat wave.",
              },
              {
                href: "/hvac-maintenance-freeport-il/",
                label: "HVAC maintenance",
                note: "Spring checks before the first hot week.",
              },
              {
                href: "/indoor-air-quality-freeport-il/",
                label: "Indoor air quality",
                note: "Humidity and filtration when the house is closed up.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call for AC repair in Freeport"
        body="Warm air from the vents is a service call. We will diagnose the system instead of selling you a number from a table."
        context="ac-repair-final"
      />
    </>
  );
}
