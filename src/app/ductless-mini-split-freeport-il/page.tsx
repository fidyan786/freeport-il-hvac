import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Are mini splits useful in older Freeport homes?",
    a: "Yes, especially for additions, enclosed porches, third-floor rooms, and houses with ducts that never delivered air to a problem room. They are not automatically a whole-house replacement.",
  },
  {
    q: "Can a mini split heat in winter here?",
    a: "Cold-climate ductless systems can heat in Freeport weather if they are specified for it. A bargain unit that was never rated for this climate is a different story.",
  },
];

export const metadata = pageMetadata({
  title: "Ductless Mini Splits in Freeport, IL",
  description:
    "Ductless mini split service in Freeport, Illinois for rooms that never get heat or cooling. Call to discuss ductless options for Stephenson County homes.",
  path: "/ductless-mini-split-freeport-il/",
});

export default function MiniSplitPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Ductless Mini Splits", path: "/ductless-mini-split-freeport-il/" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Ductless Mini Split Service in Freeport, IL",
          description: "Ductless heating and cooling in Freeport.",
          path: "/ductless-mini-split-freeport-il/",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Ductless · Freeport homes"
        title="Ductless mini splits in Freeport for rooms the furnace never really reached."
        lede="Older houses, additions, and finished attics in 61032 often have a room that stays cold in January and stuffy in July. Ductless can solve that without pretending the existing ducts are fine."
        context="mini-split-hero"
        ctaLabel={`Call about mini splits · ${site.phoneDisplay}`}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Ductless Mini Splits" },
          ]}
        />
        <article className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            Mini splits move heating and cooling without a full duct run. That
            is useful when the duct system is the weak link, or when a single
            zone has always been a problem. It is not a stealth way to ignore
            a failing furnace that heats the rest of the house.
          </p>
          <p>
            Service issues look like: indoor heads that blow but do not heat,
            outdoor units iced over past a normal defrost, drainage from wall
            cassettes, or a zone that never catches up on a cold night. Those
            belong on a phone call, same as{" "}
            <a className="font-semibold text-navy underline" href="/heat-pump-services-freeport-il/">
              heat pump service
            </a>
            .
          </p>
          <p>
            If the whole house is the issue, start with{" "}
            <a className="font-semibold text-navy underline" href="/furnace-repair-freeport-il/">
              furnace repair
            </a>{" "}
            or{" "}
            <a className="font-semibold text-navy underline" href="/ac-repair-freeport-il/">
              AC repair
            </a>
            . Ductless is for the rooms those systems cannot honestly serve.
          </p>
        </article>
        <div className="mt-12">
          <FaqList items={faqs} />
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              {
                href: "/heat-pump-services-freeport-il/",
                label: "Heat pump services",
                note: "Ducted and ductless heat pumps.",
              },
              {
                href: "/indoor-air-quality-freeport-il/",
                label: "Indoor air quality",
                note: "Filtration still matters with ductless heads.",
              },
              {
                href: "/contact/",
                label: "Contact",
                note: "Describe the room that never catches up.",
              },
            ]}
          />
        </div>
      </div>
      <FinalCta
        title="Call about ductless service in Freeport"
        body="Tell us which rooms fail in winter or summer. We will talk through whether ductless is the right tool."
        context="mini-split-final"
      />
    </>
  );
}
