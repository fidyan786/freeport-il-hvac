"use client";

import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-serif text-3xl text-navy">Something went wrong</h1>
      <p className="mt-4 text-muted">
        The page could not load. You can try again, or request HVAC help in
        Freeport.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="min-h-12 rounded-brand border border-navy px-5 py-3 text-sm font-semibold text-navy"
        >
          Try again
        </button>
        <PhoneCta context="error-page" className="min-h-12">
          {primaryCtaLabel()}
        </PhoneCta>
      </div>
    </section>
  );
}
