import { PhoneCta } from "@/components/PhoneCta";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  lede,
  context,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  context: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-ember uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {lede}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <PhoneCta context={context} className="min-h-12 w-full sm:w-auto">
            {ctaLabel ?? `Call ${site.phoneDisplay}`}
          </PhoneCta>
          {secondaryHref && secondaryLabel ? (
            <a
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
