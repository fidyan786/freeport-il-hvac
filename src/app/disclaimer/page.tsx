import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { NICOR_GAS } from "@/lib/safety-contacts";
import { AFFILIATE_DISCLOSURE, phoneDisplayLabel, phoneHref, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Affiliate Disclosure | Millrace Heating, Freeport, Illinois",
  description: `Millrace Heating & Air is a pay-per-call site, not a Freeport HVAC contractor. How the phone connection is paid, and what the guides do not promise. Call ${site.phoneDisplay}.`,
  path: "/disclaimer/",
});

export default function DisclaimerPage() {
  const phone = phoneHref();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 leading-relaxed text-muted">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Disclosure", path: "/disclaimer/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Disclosure" },
        ]}
      />
      <h1 className="mt-6 text-4xl text-navy">Affiliate and call disclosure</h1>
      <p className="mt-3 text-sm">Last updated October 30, 2026.</p>
      <p className="mt-6 text-lg text-ink">{AFFILIATE_DISCLOSURE}</p>
      <p className="mt-4">
        {site.businessName} is an advertising website for {site.city}, {site.state} {site.zip}. When
        you call{" "}
        {phone ? (
          <a className="font-semibold text-navy underline underline-offset-2" href={phone}>
            {phoneDisplayLabel()}
          </a>
        ) : (
          phoneDisplayLabel()
        )}
        , the call may be routed to an independent local heating and cooling professional. The
        operator of this website may be paid for a connected call. That payment does not add a fee
        this website charges you, and it does not set the price of any repair. The contractor who
        agrees to do the work sets their own price, or declines the job.
      </p>
      <h2 className="mt-8 text-2xl text-navy">What a call is, and what it is not</h2>
      <p className="mt-4">
        A call is a request to be connected. It is not an appointment, a dispatch, or a contract
        with this website. This site does not employ the technician, does not operate a truck, and
        does not guarantee who will answer, how soon, or whether they service boilers, heat pumps,
        or commercial equipment. Ask. If the fit is wrong, you can stop.
      </p>
      <p className="mt-4">
        There is no form on this site and no published offer. Guides that discuss efficiency
        ratings or climate normals are not a quote and not a promise of savings.
      </p>
      <h2 className="mt-8 text-2xl text-navy">Editorial content</h2>
      <p className="mt-4">
        Articles are written by the Millrace Heating & Air editorial desk and dated on each page.
        They are general information. They are not a diagnosis, an instruction to defeat a safety
        control, or a substitute for someone who can see the equipment. The{" "}
        <Link className="font-semibold text-navy underline underline-offset-2" href="/about/">
          about page
        </Link>{" "}
        explains what the site refuses to claim, including reviews and years in business it does
        not have.
      </p>
      <h2 className="mt-8 text-2xl text-navy">Emergencies</h2>
      <p className="mt-4">
        This phone number is not 911 and not the gas utility. If you smell gas or a carbon monoxide
        alarm sounds, leave the building and call 911 and Nicor Gas at {NICOR_GAS.display} from
        outside. Heating help, if you still need it, comes after the property is safe.
      </p>
      <h2 className="mt-8 text-2xl text-navy">Advertising</h2>
      <p className="mt-4">
        Some pages load Google AdSense. Those units are labeled. An advertiser is not the company
        this call connects, and an ad is not an endorsement. Cookie choices are in the{" "}
        <Link className="font-semibold text-navy underline underline-offset-2" href="/privacy-policy/">
          privacy policy
        </Link>
        . Use of the site is also covered by the{" "}
        <Link className="font-semibold text-navy underline underline-offset-2" href="/terms/">
          terms
        </Link>
        .
      </p>
    </article>
  );
}
