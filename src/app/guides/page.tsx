import Link from "next/link";
import { SitePhoto } from "@/components/SitePhoto";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FinalCta } from "@/components/FinalCta";
import { SectionCall } from "@/components/SectionCall";
import { guides } from "@/content/guides";
import { IMAGE_SIZES } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "HVAC Guides for Freeport, Illinois | Millrace Heating",
  description: `Heating and cooling guides for Freeport, IL homes: no heat, warm AC air, noises, airflow, thermostats, and winter safety. Call ${site.phoneDisplay}.`,
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
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="text-4xl text-navy">Heating and cooling guides for Freeport, IL</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Short explanations of heating and cooling problems Stephenson County
            houses actually have. Call to be connected with a local heating and
            cooling professional.
          </p>
          <SectionCall context="guides-hero" />
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
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={guide.href}
            className="overflow-hidden rounded-brand border border-line bg-white hover:border-navy"
          >
            <div className="relative aspect-[16/10]">
              <SitePhoto
                src={guide.image}
                alt={guide.imageAlt}
                className="card-image"
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
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <SectionCall context="guides-grid" />
      </div>
      <FinalCta
        title="Call if the guide matches the house"
        body="Call to be connected with a local heating and cooling professional."
        context="guides-final"
      />
    </>
  );
}
