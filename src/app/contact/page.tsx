import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SafetyCallout } from "@/components/SafetyCallout";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { phoneDisplayLabel, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Call for HVAC Help in Freeport, Illinois | Millrace Heating",
  description: `Call to be connected with a local heating and cooling professional in Freeport, Illinois 61032. This site takes no forms. Call ${site.phoneDisplay}.`,
  path: "/contact/",
});

export default function ContactPage() {
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
        lede="This website is call-only. There is no request form. Call to be connected with a local heating and cooling professional and describe the symptom and the ZIP."
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
        <p className="mt-8 font-serif text-4xl text-navy sm:text-5xl">{phoneDisplayLabel()}</p>
        <p className="mt-3 text-muted">
          {site.city}, {site.state} {site.zip} · {site.county}
        </p>
        <div className="mt-8">
          <SafetyCallout />
        </div>
      </div>
    </>
  );
}
