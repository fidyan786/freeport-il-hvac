import Link from "next/link";
import { ChevronIcon } from "@/components/Icons";
import { PhoneCta } from "@/components/PhoneCta";
import { SitePhoto } from "@/components/SitePhoto";
import { TrustRow } from "@/components/TrustSection";
import { IMAGE_SIZES } from "@/lib/images";
import { primaryCtaLabel } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  deck,
  lede,
  context,
  ctaLabel,
  secondaryHref = "/services/",
  secondaryLabel = "See services",
  image,
  imageAlt,
  priority = true,
  showTrust = true,
}: {
  eyebrow?: string;
  title: string;
  deck?: string;
  lede: string;
  context: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image?: string;
  imageAlt?: string;
  tone?: "spruce" | "copper";
  priority?: boolean;
  showTrust?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {image ? (
        <SitePhoto
          src={image}
          alt={imageAlt ?? ""}
          priority={priority}
          sizes={IMAGE_SIZES.bleed}
          className="hero-photo"
        />
      ) : null}
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="hero-shimmer absolute inset-0" aria-hidden="true" />
      <HeroAirflow />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-16 lg:min-h-[36rem] lg:py-20">
        {eyebrow ? <p className="hero-enter hero-d1 kicker !text-[#e3c27a]">{eyebrow}</p> : null}
        <h1 className="hero-enter hero-d2 mt-3 max-w-3xl text-4xl leading-[1.08] text-balance text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {deck ? (
          <p className="hero-enter hero-d2 mt-4 max-w-2xl text-xl leading-snug text-white/90">{deck}</p>
        ) : null}
        <p className="hero-enter hero-d3 speakable mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
          {lede}
        </p>
        <div className="hero-enter hero-d4 mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <PhoneCta location="hero" context={context} className="min-h-14 w-full px-7 text-lg sm:w-auto">
            {ctaLabel ?? primaryCtaLabel()}
          </PhoneCta>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center px-2 text-base font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
        {showTrust ? (
          <div className="hero-enter hero-d5 mt-8">
            <TrustRow />
          </div>
        ) : null}
      </div>
      <a className="scroll-cue" href="#page-body" aria-label="Scroll to page details">
        <ChevronIcon className="h-5 w-5" />
      </a>
    </section>
  );
}

function HeroAirflow() {
  return (
    <svg className="hero-flow" viewBox="0 0 1200 640" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-20 180 C 220 120, 420 80, 760 150 S 1180 240, 1240 120" />
      <path d="M-20 300 C 260 250, 480 340, 820 280 S 1160 200, 1240 260" />
      <path d="M-20 460 C 300 400, 540 500, 860 430 S 1140 360, 1240 420" />
    </svg>
  );
}
