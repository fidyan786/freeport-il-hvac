import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SafetyCallout } from "@/components/SafetyCallout";
import { nearbyCommunities } from "@/lib/nav";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { NICOR_GAS } from "@/lib/safety-contacts";
import { AFFILIATE_DISCLOSURE, phoneDisplayLabel, phoneHref, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Call for HVAC Help in Freeport, Illinois | Millrace Heating",
  description: `Call ${site.phoneDisplay} to be connected with a local heating and cooling professional in Freeport, Illinois ${site.zip}. No form. Hours are confirmed on the call.`,
  path: "/contact/",
});

export default function ContactPage() {
  const phone = phoneHref();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Call", path: "/contact/" },
        ])}
      />
      <PageHero
        eyebrow={`${site.city}, ${site.stateCode}`}
        title={`Call ${site.city}`}
        lede="This website is call-only. There is no request form, no email intake, and no chat that sends your name anywhere. Call, say the symptom and the ZIP, and you will be connected with an independent local heating and cooling professional."
        context="contact-block"
        secondaryHref="/services/"
        secondaryLabel="See services"
        image="/photos/heroes/outdoor-ac-condenser.webp"
        imageAlt="Outdoor air-conditioner condenser on a concrete pad beside a house."
        showTrust
      />
      <div id="page-body" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Call" },
          ]}
        />
        <h2 className="mt-8 text-2xl text-navy">Phone</h2>
        {phone ? (
          <p className="mt-3">
            <a className="font-serif text-4xl text-navy underline decoration-brass underline-offset-4 sm:text-5xl" href={phone}>
              {phoneDisplayLabel()}
            </a>
          </p>
        ) : (
          <p className="mt-3 font-serif text-4xl text-navy sm:text-5xl">{phoneDisplayLabel()}</p>
        )}
        <p className="mt-4 leading-relaxed text-muted">
          {AFFILIATE_DISCLOSURE} The site operator may be paid when a call is connected. Calling
          does not by itself create an appointment or a price. Details are on the{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/disclaimer/">
            disclosure page
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl text-navy">Service area</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Primary city: {site.city}, {site.state} {site.zip}, {site.county}. Name your town if you
          are nearby. Coverage is confirmed on the call, not by this list.
        </p>
        <ul className="mt-4 grid gap-1 text-muted sm:grid-cols-2">
          <li>
            {site.city} ({site.zip})
          </li>
          {nearbyCommunities.map((town) => (
            <li key={town.name}>
              {town.name} ({town.zip})
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link className="font-semibold text-navy underline underline-offset-2" href="/service-area/">
            Service area details
          </Link>
        </p>

        <h2 className="mt-10 text-2xl text-navy">Hours</h2>
        <p className="mt-4 leading-relaxed text-muted">
          This website does not publish business hours. The independent professional who answers
          confirms when they can come. Do not assume a clock time from this page. If the house is
          unsafe to stay in, get people to a heated place rather than waiting on a schedule this
          site does not control.
        </p>

        <h2 className="mt-10 text-2xl text-navy">What to say</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Say whether the problem is heat, cooling, or a maintenance look. Say furnace, boiler,
          heat pump, or that you are not sure. Say the indoor situation in one sentence, the town,
          and the ZIP. If you smell gas or a carbon monoxide alarm is sounding, do not start with
          this number.
        </p>
        <div className="mt-6">
          <SafetyCallout />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Nicor Gas emergency, from outside the building: {NICOR_GAS.display}. That is the utility
          number already published on this site. It is not a second repair line.
        </p>

        <h2 className="mt-10 text-2xl text-navy">No form</h2>
        <p className="mt-4 leading-relaxed text-muted">
          There is nowhere on this website to submit a name, email, or job description. The
          on-page assistant runs in your browser and does not send what you type to this site. If
          you want the written explanation before you call, start with the{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/guides/">
            guides
          </Link>
          .
        </p>
      </div>
    </>
  );
}
