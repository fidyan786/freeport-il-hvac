import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: `Terms of use for ${site.businessName} in ${site.city}, ${site.state}.`,
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 leading-relaxed text-muted">
      <h1 className="font-serif text-4xl text-navy">Terms of Use</h1>
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
