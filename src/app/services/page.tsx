import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getService, servicesByCategory, type ServiceCategory, type ServicePageContent } from "@/content/services";
import { IMAGE_SIZES } from "@/lib/images";
import { breadcrumbSchema, serviceListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HVAC Services in Freeport, IL | Millrace",
  description:
    "HVAC services in Freeport, IL: furnace repair, AC repair, installation, maintenance, emergency HVAC, residential HVAC, and commercial HVAC for 61032.",
  path: "/services/",
});

const sections: Array<{
  id: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  category: ServiceCategory | "specialized" | "emergency" | "residential";
}> = [
  {
    id: "cooling",
    title: "Cooling",
    intro:
      "Air conditioners in Freeport spend most of the year idle. Repair, installation, replacement, and spring maintenance are different jobs — start with the one you actually need.",
    image: "/photos/ac-outdoor.jpg",
    imageAlt: "Outdoor air conditioner beside a brick Midwestern home",
    category: "cooling",
  },
  {
    id: "heating",
    title: "Heating",
    intro:
      "Furnaces and heating systems carry Stephenson County winters. No heat is not the same problem as a planned replacement or a fall tune-up.",
    image: "/photos/furnace-service.jpg",
    imageAlt: "HVAC technician servicing a residential furnace in a Midwestern home",
    category: "heating",
  },
  {
    id: "residential",
    title: "Residential HVAC",
    intro:
      "Most Freeport calls are houses: furnaces that carry winter, air conditioners that sat idle, and the shared blower and ducts between them. Start here if you need a home HVAC contractor rather than a rooftop visit.",
    image: "/photos/hero-home-winter.jpg",
    imageAlt: "Snow-covered Freeport-area home that depends on residential heating and cooling",
    category: "residential",
  },
  {
    id: "heat-pumps",
    title: "Heat Pumps",
    intro:
      "Heat pumps and ductless mini splits have to heat through real cold, not just shoulder-season weather. Repair, installation, and maintenance are listed separately.",
    image: "/photos/heat-pump.jpg",
    imageAlt: "Heat pump outdoor unit beside a ranch home",
    category: "specialized",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    intro:
      "Seasonal checks catch failing parts before a January night or the first hot week. Maintenance is inspection and cleaning — not a substitute for repair.",
    image: "/photos/maintenance.jpg",
    imageAlt: "Technician performing outdoor HVAC maintenance",
    category: "hvac",
  },
  {
    id: "iaq",
    title: "Indoor Air Quality",
    intro:
      "Closed-up Freeport houses recirculate whatever the returns pull. Filtration and humidity equipment are comfort tools, explained without medical claims.",
    image: "/photos/iaq-filter.jpg",
    imageAlt: "Furnace filter and indoor air equipment at a return plenum",
    category: "iaq",
  },
  {
    id: "commercial",
    title: "Commercial HVAC",
    intro:
      "Offices, shops, churches, and similar Freeport buildings. Rooftop units, business heating, and opening-day comfort — confirmed on the call.",
    image: "/photos/commercial.jpg",
    imageAlt: "Commercial rooftop HVAC units on a small-city building",
    category: "commercial",
  },
  {
    id: "emergency",
    title: "Emergency HVAC",
    intro:
      "Urgent no-heat and no-cooling calls. If you smell gas or a carbon monoxide alarm is sounding, leave the property first.",
    image: "/photos/emergency-night.jpg",
    imageAlt: "Winter night service visit at a Midwestern home",
    category: "emergency",
  },
];

function bySlugs(slugs: string[]): ServicePageContent[] {
  return slugs
    .map((slug) => getService(slug))
    .filter((service): service is ServicePageContent => Boolean(service));
}

function itemsFor(category: ServiceCategory | "specialized" | "emergency" | "residential") {
  if (category === "specialized") {
    return [...servicesByCategory("heat-pump"), ...servicesByCategory("ductless")];
  }
  if (category === "emergency") {
    return bySlugs(["emergency-hvac-freeport-il", "hvac-repair-freeport-il"]);
  }
  if (category === "residential") {
    return bySlugs([
      "residential-hvac-freeport-il",
      "furnace-repair-freeport-il",
      "ac-repair-freeport-il",
      "hvac-maintenance-freeport-il",
    ]);
  }
  if (category === "hvac") {
    return bySlugs([
      "hvac-maintenance-freeport-il",
      "ac-maintenance-freeport-il",
      "furnace-maintenance-freeport-il",
      "heat-pump-maintenance-freeport-il",
      "commercial-hvac-maintenance-freeport-il",
      "hvac-replacement-freeport-il",
    ]);
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
      <JsonLd data={serviceListSchema()} />
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker !text-brass">
            Freeport, Illinois 61032
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-balance sm:text-5xl">
            HVAC services in Freeport, IL
          </h1>
          <p className="mt-5 max-w-2xl text-white/80">
            Furnace and AC repair, installation, maintenance, heat pumps,
            ductless systems, indoor air, commercial HVAC, and urgent no-heat
            or no-cooling help.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services" },
          ]}
        />
        {sections.map((section, index) => {
          const items = itemsFor(section.category);
          const imageRight = index % 2 === 1;
          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-b border-line py-12 last:border-b-0"
            >
              <div
                className={`grid items-start gap-8 lg:grid-cols-2 ${imageRight ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[16/10] min-w-0 overflow-hidden rounded-brand bg-line">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    priority={index === 0}
                    sizes={IMAGE_SIZES.split}
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="font-serif text-3xl text-navy">{section.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{section.intro}</p>
                  <ul className="mt-6 grid gap-2">
                    {items.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.href}
                          className="group flex items-baseline justify-between gap-4 border-b border-line py-2.5"
                        >
                          <span className="font-semibold text-navy group-hover:text-ember">
                            {service.navLabel}
                          </span>
                          <span className="hidden min-w-0 truncate text-sm text-muted sm:block">
                            {service.navDescription}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
        <p className="mt-8 text-sm text-muted">
          Looking for a symptom instead of a service name? Start with the{" "}
          <Link href="/guides/" className="font-semibold text-navy underline underline-offset-2">
            HVAC guides
          </Link>
          .
        </p>
      </div>
    </>
  );
}
