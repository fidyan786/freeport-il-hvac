import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesByCategory, type ServiceCategory } from "@/content/services";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HVAC Services in Freeport, IL",
  description:
    "Furnace, air conditioning, heat pump, mini split, indoor air, and commercial HVAC services for Freeport, Illinois 61032.",
  path: "/services/",
});

const sections: Array<{ id: string; title: string; category: ServiceCategory | "specialized" }> = [
  { id: "heating", title: "Heating", category: "heating" },
  { id: "cooling", title: "Cooling", category: "cooling" },
  { id: "hvac", title: "HVAC", category: "hvac" },
  { id: "iaq", title: "Indoor Air Quality", category: "iaq" },
  { id: "specialized", title: "Heat Pumps & Mini Splits", category: "specialized" },
  { id: "commercial", title: "Commercial", category: "commercial" },
];

function itemsFor(category: ServiceCategory | "specialized") {
  if (category === "specialized") {
    return [
      ...servicesByCategory("heat-pump"),
      ...servicesByCategory("ductless"),
    ];
  }
  return servicesByCategory(category);
}

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ])}
      />
      <section className="bg-spruce text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">
            Freeport, Illinois 61032
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-balance sm:text-5xl">
            HVAC services for a town that heats more than it cools.
          </h1>
          <p className="mt-5 max-w-2xl text-white/80">
            Millrace Heating & Air covers the work Freeport actually searches for:
            furnace and AC repair, replacement, maintenance, heat pumps, ductless,
            indoor air, and commercial systems.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28 py-8">
            <h2 className="font-serif text-3xl text-spruce">{section.title}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {itemsFor(section.category).map((service) => (
                <ServiceCard
                  key={service.slug}
                  href={service.href}
                  title={service.navLabel}
                  text={service.navDescription}
                  image={service.image}
                  imageAlt={service.imageAlt}
                />
              ))}
            </div>
          </section>
        ))}
        <p className="mt-8 text-sm text-muted">
          Looking for a symptom instead of a service name? Start with the{" "}
          <Link href="/guides/" className="font-semibold text-spruce underline">
            HVAC guides
          </Link>
          .
        </p>
      </div>
    </>
  );
}
