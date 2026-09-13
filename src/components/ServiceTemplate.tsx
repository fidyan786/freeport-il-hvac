import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SafetyCallout } from "@/components/SafetyCallout";
import type { ServicePageContent } from "@/content/services";
import { getService } from "@/content/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { primaryCtaLabel } from "@/lib/site";

export function ServiceTemplate({ service }: { service: ServicePageContent }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is ServicePageContent => Boolean(item));
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
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
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
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article>
            <h2 className="font-serif text-3xl text-spruce">What this usually looks like</h2>
            <div className="mt-6 grid gap-4">
              {service.problems.map((problem) => (
                <div key={problem.title} className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="font-semibold text-spruce">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{problem.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-serif text-3xl text-spruce">Symptoms worth calling about</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {service.symptoms.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif text-3xl text-spruce">What the service actually is</h2>
            {service.explanation.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <h2 className="mt-12 font-serif text-3xl text-spruce">Common causes</h2>
            <div className="mt-6 grid gap-4">
              {service.causes.map((cause) => (
                <div key={cause.title} className="border-l-2 border-copper pl-4">
                  <h3 className="font-semibold text-spruce">{cause.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{cause.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-serif text-3xl text-spruce">What professional service involves</h2>
            <ol className="mt-6 grid gap-4">
              {service.process.map((step, index) => (
                <li key={step.title} className="rounded-2xl bg-white p-5 ring-1 ring-line">
                  <p className="text-xs tracking-[0.16em] text-copper uppercase">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-semibold text-spruce">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 font-serif text-3xl text-spruce">When to call</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {service.whenToCall.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif text-3xl text-spruce">What happens next</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              {service.nextSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <aside className="grid gap-6 self-start lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-spruce">Freeport, Illinois 61032</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Stephenson County winters and idle summers shape this work.
                  Describe the symptom and the ZIP when you call.
                </p>
              </div>
            </div>
            {emergency ? <SafetyCallout /> : null}
          </aside>
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-spruce">Why this service</h2>
            <ul className="mt-4 grid gap-3 text-muted">
              {service.why.map((item) => (
                <li key={item} className="rounded-xl bg-white p-4 ring-1 ring-line">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-spruce">In Freeport and Stephenson County</h2>
            {service.local.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-3xl text-spruce">Questions</h2>
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
            <p className="mt-4 text-sm">
              <Link href="/guides/" className="font-semibold text-spruce underline">
                Read HVAC guides
              </Link>
            </p>
          </section>
        ) : null}
      </div>
      <FinalCta
        title={`Need ${service.navLabel.toLowerCase()} in Freeport?`}
        body="Describe what the system is doing and the ZIP. We will tell you the next step."
        context={`${service.slug}-final`}
      />
    </>
  );
}
