import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { AFFILIATE_DISCLOSURE, phoneDisplayLabel, site } from "@/lib/site";

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
      <p className="mt-3 text-sm">Last updated October 30, 2026. These terms are informational and are not a substitute for advice from your own lawyer.</p>

      <h2 className="mt-8 text-2xl text-navy">The site you are using</h2>
      <p className="mt-4">
        This site publishes information about heating and cooling in {site.city}, {site.state}, and
        nearby {site.county} towns. {site.businessName} is an affiliate, pay-per-call advertising
        website. {AFFILIATE_DISCLOSURE} Calls to the number published here may be routed to an
        independent local service provider, and the site operator may be paid when a call is
        connected. The short form of that sentence is the{" "}
        <Link className="font-semibold text-navy underline underline-offset-2" href="/disclaimer/">
          disclosure
        </Link>
        .
      </p>

      <h2 className="mt-8 text-2xl text-navy">No professional relationship from reading or calling</h2>
      <p className="mt-4">
        Content is general information. Reading a guide, using the on-page assistant, or placing a
        call does not create an appointment, a service agreement, or a fee set by this website. It
        does not make this website your contractor. The independent provider who answers is
        responsible for the work they agree to do, including any price, arrival time, permit, or
        warranty they offer. This website does not publish those terms because it does not control
        them.
      </p>
      <p className="mt-4">
        The assistant is automated. It answers from the pages on this site and does not collect a
        name, phone number, or email. It is not a technician and it cannot promise a price or an
        arrival time.
      </p>

      <h2 className="mt-8 text-2xl text-navy">Safety</h2>
      <p className="mt-4">
        Guidance about gas leaks and carbon monoxide is general public information. It is not a
        substitute for emergency services. If you smell gas or a carbon monoxide alarm sounds,
        leave and call 911 and the gas utility from a safe place. Do not treat a guide as
        permission to keep operating an appliance that is spilling exhaust, locking out on rollout,
        or sitting in water near live electrical parts.
      </p>

      <h2 className="mt-8 text-2xl text-navy">Accuracy and limits</h2>
      <p className="mt-4">
        Guides are written to be accurate as of the date on the page, using public climate normals,
        federal efficiency standards, and public safety guidance where those are cited. They are
        not a load calculation, a code determination for your block, or a promise about your house.
        Equipment, local practice, and utility programs change. Confirm anything that will cost
        money or affect safety with a qualified person and, where a permit or utility rule is
        involved, with the authority that issues it.
      </p>

      <h2 className="mt-8 text-2xl text-navy">Acceptable use</h2>
      <p className="mt-4">
        You may read the pages and call the published number. You may not scrape the site in order
        to republish the guides as your own, break the site, or use it to send spam. The articles
        are original text. Other people may link to them. Copying them wholesale onto another
        commercial site is not allowed.
      </p>

      <h2 className="mt-8 text-2xl text-navy">Advertising</h2>
      <p className="mt-4">
        Pages may show third-party ads, including Google AdSense. Ads are labeled. Their content is
        not a recommendation from this site, and an advertiser is not the contractor this phone
        number connects. Cookie practices for those ads are in the{" "}
        <Link className="font-semibold text-navy underline underline-offset-2" href="/privacy-policy/">
          privacy policy
        </Link>
        .
      </p>

      <h2 className="mt-8 text-2xl text-navy">Liability</h2>
      <p className="mt-4">
        The site is provided as-is. To the extent the law allows, the operator is not liable for
        decisions you make from a guide, for the acts of an independent provider who answers a
        call, or for loss from a heating or cooling failure. Some places do not allow certain
        limitations. In those places, the limit is the strongest the law still allows. Nothing here
        excludes liability that cannot legally be excluded.
      </p>

      <h2 className="mt-8 text-2xl text-navy">Changes</h2>
      <p className="mt-4">
        These terms can be updated by posting a new version on this page with a new date. The
        phone number for questions is {phoneDisplayLabel()}. There is no account to terminate
        because the site does not create accounts.
      </p>
    </article>
  );
}
