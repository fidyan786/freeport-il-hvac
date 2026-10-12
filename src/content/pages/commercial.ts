import { NICOR_GAS } from "@/lib/safety-contacts";
import { defineService } from "@/content/service-types";

export const commercialHvac = defineService({
  slug: "commercial-hvac-freeport-il",
  category: "commercial",
  navLabel: "Commercial HVAC",
  navDescription: "Rooftop and packaged equipment for shops, offices, and similar buildings.",
  metaTitle: "Commercial HVAC in Freeport, IL | Millrace Heating",
  metaDescription:
    "Commercial HVAC for Freeport, IL shops, offices, churches, and similar buildings that use rooftop or packaged equipment. Call (703) 703-7855.",
  h1: "Commercial HVAC in Freeport, IL",
  eyebrow: "Shops, offices, and small buildings",
  lede:
    "Commercial HVAC in Freeport, IL is for a shop, office, church, or similar building, especially one with a rooftop or packaged unit rather than a basement furnace. Repair, heating, cooling, and maintenance for that equipment are one page here. A house with a furnace in the basement belongs on residential HVAC, even if you work from a spare room.",
  image: "/photos/heroes/rooftop-packaged-hvac-units.webp",
  imageAlt:
    "Packaged rooftop HVAC units on a commercial roof, the equipment commercial HVAC in Freeport, IL is about.",
  sections: [
    {
      heading: "What commercial HVAC usually means in town",
      paragraphs: [
        "Downtown storefronts, a clinic in a converted house, a church hall, and a small warehouse do not all have the same machine, but they share a pattern. The equipment is often on the roof or on a pad beside the building. It may heat and cool in one cabinet. Access is a ladder, a locked roof, and a unit that has been out in the weather since it was set. In a long heating season, the heating side is what fails when you can least afford a closed shop. In the short humid summer, the cooling side fails on the week you are finally busy.",
        "Say what the building is and what the unit is doing. No heat at opening. Cooling that runs and the sales floor stays warm. A rooftop unit that is loud enough to hear in the office. Ice, a tripped breaker, or a thermostat behind a counter that nobody has set since last season. Those details matter more than a brand name. This site does not list brands and does not claim every commercial system in Stephenson County is a fit for the person who answers.",
      ],
    },
    {
      heading: "What to expect when you call about a business",
      paragraphs: [
        "Call and say commercial HVAC, the type of building, and the ZIP. Say whether you need repair now, a maintenance visit before the season, or a conversation about replacing a rooftop unit. This website connects the call with an independent local heating and cooling professional. It does not dispatch a commercial crew, quote a contract, or promise after-hours coverage. Ask the person you reach whether they work on rooftop equipment and whether they can get to that roof.",
        "Have someone who can meet them and who can get to the thermostat and, if it is safe, point at the unit. A locked roof with no ladder plan wastes the visit. If the building is a house that was converted and the equipment is still a residential furnace, say that. Forcing a commercial label onto a basement furnace sends the wrong expectations. Gas smells and carbon monoxide alarms are the same rule as at home: leave, then 911 and Nicor Gas.",
      ],
    },
    {
      heading: "Winter openings and summer humidity",
      paragraphs: [
        "A shop that opens at 8 a.m. after a night in the teens needs the heating side to have recovered, not to be starting from a setback it cannot catch. Older commercial buildings in Freeport are often leaky at the storefront and over-glazed. The unit may have been sized for a different floor plan, or for a stockroom that is now a waiting room. Maintenance before heating season is how you avoid discovering a cracked belt, a failed ignitor, or a plugged condensate on the morning you cannot open.",
        "Cooling complaints in these buildings are often part airflow and part a condenser that sat through winter full of cottonwood and roof grit. Warm air at the diffusers with the fan running is the commercial version of the house AC problem. Do not prop the thermostat into a permanent override and leave. If people in the building are at risk from heat, say so. Emergency HVAC is still the right escalation when waiting is unsafe, including a workplace. Ordinary discomfort can be scheduled as repair.",
      ],
    },
    {
      heading: "Maintenance, replacement, and what this site will not claim",
      paragraphs: [
        "Commercial maintenance is filter access, belts where the unit has them, the heating section before winter, and the cooling section before the first hot week. It is not a stack of paperwork this website invents. Ask what the visit includes. Replacement of a rooftop unit is a crane, a curb, and sometimes electrical work, and it is a different project from a basement furnace. If that is the conversation, say the unit’s age and whether it heats, cools, or both. You still will not get a quote from this page.",
        `Gas-fired rooftop heat is still Nicor Gas territory if the building is on their system. Their published emergency number is ${NICOR_GAS.display}. This site does not claim a license, a certification, or a service area beyond what the professional confirms on the phone. Churches, offices, and shops in Lena, German Valley, or other nearby towns should use the service area page and name the town. Residential HVAC is the page for houses. Furnace repair and AC repair stay the right links when the equipment is a house system that happens to sit in a small office conversion and you already know which half failed.`,
      ],
    },
  ],
  faqs: [
    {
      q: "Do you work on rooftop units in Freeport?",
      a: "This website does not work on them. It connects the call with an independent local heating and cooling professional. Ask that person whether they service rooftop or packaged units and whether they can access your roof. Not every residential-focused visit is a commercial one.",
      detail:
        "Say the building type and whether the unit heats, cools, or both. A locked roof without access is the detail that decides if a visit can happen.",
    },
    {
      q: "Is a home office a commercial HVAC call?",
      a: "No. A house, including one where someone works from home, belongs on residential HVAC, furnace repair, or AC repair. Commercial HVAC is for shops, offices, churches, and similar buildings that use rooftop or packaged equipment. Describe the building if you are unsure.",
      detail:
        "If a house was converted and you are unsure what is on the roof or in the closet, describe it. The label can be sorted on the call.",
    },
    {
      q: "Can maintenance be scheduled before winter?",
      a: "Yes. A check of the heating section before the long cold is the useful commercial maintenance window in Freeport, with cooling checked before the humid weeks. This site does not sell a contract. Ask the professional what the visit covers.",
      detail:
        "If the unit will not heat on a morning you need to open, that is repair, not a future maintenance date. Call and say the building is without heat.",
    },
    {
      q: "What if the business has no heat and it is below freezing?",
      a: "Call and say so, including whether pipes, people, or stock are at risk. Emergency HVAC is the right description when waiting is unsafe. This site still only connects the call. It does not promise how soon someone can arrive there.",
      detail:
        "Gas odor or a carbon monoxide alarm means leave and call 911 and Nicor Gas before anyone discusses the rooftop unit.",
    },
  ],
  related: [
    "residential-hvac-freeport-il",
    "heating-repair-freeport-il",
    "ac-repair-freeport-il",
  ],
});
