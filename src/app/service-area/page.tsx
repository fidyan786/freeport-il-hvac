import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionCall } from "@/components/SectionCall";
import { nearbyCommunities } from "@/lib/nav";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const townNotes: Record<string, string> = {
  Lena: "Lena sits northwest of Freeport, ZIP 61048, with village streets and farm roads that are a real drive rather than a Freeport errand. Houses here see the same long heating season and the same idle air conditioners. Loescher publishes a Lena office at 130 W. Main Street and a Freeport office on S. Walnut Road. That is their footprint, not a dispatch board for this website. Say Lena and 61048 first so the person you reach can decide whether the route works that day.",
  Cedarville: "Cedarville, 61013, is just north of Freeport, close enough that people treat it as the edge of town and far enough that a rural address still needs to be said out loud. Older houses and the same Stephenson County cold apply. Do not assume a Freeport visit continues to Cedarville without asking. Give the ZIP with the symptom.",
  Dakota: "Dakota, 61018, is east of Freeport, a small village where the heating equipment is often in an older house rather than a new subdivision. Wind and a long freeze hit the same way. If the furnace is out, say how cold the rooms are. If you are calling about a shop or a grain-office style building, say commercial so the visit is not planned as a basement furnace.",
  "Pearl City": "Pearl City, 61062, is southwest of Freeport. The drive is part of the call, especially in snow. Houses and a few small buildings share the heating-first climate: furnaces that have to work for months, condensers that sit until the humid stretch. Name Pearl City before you describe the equipment. Coverage is confirmed, not implied by the ZIP being in the county.",
  Orangeville: "Orangeville, 61060, is north of Freeport, toward the state line, where nights are not milder than the city and the drive is longer. A heat pump or a furnace that quits here has the same urgency as one in 61032 if the house is falling in temperature, and less certainty that someone can get there. Say Orangeville, the ZIP, and the indoor temperature.",
  Ridott: "Ridott, 61067, is a small community southeast of Freeport. Addresses may be rural even when the ZIP is local. Furnace and well-house freeze concerns show up in the same cold snaps as the city. Say whether the building is a house and whether the lane is open. This site cannot see the driveway. The person you call can ask.",
  "German Valley": "German Valley, 61039, is south of Freeport, a village with the same closed-up winters and the same short cooling season. Shorter Freeport city pages often skip it. Longer service-area lists, including Bomar’s, include the name and then move on. Older housing and outbuildings mean the first sentence should say house, shop, or farm building. The town name aims the visit. It is not its own website.",
  Davis: "Davis, 61019, is northeast of Freeport. It is easy to underestimate the drive when the map looks close and the roads are not. Kerley’s site, which describes Rockford as home base and also publishes a Rock City street address, names Davis along with Dakota and Freeport. A name on that list is not a truck already assigned. Give Davis and the ZIP, and say if the system is the only heat in the house.",
  "Rock City": "Rock City, 61070, is a small village northeast of Freeport. Homestead Heating & Air Conditioning publishes 9570 N. Rock City Road. Kerley Heating and Cooling publishes 3762 N. Farwell Bridge Road and describes Rockford as its home base. Those are street listings, not proof that Winslow or German Valley is on the same route. Describe the furnace or the outdoor unit the way you would in Freeport, and let the address decide whether a visit can be made.",
  Winslow: "Winslow, 61089, is west of Freeport, toward the county edge. It shows up on long service-area checklists and not on the shorter Freeport city pages that stop at Lena, Ridott, and Rock City. Snow and a longer drive matter more here than they do for a call inside 61032. Say Winslow first. If the house is losing heat after dark, say the indoor temperature so emergency HVAC is not confused with a routine repair that can wait for a clearer road.",
};

const faqs = [
  {
    q: "Is ZIP 61032 covered?",
    a: "Freeport 61032 is the city this site is written for, and it is the ZIP to give first. Calling connects you with an independent local heating and cooling professional who confirms the address. This page is not a dispatch board, and it does not assign a truck.",
    detail:
      "Say the street only to the person you reach. The website does not collect a service address in a form, because there is no form.",
  },
  {
    q: "Are Lena, Cedarville, Dakota, and Pearl City separate pages?",
    a: "No. Nearby Stephenson County towns are described on this one page so you can name yours. They are not doorway city sites. Whether a visit can reach that town depends on distance and the day’s work, and it is confirmed on the call.",
    detail:
      "Orangeville, Ridott, German Valley, Davis, Rock City, and Winslow are listed the same way. A listing is not a promise of same-day arrival.",
  },
  {
    q: "What should I say if I am outside Freeport?",
    a: "Say the town, the ZIP, and the symptom in the first sentence. No heat, no cooling, or a system that will not start is enough to start. If you smell gas or a carbon monoxide alarm is sounding, leave and call 911 and Nicor Gas before this number.",
    detail:
      "Emergency HVAC is the right description when the indoor temperature is falling in the cold or someone cannot safely wait through the heat. Ordinary repairs can name furnace or AC repair.",
  },
  {
    q: "Why is there no map on this page?",
    a: "A map embed would imply a service boundary this website does not control. Coverage is whatever the independent local professional can actually reach that day. The towns below are context for the call, not a drawn territory. Ask on the phone.",
    detail:
      "Freeport is the center of the writing. Rural roads, a storm, or a full schedule can change whether a nearby ZIP is reachable. Ask. Do not assume.",
  },
  {
    q: "Which HVAC companies are based in Freeport?",
    a: "Public pages and listings show Freeport addresses for Loescher Heating & Air Conditioning, Jansen Heating, Bomar Heating and Cooling, and several other heating businesses on Main Street, Bradmar Drive, Lily Creek Road, and Business 20. Loescher also names offices in Rock Falls, Dixon, Sterling, and Monroe. This website is not those companies and does not score them.",
    detail:
      "A Freeport address does not mean every Stephenson County town is on that day's route. Ask the person who answers.",
  },
  {
    q: "Do Rockford HVAC companies cover Lena, Dakota, and Winslow?",
    a: "Some companies based outside Freeport say they serve northwest Illinois. Pearson describes a radius around Rockford and lists Freeport as one phone line. Taylor’s Heating & Cooling publishes a Rockford address and a Freeport city page aimed at the Rockford suburbs. That is a claim on their site, not a map this page can verify. Lena is northwest of Freeport. Winslow is toward the west county line. Dakota is east. The drive is different for each, and snow changes it.",
    detail:
      "This site does not send you to a Rockford shop or a Freeport shop by name. It connects the call, and the person who answers confirms the address.",
  },
  {
    q: "Why is the map pack full of Freeport streets?",
    a: "Public place listings for heating and cooling cluster on Freeport streets: Walnut, Main, Bradmar, Lily Creek, and Business 20. Lena is the nearby village with a published second office, Loescher’s on W. Main Street. Rock City has published street addresses for Homestead and Kerley. Cedarville, Pearl City, Orangeville, Ridott, German Valley, Davis, and Winslow mostly appear as names on a service list, not as their own map pins.",
    detail:
      "This website has no street address and is not one of those pins. A pin is not a promise that a village is on today’s route. Say the town and the ZIP.",
  },
];

export const metadata = pageMetadata({
  title: "HVAC Service Area, Freeport, Illinois | Millrace Heating",
  description: `Heating and cooling calls for Freeport 61032 and nearby Stephenson County towns. Name the town, the ZIP, and what failed. Call ${site.phoneDisplay}.`,
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
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow={`${site.city} ${site.zip}`}
        title="Heating and cooling near Freeport, IL"
        lede={`Primary city: ${site.city} ${site.zip}, ${site.county}. Nearby communities are listed so you can name yours on the call. They are not separate websites.`}
        context="service-area-hero"
        image="/photos/heroes/condenser-beside-house.webp"
        imageAlt="Outdoor condenser on a concrete pad beside house siding."
      />
      <div id="page-body" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Service Area" },
          ]}
        />
        <h2 className="mt-8 text-3xl text-navy">Freeport, 61032</h2>
        <p className="mt-4 text-muted">
          Freeport is the county seat and the city these pages are written for.
          Winters run long, with sub-freezing stretches and January nights that
          often fall into the teens. Summers are shorter and humid. A lot of
          the housing is older than the furnace in the basement: plaster,
          additions, and ducts that were never redesigned when a room was
          finished. Nicor Gas is the utility people call for a gas leak. ZIP
          61032 comes first on every call.
        </p>
        <p className="mt-4 text-muted">
          No-heat calls here are about houses that lose temperature quickly
          once the burners stop, not about a mild inconvenience. Air
          conditioners sit through snow and then fail together on the first
          humid week. Say the symptom and the street area only to the person
          you reach. This site does not store a service address.
        </p>
        <SectionCall context="service-area-freeport" />
        <h2 className="mt-10 text-3xl text-navy">Stephenson County, one page</h2>
        <p className="mt-4 text-muted">
          The towns below are in Stephenson County and come up on Freeport-area
          calls. Each note is here so you can tell whether the description
          sounds like your drive, not so the town can rank as its own website.
          Distance, weather, and the day&apos;s work decide whether a visit can
          happen. Confirm that on the phone. There is no map on this page
          because a boundary drawn here would be a fiction. Contractor city
          pages often name Cedarville, Dakota, Pearl City, Lena, Orangeville,
          Rock City, Ridott, and Eleroy, and skip German Valley, Davis, and
          Winslow. Eleroy is an unincorporated Stephenson County community, not
          a separate page here. Say Eleroy and the ZIP on your mailbox if that
          is the address. The notes below cover the villages this site already
          lists, including the ones those city pages leave out.
        </p>
        <div className="mt-8 grid gap-8">
          {nearbyCommunities.map((town) => (
            <section key={town.zip}>
              <h3 className="text-xl text-navy">
                {town.name}, {town.zip}
              </h3>
              <p className="mt-2 text-muted">{townNotes[town.name]}</p>
            </section>
          ))}
        </div>
        <SectionCall context="service-area-towns" />
        <h2 className="mt-10 text-3xl text-navy">Where the shops are based</h2>
        <p className="mt-4 text-muted">
          Heating and cooling companies that work this county are not all based
          in Freeport, and a city landing page is not the same thing as a shop
          on a Freeport street. These are public descriptions from their own
          sites or place listings, not reviews and not scores. This website is
          not any of them, and it does not publish a street address of its own.
        </p>
        <div className="mt-6 grid gap-4">
          {[
            {
              name: "Loescher Heating & Air Conditioning",
              base: "Freeport office at 1860 S. Walnut Road, and a Lena office at 130 W. Main Street. Other offices are named in Sterling, Monroe, and the Rock Falls and Dixon area.",
              towns: "The Freeport page names Cedarville, Dakota, Pearl City, Lena, Orangeville, Rock City, Ridott, and Eleroy. The company site also links Orangeville and Pearl City. German Valley, Davis, and Winslow are not on that Freeport list.",
            },
            {
              name: "Jansen Heating",
              base: "Publishes 4341 Rolling Hills Lane, Freeport. A place listing also shows 213 W. Main Street, Freeport.",
              towns: "Doorway pages name Freeport, Lena, Winnebago, Pecatonica, and Lanark. The smaller Stephenson villages are not written out one by one.",
            },
            {
              name: "Bomar Heating and Cooling",
              base: "Says it is located in Freeport, 61032, and also serves Rockford and Loves Park. The pages checked do not add a street.",
              towns: "A long service-area checklist includes every town on this page, plus Eleroy, and a wide ring of Rockford, Dixon, and Wisconsin-line towns. A Pearl City page is a short city pitch with the Freeport location repeated. The checklist is not a shop in each village.",
            },
            {
              name: "Freeport map listings",
              base: "Place results for heating and cooling in Freeport also show Freeport Heating & Air Conditioning at 7 W. Main Street, Bill George Plumbing & Heating at 705 Bradmar Drive, Family Heating & Air at 3198 W. Lily Creek Road, and Pearson Plumbing, Cooling and Pest Control at 1337 Business 20.",
              towns: "Those pins sit in Freeport. Pearson’s own site describes a radius around Rockford and lists Freeport beside Rockford, Belvidere, Roscoe, and Winnebago, not the village drives.",
            },
            {
              name: "Rock City street listings",
              base: "Homestead Heating & Air Conditioning publishes 9570 N. Rock City Road, Rock City 61070. Kerley Heating and Cooling publishes 3762 N. Farwell Bridge Road, Rock City 61070, and describes Rockford as home base.",
              towns: "Kerley’s town list includes Freeport, Dakota, Davis, and Rock City among Winnebago County cities. A Rock City pin does not explain Winslow or German Valley.",
            },
            {
              name: "Rockford city pages",
              base: "Taylor’s Heating & Cooling publishes Rockford, Illinois 61103, and a Freeport landing page. The featured cities are mostly the Rockford suburbs, with Freeport added.",
              towns: "That pattern names Freeport and skips the reason a Winslow or Orangeville call is a different drive. It is not a Stephenson County map.",
            },
          ].map((row) => (
            <section key={row.name} className="surface-card p-5">
              <h3 className="text-xl text-navy">{row.name}</h3>
              <p className="mt-2 text-muted">{row.base}</p>
              <p className="mt-2 text-muted">{row.towns}</p>
            </section>
          ))}
        </div>
        <p className="mt-4 text-muted">
          The gap is the drive, not another doorway. Freeport’s map pack is
          Freeport streets. Lena is the village with a second published office.
          Rock City has street listings of its own. Cedarville, Dakota, Pearl
          City, Orangeville, and Ridott are names on Loescher’s Freeport page
          and on Bomar’s long checklist. German Valley, Davis, and Winslow are
          easier to miss: they are on the long checklist and off the shorter
          Freeport page. None of that assigns a truck. Say the town, the ZIP,
          and what failed.{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/services/furnace-repair-freeport-il/">
            Furnace repair
          </Link>
          ,{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/services/ac-repair-freeport-il/">
            AC repair
          </Link>
          , and{" "}
          <Link className="font-semibold text-navy underline underline-offset-2" href="/services/emergency-hvac-freeport-il/">
            emergency HVAC
          </Link>{" "}
          are the topic pages when you already know the symptom.
        </p>
        <SectionCall context="service-area-market" />
        <h2 className="mt-10 text-3xl text-navy">When to call</h2>
        <ul className="mt-4 grid gap-2 text-muted">
          <li>The house is losing heat or the furnace will not stay running.</li>
          <li>The air conditioner will not cool after sitting through winter.</li>
          <li>The system will not start, or one floor is a different season than the rest.</li>
          <li>You already checked the thermostat, the switch, and the filter.</li>
        </ul>
        <p className="mt-6 text-muted">
          Need a topic page for 61032? Start at{" "}
          <Link href="/services/emergency-hvac-freeport-il/" className="font-semibold text-navy underline underline-offset-2">
            emergency HVAC
          </Link>
          ,{" "}
          <Link href="/services/hvac-maintenance-freeport-il/" className="font-semibold text-navy underline underline-offset-2">
            HVAC maintenance
          </Link>
          ,{" "}
          <Link href="/services/" className="font-semibold text-navy underline underline-offset-2">
            heating and cooling topics
          </Link>
          ,{" "}
          <Link href="/services/furnace-repair-freeport-il/" className="font-semibold text-navy underline underline-offset-2">
            furnace repair
          </Link>
          , or{" "}
          <Link href="/services/ac-repair-freeport-il/" className="font-semibold text-navy underline underline-offset-2">
            AC repair
          </Link>
          .
        </p>
        <SectionCall context="service-area-when" />
        <h2 className="mt-12 text-3xl text-navy">Service area questions</h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
        <SectionCall context="service-area-faq" />
      </div>
      <FinalCta
        title="Confirm the ZIP on the call"
        body="Freeport 61032 is the city this site covers. Other Stephenson County towns are confirmed by phone."
        context="service-area-final"
      />
    </>
  );
}
