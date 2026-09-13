import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { hoursLabel, phoneDisplayLabel, primaryCtaLabel, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Millrace Heating & Air in Freeport",
  description:
    "Request HVAC service in Freeport, Illinois. Phone is the primary action. Short form for name, phone, service, problem, ZIP, and contact method.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact" },
          ]}
        />
        <h1 className="mt-6 font-serif text-4xl text-spruce">
          Contact Millrace in Freeport
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Phone is the main action. The form is a backup if you cannot call right
          now.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section className="rounded-3xl bg-spruce p-6 text-white sm:p-8">
            <p className="text-xs tracking-[0.18em] text-brass uppercase">
              Primary
            </p>
            <p className="mt-3 font-serif text-4xl">{phoneDisplayLabel()}</p>
            <p className="mt-3 text-sm text-white/75">{hoursLabel()}</p>
            <p className="mt-3 text-sm text-white/75">
              {site.city}, {site.state} {site.zip} · {site.county}
            </p>
            <PhoneCta context="contact-primary" className="mt-6">
              {primaryCtaLabel()}
            </PhoneCta>
            <p className="mt-6 text-sm text-white/70">
              A street address is omitted until a verified location exists. This
              is treated as a service-area business.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-spruce">Request a callback</h2>
            <p className="mt-2 mb-5 text-sm text-muted">
              Name, phone, service, problem, ZIP, and how you want to be reached.
            </p>
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  );
}
