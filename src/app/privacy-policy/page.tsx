import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { AFFILIATE_DISCLOSURE, phoneDisplayLabel, phoneHref, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy | Millrace Heating, Freeport, Illinois",
  description: `How Millrace Heating & Air handles calls, cookies, analytics, and Google AdSense advertising for visitors in Freeport. Call ${site.phoneDisplay}.`,
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  const phone = phoneHref();
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
      <p className="mt-3 text-sm">Last updated October 30, 2026. This notice is informational and is not legal advice.</p>

      <h2 className="mt-8 text-2xl text-navy">Who runs this site</h2>
      <p className="mt-4">
        {site.businessName} publishes heating and cooling information for {site.city}, {site.state}{" "}
        {site.zip}. It is an affiliate, pay-per-call advertising website. {AFFILIATE_DISCLOSURE} A
        call to the number on this site may be routed to an independent local service provider, and
        the site operator may be paid when that call is connected. The relationship is also
        described on the{" "}
        <Link className="font-semibold text-navy underline underline-offset-2" href="/disclaimer/">
          disclosure page
        </Link>
        .
      </p>

      <h2 className="mt-8 text-2xl text-navy">Calls and information this site does not collect</h2>
      <p className="mt-4">
        This website has no lead form and does not ask you to create an account. It does not
        collect a name, email address, or service request through the pages. If you call{" "}
        {phone ? (
          <a className="font-semibold text-navy underline underline-offset-2" href={phone}>
            {phoneDisplayLabel()}
          </a>
        ) : (
          phoneDisplayLabel()
        )}
        , your phone provider and the independent provider who receives the call process that call
        under their own practices. This website does not record the content of the call.
      </p>
      <p className="mt-4">
        The assistant on the page runs in your browser. It answers from the pages on this site. It
        does not send what you type to this website, and it is an automated guide, not a technician.
      </p>

      <h2 className="mt-8 text-2xl text-navy">Analytics</h2>
      <p className="mt-4">
        If analytics are enabled, a call-button click may be recorded with the place on the page
        where it happened, such as the header or a guide section. That measurement does not include
        the content of the phone call. Analytics cookies, when present, are used to understand
        which pages are used. You can block or delete cookies in your browser.
      </p>

      <h2 className="mt-8 text-2xl text-navy">Google AdSense and advertising cookies</h2>
      <p className="mt-4">
        This site is enrolled to show ads through Google AdSense, publisher{" "}
        <span className="whitespace-nowrap">ca-pub-2140760506973241</span>. Pages may include the
        AdSense script. Third-party vendors, including Google, use cookies to serve ads based on a
        user’s prior visits to this website or other websites. Google’s use of advertising cookies
        enables it and its partners to serve ads based on visits to this site and other sites on
        the internet.
      </p>
      <p className="mt-4">
        Those cookies are not required for you to read a guide or to call. An ad unit, when it
        fills, is labeled “Advertisement.” The file at{" "}
        <Link className="font-semibold text-navy underline underline-offset-2" href="/ads.txt">
          /ads.txt
        </Link>{" "}
        identifies this site’s authorized seller for that publisher ID.
      </p>
      <p className="mt-4">
        You can opt out of personalized advertising from Google by visiting{" "}
        <a
          className="font-semibold text-navy underline underline-offset-2"
          href="https://adssettings.google.com"
        >
          Google Ads Settings
        </a>
        . You can also opt out of some third-party vendor cookies for personalized ads through the{" "}
        <a
          className="font-semibold text-navy underline underline-offset-2"
          href="https://www.aboutads.info/choices"
        >
          Digital Advertising Alliance
        </a>
        . Google describes its advertising technologies at{" "}
        <a
          className="font-semibold text-navy underline underline-offset-2"
          href="https://policies.google.com/technologies/ads"
        >
          policies.google.com/technologies/ads
        </a>
        .
      </p>
      <p className="mt-4">
        Browser controls that block third-party cookies will limit this advertising. They will not
        block the phone number or the articles.
      </p>

      <h2 className="mt-8 text-2xl text-navy">What we do not do with personal information</h2>
      <p className="mt-4">
        This site does not sell personal information collected through a form, because it does not
        take forms. It does not ask children for information. Guides are written for adult
        homeowners. Advertising vendors may process data under their own policies when an ad loads.
      </p>

      <h2 className="mt-8 text-2xl text-navy">Contact about this notice</h2>
      <p className="mt-4">
        Questions about this notice can be asked on the published phone line, {phoneDisplayLabel()}.
        There is no separate privacy email. For how the site may be used, see the{" "}
        <Link className="font-semibold text-navy underline underline-offset-2" href="/terms/">
          terms of use
        </Link>
        .
      </p>
    </article>
  );
}
