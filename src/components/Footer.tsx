import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhoneCta, PhonePlain } from "@/components/PhoneCta";
import { footerServiceHighlights, nearbyCommunities } from "@/lib/nav";
import { localLabel, primaryCtaLabel, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white/80">
      <div className="border-b border-white/10 bg-gradient-to-r from-navy-deep via-navy to-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-serif text-3xl text-white">Need heating or cooling help in {site.city}?</p>
            <p className="mt-2 text-white/75">
              Call to be connected with a local heating and cooling professional.
            </p>
          </div>
          <PhoneCta location="footer" context="footer-band" className="min-h-14 w-full px-7 text-lg sm:w-auto">
            {primaryCtaLabel()}
          </PhoneCta>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={`${site.businessName} home`}>
            <Logo invert decorative />
          </Link>
          <p className="mt-4 text-white/75">
            Heating and cooling information for {site.city}, {site.state} ({site.zip}) in{" "}
            {site.county}.
          </p>
          <p className="mt-4">
            <PhonePlain location="footer" className="font-semibold text-white underline-offset-4 hover:text-white hover:underline" />
          </p>
        </div>

        <div>
          <p className="font-semibold tracking-wide text-brass uppercase">Services</p>
          <ul className="mt-3 grid gap-2">
            {footerServiceHighlights.map((item) => (
              <li key={item.href}>
                <Link className="text-white/80 underline-offset-4 hover:text-white hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold tracking-wide text-brass uppercase">Company</p>
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
            <li>
              <Link className="hover:underline" href="/image-credits/">
                Image credits
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/sitemap/">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold tracking-wide text-brass uppercase">Freeport and nearby</p>
          <p className="mt-3 text-white/75">
            Primary city: {site.city}, {site.state}. Nearby Stephenson County towns
            are confirmed on the call. The city ZIP is {site.zip}.
          </p>
          <p className="mt-3 text-white/75">
            {nearbyCommunities.map((town) => town.name).join(" · ")}
          </p>
          <p className="mt-3">
            <Link className="font-semibold text-white underline-offset-4 hover:underline" href="/service-area/">
              Service area details
            </Link>
          </p>
          <p className="mt-3 text-white/60">{localLabel}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/55">
        © {new Date().getFullYear()} {site.businessName} · {site.city}, {site.state}
      </div>
    </footer>
  );
}
