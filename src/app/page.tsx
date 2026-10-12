import Link from "next/link";
import { SitePhoto } from "@/components/SitePhoto";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { PhoneIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { SafetyCallout } from "@/components/SafetyCallout";
import { SectionCall } from "@/components/SectionCall";
import { TrustSignals } from "@/components/TrustSection";
import { IMAGE_SIZES } from "@/lib/images";
import { intentLinks, problemLinks } from "@/lib/nav";
import { faqSchema, speakableWebPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { localLabel, primaryCtaLabel, site } from "@/lib/site";

const faqs = [
  {
    q: "Is Freeport, Illinois covered?",
    a: "Freeport, ZIP 61032, in Stephenson County is the city these pages are written for. Nearby towns can often be reached, and that is confirmed on the call rather than assumed from a map. Say the town and the ZIP when you dial.",
    detail:
      "Lena, Cedarville, Dakota, Pearl City, and the other Stephenson County towns are listed on the service area page so you can name yours. Listing a town is not a promise that a visit is already scheduled.",
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
      <section className="hero-panel border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-16">
            <p className="kicker">
              {localLabel} {site.zip}
            </p>
            <h1 className="mt-3 max-w-xl text-3xl leading-tight text-balance text-navy sm:text-4xl">
              Heating and cooling help in Freeport, Illinois
            </h1>
            <p className="speakable mt-5 max-w-xl leading-relaxed text-muted">
              Furnace trouble, an air conditioner that will not cool, or a system
              that will not start. Call to be connected with a local heating and
              cooling professional.
            </p>
            <div className="mt-8">
              <PhoneCta location="hero" context="home-hero" className="w-full sm:w-auto">
                <span className="inline-flex items-center gap-2">
                  <PhoneIcon />
                  {primaryCtaLabel()}
                </span>
              </PhoneCta>
            </div>
            <ul className="mt-8 flex max-w-xl flex-wrap gap-2">
              {intentLinks.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-12 items-center rounded-brand border border-line bg-white px-3 py-2 font-medium text-navy hover:border-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[24rem] lg:min-h-full">
            <SitePhoto
              src="/photos/heroes/downtown-freeport-illinois.webp"
              alt="Downtown Freeport, Illinois, with brick storefronts along a main street."
              priority
              sizes={IMAGE_SIZES.hero}
            />
          </div>
        </div>
      </section>

      <section data-reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl text-navy">What is happening with the system?</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Start with the symptom. Each link explains the problem and ends with a
          phone number.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {problemLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="symptom-link rounded-brand border border-line bg-white p-5"
            >
              <h3 className="font-semibold text-navy">{item.label}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
        <SectionCall context="home-symptoms" />
      </section>

      <section data-reveal className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-3xl text-navy">Common heating and cooling topics</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="grid gap-4 sm:grid-cols-[12rem_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-brand">
                <SitePhoto
                  src="/photos/gas-furnace-utility.webp"
                  alt="High-efficiency gas furnace in a utility space."
                  sizes={IMAGE_SIZES.thumb}
                />
              </div>
              <div>
                <h3 className="text-2xl text-navy">Furnace and heating</h3>
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
            <article className="grid gap-4 sm:grid-cols-[12rem_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-brand">
                <SitePhoto
                  src="/photos/condenser-beside-house.webp"
                  alt="Outdoor condenser on a concrete pad beside house siding."
                  sizes={IMAGE_SIZES.thumb}
                />
              </div>
              <div>
                <h3 className="text-2xl text-navy">Air conditioning</h3>
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
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-3xl text-navy">Repair, replace, or call now</h2>
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
              <article key={item.title} className="surface-card p-5">
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
        <h2 className="text-3xl text-navy">How a call works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Call the number",
              text: "Describe the symptom and the ZIP. The phone is the only way to request help on this site.",
            },
            {
              step: "2",
              title: "Confirm the town",
              text: "Freeport 61032 is the city this site covers. Nearby Stephenson County towns are confirmed on the call.",
            },
            {
              step: "3",
              title: "Talk with a local professional",
              text: "Call to be connected with a local heating and cooling professional who can look at the equipment.",
            },
          ].map((item) => (
            <li key={item.step} className="surface-card p-5">
              <p className="font-semibold text-navy">{item.step}</p>
              <h3 className="mt-2 text-xl text-navy">{item.title}</h3>
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
