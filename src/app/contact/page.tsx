import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Freeport HVAC",
  description:
    "Call or request HVAC service in Freeport, Illinois. Phone is the primary action. Short form for name, phone, service needed, and message.",
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
        <h1 className="mt-6 font-serif text-4xl text-navy">
          Contact HVAC service in Freeport
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Phone is the main action. The form is a backup if you cannot call
          right now.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section className="bg-navy p-6 text-white sm:p-8">
            <p className="text-xs tracking-[0.18em] text-ember uppercase">
              Call now
            </p>
            <p className="mt-3 font-serif text-4xl">{site.phoneDisplay}</p>
            <p className="mt-3 text-sm text-white/75">Hours: {site.hours}</p>
            <p className="mt-3 text-sm text-white/75">
              {site.city}, {site.state} {site.zip} · {site.county}
            </p>
            <PhoneCta context="contact-primary" className="mt-6">
              Call {site.phoneDisplay}
            </PhoneCta>
            <p className="mt-6 text-sm text-white/70">
              Street address is omitted until a verified location exists. This
              is treated as a service-area business.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Request a callback</h2>
            <p className="mt-2 mb-5 text-sm text-muted">
              Name, phone, service needed, message. Nothing extra.
            </p>
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  );
}
