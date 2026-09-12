import Link from "next/link";
import { PhonePlain } from "@/components/PhoneCta";
import { nearbyCommunities, serviceLinks } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-serif text-xl text-white">{site.businessName}</p>
          <p className="mt-3 text-sm leading-relaxed">
            HVAC service focused on {site.city}, {site.state} ({site.zip}) in{" "}
            {site.county}. Phone is the fastest way to get help.
          </p>
          <p className="mt-4 text-sm">
            Call: <PhonePlain className="font-semibold text-white" />
          </p>
          <p className="mt-1 text-sm">Hours: {site.hours}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-white/50 uppercase">
            Services
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            {serviceLinks.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-white/50 uppercase">
            Company
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link className="hover:text-white" href="/about/">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/reviews/">
                Reviews
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/service-areas/">
                Service area
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/contact/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/blog/">
                Guides
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
          <p className="text-xs tracking-[0.16em] text-white/50 uppercase">
            Nearby communities
          </p>
          <p className="mt-3 text-sm">
            Primary city: {site.city} {site.zip}. Call to confirm coverage for
            other Stephenson County towns.
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {nearbyCommunities.map((town) => town.name).join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        {site.city}, {site.state} HVAC · Pay-per-call service site · No invented
        reviews, licenses, or prices.
      </div>
    </footer>
  );
}
