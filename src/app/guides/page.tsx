import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/content/guides";
import { IMAGE_SIZES } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HVAC Guides for Freeport, IL | Millrace",
  description:
    "HVAC guides for Freeport, Illinois homes: AC blowing warm air, furnace not heating, airflow, heat pumps, and indoor air in 61032.",
  path: "/guides/",
});

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides/" },
        ])}
      />
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-serif text-4xl sm:text-5xl">
            HVAC guides for Freeport, IL
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Short explanations of heating and cooling problems Stephenson County
            houses actually have.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides" },
          ]}
        />
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {guides.map((guide, index) => (
          <Link
            key={guide.slug}
            href={guide.href}
            className="card-lift overflow-hidden rounded-brand border border-line bg-white"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={guide.image}
                alt={guide.imageAlt}
                fill
                priority={index === 0}
                className="card-image object-cover"
                sizes={IMAGE_SIZES.card}
              />
            </div>
            <div className="p-5">
              <h2 className="font-semibold text-navy">{guide.title}</h2>
              <p className="mt-2 text-sm text-muted">{guide.lede}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
