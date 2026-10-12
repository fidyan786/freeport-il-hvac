import Link from "next/link";
import { SitePhoto } from "@/components/SitePhoto";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FinalCta } from "@/components/FinalCta";
import { SectionCall } from "@/components/SectionCall";
import { servicesByCategory, type ServiceCategory } from "@/content/services";
import { IMAGE_SIZES } from "@/lib/images";
import { breadcrumbSchema, serviceListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "HVAC Services in Freeport, Illinois | Millrace Heating",
  description: `HVAC services in Freeport, IL: furnace repair, AC repair, installation, maintenance, heat pumps, and emergency no-heat calls. Call ${site.phoneDisplay}.`,
  path: "/services/",
});

const sections: Array<{
  id: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  category: ServiceCategory;
}> = [
  {
    id: "emergency",
    title: "Emergency HVAC",
    intro:
      "No heat on a sub-freezing night, or no cooling when someone cannot safely wait. Gas leaks and carbon monoxide alarms start with 911 and Nicor, not with this page.",
    image: "/photos/heroes/snow-street-oak-park-illinois.webp",
    imageAlt: "Snow-covered houses along a residential street.",
    category: "emergency",
  },
  {
    id: "heating",
    title: "Heating",
    intro:
      "Furnace repair, heating repair when the equipment is unclear, and furnace installation when this unit should not carry another Stephenson County winter.",
    image: "/photos/heroes/gas-furnace-utility.webp",
    imageAlt: "Gas furnace in a utility space.",
    category: "heating",
  },
  {
    id: "cooling",
    title: "Cooling",
    intro:
      "AC repair for a unit that will not cool after sitting all winter, and AC installation when that outdoor unit should be replaced.",
    image: "/photos/heroes/outdoor-ac-condenser.webp",
    imageAlt: "Outdoor air-conditioner condenser on a concrete pad beside a house.",
    category: "cooling",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    intro:
      "A seasonal check of the furnace before the long cold, and of the air conditioner before the first humid week. Not a substitute for a breakdown.",
    image: "/photos/heroes/gas-furnace-utility.webp",
    imageAlt: "Gas furnace scheduled for seasonal maintenance.",
    category: "maintenance",
  },
  {
    id: "heat-pumps",
    title: "Heat Pumps",
    intro:
      "Ducted heat pumps that have to heat through Freeport nights in the teens, including repair, installation, and maintenance on one page.",
    image: "/photos/heroes/outdoor-ac-condenser.webp",
    imageAlt: "Outdoor heat pump or air conditioner cabinet on a concrete pad.",
    category: "heat-pump",
  },
  {
    id: "ductless",
    title: "Ductless Mini Splits",
    intro:
      "A wall or ceiling head for an addition or upstairs room the original ducts never served well.",
    image: "/photos/heroes/ductless-indoor-unit.webp",
    imageAlt: "Wall-mounted ductless indoor unit.",
    category: "ductless",
  },
  {
    id: "iaq",
    title: "Indoor Air Quality",
    intro:
      "Filters and humidity equipment for houses that stay closed from late fall through March. Not a medical claim.",
    image: "/photos/heroes/basement-flexible-ducts.webp",
    imageAlt: "Flexible air ducts in an unfinished basement.",
    category: "iaq",
  },
  {
    id: "residential",
    title: "Residential HVAC",
    intro:
      "The overview for a Freeport house: furnace, air conditioner, and the ducts between them, when you are not sure which page fits.",
    image: "/photos/heroes/spring-jackson-freeport-illinois.webp",
    imageAlt: "Houses at the corner of Spring and Jackson streets in Freeport, Illinois.",
    category: "residential",
  },
  {
    id: "commercial",
    title: "Commercial HVAC",
    intro:
      "Shops, offices, churches, and similar buildings, usually with rooftop or packaged equipment rather than a basement furnace.",
    image: "/photos/heroes/rooftop-packaged-hvac-units.webp",
    imageAlt: "Packaged rooftop heating and cooling units on a commercial roof.",
    category: "commercial",
  },
];

function itemsFor(category: ServiceCategory) {
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
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Freeport, Illinois 61032</p>
          <h1 className="mt-3 max-w-3xl text-4xl text-balance text-navy">
            Heating and cooling topics in Freeport, IL
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Furnace and air conditioning repair, installation, maintenance, heat
            pumps, ductless systems, indoor air, and small-building equipment.
            Call to be connected with a local heating and cooling professional.
          </p>
          <SectionCall context="services-hero" />
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
                  <SitePhoto
                    src={section.image}
                    alt={section.imageAlt}
                    sizes={IMAGE_SIZES.split}
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="text-3xl text-navy">{section.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{section.intro}</p>
                  <ul className="mt-6 grid gap-2">
                    {items.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.href}
                          className="group flex items-baseline justify-between gap-4 border-b border-line py-2.5"
                        >
                          <span className="font-semibold text-navy group-hover:underline">
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
              <SectionCall context={`services-${section.id}`} />
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
      <FinalCta
        title="Call about a heating or cooling problem in Freeport"
        body="Call to be connected with a local heating and cooling professional."
        context="services-final"
      />
    </>
  );
}
