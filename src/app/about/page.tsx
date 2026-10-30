import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { NICOR_GAS } from "@/lib/safety-contacts";
import { AFFILIATE_DISCLOSURE, phoneDisplayLabel, phoneHref, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Millrace Heating & Air in Freeport, Illinois",
  description: `Who writes Millrace Heating & Air, what the Freeport call connects to, and what this site refuses to claim. Not a contractor. Call ${site.phoneDisplay}.`,
  path: "/about/",
});

export default function AboutPage() {
  const phone = phoneHref();
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
        lede={`${AFFILIATE_DISCLOSURE} The name comes from the mill races that once ran along the Pecatonica in Stephenson County. The pages are written for houses in Freeport and the nearby towns, not as a substitute for someone standing in front of the equipment.`}
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
        <p className="mt-4 text-sm text-muted">
          Written by the Millrace Heating & Air editorial desk. Last reviewed October 30, 2026.
        </p>

        <h2 className="mt-8 text-3xl text-navy">What this site does</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Homeowners and small buildings call when heat or cooling fails, or when they want a
          plain explanation before they hire anyone. The phone number on this site connects that
          call with an independent local heating and cooling professional. The site operator may
          be paid when the call is connected. That is the whole commercial relationship.
        </p>
        <p className="mt-4 leading-relaxed text-muted">{AFFILIATE_DISCLOSURE}</p>
        <p className="mt-4 leading-relaxed text-muted">
          There is no request form, no chat that stores your name, and no price list. A call does
          not create an appointment by itself. The person who answers decides whether they can
          help, and you decide whether to hire them. Read the{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/disclaimer/">
            affiliate disclosure
          </Link>{" "}
          and the{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/terms/">
            terms
          </Link>{" "}
          for the limits of that arrangement.
        </p>

        <h2 className="mt-10 text-2xl text-navy">Who writes the guides</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Guides and service pages are written by the Millrace Heating & Air editorial desk. The
          byline is an organization, not a named technician, because this website does not employ
          a field crew and will not invent one. Articles are general information for Freeport and
          Stephenson County houses. They are not a diagnosis of your equipment, and they are not
          instructions to open a gas valve, jumper a safety switch, or add refrigerant.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Climate figures that appear in the guides are attributed to published normals, mainly
          NOAA’s 1991–2020 record for the Freeport Wastewater Treatment Plant station. They
          describe that station. They are not your utility bill and not a load calculation.
          Safety steps for gas leaks and carbon monoxide follow public guidance from the U.S.
          Consumer Product Safety Commission and the gas utility’s published emergency number.
          Where this site does not know a local rule, including permit practice, it says to ask
          the city or the person doing the work.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          The{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/guides/">
            guides hub
          </Link>{" "}
          is organized by topic: climate, furnaces, cooling, heat pumps, boilers, indoor air,
          thermostats, efficiency, maintenance, troubleshooting, hiring, and safety. Each guide
          shows the author and the date it was updated.
        </p>

        <h2 className="mt-10 text-2xl text-navy">What this site will not claim</h2>
        <ul className="mt-4 grid list-disc gap-2 pl-5 leading-relaxed text-muted">
          <li>It is not a licensed heating and cooling contractor and does not perform repairs.</li>
          <li>It does not publish prices, coupons, financing, or arrival times.</li>
          <li>It does not invent years in business, a staff list, reviews, or a street address.</li>
          <li>It does not name competing local companies, and it does not rank equipment brands.</li>
          <li>It does not promise that every system in Stephenson County is one the person who answers will service. Ask.</li>
        </ul>

        <h2 className="mt-10 text-2xl text-navy">Where the calls are for</h2>
        <p className="mt-4 leading-relaxed text-muted">
          The primary city is {site.city}, {site.state} {site.zip}, in {site.county}. Nearby towns
          are listed on the{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/service-area/">
            service area page
          </Link>{" "}
          so a caller can name them. Coverage is confirmed on the phone, not by a pin on a map.
        </p>

        <h2 className="mt-10 text-2xl text-navy">At a glance</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>Website: {site.businessName}</li>
          <li>
            City: {site.city}, {site.state} ({site.zip})
          </li>
          <li>County: {site.county}</li>
          <li>
            Phone:{" "}
            {phone ? (
              <a className="font-semibold text-navy underline underline-offset-2" href={phone}>
                {phoneDisplayLabel()}
              </a>
            ) : (
              phoneDisplayLabel()
            )}
          </li>
          <li>Hours: not published. The professional who answers confirms scheduling.</li>
          <li>
            Gas emergencies: leave, then 911 and Nicor Gas at {NICOR_GAS.display}. That number was
            checked against Nicor’s published emergency line. It is not this website’s repair number.
          </li>
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Advertising on these pages, if a unit is filled, is labeled. How cookies from that
          advertising work is in the{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/privacy-policy/">
            privacy policy
          </Link>
          .
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
