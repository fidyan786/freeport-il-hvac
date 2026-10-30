import { article } from "@/content/articles/build";
import { NICOR_GAS } from "@/lib/safety-contacts";

export const coAlarms = article({
  slug: "carbon-monoxide-alarms-for-gas-heat",
  category: "safety",
  title: "Carbon monoxide alarms for gas heat",
  metaTitle: "CO Alarms for Freeport Gas Heat | Millrace Heating",
  metaDescription:
    "Where to put carbon monoxide alarms in a Freeport house, when to replace them, and why the furnace call comes only after you are outside.",
  h1: "Carbon monoxide alarms are a household tool, not a furnace accessory",
  lede:
    "A gas furnace or boiler can run for years and still need a carbon monoxide alarm that actually works. The alarm is not mounted on the equipment, it does not last forever, and if it sounds you leave before you troubleshoot. This page is the longer version of that rule for Stephenson County houses. It is not medical advice.",
  image: "/photos/gas-furnace-utility.webp",
  imageAlt: "A gas furnace in a utility room. Carbon monoxide alarms belong in living spaces, not on the furnace.",
  body: [
    {
      heading: "If the alarm is sounding, this page is already too late to read on site",
      paragraphs: [
        `Get everyone out. Do not look for the furnace, do not open windows as a plan to stay, and do not silence the alarm and go back to bed. From outside, call 911 and Nicor Gas at [${NICOR_GAS.display}](${NICOR_GAS.href}). Nicor publishes that number for gas emergencies, and Nicor’s own territory list includes Freeport and the Stephenson County towns around it. Do not use switches or phones in the area of a gas smell. Stay out until someone on site says the building is clear. The short version of this exit is [carbon monoxide safety](/guides/carbon-monoxide-safety/).`,
        "Headache, nausea, dizziness, and flu-like symptoms that improve outdoors are a reason to get to fresh air and medical help. This website will not tell you whether you have been exposed. It will tell you the equipment stays off until a qualified person clears the house. Heating comfort is not the priority while an alarm is in alarm.",
      ],
    },
    {
      heading: "Where the Consumer Product Safety Commission says to put them",
      paragraphs: [
        "The CPSC’s public guidance is to install battery-operated carbon monoxide alarms, or alarms with battery backup, on every level of the home and outside sleeping areas. Interconnected alarms are better, because when one sounds they all sound. The agency does not recommend installing them in kitchens or above fuel-burning appliances, and it says to avoid spots near heating vents or where furniture and drapes can cover them. Follow the manufacturer’s instructions for the unit you bought. Those instructions outrank a guess about “high on the wall or low.”",
        "A single alarm taped to the furnace cabinet fails that guidance. The furnace room is not a sleeping area, the air there is not the air in the bedrooms, and a unit above the appliance is a location CPSC specifically discourages. Put alarms in the hall outside bedrooms and on each floor people use. A basement that is only mechanical space is not where CPSC tells you to put the only alarm. A basement that is a bedroom is. If you have one alarm for a two-story Freeport house, you do not have the layout the guidance describes.",
      ],
    },
    {
      heading: "The test button does not prove the sensor still sees carbon monoxide",
      paragraphs: [
        "CPSC notes that the test button checks the circuitry, not the sensor’s accuracy, and that alarms have a recommended replacement age in the product literature. Newer alarms have an end-of-life signal. The Centers for Disease Control and Prevention has told people to replace detectors according to the manufacturer or about every five years, and to check batteries when the clocks change. Read the date stamped on the alarm you already own. A unit that has been chirping until someone pulled it down is not “the house is fine.” It is a missing alarm.",
        "Replace batteries when the instructions say, or use a sealed long-life battery unit and still respect the replacement date. A plug-in or hard-wired alarm without battery backup goes silent in a power outage, which is a moment when people sometimes run generators or unvented heaters. CPSC wants battery backup for those alarms. Test monthly. A test you have never done is not a safety program, and a test that passes does not mean you can skip the replacement date.",
      ],
    },
    {
      heading: "What produces carbon monoxide in a heating house, in plain language",
      paragraphs: [
        "Carbon monoxide comes from incomplete combustion. A furnace or boiler with a blocked vent, a disconnected flue, a damaged heat exchanger, or starved combustion air can spill it. So can a car left running in an attached garage, a generator in a garage or on a porch too close to a door, a charcoal grill indoors, and a gas oven used as a heater. CPSC is explicit that generators and other engine tools should not run in or near a house or garage, that charcoal does not belong inside, that a car should not idle in an attached garage even with the door open, and that ranges and ovens are not heaters.",
        "Snow is a local version of the blocked-vent problem. CPSC has warned people to clear snow away from outside vents of fuel-burning appliances so carbon monoxide does not build up. After a Stephenson County drift, look at sidewall PVC vents and metal vent caps from outside. Do not knock the pipe loose. If the termination is buried, do not run the appliance. High-efficiency furnaces are covered from the equipment side in [condensate and vents](/guides/high-efficiency-furnace-condensate-problems/). The weather that piles the snow is in [what a Freeport winter asks of a furnace](/guides/northern-illinois-winter-and-your-furnace/).",
      ],
    },
    {
      heading: "Alarms go off for reasons, including reasons that are not “a nuisance”",
      paragraphs: [
        "A sounding alarm is an exit. After the house is cleared, the cause might be the furnace, the water heater, a blocked chimney, a vehicle, or a low-level event the alarm is built to catch before it becomes deadly. CPSC states that alarms are designed to sound before potentially life-threatening levels are reached. Treating a middle-of-the-night alarm as a defective gadget, and taking it down, is how the next event has no alarm at all.",
        "Repeated alarms after you are allowed back mean the equipment stays off until someone finds the source. Do not run the furnace “to see if it does it again” while people sleep. Do not replace the alarm with a cheaper one and call that the repair. The heating visit comes after the emergency is over. Say there was an alarm, say the appliance is still off, and use [emergency HVAC](/services/emergency-hvac-freeport-il/) or [furnace repair](/services/furnace-repair-freeport-il/) depending on whether you are allowed in the house. If the heat is a boiler, say boiler. The [boiler page](/guides/hot-water-boilers-in-older-houses/) is the equipment context, not the emergency plan.",
      ],
    },
    {
      heading: "Combustion air and a tightened house",
      paragraphs: [
        "Older natural-draft furnaces and boilers need air. A house that was weatherized, a new kitchen hood, or a dryer that used to struggle and now pulls hard can contribute to backdrafting. That subject is [ventilation and combustion air](/guides/ventilation-and-combustion-air-in-a-tight-house/). An alarm is still required. Weatherization does not replace it, and an alarm does not replace a vent that is intact.",
        "Unvented gas heaters and “vent-free” fireplaces put combustion products in the room by design. They are a poor match for a closed winter house, and they are not a backup plan this site endorses for bedrooms. If you already have one, follow the manufacturer’s limits, keep alarms in place, and do not sleep in a room where an unvented appliance is running. CPSC says not to operate unvented fuel-burning appliances in rooms where people are sleeping.",
      ],
    },
    {
      heading: "Maintenance is when vents get looked at, not when alarms get optional",
      paragraphs: [
        "A fall heating visit should include the vent connector, the outdoor termination, and the visible condition of the heat exchanger area a technician can see. It is not a promise that an alarm will never sound. [What a heating maintenance visit covers](/guides/what-a-heating-maintenance-visit-covers/) lists that work. The [pre-winter checklist](/guides/pre-winter-furnace-checklist/) includes the homeowner half: alarms dated, batteries considered, outdoor vents visible and not buried yet. Neither list is a coupon.",
        "If a technician offers to remove your alarms because they “cause callbacks,” that is a reason to ask someone else, not a reason to hand over the alarms. The [questions before you hire](/guides/questions-before-you-hire-hvac-help/) page includes the expectation that gas and carbon monoxide are taken seriously. This website will not send you to a named company. It connects a call.",
      ],
    },
    {
      heading: "What to buy, and what not to believe",
      paragraphs: [
        "Buy an alarm that meets the current UL 2034 standard, which is what CPSC tells consumers to look for, and follow its placement instructions. A digital display can show a peak level, which is useful after an event for the people investigating it. It is not a toy to watch while you stay in a house that is alarming. Combination smoke and carbon monoxide alarms exist. Smoke-alarm placement rules are stricter about bedrooms. Follow both sets of instructions if the device is a combination, and do not skip a floor because one combination unit “covers the house.”",
        "No alarm makes a blocked flue safe. No filter, humidifier, or ultraviolet lamp detects carbon monoxide. Indoor-air products are irrelevant while an alarm sounds, which the shorter safety page already says and which remains true. If you call this site after the house is safe and you need the heating equipment checked, say what the alarm did and whether the utility or fire department has already been there. The phone number connects you with an independent professional. The site is not the fire department and not Nicor. The [disclosure](/disclaimer/) keeps that distinction in writing.",
      ],
    },
  ],
  relatedServices: [
    "emergency-hvac-freeport-il",
    "furnace-repair-freeport-il",
    "hvac-maintenance-freeport-il",
  ],
  relatedGuides: [
    "carbon-monoxide-safety",
    "high-efficiency-furnace-condensate-problems",
    "pre-winter-furnace-checklist",
  ],
});
