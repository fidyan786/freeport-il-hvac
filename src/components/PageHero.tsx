import { PhoneIcon } from "@/components/Icons";
import { PhoneCta } from "@/components/PhoneCta";
import { SitePhoto } from "@/components/SitePhoto";
import { IMAGE_SIZES } from "@/lib/images";
import { primaryCtaLabel } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  deck,
  lede,
  context,
  ctaLabel,
  image,
  imageAlt,
  priority = true,
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
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-16">
          {eyebrow ? <p className="kicker mb-3">{eyebrow}</p> : null}
          <h1 className="max-w-xl text-3xl leading-tight text-balance text-navy sm:text-4xl">
            {title}
          </h1>
          {deck ? <p className="mt-4 max-w-xl text-xl leading-snug text-navy">{deck}</p> : null}
          <p className="mt-5 max-w-xl leading-relaxed text-muted">{lede}</p>
          <div className="mt-8">
            <PhoneCta location="hero" context={context} className="w-full sm:w-auto">
              <span className="inline-flex items-center gap-2">
                <PhoneIcon />
                {ctaLabel ?? primaryCtaLabel()}
              </span>
            </PhoneCta>
          </div>
        </div>
        {image ? (
          <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:min-h-full">
            <SitePhoto
              src={image}
              alt={imageAlt ?? ""}
              priority={priority}
              sizes={IMAGE_SIZES.hero}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
