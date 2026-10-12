import { NICOR_GAS } from "@/lib/safety-contacts";
import { defineService } from "@/content/service-types";

export const furnaceRepair = defineService({
  slug: "furnace-repair-freeport-il",
  category: "heating",
  navLabel: "Furnace Repair",
  navDescription: "A gas furnace that will not light, stay lit, or warm the house.",
  metaTitle: "Furnace Repair Help in Freeport, IL | Millrace Heating",
  metaDescription:
    "No heat from a Freeport furnace, a unit that will not stay lit, or supply air that never warms the house on a cold night. Call (703) 703-7855.",
  h1: "Furnace Repair in Freeport, IL",
  eyebrow: "Forced-air gas furnaces",
  lede:
    "Furnace repair in Freeport, IL is the call when a gas furnace will not light, will not stay lit, or blows air that never warms the rooms. January nights in Stephenson County often fall into the teens, and a house that loses the burners does not coast until morning.",
  image: "/photos/heroes/gas-furnace-utility.webp",
  imageAlt:
    "Gas furnace in a utility space, the kind of equipment behind furnace repair in Freeport, IL.",
  sections: [
    {
      heading: "Furnace repair symptoms worth calling about",
      paragraphs: [
        "The useful report is what the furnace is doing, not a parts guess. No response at all is different from a blower that runs while the burners stay dark. A unit that lights, runs a few minutes, and locks out is different again. Short bursts of heat that never catch the house up on a windy night are their own problem. Say which one you have, and say how cold the rooms are now.",
        "Other signs that belong on a furnace repair call: a sharp bang at ignition, a screech when the blower starts, a burning smell that does not fade after the first fire of the fall, or a thermostat that is set well above the room temperature and nothing happens. If only one room is cold and the rest of the house is fine, say that too. It may be airflow rather than a dead furnace, and the person on the visit needs the distinction.",
      ],
      subsections: [
        {
          heading: "Cold air from the registers",
          paragraphs: [
            "A blower moving basement air is not heat. On a Freeport night that air can make the house colder than leaving the system off. If you are sure there is no gas smell and no carbon monoxide alarm, turn the fan to auto and the system off, then call. The guide on a furnace blowing cold air walks through the same split.",
          ],
        },
      ],
    },
    {
      heading: "What to expect when you call about furnace repair",
      paragraphs: [
        "This website does not roll a truck. You call the number on the page, say you need furnace repair, and describe the symptom, the town, and the ZIP. The call is connected with an independent local heating and cooling professional who can say whether that address can be reached. Have the thermostat setpoint, whether the furnace switch in the utility room is on, and whether you changed the filter recently.",
        "You will not get a quoted amount, a promised arrival window, or a diagnosis over the phone from this site. The visit is where someone looks at the furnace, the venting, the condensate on a high-efficiency unit, and the way the house is actually losing heat. If the furnace is older and the failure looks like the end of it, that conversation can turn toward furnace installation. Tonight’s job is still getting the house safe and warm enough to think.",
      ],
    },
    {
      heading: "Why furnace repair is a winter problem in Freeport",
      paragraphs: [
        "Freeport is a heating town. The cooling season is short and humid. The heating season is long, with sub-freezing stretches and wind that finds every leaky window in an older house. A furnace that was adequate in October can fall behind in January because the house load went up, not because the thermostat was set wrong. That is why “it worked last week” is not a reason to wait out a night in the teens.",
        "Many homes in town are older than the furnace in the basement. Additions, closed-off registers, and a filter that has been in place since the windows were shut for winter all change how hard the furnace has to work. A clogged filter can cause a limit switch to trip and look like a failed furnace. Replacing a filthy filter is a fair first check. Taking the cabinet apart, jumping safety switches, or relighting a unit that keeps shutting down is not.",
      ],
    },
    {
      heading: "Gas furnaces and when to leave the house",
      paragraphs: [
        `Most Freeport furnaces burn natural gas from Nicor Gas. If you smell gas, hear a hiss at a line, or a carbon monoxide alarm is sounding, do not hunt for the furnace problem. Leave the building, then call 911 and Nicor Gas at ${NICOR_GAS.display} from outside. Nicor publishes that number for gas emergencies. Furnace repair comes after the house is cleared.`,
        "Soot around the draft hood, a furnace that smells like exhaust, or rusted vent pipe in a basement are reasons to stop running the unit and call, even when the alarm is quiet. High-efficiency furnaces also fail at the condensate trap and the inducer, and those failures can shut the burners down without a dramatic smell. Describe what you see. Do not pour water into a trap or bypass a pressure switch to force a cycle.",
      ],
    },
  ],
  faqs: [
    {
      q: "When should I call for furnace repair in Freeport?",
      a: "Call when the furnace will not light, the blower runs with air that stays cold, the burners lock out, or the house cannot hold temperature on a night below freezing. This site connects that call with an independent local heating and cooling professional. It does not dispatch anyone itself.",
      detail:
        "Say how cold the rooms are, whether you smell gas, and what you already checked. A gas smell or a carbon monoxide alarm means leave first and call 911 and Nicor Gas.",
    },
    {
      q: "Is a furnace that blows cold air still working?",
      a: "The blower can run while the burners do nothing. That is circulating unheated air, which on a Stephenson County night makes rooms colder. It is a furnace repair symptom, not a sign that the heating system is fine and only the thermostat needs a nudge.",
      detail:
        "If the house is otherwise safe, set the fan to auto and shut the system off so it stops moving cold air. Then call and describe whether you heard the burners try to light.",
    },
    {
      q: "Should I reset the furnace more than once?",
      a: "One reset after a known trip, such as a filter you just replaced, is a reasonable check. Repeated resets on a furnace that locks out again are a repair call. Forcing another cycle can overheat a heat exchanger or hide a venting problem.",
      detail:
        "Write down any flashing light code if the door has a window, but do not remove panels to chase it. The code is useful to the person who looks at the furnace.",
    },
    {
      q: "How is furnace repair different from heating repair?",
      a: "Furnace repair is for a forced-air gas furnace. Heating repair is the page to start from when the house is cold and you are not sure the furnace is the equipment, or the heat is a boiler, baseboard, or heat pump. Both calls use the same phone number.",
      detail:
        "If you can see a furnace with a blower and ductwork, stay on this page. If you only know that the rooms are cold, the heating repair page explains what to say.",
    },
  ],
  related: [
    "heating-repair-freeport-il",
    "furnace-installation-freeport-il",
    "heat-pump-repair-freeport-il",
  ],
});
