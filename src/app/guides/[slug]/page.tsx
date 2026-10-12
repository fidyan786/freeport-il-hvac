import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionCall } from "@/components/SectionCall";
import { getGuide, guides, GUIDES_LAST_UPDATED } from "@/content/guides";
import { getService } from "@/content/services";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { primaryCtaLabel } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: guide.href,
    type: "article",
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const relatedServices = guide.relatedServices
    .map((item) => getService(item))
    .filter(Boolean);
  const relatedGuides = guide.relatedGuides
    .map((item) => getGuide(item))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides/" },
          { name: guide.title, path: guide.href },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: guide.metaTitle,
          description: guide.metaDescription,
          path: guide.href,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified ?? GUIDES_LAST_UPDATED,
          image: guide.image,
        })}
      />
      <PageHero
        eyebrow="Freeport HVAC guide"
        title={guide.h1}
        lede={guide.lede}
        context={`guide-${guide.slug}`}
        ctaLabel={primaryCtaLabel()}
        image={guide.image}
        imageAlt={guide.imageAlt}
        priority={guide.image.startsWith("/photos/heroes/")}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides/" },
            { name: guide.title },
          ]}
        />
        <p className="mt-4 text-sm text-muted">
          Last updated{" "}
          {formatUpdated(guide.dateModified ?? GUIDES_LAST_UPDATED)}.
        </p>
        {guide.body.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            <SectionCall context={`guide-${guide.slug}-${section.heading}`} />
          </section>
        ))}
        {relatedServices.length ? (
          <section className="mt-12">
            <h2 className="font-serif text-2xl text-navy">Related services</h2>
            <ul className="mt-4 grid gap-2">
              {relatedServices.map((service) =>
                service ? (
                  <li key={service.slug}>
                    <Link className="font-semibold text-navy underline underline-offset-2" href={service.href}>
                      {service.navLabel} in Freeport
                    </Link>
                  </li>
                ) : null,
              )}
              <li>
                <Link
                  className="font-semibold text-navy underline underline-offset-2"
                  href="/service-area/"
                >
                  Freeport and Stephenson County service area
                </Link>
              </li>
              {relatedServices.some(
                (service) => service?.slug === "emergency-hvac-freeport-il",
              ) ? null : (
                <li>
                  <Link
                    className="font-semibold text-navy underline underline-offset-2"
                    href="/services/emergency-hvac-freeport-il/"
                  >
                    Emergency HVAC in Freeport
                  </Link>
                </li>
              )}
            </ul>
          </section>
        ) : null}
        {relatedGuides.length ? (
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-navy">Related guides</h2>
            <ul className="mt-4 grid gap-2">
              {relatedGuides.map((item) =>
                item ? (
                  <li key={item.slug}>
                    <Link className="font-semibold text-navy underline underline-offset-2" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </section>
        ) : null}
      </div>
      <FinalCta
        title="If this sounds like the house, call"
        body="These notes describe the symptom. Call to be connected with a local heating and cooling professional who can see the equipment."
        context={`guide-${guide.slug}-final`}
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
