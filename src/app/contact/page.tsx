import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { SafetyCallout } from "@/components/SafetyCallout";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { phoneDisplayLabel, primaryCtaLabel, site } from "@/lib/site";

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
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Call" },
          ]}
        />
        <h1 className="mt-6 text-4xl text-navy">Call {site.city}</h1>
        <p className="mt-4 text-muted">
          This website is call-only. There is no request form. Call to be
          connected with a local heating and cooling professional and describe
          the symptom and the ZIP.
        </p>
        <section className="mt-8 rounded-brand border border-line bg-white p-6 sm:p-8">
          <p className="kicker">{site.city}, {site.stateCode}</p>
          <p className="mt-3 text-4xl font-semibold text-navy">{phoneDisplayLabel()}</p>
          <PhoneCta location="inline" context="contact-block" className="mt-6 w-full sm:w-auto">
            <span className="inline-flex items-center gap-2">
              <PhoneIcon />
              {primaryCtaLabel()}
            </span>
          </PhoneCta>
        </section>
        <div className="mt-8">
          <SafetyCallout />
        </div>
      </div>
    </>
  );
}
