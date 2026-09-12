import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About This Freeport HVAC Company",
  description:
    "About HVAC service in Freeport, Illinois. Verified facts only: market, services, and how to call. No invented founding story, team bios, or awards.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About" },
          ]}
        />
        <h1 className="mt-6 font-serif text-4xl text-navy">
          About {site.businessName}
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          This website exists to help Freeport, Illinois homeowners get HVAC
          help on the phone. The public facts we will stand behind are the
          ones that are configured and verified.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-navy">What is known</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>Market: {site.city}, {site.state} ({site.zip})</li>
          <li>County: {site.county}</li>
          <li>Work: furnace, AC, maintenance, emergency HVAC, and related services</li>
          <li>Phone: {site.phoneDisplay}</li>
          <li>Hours: {site.hours}</li>
        </ul>
        <h2 className="mt-10 font-serif text-2xl text-navy">
          What is not published yet
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          We do not invent a founding year, owner biography, technician roster,
          license numbers, insurance claims, manufacturer badges, financing
          offers, or 24/7 guarantees. When those details are real, they belong
          in site configuration — not in marketing fiction.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          If you need heat or cooling in 61032, skip the about-page story and
          call.
        </p>
      </div>
      <FinalCta
        title="Talk to someone about HVAC in Freeport"
        body="The useful next step is a phone call, not a longer company myth."
        context="about-final"
      />
    </>
  );
}
