import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getGuide, guides } from "@/content/guides";
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
          title: guide.h1,
          description: guide.metaDescription,
          path: guide.href,
          datePublished: guide.datePublished,
        })}
      />
      <PageHero
        eyebrow="Freeport HVAC guide"
        title={guide.h1}
        lede={guide.lede}
        context={`guide-${guide.slug}`}
        ctaLabel={primaryCtaLabel()}
        secondaryHref="/contact/"
        secondaryLabel="Request service"
        image={guide.image}
        imageAlt={guide.imageAlt}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides/" },
            { name: guide.title },
          ]}
        />
        <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={guide.image}
            alt={guide.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        {guide.body.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl text-spruce sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        {relatedServices.length ? (
          <section className="mt-12">
            <h2 className="font-serif text-2xl text-spruce">Related services</h2>
            <ul className="mt-4 grid gap-2">
              {relatedServices.map((service) =>
                service ? (
                  <li key={service.slug}>
                    <Link className="font-semibold text-spruce underline" href={service.href}>
                      {service.navLabel}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </section>
        ) : null}
        {relatedGuides.length ? (
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-spruce">Related guides</h2>
            <ul className="mt-4 grid gap-2">
              {relatedGuides.map((item) =>
                item ? (
                  <li key={item.slug}>
                    <Link className="font-semibold text-spruce underline" href={item.href}>
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
        title="If this sounds like your house, request HVAC help"
        body="Guides explain the symptom. A technician still has to see the equipment."
        context={`guide-${guide.slug}-final`}
      />
    </>
  );
}
