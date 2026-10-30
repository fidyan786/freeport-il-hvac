import { article } from "@/content/articles/build";
import { NICOR_GAS } from "@/lib/safety-contacts";

export const noHeatNight = article({
  slug: "how-urgent-a-no-heat-night-is",
  category: "safety",
  title: "How urgent a no-heat night is",
  metaTitle: "How Urgent a No-Heat Night Is | Millrace Heating",
  metaDescription:
    "How to decide whether a Freeport house without heat can wait until morning, and what not to use as backup heat.",
  h1: "A no-heat night is urgent for some houses and not for others",
  lede:
    "Losing heat in Freeport is not one emergency. A gas smell is an emergency. A carbon monoxide alarm is an emergency. A house at 66°F and falling slowly, with healthy adults and a repair available in the morning, is a cold night. This page is how to tell those apart without pretending a website can hear your furnace.",
  image: "/photos/downtown-freeport-illinois.webp",
  imageAlt: "Downtown Freeport, Illinois, on a day when the night temperature is the part that matters.",
  body: [
    {
      heading: "Leave first if the air itself is the hazard",
      paragraphs: [
        `If you smell gas, if you hear gas blowing, or if a carbon monoxide alarm is sounding, the heating equipment is not your next phone call. Get everyone out. From outside, call 911 and Nicor Gas at [${NICOR_GAS.display}](${NICOR_GAS.href}). Do not look for the furnace on the way. Do not use a phone in the area of the smell. The short form of this instruction is [carbon monoxide safety](/guides/carbon-monoxide-safety/). The longer alarm guide is [carbon monoxide alarms for gas heat](/guides/carbon-monoxide-alarms-for-gas-heat/). Nothing later on this page overrides those paragraphs.`,
        "Symptoms people associate with carbon monoxide, including headache and nausea that improve outside, are a medical and fresh-air problem. This site will not assess them. It will say not to go back in to check the thermostat.",
      ],
    },
    {
      heading: "Who is in the house matters as much as the number on the thermostat",
      paragraphs: [
        "Infants, older adults, and anyone who cannot keep themselves warm or who has a medical reason they must not get cold make a falling indoor temperature urgent sooner. A house of healthy adults who can add blankets, stay in one room, and check a thermometer is a different night. Say who is home when you call. “No heat, infant, indoor temperature 61 and falling, outdoor temperature in the teens” is an urgent heating call. “No heat, two adults, indoor temperature 67, we can wait until morning” is a true description and a fair one. Do not inflate it. Do not downplay it.",
        "The outdoor temperature decides how fast a Freeport house falls. NOAA’s 1991–2020 normals for the local station put a typical January low near 11°F, and colder nights happen. A house that loses heat at 4 p.m. on a 10°F day will be much colder by midnight than the same house on a 35°F night. [What the winter asks of a furnace](/guides/northern-illinois-winter-and-your-furnace/) is the climate context. You do not need the climate page to know that wind and single digits are the nights not to experiment.",
      ],
    },
    {
      heading: "What the equipment is doing changes the wait",
      paragraphs: [
        "A furnace that is [locked out](/guides/when-a-furnace-locks-out/) after two resets should be left off. More resets are not a plan for staying until morning, and they can hide a rollout or a vent problem. A furnace that blows cold air because the fan switch is on is a different, smaller problem. [Furnace blowing cold air](/guides/furnace-blowing-cold-air/) and [furnace not heating](/guides/furnace-not-heating/) help you name it. If you are not sure the heat is a furnace at all, use [no heat in the house](/guides/no-heat-in-house/) and say you are unsure. Boilers that have lost water should not be reset all night. [Boilers](/guides/hot-water-boilers-in-older-houses/) explain why.",
        "A heat pump in a defrost cycle is not no-heat yet. Give it the few minutes [heat pump basics](/guides/heat-pump-basics-northern-illinois/) describes before you declare an emergency. A heat pump with no backup, on a night below its ability, will not catch up by morning. Say “no backup heat” in the first sentence. [Cold-climate heat pumps](/guides/cold-climate-heat-pumps-northern-illinois/) explain capacity. They do not heat the house tonight.",
      ],
    },
    {
      heading: "Temporary heat that is allowed to exist, and heat that is not",
      paragraphs: [
        "The U.S. Consumer Product Safety Commission’s guidance on space heaters is the constraint. Keep them at least three feet from anything that can burn, on the floor, plugged directly into a wall outlet, and not running on an extension cord as a workaround. Do not leave them unattended in a way that ignores the heater’s instructions, and do not use them as a reason to skip a carbon monoxide alarm. An electric heater does not make carbon monoxide. It does start fires. It also trips circuits if you run several on one bedroom outlet. One heater, one supervised room, people awake or following the device’s own rules, is the outer limit of this page’s advice.",
        "Do not heat the house with a gas oven or range. Do not use a charcoal grill, a camp stove, or a generator indoors or in a garage, even with the door open. Do not idle a car in an attached garage. CPSC is explicit about those. They are carbon monoxide events with a heating excuse. A fireplace or wood stove you already know how to run, with the damper open and a working alarm in the house, is different from inventing a fire in a fireplace you have never used. If the damper sticks or the room fills with smoke, put it out the way you were taught and ventilate from a safe position. Do not “help” a smoky fireplace by running the furnace blower.",
      ],
    },
    {
      heading: "Pipes, toilets, and the parts of the house that freeze before you do",
      paragraphs: [
        "A house that falls into the 40s can freeze pipes in exterior walls, crawl spaces, and additions long before the living room feels dangerous to a healthy adult. Open cabinet doors on exterior sinks so room air reaches the pipes. Let a faucet drip if a particular line has frozen before and you know which one. Do not leave water running in a sink that drains into a frozen line and floods the cabinet. If you do not know your plumbing, a modest drip on a vulnerable lavatory is the usual advice, and a burst pipe is still possible. This is not a plumbing manual. It is a reason not to let an empty house sit at outdoor temperature with the water on.",
        "If you leave for the night because the house is unsafe, turn the water off at the main if you know where that valve is and if you can do it without staying in a house that smells like gas. If you do not know the valve, tell whoever responds that the house is unoccupied and the water is on. A heating emergency and a flood can be the same night. [The contact page](/contact/) is not the water utility and not the fire department.",
      ],
    },
    {
      heading: "Neighbors, shelters, and the limit of a heating website",
      paragraphs: [
        "If the house cannot be kept safe, go somewhere that is heated. That may be a neighbor, family, or a local warming location the city or the county has opened. This site does not keep a live list of shelter beds and will not invent one. In a wide outage, the electric utility for Freeport is ComEd, and a furnace with no power does not run even if the gas is fine. A generator outdoors, far from doors and vents, is an electrical topic with carbon monoxide rules, not a device to put in the garage “just for the furnace.” Follow CPSC: never indoors, never in the garage, never near openings.",
        "The [service area](/service-area/) page lists nearby towns so you can name yours. It does not mean a technician is already on your street. When you call, the honest sentence includes whether people can leave. A website cannot dispatch. [Emergency HVAC](/services/emergency-hvac-freeport-il/) explains what this site means by emergency: a house losing heat, with gas and carbon monoxide handled first by 911 and the utility.",
      ],
    },
    {
      heading: "What can honestly wait until morning",
      paragraphs: [
        "A single room that is cold while the rest of the house holds temperature can usually wait, if no one must sleep in that room and no pipes are in it. [Cold bedrooms](/guides/why-an-upstairs-bedroom-stays-cold/) is the non-emergency version. A thermostat with dead batteries, a furnace switch turned off, or a filter you can change in two minutes should be tried before an after-midnight call. [Thermostat not working](/guides/thermostat-not-working/) is the short list. If those checks restore heat, you did not have an emergency. You had a switch.",
        "An outdoor temperature in the upper 30s, a house that is losing a degree an hour from a comfortable start, healthy adults, and a plan to be seen in the morning can be a reasonable wait. Recheck the indoor temperature before you sleep and once if you wake. If the fall speeds up, the wait is over. Do not take a sleep aid and hope. Do not use the oven “just until morning.” The morning repair is [furnace repair](/services/furnace-repair-freeport-il/) or [heating repair](/services/heating-repair-freeport-il/) depending on whether you know the equipment.",
      ],
    },
    {
      heading: "How to say it on the phone",
      paragraphs: [
        "Give the indoor temperature, the outdoor temperature if you know it, who is in the house, whether anyone cannot safely stay cold, and what the equipment did. Say whether you smell gas or an alarm sounded. If those happened, you should already be outside on a different phone call. Say the town and ZIP. Say what you already tried, including how many resets. A lockout you have reset six times is information. A seventh reset is not a favor to the technician.",
        "The number on this site connects you with an independent professional when you choose to call it. The site is not a contractor, not Nicor, and not 911. The [disclosure](/disclaimer/) and the [about page](/about/) keep that plain. There is no published arrival time because this site does not control a truck. If the person who answers cannot come, ask who can, or use another option, and get people to a heated place if the night requires it. Reading this page does not create an appointment.",
      ],
    },
  ],
  relatedServices: [
    "emergency-hvac-freeport-il",
    "furnace-repair-freeport-il",
    "heating-repair-freeport-il",
  ],
  relatedGuides: [
    "no-heat-in-house",
    "carbon-monoxide-safety",
    "when-a-furnace-locks-out",
  ],
});
