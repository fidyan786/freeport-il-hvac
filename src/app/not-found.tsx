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
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <PhoneCta location="inline" context="404" className="w-full sm:w-auto">
          {primaryCtaLabel()}
        </PhoneCta>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-brand border border-navy px-5 py-3 text-sm font-semibold text-navy"
        >
          Home
        </Link>
        <Link
          href="/services/"
          className="inline-flex min-h-12 items-center justify-center rounded-brand border border-navy px-5 py-3 text-sm font-semibold text-navy"
        >
          Services
        </Link>
      </div>
    </section>
  );
}
