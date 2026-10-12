import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Millrace" },
  description:
    "That page is not on this site. Call to be connected with a local heating and cooling professional in Freeport, or browse the topic pages.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Page not found | Millrace",
    description:
      "That page is not on this site. Call to be connected with a local heating and cooling professional in Freeport, or browse the topic pages.",
  },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="kicker mt-8">404</p>
      <h1 className="mt-3 font-serif text-4xl text-navy">
        That page is not on this site.
      </h1>
      <p className="mt-4 text-muted">
        If you need heat or cooling help in Freeport, call to be connected
        with a local heating and cooling professional.
      </p>
      <div className="mt-8 flex justify-center">
        <PhoneCta location="inline" context="404" className="w-full sm:w-auto">
          {primaryCtaLabel()}
        </PhoneCta>
      </div>
      <ul className="mx-auto mt-8 grid max-w-md gap-2 text-left">
        {[
          { href: "/services/furnace-repair-freeport-il/", label: "Furnace repair" },
          { href: "/services/ac-repair-freeport-il/", label: "AC repair" },
          { href: "/services/heating-repair-freeport-il/", label: "Heating repair" },
          { href: "/services/emergency-hvac-freeport-il/", label: "Urgent no-heat or no-cooling" },
          { href: "/contact/", label: "Call" },
          { href: "/services/", label: "All services" },
        ].map((item) => (
          <li key={item.href}>
            <Link className="font-semibold text-navy underline underline-offset-2" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
