import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { AFFILIATE_DISCLOSURE, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy | Millrace Heating, Freeport, Illinois",
  description: `How Millrace Heating & Air handles calls, cookies, and analytics for visitors looking up heating and cooling in Freeport. Call ${site.phoneDisplay}.`,
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 leading-relaxed text-muted">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy" },
        ]}
      />
      <h1 className="mt-6 text-4xl text-navy">Privacy Policy</h1>
      <p className="mt-6">
        {site.businessName} is an affiliate, pay-per-call advertising website.
        {` ${AFFILIATE_DISCLOSURE}`} A call to the number on this site may be
        routed to an independent local service provider, and the site operator
        may be paid when that call is connected.
      </p>
      <p className="mt-4">
        If you call, your phone provider and the independent provider who
        receives the call process that call. This website does not collect
        names, messages, or service requests through a form or chat.
      </p>
      <p className="mt-4">
        If analytics are enabled, a call-button click may be recorded with the
        place on the page where it happened, such as the header or the footer.
        That measurement does not include the content of the phone call.
      </p>
      <p className="mt-4">This notice is informational and is not legal advice.</p>
    </article>
  );
}
