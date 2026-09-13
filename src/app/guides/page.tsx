import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/content/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Freeport HVAC Guides",
  description:
    "Practical heating and cooling guides for Freeport, Illinois homes: warm AC air, furnace problems, airflow, heat pumps, and indoor air.",
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
      <section className="bg-spruce text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-serif text-4xl sm:text-5xl">
            HVAC guides for Freeport homes
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Short explanations of heating and cooling problems Stephenson County
            houses actually have.
          </p>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={guide.href}
            className="card-lift overflow-hidden rounded-2xl border border-line bg-white"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={guide.image}
                alt={guide.imageAlt}
                fill
                className="card-image object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="font-semibold text-spruce">{guide.title}</h2>
              <p className="mt-2 text-sm text-muted">{guide.lede}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
