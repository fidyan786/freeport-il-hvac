import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { ReviewsPlaceholder } from "@/components/ReviewsPlaceholder";
import { SafetyCallout } from "@/components/SafetyCallout";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  {
    q: "Do you service Freeport, Illinois?",
    a: `Yes. This site is built for HVAC work in Freeport (ZIP 61032) in Stephenson County. Nearby towns can be confirmed by phone at ${site.phoneDisplay}.`,
  },
  {
    q: "What should I do if my furnace stops working?",
    a: "If you smell gas or a carbon monoxide alarm is sounding, leave and call 911 and Nicor Gas. If the home is otherwise safe, check the thermostat, the furnace switch, and the filter, then call for furnace repair rather than taking the cabinet apart.",
  },
  {
    q: "What should I do if my AC stops cooling?",
    a: "Make sure the thermostat is set to cool, the outdoor disconnect is on, and the filter is not clogged. If the outdoor unit is running but indoor air is warm, or the system will not start after sitting all winter, call for AC repair.",
  },
  {
    q: "Do you offer emergency HVAC service?",
    a: `Call ${site.phoneDisplay} for urgent no-heat or no-cooling problems. Published after-hours coverage is listed only when real business hours are configured. Current hours: ${site.hours}.`,
  },
  {
    q: "Do you service older HVAC systems?",
    a: "Yes. Many Freeport homes still run older forced-air furnaces and matching outdoor units. Age alone does not decide repair versus replacement; a technician should inspect the equipment, heat exchanger condition, and how the system is actually performing.",
  },
  {
    q: "Which areas do you serve?",
    a: "Freeport is the primary city. Stephenson County communities such as Lena, Cedarville, Dakota, and Pearl City may be served depending on current coverage. Call to confirm before assuming a truck is available.",
  },
];

export const metadata = pageMetadata({
  title: "HVAC in Freeport, IL | Furnace & AC Service",
  description:
    "Furnace repair, AC repair, and emergency HVAC help for Freeport, Illinois 61032. Heating-first service for Stephenson County winters. Call for help.",
  path: "/",
});

const symptoms = [
  {
    href: "/emergency-hvac-freeport-il/",
    title: "No heat",
    text: "Furnace will not start, or the house is losing temperature during a freeze.",
  },
  {
    href: "/furnace-repair-freeport-il/",
    title: "Furnace will not start",
    text: "No ignition, repeated lockouts, or a blower that never comes on.",
  },
  {
    href: "/ac-repair-freeport-il/",
    title: "AC not cooling",
    text: "Indoor air stays warm while the outdoor unit sits idle or runs without result.",
  },
  {
    href: "/ac-repair-freeport-il/",
    title: "AC blowing warm air",
    text: "The system runs, but supply vents feel like outdoor air.",
  },
  {
    href: "/furnace-repair-freeport-il/",
    title: "Strange HVAC noises",
    text: "Banging, squealing, or rattling from the furnace closet or outdoor unit.",
  },
  {
    href: "/hvac-maintenance-freeport-il/",
    title: "System short cycling",
    text: "The furnace or AC starts and stops in short bursts instead of completing a cycle.",
  },
];

const services = [
  {
    href: "/furnace-repair-freeport-il/",
    title: "Furnace Repair",
    text: "No heat, weak heat, ignition problems, and airflow issues in Freeport homes.",
  },
  {
    href: "/ac-repair-freeport-il/",
    title: "AC Repair",
    text: "Systems that will not start, will not cool, or fail after sitting through winter.",
  },
  {
    href: "/furnace-installation-replacement-freeport-il/",
    title: "Furnace Installation",
    text: "Replacement when repair no longer keeps a Stephenson County house reliably warm.",
  },
  {
    href: "/ac-installation-replacement-freeport-il/",
    title: "AC Installation",
    text: "Cooling equipment sized for Freeport summers without turning this into a price sheet.",
  },
  {
    href: "/hvac-maintenance-freeport-il/",
    title: "HVAC Maintenance",
    text: "Fall heating checks and spring cooling checks before the weather turns.",
  },
  {
    href: "/emergency-hvac-freeport-il/",
    title: "Emergency HVAC",
    text: "Urgent no-heat and no-cooling calls. Phone first.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 80% 10%, #c45c26 0, transparent 32%), linear-gradient(160deg, #071525, #16324f 55%, #0c2238)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-ember uppercase">
              Freeport, Illinois · Stephenson County · 61032
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-[3.35rem]">
              Furnace and AC service for Freeport winters that actually get cold.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              NOAA normals for Freeport show about 6,956 heating degree days
              versus 690 cooling degree days. Heat is the high-stakes system
              here. When it fails, call. This is not a pricing website.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneCta context="home-hero" className="min-h-12">
                Call {site.phoneDisplay}
              </PhoneCta>
              <Link
                href="/emergency-hvac-freeport-il/"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                No heat or no cooling?
              </Link>
            </div>
          </div>
          <aside className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold tracking-wide text-ember uppercase">
              Call for HVAC help
            </p>
            <p className="mt-3 font-serif text-3xl text-white">
              {site.phoneDisplay}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Hours: {site.hours}. We do not advertise 24/7 coverage, licenses,
              or review scores until those facts are real.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-white/85">
              <li>Primary city: Freeport 61032</li>
              <li>Heating-first, then summer AC</li>
              <li>Gas / CO safety comes before any repair</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          <p className="text-sm leading-relaxed text-muted">
            Built for Freeport searchers who need a furnace or AC running — not
            a brochure from a tri-state chain page.
          </p>
          <p className="text-sm leading-relaxed text-muted">
            No invented star ratings, no fake technician bios, no “starting at”
            prices.
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Phone is the main action on every important page, including this
            one.
          </p>
        </div>
      </section>

      <section className="bg-ember">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
          <div className="text-white">
            <h2 className="font-serif text-2xl">Need emergency HVAC in Freeport?</h2>
            <p className="mt-1 text-sm font-medium text-white">
              No heat, furnace stopped, AC dead on the first hot day — call
              before the house gets dangerous or unbearable.
            </p>
          </div>
          <PhoneCta context="home-emergency-band" variant="light">
            Call for emergency HVAC
          </PhoneCta>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-serif text-3xl text-navy">Core HVAC services</h2>
        <p className="mt-3 max-w-2xl text-muted">
          These pages exist because people in 61032 search for them — furnace
          first, then cooling, then the work that keeps both from failing at
          the worst time.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-sm border border-line bg-white p-5 hover:border-navy"
            >
              <h3 className="font-semibold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl text-navy">
            Common problems in Freeport homes
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            January nights here average near 11°F. July highs average about
            82°F. The failures below are the ones that usually need a
            technician, not another filter video.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-sm border border-line p-5 hover:border-ember"
              >
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-navy">
            Why heating comes first in Stephenson County
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Freeport is not an air-conditioning market that happens to own
            furnaces. The climate math runs the other way. Long stretches below
            freezing, roughly 35 inches of snow, and about 148 nights at or
            below 32°F put real hours on heat exchangers, inducer motors, and
            ignition systems.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Cooling still matters. Outdoor units sit idle through that winter,
            then get asked to work on the first humid stretch. That is a
            different failure pattern than Sun Belt AC, and the{" "}
            <Link className="font-semibold text-navy underline" href="/ac-repair-freeport-il/">
              AC repair page
            </Link>{" "}
            is written that way.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="border border-line bg-white p-5">
            <p className="text-sm font-semibold text-ember">January normal</p>
            <p className="mt-2 font-serif text-2xl text-navy">28° / 11°F</p>
            <p className="mt-1 text-sm text-muted">
              High / low at the Freeport climate station.
            </p>
          </div>
          <div className="border border-line bg-white p-5">
            <p className="text-sm font-semibold text-ember">Heating vs cooling</p>
            <p className="mt-2 font-serif text-2xl text-navy">6,956 HDD / 690 CDD</p>
            <p className="mt-1 text-sm text-muted">
              Degree days, base 65°F. Heat carries this market.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SafetyCallout />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-serif text-3xl text-navy">How service works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Call",
              text: `Speak with someone at ${site.phoneDisplay}. Describe the symptom and the ZIP.`,
            },
            {
              step: "2",
              title: "Confirm Freeport",
              text: "Coverage starts with 61032. Nearby Stephenson County towns are confirmed on the call.",
            },
            {
              step: "3",
              title: "On-site diagnosis",
              text: "A technician inspects the system. We do not quote imaginary prices from a website table.",
            },
            {
              step: "4",
              title: "Repair or replace",
              text: "You get a clear recommendation. Replacement is a conversation, not a shopping cart.",
            },
          ].map((item) => (
            <li key={item.step} className="border border-line bg-white p-5">
              <p className="text-xs tracking-[0.16em] text-ember uppercase">
                Step {item.step}
              </p>
              <h3 className="mt-2 font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl text-navy">Service area</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Primary market: Freeport, Illinois, ZIP 61032, Stephenson County.
            Nearby communities are listed on the{" "}
            <Link className="font-semibold text-navy underline" href="/service-areas/">
              service area page
            </Link>{" "}
            so you can confirm coverage — this is not a doorway-page farm for
            every village in northwest Illinois.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-serif text-3xl text-navy">Reviews</h2>
        <p className="mt-3 mb-6 max-w-2xl text-muted">
          Real customer comments belong here. Until they are supplied, this
          section stays empty on purpose.
        </p>
        <ReviewsPlaceholder />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl text-navy">Freeport HVAC questions</h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <FinalCta
        title="Need HVAC help in Freeport today?"
        body="Call for furnace repair, AC repair, or an emergency no-heat / no-cooling visit. The next step is a conversation, not a cost calculator."
        context="home-final"
        label={`Call ${site.phoneDisplay}`}
      />
    </>
  );
}
