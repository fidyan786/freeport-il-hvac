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
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { localLabel, primaryCtaLabel, site } from "@/lib/site";

const faqs = [
  {
    q: "Is Freeport, Illinois covered?",
    a: "Freeport (ZIP 61032) in Stephenson County is the city this site is written for. Nearby towns can be confirmed on the call.",
  },
  {
    q: "Is this website a heating and cooling contractor?",
    a: "No. This website connects callers with independent local service providers. It is not itself a heating and cooling contractor.",
  },
  {
    q: "What should I do if the furnace stops working?",
    a: "If you smell gas or a carbon monoxide alarm is sounding, leave and call 911 and Nicor Gas. If the home is otherwise safe, check the thermostat, the furnace switch, and the filter, then call to be connected with a local heating and cooling professional.",
  },
  {
    q: "What should I do if the air conditioner stops cooling?",
    a: "Make sure the thermostat is set to cool, the outdoor disconnect is on, and the filter is not clogged. If the outdoor unit runs but the indoor air is warm, call to be connected with a local heating and cooling professional.",
  },
  {
    q: "What if the house has no heat or no cooling right now?",
    a: "Call and describe the symptom and the ZIP. The person who answers can say whether a local professional is available.",
  },
  {
    q: "Does the call cover homes and small businesses?",
    a: "Say whether the building is a house, shop, or office, and describe the equipment. Coverage is confirmed on the call.",
  },
];

export const metadata = pageMetadata({
  title: "Freeport IL Heating and Cooling Help | Millrace",
  description:
    "Call to be connected with a local heating and cooling professional in Freeport, IL 61032 for furnace, air conditioning, and no-heat or no-cooling problems.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-16">
            <p className="kicker">
              {localLabel} {site.zip}
            </p>
            <h1 className="mt-3 max-w-xl text-3xl leading-tight text-balance text-navy sm:text-4xl">
              Heating and cooling help in Freeport, Illinois
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
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
              src="/photos/downtown-freeport-illinois.webp"
              alt="Downtown Freeport, Illinois, with brick storefronts along a main street."
              priority
              sizes={IMAGE_SIZES.hero}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
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
              className="rounded-brand border border-line bg-white p-5 hover:border-navy"
            >
              <h3 className="font-semibold text-navy">{item.label}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
        <SectionCall context="home-symptoms" />
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
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
                  src="/photos/outdoor-ac-condenser.webp"
                  alt="Outdoor air-conditioner condenser on a concrete pad beside a house."
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

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
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

      <TrustSignals />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionCall context="home-trust" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SafetyCallout />
        <SectionCall context="home-safety" />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
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
