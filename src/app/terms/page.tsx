import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: `Terms for ${site.businessName}’s ${site.city} HVAC website. Content is informational and does not create a guaranteed appointment, warranty, or price.`,
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
      <h1 className="mt-6 font-serif text-4xl text-navy">Terms of Use</h1>
      <p className="mt-6">
        This site provides information about HVAC services in {site.city},{" "}
        {site.state}. Content is informational. It does not create a guaranteed
        appointment, license claim, warranty, or price.
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
