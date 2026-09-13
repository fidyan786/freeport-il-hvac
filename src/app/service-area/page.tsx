import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { nearbyCommunities } from "@/lib/nav";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "HVAC Service Area: Freeport, IL 61032",
  description:
    "Millrace Heating & Air’s primary service city is Freeport, Illinois 61032 in Stephenson County. Nearby towns are confirmed by phone.",
  path: "/service-area/",
});

export default function ServiceAreaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Area", path: "/service-area/" },
        ])}
      />
      <section className="bg-spruce text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="max-w-3xl font-serif text-4xl sm:text-5xl">
            HVAC service centered on Freeport, Illinois.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Primary city: {site.city} {site.zip}, {site.county}. Nearby communities
            are listed so you can ask — not so a website can pretend every village
            has its own office.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Service Area" },
          ]}
        />
        <h2 className="mt-8 font-serif text-3xl text-spruce">Primary market</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Freeport is the city this site is built for. Heating demand here is the
          high-stakes season. Cooling still matters, especially after equipment
          sits idle through winter.
        </p>
        <h2 className="mt-10 font-serif text-3xl text-spruce">
          Nearby Stephenson County towns
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Coverage for these communities is confirmed when you call. Distance,
          weather, and current work all matter. None of these towns are automatic
          dispatches, and none of them get a thin doorway page.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {nearbyCommunities.map((town) => (
            <li key={town.zip} className="rounded-xl bg-white px-4 py-3 ring-1 ring-line">
              <span className="font-semibold text-spruce">{town.name}</span>
              <span className="ml-2 text-sm text-muted">{town.zip}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          Need a specific service in 61032? Start at{" "}
          <Link href="/services/" className="font-semibold text-spruce underline">
            HVAC services
          </Link>{" "}
          or{" "}
          <Link href="/contact/" className="font-semibold text-spruce underline">
            contact
          </Link>
          .
        </p>
      </div>
      <FinalCta
        title="Confirm coverage for your ZIP"
        body="Freeport 61032 is the home market. Other Stephenson County towns are a phone conversation."
        context="service-area-final"
      />
    </>
  );
}
