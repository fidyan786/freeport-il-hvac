import Link from "next/link";
import { SitePhoto } from "@/components/SitePhoto";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { guideCategories } from "@/content/guide-categories";
import { guides, GUIDES_LAST_UPDATED } from "@/content/guides";
import { IMAGE_SIZES } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "HVAC Guides for Freeport, Illinois | Millrace Heating",
  description: `In-depth heating and cooling guides for Freeport, IL homes: winter load, humidity, furnaces, heat pumps, boilers, filters, and carbon monoxide safety. Call ${site.phoneDisplay}.`,
  path: "/guides/",
});

export default function GuidesIndexPage() {
  const populated = guideCategories
    .map((category) => ({
      category,
      items: guides.filter((guide) => guide.category === category.id),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides/" },
        ])}
      />
      <PageHero
        eyebrow="Freeport, Illinois"
        title="Heating and cooling guides for Freeport, IL"
        lede="Practical notes for Stephenson County houses: a long heating season, a shorter humid summer, and the furnaces, boilers, heat pumps, and controls that have to live with both. Written as general information. This site is not a contractor."
        context="guides-hero"
        image="/photos/heroes/gas-furnace-utility.webp"
        imageAlt="High-efficiency gas furnace in a utility space."
      />
      <div id="page-body" className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides" },
          ]}
        />
        <nav aria-label="Guide categories" className="mt-6 flex flex-wrap gap-2">
          {populated.map(({ category }) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold text-navy hover:border-navy"
            >
              {category.label}
            </a>
          ))}
        </nav>
        <p className="mt-4 text-sm text-muted">
          {guides.length} guides. Older symptom notes were reviewed {formatUpdated(GUIDES_LAST_UPDATED)}.
          Longer articles added October 30, 2026.
        </p>
      </div>
      {populated.map(({ category, items }) => (
        <section
          key={category.id}
          id={category.id}
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6"
        >
          <h2 className="font-serif text-3xl text-navy">{category.label}</h2>
          <p className="mt-3 max-w-3xl text-muted">{category.blurb}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.href}
                className="flex flex-col overflow-hidden rounded-brand border border-line bg-white hover:border-navy"
              >
                <div className="relative aspect-[16/10]">
                  <SitePhoto
                    src={guide.image}
                    alt={guide.imageAlt}
                    className="card-image"
                    sizes={IMAGE_SIZES.card}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold tracking-wide text-cyan-deep uppercase">
                    {category.label}
                  </p>
                  <h3 className="mt-2 font-semibold text-navy">{guide.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{guide.lede}</p>
                  <p className="mt-3 text-xs text-muted">
                    Updated {formatUpdated(guide.dateModified ?? guide.datePublished)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <FinalCta
        title="If a guide matches the house, call"
        body="The guides explain the situation. Call to be connected with a local heating and cooling professional who can see the equipment."
        context="guides-final"
      />
    </>
  );
}

function formatUpdated(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (!year || !month || !day) return iso;
  return `${months[month - 1]} ${day}, ${year}`;
}
