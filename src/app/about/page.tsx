import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionCall } from "@/components/SectionCall";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { NICOR_GAS } from "@/lib/safety-contacts";
import { AFFILIATE_DISCLOSURE, phoneDisplayLabel, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Millrace Heating & Air in Freeport, Illinois",
  description: `Millrace Heating & Air connects Freeport callers with independent local heating and cooling professionals. Not a contractor. Call ${site.phoneDisplay}.`,
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
      <PageHero
        eyebrow="Freeport, Illinois"
        title="About this website"
        lede={`${AFFILIATE_DISCLOSURE} The name comes from the mill races that once ran along the Pecatonica in Stephenson County.`}
        context="about-hero"
        image="/photos/stephenson-county-courthouse-freeport.webp"
        imageAlt="Stephenson County Courthouse in Freeport, Illinois."
      />
      <div id="page-body" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About" },
          ]}
        />
        <h2 className="mt-8 text-3xl text-navy">What this site does</h2>
        <p className="mt-4 text-muted">
          Homeowners and businesses call when something is wrong: no heat, warm
          air from the air conditioner, or a system that will not start. The
          phone number connects that call with an independent local service
          provider.
        </p>
        <p className="mt-4 text-muted">{AFFILIATE_DISCLOSURE}</p>
        <SectionCall context="about-role" />
        <h2 className="mt-10 text-2xl text-navy">Written for 61032</h2>
        <p className="mt-4 text-muted">
          Pages are written around Freeport first: Stephenson County winters,
          short cooling weeks, and the houses on these streets. Nearby towns are
          listed on the service area page so a caller can name them.
        </p>
        <h2 className="mt-10 text-2xl text-navy">At a glance</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>Website: {site.businessName}</li>
          <li>
            City: {site.city}, {site.state} ({site.zip})
          </li>
          <li>County: {site.county}</li>
          <li>Phone: {phoneDisplayLabel()}</li>
        </ul>
        <p className="mt-6 text-sm text-muted">
          Last reviewed October 12, 2026. The Nicor Gas emergency number on
          this site, {NICOR_GAS.display}, was checked against Nicor&apos;s
          emergency page at nicorgas.com that day. This page does not invent
          years in business, a staff list, or a license.
        </p>
      </div>
      <FinalCta
        title="Call for heating and cooling help in Freeport"
        body="Call to be connected with a local heating and cooling professional."
        context="about-final"
      />
    </>
  );
}
