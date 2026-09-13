import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhoneCta } from "@/components/PhoneCta";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SafetyCallout } from "@/components/SafetyCallout";
import type { ServicePageContent } from "@/content/services";
import { getService } from "@/content/services";
import { relatedGuidesForService } from "@/lib/internal-links";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { primaryCtaLabel } from "@/lib/site";

export function ServiceTemplate({ service }: { service: ServicePageContent }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is ServicePageContent => Boolean(item));
  const relatedGuides = relatedGuidesForService(service.slug);
  const emergency = service.slug.includes("emergency");

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
          name: `${service.navLabel} in Freeport, IL`,
          description: service.metaDescription,
          path: service.href,
          serviceType: service.navLabel,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <PageHero
        eyebrow={service.eyebrow}
        title={`${service.navLabel} in Freeport, IL`}
        deck={service.h1}
        lede={service.lede}
        context={`${service.slug}-hero`}
        ctaLabel={primaryCtaLabel()}
        secondaryHref="/contact/"
        secondaryLabel="Request a callback"
        image={service.image}
        imageAlt={service.imageAlt}
        tone={emergency ? "copper" : "spruce"}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services/" },
            { name: service.navLabel },
          ]}
        />
        {service.slug === "furnace-repair-freeport-il" ||
        service.slug === "heating-repair-freeport-il" ? (
          <p className="mt-6 rounded-brand border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-muted">
            {service.slug === "furnace-repair-freeport-il" ? (
              <>
                This page is for forced-air furnaces. If you are not sure what
                heats the house, start with{" "}
                <Link
                  href="/services/heating-repair-freeport-il/"
                  className="font-semibold text-navy underline underline-offset-2"
                >
                  heating repair
                </Link>
                .
              </>
            ) : (
              <>
                Heating repair is for a cold house when the equipment is unclear,
                or when it is not a typical forced-air furnace. Gas furnace
                diagnosis lives on{" "}
                <Link
                  href="/services/furnace-repair-freeport-il/"
                  className="font-semibold text-navy underline underline-offset-2"
                >
                  furnace repair
                </Link>
                .
              </>
            )}
          </p>
        ) : null}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article>
            <h2 className="font-serif text-3xl text-navy">
              What {service.navLabel} usually looks like in Freeport
            </h2>
            <div className="mt-6 grid gap-4">
              {service.problems.map((problem) => (
                <div key={problem.title} className="surface-card p-5">
                  <h3 className="font-semibold text-navy">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{problem.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-serif text-3xl text-navy">Symptoms worth calling about</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {service.symptoms.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif text-3xl text-navy">
              What {service.navLabel} actually involves
            </h2>
            {service.explanation.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <h2 className="mt-12 font-serif text-3xl text-navy">Common causes</h2>
            <div className="mt-6 grid gap-4">
              {service.causes.map((cause) => (
                <div key={cause.title} className="border-l-2 border-ember pl-4">
                  <h3 className="font-semibold text-navy">{cause.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{cause.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-serif text-3xl text-navy">What professional service involves</h2>
            <ol className="mt-6 grid gap-4">
              {service.process.map((step, index) => (
                <li key={step.title} className="surface-card p-5">
                  <p className="text-xs tracking-[0.16em] text-ember uppercase">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 font-serif text-3xl text-navy">When to call</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {service.whenToCall.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif text-3xl text-navy">What happens next</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {service.nextSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <aside className="grid gap-6 self-start lg:sticky lg:top-32">
            <div className="surface-card p-6">
              <p className="kicker">Freeport, Illinois 61032</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Stephenson County winters and idle summers shape this work.
                Describe the symptom and the ZIP when you call.
              </p>
              <PhoneCta
                context={`${service.slug}-sidebar`}
                className="mt-5 min-h-12 w-full"
              >
                {primaryCtaLabel()}
              </PhoneCta>
              <p className="mt-4 text-sm text-muted">
                <Link href="/service-area/" className="font-semibold text-navy underline underline-offset-2">
                  Service area
                </Link>
                {" · "}
                <Link href="/contact/" className="font-semibold text-navy underline underline-offset-2">
                  Contact
                </Link>
              </p>
            </div>
            {emergency ? <SafetyCallout /> : null}
          </aside>
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy">
              Why {service.navLabel} here
            </h2>
            <ul className="mt-4 grid gap-3 text-muted">
              {service.why.map((item) => (
                <li key={item} className="surface-card p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-navy">In Freeport and Stephenson County</h2>
            {service.local.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-3xl text-navy">
            {service.navLabel} questions for Freeport homes
          </h2>
          <div className="mt-6">
            <FaqList items={service.faqs} />
          </div>
        </section>

        {related.length ? (
          <section className="mt-16">
            <RelatedLinks
              title="Related services"
              links={related.map((item) => ({
                href: item.href,
                label: item.navLabel,
                note: item.navDescription,
              }))}
            />
          </section>
        ) : null}
        {relatedGuides.length ? (
          <section className="mt-10">
            <RelatedLinks
              title="Related guides"
              links={relatedGuides.map((guide) => ({
                href: guide.href,
                label: guide.title,
              }))}
            />
          </section>
        ) : null}
      </div>
      <FinalCta
        title={`Need ${service.navLabel} in Freeport?`}
        body="Describe what the system is doing and the ZIP. We will tell you the next step."
        context={`${service.slug}-final`}
      />
    </>
  );
}
