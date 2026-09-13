import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { SafetyCallout } from "@/components/SafetyCallout";
import { TrustSection } from "@/components/TrustSection";
import { faqSchema } from "@/lib/schema";
import { IMAGE_SIZES } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";
import { problemLinks } from "@/lib/nav";
import { primaryCtaLabel } from "@/lib/site";

const faqs = [
  {
    q: "Do you service Freeport, Illinois?",
    a: "Yes. Millrace Heating & Air serves Freeport (ZIP 61032) in Stephenson County. Nearby towns can be confirmed by phone.",
  },
  {
    q: "What should I do if my furnace stops working?",
    a: "If you smell gas or a carbon monoxide alarm is sounding, leave and call 911 and Nicor Gas. If the home is otherwise safe, check the thermostat, the furnace switch, and the filter, then request furnace repair rather than opening the cabinet.",
  },
  {
    q: "What should I do if my AC stops cooling?",
    a: "Make sure the thermostat is set to cool, the outdoor disconnect is on, and the filter is not clogged. If the outdoor unit is running but indoor air is warm, or the system will not start after sitting all winter, request AC repair.",
  },
  {
    q: "Do you offer emergency HVAC service?",
    a: "Call for urgent no-heat or no-cooling problems. Availability is confirmed when you call. We do not advertise arrival times we cannot stand behind.",
  },
  {
    q: "Do you work on homes and businesses?",
    a: "Yes. Residential comfort systems and light commercial HVAC are both in scope. Describe the building and the symptom so the visit is set up correctly.",
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
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-20">
            <p className="text-xs font-semibold tracking-[0.22em] text-copper uppercase">
              Freeport, Illinois
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-[2.15rem] leading-[1.12] text-spruce text-balance sm:text-5xl">
              Reliable heating and cooling for Freeport homes
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              When the furnace will not heat, the AC will not cool, or the system
              needs a seasonal check, Millrace Heating & Air is the local call
              in 61032.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PhoneCta context="home-hero" className="min-h-12">
                {primaryCtaLabel()}
              </PhoneCta>
              <Link
                href="/services/"
                className="inline-flex min-h-12 items-center justify-center border border-spruce px-5 py-3 text-sm font-semibold text-spruce hover:bg-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative min-h-[18rem] sm:min-h-[24rem] lg:min-h-full">
            <Image
              src="/photos/hero-home-winter.jpg"
              alt="Snow-covered Freeport-area home with warm interior lights at dusk"
              fill
              priority
              sizes={IMAGE_SIZES.hero}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          {[
            {
              title: "Freeport 61032",
              text: "Heating season is the high-stakes work here. Cooling still matters when summer finally arrives.",
            },
            {
              title: "Homes and businesses",
              text: "Furnaces, air conditioners, heat pumps, mini splits, indoor air equipment, and light commercial HVAC.",
            },
            {
              title: "Phone first",
              text: "Describe the symptom and the ZIP. We will tell you what happens next.",
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
          What is happening with your HVAC?
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Choose the problem you are living with. Each path goes to a specific
          service or guide.
        </p>
        <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
          {problemLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="bg-cream p-5 hover:bg-white"
            >
              <h3 className="font-semibold text-spruce">{item.label}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
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
                Repair, installation, and the maintenance that keeps both from
                failing on the worst night of the year.
              </p>
            </div>
            <Link href="/services/" className="font-semibold text-spruce">
              View all services
            </Link>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <article className="grid gap-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-start">
              <div className="relative aspect-[4/3] min-w-0 overflow-hidden">
                <Image
                  src="/photos/furnace-service.jpg"
                  alt="HVAC technician servicing a residential furnace in a Midwestern home"
                  fill
                  sizes={IMAGE_SIZES.thumb}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.16em] text-copper uppercase">
                  Heating
                </p>
                <h3 className="mt-2 font-serif text-2xl text-spruce">
                  Furnace and heating repair
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  No heat, weak heat, ignition trouble, or a house that will not
                  hold temperature through a Stephenson County night.
                </p>
                <ul className="mt-4 grid gap-2 text-sm">
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/furnace-repair-freeport-il/">
                      Furnace repair
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/furnace-installation-freeport-il/">
                      Furnace installation
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/furnace-maintenance-freeport-il/">
                      Heating maintenance
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
            <article className="grid gap-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-start">
              <div className="relative aspect-[4/3] min-w-0 overflow-hidden">
                <Image
                  src="/photos/ac-outdoor.jpg"
                  alt="Outdoor air conditioner beside a brick Midwestern home"
                  fill
                  sizes={IMAGE_SIZES.thumb}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.16em] text-copper uppercase">
                  Cooling
                </p>
                <h3 className="mt-2 font-serif text-2xl text-spruce">
                  Air conditioning
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Systems that sit idle through snow, then fail on the first
                  sticky week: no start, warm air, or a unit that never shuts off.
                </p>
                <ul className="mt-4 grid gap-2 text-sm">
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/ac-repair-freeport-il/">
                      AC repair
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/ac-installation-freeport-il/">
                      AC installation
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/ac-maintenance-freeport-il/">
                      AC maintenance
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
            <article className="grid gap-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-start">
              <div className="relative aspect-[4/3] min-w-0 overflow-hidden">
                <Image
                  src="/photos/heat-pump.jpg"
                  alt="Heat pump outdoor unit beside a ranch home"
                  fill
                  sizes={IMAGE_SIZES.thumb}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.16em] text-copper uppercase">
                  Heat pumps
                </p>
                <h3 className="mt-2 font-serif text-2xl text-spruce">
                  Heat pumps and mini splits
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Equipment that has to heat through a real winter, plus
                  ductless systems for rooms the original ducts never reached.
                </p>
                <ul className="mt-4 grid gap-2 text-sm">
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/heat-pump-repair-freeport-il/">
                      Heat pump repair
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/ductless-mini-split-freeport-il/">
                      Ductless mini splits
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/heat-pump-maintenance-freeport-il/">
                      Heat pump maintenance
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
            <article className="grid gap-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-start">
              <div className="relative aspect-[4/3] min-w-0 overflow-hidden">
                <Image
                  src="/photos/commercial.jpg"
                  alt="Commercial rooftop HVAC units on a small-city building"
                  fill
                  sizes={IMAGE_SIZES.thumb}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.16em] text-copper uppercase">
                  Commercial
                </p>
                <h3 className="mt-2 font-serif text-2xl text-spruce">
                  Shops, offices, and stores
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Rooftop units, business heating, and cooling that keep a
                  Freeport workspace usable — confirmed on the call.
                </p>
                <ul className="mt-4 grid gap-2 text-sm">
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/commercial-hvac-freeport-il/">
                      Commercial HVAC
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/hvac-maintenance-freeport-il/">
                      HVAC maintenance
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-spruce underline" href="/services/emergency-hvac-freeport-il/">
                      Emergency HVAC
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden">
            <Image
              src="/photos/furnace-install.jpg"
              alt="Newly installed high-efficiency furnace in a tidy basement"
              fill
              sizes={IMAGE_SIZES.split}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
              Heating
            </p>
            <h2 className="mt-2 font-serif text-3xl text-spruce sm:text-4xl">
              Winter is the job in Stephenson County
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Long stretches below freezing put real hours on heat exchangers,
              inducer motors, and ignition systems. When that work stops, the
              house tells you immediately.
            </p>
            <PhoneCta context="home-heating" className="mt-8">
              Get heating help
            </PhoneCta>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
              Cooling
            </p>
            <h2 className="mt-2 font-serif text-3xl text-spruce sm:text-4xl">
              Summer is short. Failed AC still is not optional.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Outdoor units sit idle through snow, then get asked to wring
              humidity on the first sticky stretch. Capacitors, contactors, and
              fans often fail on that first call for cooling.
            </p>
            <PhoneCta context="home-cooling" className="mt-8">
              Get cooling help
            </PhoneCta>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden">
            <Image
              src="/photos/tech-ac-service.jpg"
              alt="Technician servicing an outdoor air conditioner beside a Midwestern home"
              fill
              sizes={IMAGE_SIZES.split}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="bg-spruce text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-serif text-3xl">No heat? AC down?</h2>
            <p className="mt-2 max-w-xl text-sm text-white/80">
              If the house is losing heat or the system will not cool, call.
              If you smell gas or a carbon monoxide alarm is sounding, leave
              first and use emergency contacts.
            </p>
          </div>
          <PhoneCta context="home-emergency-band" variant="light">
            {primaryCtaLabel()}
          </PhoneCta>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-spruce">How service works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Call or request service",
              text: "Describe the symptom and the ZIP. Phone is the fastest path when heat or cooling has already failed.",
            },
            {
              step: "2",
              title: "Confirm Freeport",
              text: "Coverage starts with 61032. Nearby Stephenson County towns are confirmed on the call.",
            },
            {
              step: "3",
              title: "On-site diagnosis",
              text: "A technician inspects the system and explains what failed in plain language.",
            },
            {
              step: "4",
              title: "Repair or replace",
              text: "You get a recommendation that matches the house and the equipment — not a catalog guess.",
            },
          ].map((item) => (
            <li key={item.step} className="border border-line bg-white p-5">
              <p className="text-xs tracking-[0.16em] text-copper uppercase">
                Step {item.step}
              </p>
              <h3 className="mt-2 font-semibold text-spruce">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-spruce sm:text-4xl">
              Indoor air after a long closed season
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Stephenson County windows stay shut. Forced-air heat recirculates
              whatever the returns pull. Filtration and humidity equipment are
              mechanical tools for comfort — not medical treatment.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-spruce">
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
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden">
            <Image
              src="/photos/humidifier.jpg"
              alt="Whole-home humidifier mounted on a furnace plenum"
              fill
              className="object-cover"
              sizes={IMAGE_SIZES.split}
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-spruce">Freeport, Illinois</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Millrace Heating & Air takes its name from the mill races that once
            ran along the Pecatonica in this part of Stephenson County. The work
            is simpler: keep heat and cooling running in Freeport 61032.
            January nights here sit near 11°F, heating demand dwarfs cooling
            demand, and outdoor air conditioners spend months idle under snow.
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
        title="Need HVAC help in Freeport?"
        body="Request furnace repair, AC repair, or help with a system that will not start. Tell us what the equipment is doing and we will take it from there."
        context="home-final"
      />
    </>
  );
}
