import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for the ${site.city}, ${site.state} HVAC website.`,
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 leading-relaxed text-muted">
      <h1 className="font-serif text-4xl text-navy">Privacy Policy</h1>
      <p className="mt-6">
        This notice describes how {site.businessName} may handle information
        submitted through this website for HVAC inquiries in {site.city},{" "}
        {site.state}.
      </p>
      <p className="mt-4">
        If you call, your phone provider and any later call-tracking vendor
        process that call. If you use the request form, we collect name, phone,
        service needed, and message to respond to the request. If you use the
        on-site help chat, we may collect the HVAC issue, ZIP, property type,
        timeline, and any name or phone you choose to share, plus the page you
        were on. Chat messages stay in your browser session and are sent to our
        server only to generate a reply and, when configured, a lead
        notification.
      </p>
      <p className="mt-4">
        Form delivery is only sent to a webhook if one is configured by the
        site operator. Analytics load only if a Google Analytics measurement
        ID is configured. We do not sell form submissions as a product.
      </p>
      <p className="mt-4">
        This is a starting notice, not legal advice. Have counsel review it
        before advertising.
      </p>
    </article>
  );
}
