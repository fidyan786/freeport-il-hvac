import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.businessName} handles phone calls, service request forms, and on-site chat for HVAC inquiries in ${site.city}, ${site.state}.`,
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
      <h1 className="mt-6 font-serif text-4xl text-navy">Privacy Policy</h1>
      <p className="mt-6">
        This notice describes how {site.businessName} may handle information
        submitted for HVAC inquiries in {site.city}, {site.state}.
      </p>
      <p className="mt-4">
        If you call, your phone provider processes that call. If you use the
        request form, we collect name, phone, ZIP, service needed, and message
        so we can respond. If you use the on-site help chat, we may collect the
        HVAC issue, ZIP, property type, timeline, and any name or phone you
        choose to share, plus the page you were on.
      </p>
      <p className="mt-4">
        Form submissions and chat messages are used to respond to your request.
        We do not sell that information.
      </p>
      <p className="mt-4">
        This notice is informational and is not legal advice.
      </p>
    </article>
  );
}
