import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PhoneCta } from "@/components/PhoneCta";
import { nearbyCommunities } from "@/lib/nav";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "HVAC Service Area in Freeport, IL",
  description:
    "HVAC service area for Freeport, Illinois ZIP 61032 in Stephenson County. Nearby communities listed for coverage confirmation. Call to confirm your town.",
  path: "/service-areas/",
});

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Area", path: "/service-areas/" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Service Area" },
          ]}
        />
        <h1 className="mt-6 font-serif text-4xl text-navy">
          HVAC service area: Freeport, Illinois
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Primary city: <strong className="text-ink">{site.city}</strong>,{" "}
          {site.state}, ZIP {site.zip}, {site.county}. This is not a map of
          every town a regional competitor lists in a footer.
        </p>
        <div className="mt-8 border border-navy bg-navy p-6 text-white">
          <p className="text-sm tracking-[0.16em] text-ember uppercase">
            Confirmed primary market
          </p>
          <p className="mt-2 font-serif text-3xl">Freeport, IL 61032</p>
          <PhoneCta context="service-area-primary" className="mt-5">
            Call {site.phoneDisplay} to confirm coverage
          </PhoneCta>
        </div>
        <h2 className="mt-12 font-serif text-3xl text-navy">
          Nearby Stephenson County communities
        </h2>
        <p className="mt-3 max-w-3xl text-muted">
          These are real places next to Freeport. They are not automatic
          service pledges and they do not get their own doorway pages. Call to
          confirm whether a technician can take the job.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyCommunities.map((town) => (
            <li key={town.name} className="border border-line bg-white p-4">
              <p className="font-semibold text-navy">{town.name}</p>
              <p className="text-sm text-muted">ZIP {town.zip} · confirm by phone</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          Rockford, Sterling, Dixon, Monroe, Wisconsin, and other far-flung
          cities are left off on purpose unless the business owner later
          verifies those markets.
        </p>
      </div>
      <FinalCta
        title="Not sure if we cover your street?"
        body="Call with your ZIP. Freeport 61032 is the home market. Nearby towns are a yes-or-no on the phone, not a guess on a website."
        context="service-area-final"
      />
    </>
  );
}
