import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SitePhoto } from "@/components/SitePhoto";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { SectionCall } from "@/components/SectionCall";
import { IMAGE_SIZES } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { AFFILIATE_DISCLOSURE, phoneDisplayLabel, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Millrace Heating & Air | Freeport, IL",
  description:
    "Millrace Heating & Air is a Freeport, Illinois website that connects callers with independent local heating and cooling professionals. It is not itself a contractor.",
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
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-6">
            <p className="kicker">Freeport, Illinois</p>
            <h1 className="mt-3 max-w-xl text-4xl text-navy">About this website</h1>
            <p className="mt-5 max-w-xl text-muted">
              {AFFILIATE_DISCLOSURE} The name comes from the mill races that once
              ran along the Pecatonica in Stephenson County.
            </p>
          </div>
          <div className="relative min-h-[16rem] lg:min-h-[22rem]">
            <SitePhoto
              src="/photos/stephenson-county-courthouse-freeport.webp"
              alt="Stephenson County Courthouse in Freeport, Illinois."
              priority
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
        <h2 className="mt-8 text-3xl text-navy">What this site does</h2>
        <p className="mt-4 text-muted">
          Homeowners and businesses call when something is wrong: no heat, warm
          air from the air conditioner, or a system that will not start. The
          phone number connects that call with an independent local service
          provider.
        </p>
        <p className="mt-4 text-muted">{AFFILIATE_DISCLOSURE}</p>
        <SectionCall context="about-role" />
        <h2 className="mt-10 text-2xl text-navy">Written for 61032</h2>
        <p className="mt-4 text-muted">
          Pages are written around Freeport first: Stephenson County winters,
          short cooling weeks, and the houses on these streets. Nearby towns are
          listed on the service area page so a caller can name them.
        </p>
        <h2 className="mt-10 text-2xl text-navy">At a glance</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>Website: {site.businessName}</li>
          <li>
            City: {site.city}, {site.state} ({site.zip})
          </li>
          <li>County: {site.county}</li>
          <li>Phone: {phoneDisplayLabel()}</li>
        </ul>
        <SectionCall context="about-facts" />
      </div>
      <FinalCta
        title="Call for heating and cooling help in Freeport"
        body="Call to be connected with a local heating and cooling professional."
        context="about-final"
      />
    </>
  );
}
