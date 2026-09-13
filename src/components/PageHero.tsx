import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/components/Icons";
import { PhoneCta } from "@/components/PhoneCta";
import { IMAGE_SIZES } from "@/lib/images";
import { primaryCtaLabel } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  deck,
  lede,
  context,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  image,
  imageAlt,
  tone = "spruce",
  priority = false,
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
}) {
  const bg = tone === "copper" ? "bg-ember" : "bg-navy";
  return (
    <section className={`${bg} text-white`}>
      <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-16">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-brass uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-xl font-serif text-[1.85rem] leading-tight text-balance sm:text-4xl lg:text-[2.65rem]">
            {title}
          </h1>
          {deck ? (
            <p className="mt-4 max-w-xl font-serif text-lg leading-snug text-white/90 sm:text-xl">
              {deck}
            </p>
          ) : null}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            {lede}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PhoneCta
              context={context}
              variant={tone === "copper" ? "light" : "primary"}
              className="min-h-12 w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <PhoneIcon />
                {ctaLabel ?? primaryCtaLabel()}
              </span>
            </PhoneCta>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-brand border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
        {image ? (
          <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:min-h-full">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority={priority}
              sizes={IMAGE_SIZES.hero}
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
