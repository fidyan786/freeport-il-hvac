import Link from "next/link";
import { PhoneCta } from "@/components/PhoneCta";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-ember uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy">Page not found</h1>
      <p className="mt-4 text-muted">
        That URL does not exist on this Freeport HVAC site. If you need heat or
        cooling help, call instead of hunting through pages.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <PhoneCta context="404">Call {site.phoneDisplay}</PhoneCta>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-navy px-5 py-3 text-sm font-semibold text-navy"
        >
          Back to home
        </Link>
      </div>
      <ul className="mt-10 grid gap-2 text-sm">
        <li>
          <Link className="text-navy underline" href="/emergency-hvac-freeport-il/">
            Emergency HVAC
          </Link>
        </li>
        <li>
          <Link className="text-navy underline" href="/furnace-repair-freeport-il/">
            Furnace repair
          </Link>
        </li>
        <li>
          <Link className="text-navy underline" href="/ac-repair-freeport-il/">
            AC repair
          </Link>
        </li>
        <li>
          <Link className="text-navy underline" href="/contact/">
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
}
