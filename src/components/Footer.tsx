import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhonePlain } from "@/components/PhoneCta";
import { footerServiceHighlights, nearbyCommunities } from "@/lib/nav";
import { hoursLabel, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-spruce-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={`${site.businessName} home`}>
            <Logo invert decorative />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Heating and cooling for {site.city}, {site.state} ({site.zip}) in{" "}
            {site.county}. Tell us what stopped working.
          </p>
          <p className="mt-4 text-sm">
            <PhonePlain className="font-semibold text-white" />
          </p>
          {hoursLabel() ? (
            <p className="mt-1 text-sm">{hoursLabel()}</p>
          ) : null}
        </div>

        <div>
          <h3 className="font-sans text-xs font-normal tracking-[0.16em] text-copper uppercase">
            Services
          </h3>
          <ul className="mt-3 grid gap-2 text-sm">
            {footerServiceHighlights.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-normal tracking-[0.16em] text-copper uppercase">
            Company
          </h3>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link className="hover:text-white" href="/about/">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/service-area/">
                Service Areas
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/guides/">
                Resources
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/contact/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/privacy-policy/">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/terms/">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-normal tracking-[0.16em] text-copper uppercase">
            Freeport & nearby
          </h3>
          <p className="mt-3 text-sm">
            Primary city: {site.city} {site.zip}. Nearby Stephenson County towns
            are confirmed by phone.
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {nearbyCommunities.map((town) => town.name).join(" · ")}
          </p>
          <p className="mt-3 text-sm">
            <Link className="font-semibold text-white hover:underline" href="/service-area/">
              Service area details
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.businessName} · {site.city},{" "}
        {site.stateCode} {site.zip}
      </div>
    </footer>
  );
}
