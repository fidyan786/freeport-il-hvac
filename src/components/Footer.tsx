import Link from "next/link";
import { PhoneIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { PhoneCta, PhonePlain } from "@/components/PhoneCta";
import { footerServiceHighlights, nearbyCommunities } from "@/lib/nav";
import { hoursLabel, localLabel, primaryCtaLabel, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-serif text-2xl text-white">Need HVAC help in {site.city}?</p>
            <p className="mt-1 text-sm text-white/70">
              Describe the symptom and the ZIP. We will tell you the next step.
            </p>
          </div>
          <PhoneCta context="footer-band" className="min-h-12 w-full sm:w-auto">
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
            <Logo invert decorative />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Heating and cooling for {site.city}, {site.state} ({site.zip}) in{" "}
            {site.county}. Tell us what stopped working.
          </p>
          <p className="mt-4 text-sm">
            <PhonePlain className="font-semibold text-white hover:text-brass" />
          </p>
          {hoursLabel() ? (
            <p className="mt-1 text-sm">{hoursLabel()}</p>
          ) : null}
        </div>

        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.16em] text-brass uppercase">
            Services
          </p>
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
          <p className="font-sans text-xs font-semibold tracking-[0.16em] text-brass uppercase">
            Company
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link className="hover:text-white" href="/about/">
                HVAC Contractor
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
          <p className="font-sans text-xs font-semibold tracking-[0.16em] text-brass uppercase">
            Freeport & nearby
          </p>
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
          <p className="mt-3 text-xs text-white/50">{localLabel}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.businessName} · {site.city},{" "}
        {site.stateCode} {site.zip}
      </div>
    </footer>
  );
}
