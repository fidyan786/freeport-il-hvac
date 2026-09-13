import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { hoursLabel, phoneDisplayLabel, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Millrace Heating & Air",
  description:
    "Millrace Heating & Air serves Freeport, Illinois with heating, cooling, and indoor air help. Honest company facts only — no invented history or awards.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <section className="relative overflow-hidden bg-spruce text-white">
        <Image
          src="/photos/maintenance.jpg"
          alt="HVAC technician performing outdoor equipment maintenance"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-spruce-deep/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="max-w-3xl font-serif text-4xl sm:text-5xl">
            A Freeport HVAC company that would rather be clear than impressive.
          </h1>
          <p className="mt-5 max-w-2xl text-white/80">
            Millrace Heating & Air is the name on this work: heating, cooling, and
            indoor air help for Freeport, Illinois 61032.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About" },
          ]}
        />
        <h2 className="mt-8 font-serif text-3xl text-spruce">How we work</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Homeowners and businesses call when something is wrong: no heat, warm air
          from the AC, a system that will not start, or a replacement they do not
          want to guess at. The useful response is diagnosis, a plain explanation,
          and a recommendation that matches the house — not a longer origin story.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Communication is part of the job. You should know what failed, what is
          safe to leave until a scheduled visit, and what needs attention now.
          Residential comfort systems and light commercial HVAC are both in scope.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-spruce">What is known</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>Company: {site.businessName}</li>
          <li>
            Market: {site.city}, {site.state} ({site.zip})
          </li>
          <li>County: {site.county}</li>
          <li>Work: furnace, AC, heat pumps, mini splits, indoor air, commercial HVAC</li>
          <li>Contact: {phoneDisplayLabel()}</li>
          <li>{hoursLabel()}</li>
        </ul>
        <h2 className="mt-10 font-serif text-2xl text-spruce">
          What we will not invent
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          A founding year, owner biography, technician roster, license numbers,
          insurance claims, manufacturer badges, financing offers, or 24/7
          guarantees do not appear here until they are real. When those details
          exist, they belong in configuration — not in marketing fiction.
        </p>
      </div>
      <FinalCta
        title="Talk with Millrace about HVAC in Freeport"
        body="The useful next step is a conversation about the system that stopped doing its job."
        context="about-final"
      />
    </>
  );
}
