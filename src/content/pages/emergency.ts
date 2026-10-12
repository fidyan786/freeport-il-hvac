import { NICOR_GAS } from "@/lib/safety-contacts";
import { defineService } from "@/content/service-types";

export const emergencyHvac = defineService({
  slug: "emergency-hvac-freeport-il",
  category: "emergency",
  navLabel: "Emergency HVAC",
  navDescription: "No heat or no cooling that should not wait.",
  metaTitle: "Emergency HVAC Help in Freeport, IL | Millrace Heating",
  metaDescription:
    "Urgent no-heat or no-cooling help for a Freeport house. If you smell gas or a CO alarm sounds, leave and call 911 first. Call (703) 703-7855.",
  h1: "Emergency HVAC in Freeport, IL",
  eyebrow: "No heat and no cooling",
  lede:
    "Emergency HVAC in Freeport, IL is for a house that is losing heat in the cold, or losing cooling when someone cannot safely wait. It is not a slogan and it is not a promise that a truck is already on the way. You call, you describe what is happening, and the call is connected with an independent local professional who can say whether they can reach you.",
  image: "/photos/heroes/snow-street-oak-park-illinois.webp",
  imageAlt:
    "Snow-covered houses on a residential street, the kind of night behind emergency HVAC calls in Freeport, IL.",
  sections: [
    {
      heading: "When emergency HVAC is the right call",
      paragraphs: [
        "Use this page when the furnace will not heat and the indoor temperature is falling on a sub-freezing night, when a carbon monoxide concern has already been cleared and the heat is still out, or when the air conditioner is down and someone in the home is at risk from heat. A noisy system that still heats, or a room that has always been a bit cool, can wait for furnace repair or AC repair in ordinary hours. A house headed for the 50s with wind and teens outside should not.",
        "Say the indoor temperature, whether anyone is very young, old, or ill, and whether you have any heat at all. Space heaters on extension cords are a fire problem of their own. If you use one while you wait, keep it on a clear floor, on a proper circuit, and awake with it. This site cannot stay on the line as a safety monitor.",
      ],
    },
    {
      heading: "What to expect when you call for emergency HVAC",
      paragraphs: [
        "Call the number on this site. Say “no heat” or “no cooling,” the town, and the ZIP. This website connects callers with independent local heating and cooling professionals. It is not itself a contractor, it does not employ technicians, and it does not promise that someone can arrive in a set number of minutes. Availability is whatever that professional can actually do with the day’s work and the weather.",
        "Have a short description ready: furnace or air conditioner, whether it tries to start, any smell, and any alarm. If you already left the house because of gas or carbon monoxide, say that you are calling from outside and that the utility or fire department has been contacted. Do not go back in to read a model number.",
      ],
    },
    {
      heading: "Gas and carbon monoxide come before HVAC",
      paragraphs: [
        `If you smell gas, hear blowing at a pipe, or a carbon monoxide alarm is sounding, emergency HVAC is not the first call. Leave the building. From outside, call 911 and Nicor Gas at ${NICOR_GAS.display}. Nicor publishes that number on its emergency page for leaks and gas emergencies. Do not use switches, phones, or cars in the area of the smell. Stay out until someone on site says the house is clear.`,
        "After the house is cleared, a furnace that spilled fumes, a cracked heat exchanger concern, or a vent that came apart in a basement still needs a heating professional before you turn the system back on. That follow-up call can start here or on furnace repair. The order is leave, utility and fire, then equipment. Reversing it is how people get hurt in older Freeport basements.",
      ],
    },
    {
      heading: "Freeport cold, and the nights that matter",
      paragraphs: [
        "Stephenson County winters are long. Sub-freezing weather is normal, not a rare emergency by itself. What makes a no-heat call urgent is the house temperature falling and no safe way to stop it. Older housing stock, with original windows, balloon framing, and basements that were not built as living space, loses heat quickly once the furnace stops. A brick two-story that feels solid in October can drop fast in January if the burners are out.",
        "Cooling emergencies are less common here because the hot season is shorter, but they are not imaginary. An upstairs apartment over a sun-facing roof, a bedroom with one window unit that died, or a house with a vulnerable person can be an emergency HVAC call even when the neighbors are only uncomfortable. Say that plainly. For a system that is warm but not dangerous, AC repair is the better page, and HVAC maintenance is how you avoid discovering the failure on the first sticky afternoon.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does emergency HVAC mean someone is already dispatched?",
      a: "No. Calling this site connects you with an independent local heating and cooling professional. That person confirms whether they can reach your address. This website does not park a truck in Freeport or promise an arrival time. Describe the indoor temperature.",
      detail:
        "Describe the indoor temperature and whether the system is trying to run. The more concrete the symptom, the faster the conversation about whether a visit can happen.",
    },
    {
      q: "What if I smell gas or the CO alarm is going off?",
      a: "Leave the house before you call anyone about the furnace. From a safe place, call 911 and Nicor Gas at 888-642-6748. Nicor lists that number for gas emergencies. Do not look for the leak, and do not stay inside to book HVAC help.",
      detail:
        "HVAC help is the step after the building is cleared. A furnace that was spilling fumes should stay off until someone qualified looks at the venting and the heat exchanger.",
    },
    {
      q: "Is a cold house always an emergency?",
      a: "A house that still holds a safe temperature, with heat that is weak but present, can be furnace repair or heating repair rather than an emergency call. A house with no heat and a falling temperature in sub-freezing weather is the situation this page is for.",
      detail:
        "If you are unsure, call and say the indoor temperature. Let the person you reach decide whether it can wait. Do not wait out a night in the teens to avoid “bothering” someone.",
    },
    {
      q: "Which page do I use if I already know it is the furnace?",
      a: "If the gas furnace is the problem and the house is still safe to be in, furnace repair is the direct page, and you can still call the same number. Use emergency HVAC when the temperature is falling and waiting is the risky part.",
      detail:
        "AC repair is the matching page for cooling that is failing but not yet dangerous. Maintenance is for equipment that still runs, before the season turns on it.",
    },
  ],
  related: [
    "furnace-repair-freeport-il",
    "ac-repair-freeport-il",
    "heating-repair-freeport-il",
  ],
});
