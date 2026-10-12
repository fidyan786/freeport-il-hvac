import Link from "next/link";
import { PhoneIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { PhoneCta, PhonePlain } from "@/components/PhoneCta";
import { footerServiceHighlights, nearbyCommunities } from "@/lib/nav";
import { AFFILIATE_DISCLOSURE, localLabel, primaryCtaLabel, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white text-navy">
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-2xl font-semibold">Need heating or cooling help in {site.city}?</p>
            <p className="mt-2 text-muted">
              Call to be connected with a local heating and cooling professional.
            </p>
          </div>
          <PhoneCta location="footer" context="footer-band" className="w-full sm:w-auto">
            <span className="inline-flex items-center gap-2">
              <PhoneIcon />
              {primaryCtaLabel()}
            </span>
          </PhoneCta>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={`${site.businessName} home`}>
            <Logo decorative />
          </Link>
          <p className="mt-4 text-muted">
            Heating and cooling information for {site.city}, {site.state} ({site.zip}) in{" "}
            {site.county}.
          </p>
          <p className="mt-4">
            <PhonePlain location="footer" className="font-semibold text-navy underline-offset-4 hover:underline" />
          </p>
          <p className="mt-4 text-muted">{AFFILIATE_DISCLOSURE}</p>
        </div>

        <div>
          <p className="font-semibold">Services</p>
          <ul className="mt-3 grid gap-2">
            {footerServiceHighlights.map((item) => (
              <li key={item.href}>
                <Link className="text-navy underline-offset-4 hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold">Company</p>
          <ul className="mt-3 grid gap-2">
            <li>
              <Link className="hover:underline" href="/about/">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/service-area/">
                Service area
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/guides/">
                Resources
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact/">
                Call
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/privacy-policy/">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms/">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Freeport and nearby</p>
          <p className="mt-3 text-muted">
            Primary city: {site.city} {site.zip}. Nearby Stephenson County towns
            are confirmed on the call.
          </p>
          <p className="mt-3 text-muted">
            {nearbyCommunities.map((town) => town.name).join(" · ")}
          </p>
          <p className="mt-3">
            <Link className="font-semibold underline-offset-4 hover:underline" href="/service-area/">
              Service area details
            </Link>
          </p>
          <p className="mt-3 text-muted">{localLabel}</p>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-muted">
        © {new Date().getFullYear()} {site.businessName} · {site.city}, {site.stateCode} {site.zip}
      </div>
    </footer>
  );
}
