import Image from "next/image";
import Link from "next/link";
import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  lede,
  context,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  image,
  imageAlt,
  tone = "spruce",
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  context: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image?: string;
  imageAlt?: string;
  tone?: "spruce" | "copper";
}) {
  const bg = tone === "copper" ? "bg-copper" : "bg-spruce";
  return (
    <section className={`relative overflow-hidden ${bg} text-white`}>
      {image ? (
        <Image
          src={image}
          alt={imageAlt || ""}
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover opacity-35"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-spruce-deep/90 via-spruce/75 to-spruce/35" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="reveal">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-brass uppercase">
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
              {ctaLabel ?? primaryCtaLabel()}
            </PhoneCta>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
