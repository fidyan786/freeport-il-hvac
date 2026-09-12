import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhoneCta } from "@/components/PhoneCta";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SafetyCallout } from "@/components/SafetyCallout";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Do you offer emergency HVAC service in Freeport?",
    a: `Call ${site.phoneDisplay}. Current published hours are ${site.hours}. We do not claim 24/7 coverage unless that is configured as a verified business fact.`,
  },
  {
    q: "What counts as an HVAC emergency?",
    a: "No heat in freezing weather, a furnace that will not stay running, no cooling during a heat wave, a system that will not start, or unusual burning smells from equipment after the home is confirmed safe.",
  },
  {
    q: "Should I try to fix a furnace myself at night?",
    a: "Do not open the burner compartment, bypass safety switches, or ignore a gas odor. Safe checks are the thermostat, power switch, and a dirty filter. After that, call.",
  },
];

export const metadata = pageMetadata({
  title: "Emergency HVAC in Freeport, IL",
  description:
    "No heat or no cooling in Freeport, Illinois? Call for emergency HVAC help. Safety-first guidance for furnace failure, AC failure, and urgent heating problems in 61032.",
  path: "/emergency-hvac-freeport-il/",
});

export default function EmergencyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Emergency HVAC", path: "/emergency-hvac-freeport-il/" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Emergency HVAC in Freeport, IL",
          description:
            "Urgent furnace and air conditioning service for Freeport, Illinois homeowners.",
          path: "/emergency-hvac-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Freeport, IL · 61032"
        title="Emergency HVAC in Freeport: call first, then we sort heat or cooling."
        lede="If the furnace stopped in a Stephenson County freeze, or the AC died when you needed it, this is a phone problem. Do not wait on a long form."
        context="emergency-hero"
        ctaLabel={`Call ${site.phoneDisplay} now`}
        secondaryHref="/contact/"
        secondaryLabel="Request a callback"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Emergency HVAC" },
          ]}
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="border border-navy bg-navy p-6 text-white">
            <h2 className="font-serif text-3xl">No heat?</h2>
            <p className="mt-3 text-white/80">
              Freeport January nights average near 11°F. A dead furnace is not
              an inconvenience; pipes, pets, and people are at risk. If the
              house is otherwise safe, call for{" "}
              <a className="underline" href="/furnace-repair-freeport-il/">
                furnace repair
              </a>
              .
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/85">
              <li>Furnace will not ignite or keeps locking out</li>
              <li>Blower runs but the air is cold</li>
              <li>Heat worked yesterday and quit overnight</li>
              <li>Only some rooms still have heat</li>
            </ul>
            <PhoneCta context="emergency-no-heat" variant="primary" className="mt-6">
              Call for no-heat help
            </PhoneCta>
          </section>

          <section className="border border-line bg-white p-6">
            <h2 className="font-serif text-3xl text-navy">No cooling?</h2>
            <p className="mt-3 text-muted">
              After a long idle winter, condensing units in 61032 often fail on
              the first real warm stretch. If indoor temperatures are climbing
              and the system will not cool, call for{" "}
              <a className="font-semibold text-navy underline" href="/ac-repair-freeport-il/">
                AC repair
              </a>
              .
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              <li>Outdoor unit will not start</li>
              <li>AC running but blowing warm air</li>
              <li>Ice on the copper lines or coil</li>
              <li>Repeated breaker trips</li>
            </ul>
            <PhoneCta context="emergency-no-cooling" variant="secondary" className="mt-6">
              Call for no-cooling help
            </PhoneCta>
          </section>
        </div>

        <div className="mt-10">
          <SafetyCallout />
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-3xl text-navy">
            Safe checks before a technician arrives
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            These are the only DIY steps worth doing: confirm the thermostat
            has power and the right mode, confirm the furnace or air handler
            switch is on, and check whether a packed filter is starving the
            system. Do not reset gas valves, jump out rollout switches, or
            keep cycling a unit that smells like burning dust after a few
            minutes — that last one can be normal after a long off-season, but
            a persistent electrical or combustion smell is a stop-and-call
            situation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-3xl text-navy">
            When professional help is the right call
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Ignition, refrigeration, and combustion are not weekend projects.
            If the system short cycles, the inducer sounds wrong, the outdoor
            fan is still, or rooms will not recover temperature,{" "}
            <a className="font-semibold text-navy underline" href="/hvac-maintenance-freeport-il/">
              a later maintenance visit
            </a>{" "}
            does not replace getting heat or cooling restored now.
          </p>
        </section>

        <div className="mt-12">
          <FaqList items={faqs} />
        </div>

        <div className="mt-12">
          <RelatedLinks
            links={[
              {
                href: "/furnace-repair-freeport-il/",
                label: "Furnace repair in Freeport",
                note: "For no-heat diagnosis after the emergency call.",
              },
              {
                href: "/ac-repair-freeport-il/",
                label: "AC repair in Freeport",
                note: "For systems that will not cool.",
              },
              {
                href: "/contact/",
                label: "Contact",
                note: "Short callback form if you cannot talk right now.",
              },
            ]}
          />
        </div>
      </div>

      <FinalCta
        title="Call for emergency HVAC service in Freeport"
        body="Keep this page open if you need the number. The fastest path is a phone call, not a quote form."
        context="emergency-final"
      />
    </>
  );
}
