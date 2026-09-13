import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, PinIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import {
  hoursLabel,
  isPhoneConfigured,
  phoneDisplayLabel,
  primaryCtaLabel,
  site,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact a Freeport, IL HVAC Company | Millrace",
  description:
    "Contact Millrace Heating & Air for HVAC service in Freeport, Illinois 61032. Call or send your name, phone, ZIP, and what stopped working.",
  path: "/contact/",
});

export default function ContactPage() {
  const phoneReady = isPhoneConfigured();

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
        <h1 className="mt-6 font-serif text-4xl text-navy">
          Contact a Freeport, IL HVAC company
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          {phoneReady
            ? "Call when heat or cooling has already failed. Use the form if you cannot talk right now."
            : "Send your name, phone, ZIP, and a short description of what stopped working."}
        </p>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <section className="rounded-brand bg-navy p-6 text-white sm:p-8">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-brass uppercase">
              <PinIcon className="h-3.5 w-3.5" />
              Freeport, Illinois
            </p>
            {phoneReady ? (
              <p className="mt-3 font-serif text-4xl">{phoneDisplayLabel()}</p>
            ) : (
              <p className="mt-3 font-serif text-3xl leading-tight">
                Request a callback
              </p>
            )}
            {hoursLabel() ? (
              <p className="mt-3 text-sm text-white/75">{hoursLabel()}</p>
            ) : null}
            <p className="mt-3 text-sm text-white/75">
              {site.city}, {site.state} {site.zip} · {site.county}
            </p>
            {phoneReady ? (
              <PhoneCta context="contact-primary" className="mt-6 min-h-12">
                <span className="inline-flex items-center gap-2">
                  <PhoneIcon />
                  {primaryCtaLabel()}
                </span>
              </PhoneCta>
            ) : (
              <p className="mt-6 text-sm text-white/75">
                Use the form on this page. We follow up on the number you
                provide.
              </p>
            )}
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Request service</h2>
            <p className="mt-2 mb-5 text-sm text-muted">
              Name, phone, ZIP, the service you need, and a short description
              of the problem.
            </p>
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  );
}
