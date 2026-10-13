import Link from "next/link";
import { SitePhoto } from "@/components/SitePhoto";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { ChevronIcon, CoolIcon, HeatIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { SafetyCallout } from "@/components/SafetyCallout";
import { SectionCall } from "@/components/SectionCall";
import { TrustRow, TrustSignals } from "@/components/TrustSection";
import { IMAGE_SIZES } from "@/lib/images";
import { intentLinks, problemLinks } from "@/lib/nav";
import { faqSchema, speakableWebPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { localLabel, primaryCtaLabel, site } from "@/lib/site";

const faqs = [
  {
    q: "Is Freeport, Illinois covered?",
    a: "Freeport, ZIP 61032, in Stephenson County is the city these pages are written for. Nearby towns, including German Valley, Davis, and Winslow, are on one service area page. A visit is confirmed on the call, not assumed from a map pin. This site has no street address. Say the town and the ZIP when you dial.",
    detail:
      "Lena, Cedarville, Dakota, Pearl City, Orangeville, Ridott, and Rock City are listed there too. Listing a town is not a promise that a visit is already scheduled.",
  },
  {
    q: "Is this website a heating and cooling contractor?",
    a: "No. Millrace Heating & Air is a website that connects callers with independent local heating and cooling professionals. It is not itself a contractor, it does not employ technicians, and it does not publish a street address or a review score.",
    detail:
      "The person who answers can say whether they work on the equipment you described. Judge the visit by what they explain on site, not by a claim on this website.",
  },
  {
    q: "What should I do if the furnace stops working?",
    a: "If you smell gas or a carbon monoxide alarm is sounding, leave and call 911 and Nicor Gas at 888-642-6748. If the home is otherwise safe, check the thermostat mode, the furnace switch, and the filter once, then call to be connected with a local professional.",
    detail:
      "Do not keep resetting a furnace that locks out. A blower pushing cold air is still a no-heat problem. Furnace repair is the page for a gas furnace you can identify.",
  },
  {
    q: "What should I do if the air conditioner stops cooling?",
    a: "Set the thermostat to cool, below the room temperature, and check the filter and the outdoor disconnect once. If the outdoor unit is silent, humming, or running while the indoor air stays warm, stop resetting a tripped breaker and call.",
    detail:
      "Freeport condensers sit idle all winter, so the first humid week is when failures show up. AC repair is the page for that visit. Do not add refrigerant from a can.",
  },
  {
    q: "What if the house has no heat or no cooling right now?",
    a: "Call and say no heat or no cooling, the indoor temperature, and the ZIP. If the house is getting colder in sub-freezing weather, or someone cannot safely wait through the heat, describe it as emergency HVAC. This site connects the call. It does not promise an arrival time.",
    detail:
      "Availability is whatever the independent local professional can actually do. A mild complaint can wait for furnace repair or AC repair. A falling indoor temperature should not.",
  },
  {
    q: "Does the call cover homes and small businesses?",
    a: "Say whether the building is a house, a shop, an office, or a church, and describe the equipment if you can. Houses belong with residential HVAC. Rooftop and packaged units belong with commercial HVAC. Coverage is confirmed on the call, including access to a roof.",
    detail:
      "A home office is still a house. A storefront with a unit on the roof is not. The distinction saves a visit that cannot reach the equipment.",
  },
  {
    q: "Do you offer emergency HVAC service in Freeport?",
    a: "This website does not run a 24-hour desk and does not promise a same-day visit. If the house is losing heat in sub-freezing weather, or someone cannot safely wait through the heat, call and describe it as emergency HVAC, with the indoor temperature and the ZIP.",
    detail:
      "Some Freeport heating pages advertise round-the-clock help and also post weekday office hours. Those are their claims. Ask the person who answers what they can actually do. This site only connects the call.",
  },
  {
    q: "Which towns near Freeport does this site cover?",
    a: "The pages are written for Freeport, ZIP 61032, in Stephenson County. Lena, Cedarville, Dakota, Pearl City, Orangeville, Rock City, Ridott, German Valley, Davis, and Winslow are named on the service area page so you can say yours. Eleroy is an unincorporated community people also mention. None of those names is its own website, and a visit is confirmed on the call.",
    detail:
      "Say the town and the ZIP first. A contractor list of nearby towns is not a promise that every one of them is on the schedule today. Public map pins for heating businesses sit mostly on Freeport streets. A pin is not a village route.",
  },
  {
    q: "Is Millrace Heating & Air the HVAC company?",
    a: "No. Millrace Heating & Air is a website that connects callers with independent local heating and cooling professionals. It is not itself a contractor, it does not employ technicians, and it does not publish a street address or a review score.",
    detail:
      "Several heating businesses publish their own Freeport addresses. This site is not those businesses. Judge the visit by what the person explains on site.",
  },
];

export const metadata = pageMetadata({
  title: "Heating and Cooling in Freeport, IL | Millrace Heating",
  description: `Heating and cooling help for Freeport, IL 61032. Furnace trouble, an air conditioner that will not cool, or a system that will not start. Call ${site.phoneDisplay}.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={speakableWebPage({
          name: "Heating and cooling help in Freeport, Illinois",
          description:
            "Furnace trouble, an air conditioner that will not cool, or a system that will not start. Call to be connected with a local heating and cooling professional.",
          path: "/",
        })}
      />
      <section data-motion-root className="relative isolate overflow-hidden bg-navy-deep text-white">
        <div className="hero-mesh absolute inset-0" aria-hidden="true" />
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-shimmer absolute inset-0" aria-hidden="true" />
        <svg className="hero-flow" viewBox="0 0 1200 640" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-20 180 C 220 120, 420 80, 760 150 S 1180 240, 1240 120" />
          <path d="M-20 300 C 260 250, 480 340, 820 280 S 1160 200, 1240 260" />
          <path d="M-20 460 C 300 400, 540 500, 860 430 S 1140 360, 1240 420" />
        </svg>
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:min-h-[40rem] lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
          <p className="hero-enter hero-d1 kicker !text-[#a5f3fc]">
            {localLabel} {site.zip}
          </p>
          <h1 className="hero-enter hero-d2 mt-3 max-w-3xl text-4xl leading-[1.08] text-balance text-white sm:text-5xl lg:text-6xl">
            Heating and cooling help in Freeport, Illinois
          </h1>
          <p className="hero-enter hero-d3 speakable mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Furnace trouble, an air conditioner that will not cool, or a system
            that will not start. Call to be connected with a local heating and
            cooling professional.
          </p>
          <div className="hero-enter hero-d4 mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <PhoneCta location="hero" context="home-hero" className="min-h-14 w-full px-7 text-lg sm:w-auto">
              {primaryCtaLabel()}
            </PhoneCta>
            <Link
              href="/services/"
              className="inline-flex min-h-12 items-center justify-center px-2 text-base font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              See services
            </Link>
          </div>
          <div className="hero-enter hero-d5 mt-8">
            <TrustRow />
          </div>
          </div>
          <div className="hero-enter hero-d5">
            <div className="equip-frame hero-carousel relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
              <div className="hero-slide hero-slide-a">
                <SitePhoto
                  src="/photos/heroes/gas-furnace-utility.webp"
                  alt="Gas furnace cabinet and supply pipes in a utility space."
                  priority
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="hero-photo"
                />
              </div>
              <div className="hero-slide hero-slide-b">
                <SitePhoto
                  src="/photos/heroes/outdoor-ac-condenser.webp"
                  alt="Outdoor air-conditioner condenser on a concrete pad beside a house."
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="hero-photo"
                />
              </div>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#symptoms" aria-label="Scroll to symptoms">
          <ChevronIcon className="h-5 w-5" />
        </a>
      </section>

      <div data-reveal className="border-b border-line bg-white/80">
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-4 sm:px-6">
          {intentLinks.slice(0, 6).map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className="inline-flex min-h-12 items-center rounded-full border border-line bg-white px-4 py-2 font-semibold text-navy shadow-sm hover:border-ember"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section id="symptoms" data-reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl text-navy">What is happening with the system?</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Start with the symptom. Each link explains the problem and ends with a
          phone number.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {problemLinks.map((item) => (
            <article key={item.label} className="symptom-link card-lift surface-card p-5">
              <Link href={item.href} className="block">
                <h3 className="font-semibold text-navy">{item.label}</h3>
                <p className="mt-2 text-muted">{item.text}</p>
              </Link>
              <PhoneCta
                location="inline"
                context={`home-symptom-${item.href}`}
                className="mt-4 w-full"
              >
                {primaryCtaLabel()}
              </PhoneCta>
            </article>
          ))}
        </div>
        <SectionCall context="home-symptoms" />
      </section>

      <section data-reveal className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-3xl text-navy">Common heating and cooling topics</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="surface-card card-lift grid gap-4 p-4 sm:grid-cols-[12rem_1fr] sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-brand">
                <SitePhoto
                  src="/photos/gas-furnace-utility.webp"
                  alt="High-efficiency gas furnace in a utility space."
                  sizes={IMAGE_SIZES.thumb}
                />
              </div>
              <div>
                <p className="kicker inline-flex items-center gap-2">
                  <HeatIcon className="h-4 w-4" />
                  Heating
                </p>
                <h3 className="mt-2 text-2xl text-navy">Furnace and heating</h3>
                <p className="mt-3 text-muted">
                  No heat, weak heat, or a house that will not hold temperature
                  through a Stephenson County night.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li>
                    <Link className="font-semibold text-navy underline underline-offset-2" href="/services/furnace-repair-freeport-il/">
                      Furnace repair
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-navy underline underline-offset-2" href="/services/heating-repair-freeport-il/">
                      Heating repair
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
            <article className="surface-card card-lift grid gap-4 p-4 sm:grid-cols-[12rem_1fr] sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-brand">
                <SitePhoto
                  src="/photos/condenser-beside-house.webp"
                  alt="Outdoor condenser on a concrete pad beside house siding."
                  sizes={IMAGE_SIZES.thumb}
                />
              </div>
              <div>
                <p className="kicker inline-flex items-center gap-2">
                  <CoolIcon className="h-4 w-4" />
                  Cooling
                </p>
                <h3 className="mt-2 text-2xl text-navy">Air conditioning</h3>
                <p className="mt-3 text-muted">
                  Outdoor units sit idle through snow, then fail on the first
                  warm week.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li>
                    <Link className="font-semibold text-navy underline underline-offset-2" href="/services/ac-repair-freeport-il/">
                      AC repair
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold text-navy underline underline-offset-2" href="/services/ac-installation-freeport-il/">
                      AC installation
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <SectionCall context="home-services" />
        </div>
      </section>

      <section data-reveal className="border-b border-line bg-paper">
        <div className="relative h-64 overflow-hidden sm:h-80">
          <SitePhoto
            src="/photos/heroes/spring-jackson-freeport-illinois.webp"
            alt="Houses at the corner of Spring and Jackson streets in Freeport, Illinois."
            sizes={IMAGE_SIZES.bleed}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-navy/10" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-6 sm:px-6">
            <h2 className="text-3xl text-white sm:text-4xl">Repair, replace, or call now</h2>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="speakable mt-3 max-w-2xl text-muted">
            Freeport winters are long and the cooling season is short and humid.
            The right page depends on whether the equipment still runs, whether
            it should carry another season, or whether the house is already
            getting unsafe.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "It failed, and it might still be fixed",
                text: "A furnace that will not stay lit, or an air conditioner that runs warm, starts as a repair call. Say the symptom, not a parts guess.",
                links: [
                  ["/services/furnace-repair-freeport-il/", "Furnace repair"],
                  ["/services/ac-repair-freeport-il/", "AC repair"],
                ],
              },
              {
                title: "It should not carry another season",
                text: "Replacement is a separate conversation from tonight’s breakdown. Installation pages are for equipment that should be retired, not for a unit that quit this hour.",
                links: [
                  ["/services/furnace-installation-freeport-il/", "Furnace installation"],
                  ["/services/ac-installation-freeport-il/", "AC installation"],
                ],
              },
              {
                title: "The house cannot wait",
                text: "No heat while the indoor temperature is falling, or no cooling when someone cannot safely wait, belongs on the emergency page. This site still only connects the call.",
                links: [
                  ["/services/emergency-hvac-freeport-il/", "Emergency HVAC"],
                  ["/services/heating-repair-freeport-il/", "Heating repair"],
                ],
              },
            ].map((item) => (
              <article key={item.title} className="surface-card card-lift p-5">
                <h3 className="text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-muted">{item.text}</p>
                <ul className="mt-4 grid gap-2">
                  {item.links.map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="font-semibold text-navy underline underline-offset-2"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl text-navy">What a Freeport HVAC search should answer</h2>
        <p className="mt-3 max-w-2xl text-muted">
          A city page that lists repair, replacement, and maintenance in one
          breath still leaves the useful questions open. Start from the symptom,
          then the building, then the town.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="surface-card p-5">
            <h3 className="text-xl text-navy">The house is cold</h3>
            <p className="mt-2 text-muted">
              A gas furnace you can see belongs on{" "}
              <Link className="font-semibold text-navy underline underline-offset-2" href="/services/furnace-repair-freeport-il/">furnace repair</Link>.
              Radiators, baseboard, or equipment you cannot name belongs on{" "}
              <Link className="font-semibold text-navy underline underline-offset-2" href="/services/heating-repair-freeport-il/">heating repair</Link>.
              A falling indoor temperature in the cold belongs on{" "}
              <Link className="font-semibold text-navy underline underline-offset-2" href="/services/emergency-hvac-freeport-il/">emergency HVAC</Link>.
            </p>
          </article>
          <article className="surface-card p-5">
            <h3 className="text-xl text-navy">The house will not cool</h3>
            <p className="mt-2 text-muted">
              Warm supply air after a Freeport winter of sitting still is{" "}
              <Link className="font-semibold text-navy underline underline-offset-2" href="/services/ac-repair-freeport-il/">AC repair</Link>.
              A shop, office, or church with equipment on the roof is{" "}
              <Link className="font-semibold text-navy underline underline-offset-2" href="/services/commercial-hvac-freeport-il/">commercial HVAC</Link>.
              A house whose system still runs, ahead of the season, is{" "}
              <Link className="font-semibold text-navy underline underline-offset-2" href="/services/hvac-maintenance-freeport-il/">maintenance</Link>.
            </p>
          </article>
        </div>
        <p className="mt-6 max-w-2xl text-muted">
          Freeport 61032 is the city. Nearby Stephenson County towns are
          explained on one{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/service-area/">service area</Link>{" "}
          page, including German Valley, Davis, and Winslow, which shorter
          Freeport city pages often leave off. Public map listings cluster on
          Freeport streets. This site has no street address of its own, and it
          does not publish prices, coupons, or an arrival time.
        </p>
        <SectionCall context="home-search-questions" />
      </section>

      <section data-reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl text-navy">How a call works</h2>
        <ol className="step-rail mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Call",
              text: "Describe the symptom and the ZIP. The phone is the only way to request help on this site.",
            },
            {
              step: "2",
              title: "Describe the problem",
              text: "Freeport 61032 is the city this site covers. Nearby Stephenson County towns are confirmed on the call.",
            },
            {
              step: "3",
              title: "Get connected",
              text: "Call to be connected with a local heating and cooling professional who can look at the equipment.",
            },
          ].map((item) => (
            <li key={item.step} className="surface-card relative p-5">
              <p className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ember text-lg font-semibold text-white shadow-[var(--glow)]">
                {item.step}
              </p>
              <h3 className="mt-4 text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
        <SectionCall context="home-steps" />
      </section>

      <div data-reveal>
        <TrustSignals />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionCall context="home-trust" />
      </div>

      <section data-reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SafetyCallout />
        <SectionCall context="home-safety" />
      </section>

      <section data-reveal className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-3xl text-navy">Freeport questions</h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
          <SectionCall context="home-faq" />
        </div>
      </section>

      <FinalCta
        title="Need heating or cooling help in Freeport?"
        body="Call to be connected with a local heating and cooling professional. Describe what the equipment is doing and the ZIP."
        context="home-final"
      />
    </>
  );
}
