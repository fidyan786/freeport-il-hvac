import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-copper uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-spruce">
        That page is not on this site.
      </h1>
      <p className="mt-4 text-muted">
        If you need heat or cooling help in Freeport, skip the scavenger hunt and
        request service.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <PhoneCta context="404">{primaryCtaLabel()}</PhoneCta>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-spruce px-5 py-3 text-sm font-semibold text-spruce"
        >
          Home
        </Link>
        <Link
          href="/services/"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-spruce px-5 py-3 text-sm font-semibold text-spruce"
        >
          Services
        </Link>
      </div>
    </section>
  );
}
