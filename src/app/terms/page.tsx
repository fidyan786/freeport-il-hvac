import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { AFFILIATE_DISCLOSURE, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use | Millrace Heating, Freeport, Illinois",
  description: `Terms for using the Millrace Heating & Air website, a Freeport call connector for independent heating and cooling help. Call ${site.phoneDisplay}.`,
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 leading-relaxed text-muted">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Terms of Use" },
        ]}
      />
      <h1 className="mt-6 text-4xl text-navy">Terms of Use</h1>
      <p className="mt-6">
        This site publishes information about heating and cooling problems in{" "}
        {site.city}, {site.state}. {site.businessName} is an affiliate,
        pay-per-call advertising website. {AFFILIATE_DISCLOSURE} Calls may be
        routed to an independent local service provider, and the site operator
        may be paid when a call is connected.
      </p>
      <p className="mt-4">
        Content is informational. Using the site or placing a call does not
        create an appointment, a service agreement, or a fee set by this
        website. The independent provider who answers is responsible for the
        work they agree to do.
      </p>
      <p className="mt-4">
        Safety guidance about gas leaks and carbon monoxide is general public
        information and is not a substitute for emergency services. If you
        smell gas or a carbon monoxide alarm sounds, leave and call 911 and
        the gas utility.
      </p>
    </article>
  );
}
