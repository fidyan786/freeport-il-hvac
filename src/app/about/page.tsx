import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { IMAGE_SIZES } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { hoursLabel, phoneDisplayLabel, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "HVAC Contractor in Freeport, IL | Millrace",
  description:
    "Millrace Heating & Air is an HVAC contractor in Freeport, Illinois serving 61032 with furnace repair, AC repair, and heating and cooling for homes and businesses.",
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
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">
              Freeport, Illinois
            </p>
            <h1 className="mt-3 max-w-xl font-serif text-4xl sm:text-5xl">
              HVAC contractor in Freeport, IL
            </h1>
            <p className="mt-5 max-w-xl text-white/80">
              Millrace Heating & Air is the HVAC company for Freeport 61032 —
              heating, cooling, and indoor air help named for the mill races
              that once ran along the Pecatonica in Stephenson County.
            </p>
          </div>
          <div className="relative min-h-[16rem] lg:min-h-[22rem]">
            <Image
              src="/photos/maintenance.jpg"
              alt="HVAC technician performing outdoor equipment maintenance"
              fill
              className="object-cover"
              sizes={IMAGE_SIZES.hero}
            />
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About" },
          ]}
        />
        <h2 className="mt-8 font-serif text-3xl text-navy">How we work</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Homeowners and businesses call when something is wrong: no heat, warm
          air from the AC, a system that will not start, or equipment that is
          due for a seasonal check. The useful response is diagnosis, a plain
          explanation, and a recommendation that matches the house.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          You should know what failed, what is safe to leave until a scheduled
          visit, and what needs attention now. Residential HVAC and light
          commercial HVAC are both in scope.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-navy">
          A Freeport-first HVAC company
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Searches for an HVAC contractor in Freeport, IL often land on regional
          companies, manufacturer microsites, or national directory pages that
          list this city as one name among dozens. This site is written around
          61032 first: Stephenson County winters, short cooling weeks, and the
          houses that actually sit on these streets.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          We do not invent licenses, awards, review scores, or 24-hour coverage
          to look like a bigger shop. If a claim is not a verified business
          fact, it stays off the page.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-navy">Freeport, at a glance</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>Company: {site.businessName}</li>
          <li>
            Market: {site.city}, {site.state} ({site.zip})
          </li>
          <li>County: {site.county}</li>
          <li>Work: residential HVAC, furnace, AC, heat pumps, mini splits, indoor air, commercial HVAC</li>
          <li>Contact: {phoneDisplayLabel()}</li>
          {hoursLabel() ? <li>{hoursLabel()}</li> : null}
        </ul>
      </div>
      <FinalCta
        title="Talk with Millrace about HVAC in Freeport"
        body="Tell us what the system is doing. We will tell you the next step."
        context="about-final"
      />
    </>
  );
}
