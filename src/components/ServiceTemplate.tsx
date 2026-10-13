import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhoneCta } from "@/components/PhoneCta";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SafetyCallout } from "@/components/SafetyCallout";
import { SectionCall } from "@/components/SectionCall";
import type { ServicePageContent } from "@/content/service-types";
import { getService } from "@/content/services";
import { relatedGuidesForService } from "@/lib/internal-links";
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  serviceSchema,
  speakableWebPage,
} from "@/lib/schema";
import { primaryCtaLabel } from "@/lib/site";

const CORE_LINKS = [
  {
    slug: "emergency-hvac-freeport-il",
    href: "/services/emergency-hvac-freeport-il/",
    label: "Emergency HVAC in Freeport",
    note: "No heat or no cooling that should not wait on a milder day.",
  },
  {
    slug: "hvac-maintenance-freeport-il",
    href: "/services/hvac-maintenance-freeport-il/",
    label: "HVAC maintenance in Freeport",
    note: "A seasonal check before the next cold snap or the first hot week.",
  },
  {
    slug: "service-area",
    href: "/service-area/",
    label: "Freeport and Stephenson County service area",
    note: "Freeport first, then the nearby towns, confirmed on the call.",
  },
];

export function ServiceTemplate({ service }: { service: ServicePageContent }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is ServicePageContent => Boolean(item));
  const relatedGuides = relatedGuidesForService(service.slug);
  const coreLinks = CORE_LINKS.filter((item) => item.slug !== service.slug);
  const showSafety =
    service.slug.includes("emergency") ||
    service.slug.includes("furnace") ||
    service.slug.includes("heating");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.navLabel, path: service.href },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: service.h1,
          description: service.metaDescription,
          path: service.href,
          serviceType: service.navLabel,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={speakableWebPage({
          name: service.h1,
          description: service.directAnswer ?? service.lede,
          path: service.href,
        })}
      />
      {service.checks?.length ? (
        <JsonLd
          data={howToSchema({
            name: `Checks before calling about ${service.navLabel} in Freeport`,
            description:
              "Homeowner checks only. This site does not perform the repair.",
            path: service.href,
            steps: service.checks,
          })}
        />
      ) : null}
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        lede={service.lede}
        context={`${service.slug}-hero`}
        ctaLabel={primaryCtaLabel()}
        image={service.image}
        imageAlt={service.imageAlt}
      />
      <div id="page-body" data-reveal className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services/" },
            { name: service.navLabel },
          ]}
        />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article>
            {service.directAnswer ? (
              <p className="speakable rounded-brand border border-line bg-paper p-5 leading-relaxed text-navy">
                {service.directAnswer}
              </p>
            ) : null}
            {service.sections.map((section, index) => {
              const midpoint = Math.floor((service.sections.length - 1) / 2);
              return (
                <div key={section.heading}>
                  <section data-reveal className={index === 0 ? "mt-0" : "mt-12"}>
                    <h2 className="text-3xl text-navy">{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="mt-4 leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.subsections?.map((sub) => (
                      <div key={sub.heading} className="mt-6">
                        <h3 className="text-xl text-navy">{sub.heading}</h3>
                        {sub.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 48)}
                            className="mt-3 leading-relaxed text-muted"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </section>
                  {index === midpoint ? <AdSlot className="mt-12" /> : null}
                </div>
              );
            })}
            {service.decision ? (
              <section data-reveal className="mt-12">
                <h2 className="text-3xl text-navy">{service.decision.heading}</h2>
                {service.decision.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-4 leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
                <ul className="mt-4 grid gap-2">
                  {service.decision.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-semibold text-navy underline underline-offset-2"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
            {service.checks?.length ? (
              <section data-reveal className="mt-12">
                <h2 className="text-3xl text-navy">
                  What a homeowner can check before calling
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  These are safe look-and-see steps. They are not a repair
                  procedure, and this site does not do the work.
                </p>
                <ol className="mt-6 grid gap-4">
                  {service.checks.map((step, index) => (
                    <li
                      key={step.name}
                      id={`check-${index + 1}`}
                      className="surface-card p-5"
                    >
                      <h3 className="text-xl text-navy">
                        {index + 1}. {step.name}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
            <SectionCall context={`${service.slug}-body`} />
          </article>
          <aside className="grid gap-6 self-start lg:sticky lg:top-32">
            <div className="surface-card p-6 shadow-[var(--glow)]">
              <p className="kicker">Freeport, Illinois 61032</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Say what the equipment is doing, the town, and the ZIP. This
                site connects that call with an independent local heating and
                cooling professional.
              </p>
              <PhoneCta
                location="inline"
                context={`${service.slug}-sidebar`}
                className="mt-5 w-full"
              >
                {primaryCtaLabel()}
              </PhoneCta>
              <ul className="mt-5 grid gap-3 text-sm">
                {coreLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-semibold text-navy underline underline-offset-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {showSafety ? <SafetyCallout /> : null}
          </aside>
        </div>

        <section data-reveal className="mt-16">
          <h2 className="text-3xl text-navy">Questions people ask before they call</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} />
          </div>
        </section>

        <section className="mt-16">
          <RelatedLinks
            title="Related pages"
            links={[
              ...coreLinks.map((item) => ({
                href: item.href,
                label: item.label,
                note: item.note,
              })),
              ...related.map((item) => ({
                href: item.href,
                label: `${item.navLabel} in Freeport`,
                note: item.navDescription,
              })),
            ]}
          />
        </section>
        {relatedGuides.length ? (
          <section className="mt-10">
            <RelatedLinks
              title="Symptom guides"
              links={relatedGuides.map((guide) => ({
                href: guide.href,
                label: guide.title,
              }))}
            />
          </section>
        ) : null}
      </div>
      <FinalCta
        title={`Call about ${service.navLabel.toLowerCase()} in Freeport`}
        body="Call to be connected with a local heating and cooling professional. Describe the symptom and the ZIP."
        context={`${service.slug}-final`}
      />
    </>
  );
}
