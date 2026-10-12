import { NICOR_GAS } from "@/lib/safety-contacts";
import { defineService } from "@/content/service-types";

export const heatingRepair = defineService({
  slug: "heating-repair-freeport-il",
  category: "heating",
  navLabel: "Heating Repair",
  navDescription: "A cold house when you are not sure the furnace is the whole story.",
  metaTitle: "Heating Repair Help in Freeport, IL | Millrace Heating",
  metaDescription:
    "A Freeport house that will not heat, when you are not sure the furnace is the problem. Describe the symptom and the ZIP. Call (703) 703-7855.",
  h1: "Heating Repair in Freeport, IL",
  eyebrow: "When the house will not heat",
  lede:
    "Heating repair in Freeport, IL is the place to start when the house is cold and you are not sure a forced-air furnace is the equipment, or you know it is not. Boilers, electric baseboard, a heat pump with backup heat, and a furnace you have never really looked at all show up as “no heat.” The call is the same. The description you give is what sorts them.",
  image: "/photos/heroes/gas-furnace-utility.webp",
  imageAlt:
    "Heating equipment in a utility space, a common starting point for heating repair in Freeport, IL.",
  sections: [
    {
      heading: "Heating repair when the equipment is unclear",
      paragraphs: [
        "Walk through what you can name. Do you have vents and a blower, or radiators and pipes? Is there an outdoor unit that runs in winter, which may be a heat pump? Is the thermostat a simple dial or a wall control with heat, cool, and emergency heat? You do not need the model number. “Vents, gas furnace in the basement, blower runs, no warm air” is a furnace problem and belongs in more detail on furnace repair. “Radiators are cold and I hear water, not a blower” is a different heating repair visit.",
        "No heat in the whole house is different from one cold room. Whole-house failure points at the heat source, the thermostat, a switch, or a safety lockout. One cold room points at a closed register, a failed zone, a duct that never reached an addition, or a radiator that is air-bound. Both are legitimate calls. They are not the same job, and saying which one you have saves a wasted hour.",
      ],
    },
    {
      heading: "What to expect when you call about heating repair",
      paragraphs: [
        "Call and say the house will not heat, then describe the equipment as well as you can and give the ZIP. This site connects you with an independent local heating and cooling professional. It does not choose the trade for you in advance and it does not promise that every kind of heat in Stephenson County is something that person works on. Boiler work, in particular, should be asked about on the phone rather than assumed.",
        "Expect questions, not a remote diagnosis. Is the thermostat calling for heat? Did a breaker trip? Was there a power blink during a storm? Did you smell gas? Those answers decide whether someone should come look at a furnace, a heat pump, or tell you to call the gas utility first. If the rooms are already falling into the 50s and the night is below freezing, say so and start from emergency HVAC.",
      ],
    },
    {
      heading: "Older Freeport houses and more than one kind of heat",
      paragraphs: [
        "Freeport’s housing stock is older than most of the equipment in it. Some homes still have a boiler and radiators. Some were converted to forced air and still have a chimney, an abandoned oil tank story, or radiators that no longer connect to anything. Some have a gas furnace plus electric baseboard in an addition that the ducts never served. Heating repair starts by admitting that mix. A page that pretends every house has the same furnace will send you into the wrong conversation.",
        "Winters here are long enough that backup plans matter. A heat pump that heats well in October may lean on electric strips or a gas furnace when the night drops into the teens. If the outdoor unit is iced over and the house is cool, read the heat pump page and still call heating repair if you need someone tonight. Do not switch the thermostat to emergency heat and leave it there for a week without knowing what that mode costs the system in wear. Ask on the visit.",
      ],
    },
    {
      heading: "Safety before troubleshooting",
      paragraphs: [
        `Gas heat means Nicor Gas is part of the safety net. Smell, a hiss, or a carbon monoxide alarm: leave, then call 911 and Nicor Gas at ${NICOR_GAS.display}. That number is the one Nicor publishes for gas emergencies. Heating repair is not the call you make from inside a house that might be filling with gas or carbon monoxide.`,
        "If the house is safe and simply cold, check the thermostat batteries and the mode, the switch that looks like a light switch on the furnace or near the air handler, and the filter if you have ducts. Then stop. Do not open boiler panels, do not bleed radiators until you know the system, and do not bypass a rollout switch or a pressure switch to get one more cycle. Those switches opened for a reason. The heating repair visit is where that reason gets a name.",
      ],
    },
  ],
  directAnswer:
    "Heating repair in Freeport, IL is where to start when the house is cold and you are not sure a gas furnace is the equipment. Boilers, baseboard, heat pumps, and furnaces all show up as no heat. Call with the symptom, the town, and the ZIP. This site connects that call. It is not the contractor.",
  decision: {
    heading: "Which heating page fits the house",
    paragraphs: [
      "A forced-air gas furnace you can see in the utility room belongs on furnace repair. A cold house with radiators, baseboard, or an outdoor unit that also cools belongs here until the equipment is clear. A heat pump that is the only heat, and is failing on a night in the teens, is also a heat pump page, and the urgency is the same as a dead furnace.",
      "If the indoor temperature is falling and waiting is the risk, use emergency HVAC. If the system still heats and you are deciding whether it should face another winter, furnace installation is the replacement conversation.",
    ],
    links: [
      {
        href: "/services/furnace-repair-freeport-il/",
        label: "Furnace repair in Freeport",
      },
      {
        href: "/services/heat-pump-repair-freeport-il/",
        label: "Heat pump service in Freeport",
      },
      {
        href: "/services/emergency-hvac-freeport-il/",
        label: "Emergency HVAC in Freeport",
      },
      {
        href: "/guides/no-heat-in-house/",
        label: "No heat in the house",
      },
      {
        href: "/guides/uneven-temperatures/",
        label: "Uneven temperatures",
      },
    ],
  },
  checks: [
    {
      name: "Look, do not open",
      text: "Note vents or radiators, and whether an outdoor cabinet is running. Do not remove panels. A model number is optional.",
    },
    {
      name: "Thermostat",
      text: "Heat mode, setpoint above the room, and a screen that is on. A blank battery thermostat can look like a dead boiler.",
    },
    {
      name: "How cold, and how fast",
      text: "Say the indoor temperature and whether the whole house is cold or only one room. One cold room with the rest warm is often ducts, which the uneven-temperature guide describes.",
    },
  ],
  faqs: [
    {
      q: "I have no heat and I do not know what kind of system I have. Where do I start?",
      a: "Start here if the house is cold and the equipment is unclear. Look for vents or radiators, and for an outdoor unit that might be a heat pump, then call and describe what you see. If you can identify a gas furnace with ducts, furnace repair is the more specific page.",
      detail:
        "You do not need a model number to place the call. The town, the ZIP, and whether the whole house is cold are the facts that matter first.",
    },
    {
      q: "Is heating repair the same as furnace repair?",
      a: "No. Furnace repair is specifically a forced-air gas furnace. Heating repair covers a cold house more broadly, including cases where the heat might be a boiler, baseboard, heat pump, or a furnace you have not confirmed. The phone number is the same.",
      detail:
        "Telling the truth about what you see prevents a furnace-only visit from showing up to a radiator system, or the reverse. Ask on the call if you are unsure the professional works on that equipment.",
    },
    {
      q: "One room is cold and the rest of the house is fine. Is that heating repair?",
      a: "Yes, if the heat source is running and one area never catches up. Closed registers, a duct that does not reach an addition, and a balancing problem are common in older Freeport houses. It can also be a thermostat location that satisfies the hallway while a bedroom stays cold.",
      detail:
        "Mention whether the problem is new or has been true every winter. A sudden change leans toward a failure. A room that was always cold leans toward ducts or the way the house was built.",
    },
    {
      q: "What if the temperature in the house is still falling?",
      a: "If heat is fully out and the indoor temperature is dropping in sub-freezing weather, treat it as emergency HVAC and call now. Heating repair is the right label when you need the system fixed and the house is still safe to wait in.",
      detail:
        "Give the indoor temperature either way. A number is more useful than “it’s pretty cold” when someone is deciding how urgent the visit is.",
    },
  ],
  related: [
    "furnace-repair-freeport-il",
    "heat-pump-repair-freeport-il",
    "furnace-installation-freeport-il",
  ],
});