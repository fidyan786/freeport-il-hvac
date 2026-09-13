import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { SafetyCallout } from "@/components/SafetyCallout";
import { ServiceCard } from "@/components/ServiceCard";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { problemLinks } from "@/lib/nav";
import { hoursLabel, primaryCtaLabel } from "@/lib/site";

const faqs = [
  {
    q: "Do you service Freeport, Illinois?",
    a: "Yes. Millrace Heating & Air is built around HVAC work in Freeport (ZIP 61032) in Stephenson County. Nearby towns can be confirmed by phone.",
  },
  {
    q: "What should I do if my furnace stops working?",
    a: "If you smell gas or a carbon monoxide alarm is sounding, leave and call 911 and Nicor Gas. If the home is otherwise safe, check the thermostat, the furnace switch, and the filter, then request furnace repair rather than taking the cabinet apart.",
  },
  {
    q: "What should I do if my AC stops cooling?",
    a: "Make sure the thermostat is set to cool, the outdoor disconnect is on, and the filter is not clogged. If the outdoor unit is running but indoor air is warm, or the system will not start after sitting all winter, request AC repair.",
  },
  {
    q: "Do you offer emergency HVAC service?",
    a: "Call for urgent no-heat or no-cooling problems. We do not advertise round-the-clock coverage or arrival times on this website. Availability is confirmed when you call.",
  },
  {
    q: "Do you work on homes and businesses?",
    a: "Yes. Residential comfort systems and light commercial HVAC are both in scope. Describe the building and the symptom so the right technician conversation can start.",
  },
  {
    q: "Which areas do you serve?",
    a: "Freeport is the primary city. Stephenson County communities such as Lena, Cedarville, Dakota, and Pearl City may be served depending on current coverage. Call to confirm before assuming a truck is available.",
  },
];

export const metadata = pageMetadata({
  title: "Heating & Cooling Service in Freeport, IL",
  description:
    "Millrace Heating & Air helps Freeport, Illinois homes and businesses with furnace repair, AC repair, maintenance, and HVAC service in 61032.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <section className="relative min-h-[34rem] overflow-hidden bg-spruce text-white lg:min-h-[40rem]">
        <Image
          src="/photos/hero-home-winter.jpg"
          alt="Midwestern Freeport-area home in winter with outdoor HVAC equipment beside the house"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spruce-deep via-spruce-deep/80 to-spruce/25" />
        <div
          aria-hidden="true"
          className="float-soft pointer-events-none absolute right-8 top-16 hidden h-24 w-24 rounded-full border border-brass/40 lg:block"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="reveal text-xs font-semibold tracking-[0.22em] text-brass uppercase">
              Freeport, Illinois · 61032 · Stephenson County
            </p>
            <h1 className="reveal reveal-delay-1 mt-4 max-w-3xl font-serif text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-[3.4rem]">
              Heating and cooling service for Freeport winters that actually get cold.
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/82 sm:text-lg">
              Furnaces work harder here than air conditioners. When heat fails on an
              11°F night — or the first sticky week finds a silent outdoor unit —
              Millrace Heating & Air is the call for diagnosis, not a price list.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneCta context="home-hero" className="min-h-12">
                {primaryCtaLabel()}
              </PhoneCta>
              <Link
                href="/services/emergency-hvac-freeport-il/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                No heat or no cooling?
              </Link>
            </div>
          </div>
          <aside className="reveal reveal-delay-4 self-end rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-md">
            <p className="text-sm font-semibold tracking-wide text-brass uppercase">
              Talk with Millrace
            </p>
            <p className="mt-3 font-serif text-3xl text-white">{primaryCtaLabel()}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {hoursLabel()}. We do not advertise 24/7 coverage, licenses, or review
              scores that have not been verified.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-white/85">
              <li>Primary city: Freeport 61032</li>
              <li>Homes and local businesses</li>
              <li>Gas / CO safety before any repair</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            {
              title: "Local to 61032",
              text: "Written for Freeport’s heating season, older forced-air houses, and the way equipment actually fails here.",
            },
            {
              title: "Straight answers",
              text: "No invented star ratings, no fake technician bios, and no “starting at” prices on a website.",
            },
            {
              title: "Phone first",
              text: "If the house is losing heat or the AC will not cool, a conversation beats a long form.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="text-sm font-semibold text-spruce">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
          Start with the symptom
        </p>
        <h2 className="mt-2 font-serif text-3xl text-spruce sm:text-4xl">
          What’s happening with your HVAC?
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Pick the problem you are actually living with. Each path goes to a useful
          page — not a generic brochure.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="card-lift rounded-2xl border border-line bg-white p-5"
            >
              <h3 className="font-semibold text-spruce">{item.label}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
              <p className="card-arrow mt-4 text-sm font-semibold text-copper">→</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl text-spruce sm:text-4xl">
                Core HVAC services
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                Repair, replacement, and the maintenance that keeps both from failing
                at the worst moment of the year.
              </p>
            </div>
            <Link href="/services/" className="font-semibold text-spruce">
              View all services →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              href="/services/furnace-repair-freeport-il/"
              title="Furnace Repair"
              text="No heat, weak heat, ignition problems, and airflow issues in Freeport homes."
              image="/photos/furnace.jpg"
              imageAlt="Gas furnace in a Midwestern basement mechanical room"
            />
            <ServiceCard
              href="/services/ac-repair-freeport-il/"
              title="AC Repair"
              text="Systems that will not start, will not cool, or fail after sitting through winter."
              image="/photos/ac-outdoor.jpg"
              imageAlt="Outdoor air conditioner beside a brick Midwestern home"
            />
            <ServiceCard
              href="/services/hvac-maintenance-freeport-il/"
              title="HVAC Maintenance"
              text="Fall heating checks and spring cooling checks before the weather turns."
              image="/photos/maintenance.jpg"
              imageAlt="Technician performing outdoor HVAC maintenance"
            />
            <ServiceCard
              href="/services/emergency-hvac-freeport-il/"
              title="Emergency HVAC"
              text="Urgent no-heat and no-cooling calls. Phone first."
              image="/photos/emergency-night.jpg"
              imageAlt="Winter night service visit at a Midwestern home"
            />
            <ServiceCard
              href="/services/heat-pump-repair-freeport-il/"
              title="Heat Pumps"
              text="Repair and installation for systems that have to heat through a real winter."
              image="/photos/heat-pump.jpg"
              imageAlt="Heat pump outdoor unit beside a ranch home"
            />
            <ServiceCard
              href="/services/ductless-mini-split-freeport-il/"
              title="Ductless Mini Splits"
              text="Room-by-room comfort where the original ducts were never asked to go."
              image="/photos/mini-split.jpg"
              imageAlt="Ductless mini-split indoor unit on a living room wall"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/photos/furnace-install.jpg"
              alt="Newly installed high-efficiency furnace in a tidy basement"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
              Heating
            </p>
            <h2 className="mt-2 font-serif text-3xl text-spruce sm:text-4xl">
              Winter is the job in Stephenson County.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Freeport is not an air-conditioning market that happens to own furnaces.
              Long stretches below freezing put real hours on heat exchangers, inducer
              motors, and ignition systems. When that work stops, the house tells you
              immediately.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-spruce">
              <li>
                <Link className="font-semibold underline" href="/services/furnace-repair-freeport-il/">
                  Furnace repair
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline" href="/services/furnace-installation-freeport-il/">
                  Furnace installation
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline" href="/services/furnace-maintenance-freeport-il/">
                  Furnace maintenance
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline" href="/services/heating-repair-freeport-il/">
                  Heating repair
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline" href="/services/heat-pump-repair-freeport-il/">
                  Heat pump services
                </Link>
              </li>
            </ul>
            <PhoneCta context="home-heating" className="mt-8">
              Get heating help
            </PhoneCta>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
              Cooling
            </p>
            <h2 className="mt-2 font-serif text-3xl text-spruce sm:text-4xl">
              Summer is short. Failed AC still is not optional.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Outdoor units sit idle through snow, then get asked to wring humidity on
              the first sticky stretch. Capacitors, contactors, and fans fail on that
              first call for cooling — a different pattern than Sun Belt AC.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-spruce">
              <li>
                <Link className="font-semibold underline" href="/services/ac-repair-freeport-il/">
                  AC repair
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline" href="/services/ac-installation-freeport-il/">
                  AC installation
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline" href="/services/ac-maintenance-freeport-il/">
                  AC maintenance
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline" href="/services/ac-replacement-freeport-il/">
                  AC replacement
                </Link>
              </li>
            </ul>
            <PhoneCta context="home-cooling" className="mt-8">
              Get cooling help
            </PhoneCta>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
            <Image
              src="/photos/tech-ac-service.jpg"
              alt="Technician servicing an outdoor air conditioner beside a Midwestern home"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-spruce sm:text-4xl">
          Why homeowners call Millrace
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Diagnosis before a sales pitch",
              text: "Age alone does not decide repair versus replacement. The equipment, the ducts, and how the house actually behaves do.",
            },
            {
              title: "Clear next steps",
              text: "You get a conversation about what failed, what is safe to wait on, and what needs attention now.",
            },
            {
              title: "No website theater",
              text: "If a fact is not configured — hours, a street address, a review — it does not appear as if it were.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-semibold text-spruce">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-copper text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-serif text-3xl">No heat? AC down?</h2>
            <p className="mt-2 max-w-xl text-sm font-medium text-white/90">
              Do not wait on a bigger problem. We do not invent arrival times. We do
              take urgent no-heat and no-cooling calls seriously.
            </p>
          </div>
          <PhoneCta context="home-emergency-band" variant="light">
            {primaryCtaLabel()}
          </PhoneCta>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-spruce sm:text-4xl">
          Homes and businesses
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Link
            href="/services/"
            className="card-lift overflow-hidden rounded-3xl border border-line bg-white"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src="/photos/hero-home-winter.jpg"
                alt="Residential Freeport-area home in winter"
                fill
                className="card-image object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl text-spruce">Residential</h3>
              <p className="mt-2 text-sm text-muted">
                Furnaces, air conditioners, heat pumps, mini splits, and indoor air
                equipment for Freeport houses that stay closed up half the year.
              </p>
            </div>
          </Link>
          <Link
            href="/services/commercial-hvac-freeport-il/"
            className="card-lift overflow-hidden rounded-3xl border border-line bg-white"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src="/photos/commercial.jpg"
                alt="Commercial rooftop HVAC units on a small-city building"
                fill
                className="card-image object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl text-spruce">Commercial</h3>
              <p className="mt-2 text-sm text-muted">
                Rooftop units, business heating, and cooling that keep a shop, office,
                or store usable — confirmed on the call, not assumed from a map pin.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-spruce sm:text-4xl">
              Indoor air after a long closed season
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Stephenson County windows stay shut. Forced-air heat recirculates
              whatever the returns pull. Filtration, humidification, and
              dehumidification are mechanical tools — not medical treatment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-spruce">
              <Link className="underline" href="/services/air-filtration-freeport-il/">
                Air filtration
              </Link>
              <Link className="underline" href="/services/humidifiers-dehumidifiers-freeport-il/">
                Humidity equipment
              </Link>
              <Link className="underline" href="/services/indoor-air-quality-freeport-il/">
                Indoor air quality
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/photos/humidifier.jpg"
              alt="Whole-home humidifier mounted on a furnace plenum"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-spruce">How service works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Call or request service",
              text: "Describe the symptom and the ZIP. If a phone number is configured, that is the fastest path.",
            },
            {
              step: "2",
              title: "Confirm Freeport",
              text: "Coverage starts with 61032. Nearby Stephenson County towns are confirmed on the call.",
            },
            {
              step: "3",
              title: "On-site diagnosis",
              text: "A technician inspects the system. This site does not quote imaginary prices from a table.",
            },
            {
              step: "4",
              title: "Repair or replace",
              text: "You get a clear recommendation. Replacement is a conversation, not a shopping cart.",
            },
          ].map((item) => (
            <li key={item.step} className="rounded-2xl border border-line bg-white p-5">
              <p className="text-xs tracking-[0.16em] text-copper uppercase">
                Step {item.step}
              </p>
              <h3 className="mt-2 font-semibold text-spruce">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-spruce">Freeport, Illinois</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Millrace Heating & Air is named for the mill races that once ran along
            the Pecatonica in this part of Stephenson County. The work is simpler:
            keep heat and cooling running in Freeport 61032. We do not invent an
            office, a founding year, or a neighbor story. The climate facts are
            public: roughly 6,956 heating degree days versus 690 cooling degree days,
            January nights near 11°F, and outdoor AC that sits idle through snow.
          </p>
          <p className="mt-4">
            <Link href="/service-area/" className="font-semibold text-spruce underline">
              See the service area
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SafetyCallout />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl text-spruce">Freeport HVAC questions</h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <FinalCta
        title="Need HVAC help in Freeport today?"
        body="Request furnace repair, AC repair, or an urgent no-heat / no-cooling visit. The next step is a conversation, not a cost calculator."
        context="home-final"
      />
    </>
  );
}
