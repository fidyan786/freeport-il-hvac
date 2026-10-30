import { notFound } from "next/navigation";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionCall } from "@/components/SectionCall";
import { headingId, RichText } from "@/components/RichText";
import { categoryById } from "@/content/guide-categories";
import { getGuide, guides, GUIDES_LAST_UPDATED } from "@/content/guides";
import { getService } from "@/content/services";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { AFFILIATE_DISCLOSURE, primaryCtaLabel } from "@/lib/site";

export const dynamicParams = false;

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
  const category = guide.category ? categoryById(guide.category) : undefined;
  const updated = guide.dateModified ?? GUIDES_LAST_UPDATED;
  const author = guide.author ?? "Millrace Heating & Air editorial";
  const longForm = guide.body.length >= 7;
  const relatedServices = guide.relatedServices
    .map((item) => getService(item))
    .filter(Boolean);
  const relatedGuides = guide.relatedGuides
    .map((item) => getGuide(item))
    .filter(Boolean);
  const crumb = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides/" },
    ...(category
      ? [{ name: category.label, path: `/guides/#${category.id}` }]
      : []),
    { name: guide.title, path: guide.href },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumb)} />
      <JsonLd
        data={articleSchema({
          title: guide.metaTitle,
          description: guide.metaDescription,
          path: guide.href,
          datePublished: guide.datePublished,
          dateModified: updated,
          image: guide.image,
          authorName: author,
          articleSection: category?.label,
        })}
      />
      <PageHero
        eyebrow={category ? category.label : "Freeport HVAC guide"}
        title={guide.h1}
        lede={guide.lede}
        context={`guide-${guide.slug}`}
        ctaLabel={primaryCtaLabel()}
        image={guide.image}
        imageAlt={guide.imageAlt}
        priority={guide.image.startsWith("/photos/heroes/")}
      />
      <div id="page-body" className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides/" },
            ...(category
              ? [{ name: category.label, href: `/guides/#${category.id}` }]
              : []),
            { name: guide.title },
          ]}
        />
        <p className="mt-4 text-sm text-muted">
          By{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/about/">
            {author}
          </Link>
          {" · "}
          Published {formatUpdated(guide.datePublished)}
          {" · "}
          Updated {formatUpdated(updated)}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {AFFILIATE_DISCLOSURE} This guide is general information for homeowners,
          not a diagnosis and not a service agreement.{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/disclaimer/">
            Read the disclosure
          </Link>
          .
        </p>
        {guide.body.length >= 5 ? (
          <nav aria-label="On this page" className="mt-8 rounded-brand border border-line bg-white p-5">
            <h2 className="text-sm font-semibold tracking-wide text-navy uppercase">On this page</h2>
            <ol className="mt-3 grid gap-2 text-sm">
              {guide.body.map((section, index) => (
                <li key={headingId(section.heading, index)}>
                  <a
                    className="text-navy underline decoration-brass underline-offset-2"
                    href={`#${headingId(section.heading, index)}`}
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {guide.body.map((section, index) => {
          const midpoint = Math.floor((guide.body.length - 1) / 2);
          const showCall = longForm ? index === 1 : true;
          return (
            <div key={headingId(section.heading, index)}>
              <section className="mt-10" id={headingId(section.heading, index)}>
                <h2 className="font-serif text-2xl text-navy sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <RichText
                    key={`${index}-${paragraphIndex}`}
                    text={paragraph}
                    className="mt-4 leading-relaxed text-muted"
                  />
                ))}
                {showCall ? (
                  <SectionCall context={`guide-${guide.slug}-${section.heading}`} />
                ) : null}
              </section>
              {index === midpoint ? <AdSlot className="mt-10" /> : null}
            </div>
          );
        })}
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
        body="These notes describe the situation. Call to be connected with a local heating and cooling professional who can see the equipment."
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
