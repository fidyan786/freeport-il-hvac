import { article } from "@/content/articles/build";

export const boilers = article({
  slug: "hot-water-boilers-in-older-houses",
  category: "boilers",
  title: "Hot-water boilers in older local houses",
  metaTitle: "Hot-Water Boilers in Freeport Houses | Millrace Heating",
  metaDescription:
    "How a hot-water boiler differs from a furnace in an older Stephenson County house: pressure, air in the radiators, leaks, and when to stop adding water.",
  h1: "A hot-water boiler is not a furnace that happens to be in the basement",
  lede:
    "A lot of older houses in Freeport and the surrounding towns still heat with a boiler and radiators or baseboard. The complaints sound like furnace complaints: the house is cold, a noise started, one room quit. The machine is different, and several furnace habits are actively unhelpful on it.",
  image: "/photos/basement-sheet-metal-ducts.webp",
  imageAlt: "Basement mechanical space. Many older Freeport houses heat with a boiler here rather than ducts.",
  body: [
    {
      heading: "Three kinds of “boiler heat,” and why the name matters",
      paragraphs: [
        "Hot-water (hydronic) systems pump heated water through radiators, baseboard, or tubing in a floor. Steam systems boil water and let steam rise through pipes to radiators, then drain the condensate back. A furnace heats air and pushes it through ducts. People say “boiler” for all three when they are cold. The person on the phone cannot guess which one you have from the word “radiator” alone, because both steam and hot water use radiators. Look for a pressure gauge and a circulator pump if you can do that without touching anything hot. A sight glass and air vents on each radiator suggest steam. If you are unsure, say unsure.",
        "This page is about residential hot-water heat. Steam venting and pitch are in [balancing radiators](/guides/balancing-radiators-in-an-older-house/), which also covers hot-water balancing so the two are not treated as the same chore. Forced-air no-heat symptoms stay on [furnace not heating](/guides/furnace-not-heating/) and [no heat in the house](/guides/no-heat-in-house/). If you have ducts and a gas furnace, you are on the wrong page, and that is useful information.",
      ],
    },
    {
      heading: "Pressure is a system fact, not a number to top off every Sunday",
      paragraphs: [
        "A closed hot-water system needs enough pressure to push water to the highest radiator and to keep the circulator happy. Many two-story houses sit somewhere around 12 to 15 psi on the gauge when the water is cold. That is a common field range, not your boiler’s specification. Taller houses need more. The relief valve is generally set near 30 psi, and water coming out of that valve is a stop sign, not a drip to put a bucket under for the winter. The right cold pressure is on the boiler paperwork and depends on height. Do not keep adding water to chase a number you found on a forum.",
        "The fill valve and the backflow preventer are there so the system can be filled and so boiler water does not get pushed back into the drinking water. If you are adding water often, the system is losing it. A leak at a radiator valve, a corroded air vent, or a leaking relief valve will drop the pressure. So will a waterlogged expansion tank that no longer accepts the extra volume when the water heats and expands. Adding water without finding the loss introduces fresh oxygen, and oxygen is what rusts the inside of an old steel boiler and the pipes. One careful fill to restore pressure is a homeowner action some manuals describe. Weekly filling is a repair.",
      ],
    },
    {
      heading: "Air in the radiators is the usual reason one room goes cold",
      paragraphs: [
        "Water systems that have been opened, or that are losing water, collect air. Air in a radiator keeps hot water out. The room goes cold while the boiler downstairs runs as if it is doing its job. Bleeding a radiator, at the small valve on a hot-water radiator, can release that air until water appears. Have a rag ready. Do not bleed a steam radiator with the same casual habit, and do not open a hot valve with your face over it. If you do not know whether the system is steam or water, do not open anything. Call and describe the radiators instead.",
        "If you bleed every radiator and the highest one goes cold again within a day, you are not “just getting air out.” You are either still low on pressure, pulling air in at a leak, or dealing with a circulator that is not moving water. Those are service problems. [Uneven radiators](/guides/balancing-radiators-in-an-older-house/) explains balancing valves and the mistake of closing too many radiators to force heat elsewhere. Closing radiators is not bleeding, and on some systems it leaves the pump pushing against a shut circuit.",
      ],
    },
    {
      heading: "Circulators, zone valves, and the sound people call “the boiler”",
      paragraphs: [
        "The boiler heats water. A circulator moves it. A zone valve or a second circulator decides which floor gets it. A bang when heat starts can be a pipe expanding, a circulator starting dry, or water hammer. A high-pitched whine can be a failing circulator bearing or air. None of those sounds should be oiled away with a random can. Older circulators sometimes have oil ports. Many newer ones do not. If you do not see a port the manual names, do not drip oil into a motor.",
        "A zone that never opens leaves that floor cold and can also cause the boiler to short cycle if another zone is tiny. Thermostats on boiler systems are often simple switches. A [new smart thermostat](/guides/replacing-a-thermostat-in-an-older-house/) can be the wrong electrical animal, especially on a millivolt circuit. If the boiler is hot and a whole floor is cold, say “zone” if you have more than one thermostat. That word changes the diagnosis from “the boiler is dead” to “this path is dead.”",
      ],
    },
    {
      heading: "Leaks, the relief valve, and water on the floor",
      paragraphs: [
        "A small weep at a valve stem may be a packing nut. It may also be the start of a larger leak. Water under a boiler can be the relief valve, a failed gasket, a cracked section, or condensate from a high-efficiency boiler’s drain that you are mistaking for system water. High-efficiency boilers, like high-efficiency furnaces, make condensate that must drain and can freeze in a sidewall vent. [Furnace condensate](/guides/high-efficiency-furnace-condensate-problems/) is written for furnaces and the drain physics are similar. Do not assume an old cast-iron boiler makes that condensate. Most of them do not. They vent up a chimney, and a blocked chimney is a different emergency.",
        "If the relief valve discharges, if you see steam where water should be, or if the boiler is dry and still firing, shut it down the way the manual describes if you can do that safely, and call. Do not keep running a boiler that has lost water. A low-water cutoff that has been jumpered so the boiler “keeps heating” is how boilers are destroyed and how people get hurt. This is not a dramatic extra sentence. It is the failure mode of a bypassed safety.",
      ],
    },
    {
      heading: "Gas, carbon monoxide, and the chimney you cannot see",
      paragraphs: [
        "Gas-fired boilers in older houses often vent into a masonry chimney shared with a water heater. A deteriorated liner, a blocked cap, or a vent connector that has rusted through can spill combustion products into the basement. Soot, melted plastic, or a smell of exhaust is a stop. If you smell gas or a carbon monoxide alarm sounds, leave the house. From outside, call 911 and Nicor Gas at [888-642-6748](tel:+18886426748). Nicor serves Freeport and the Stephenson County towns on its map. The [alarm page](/guides/carbon-monoxide-alarms-for-gas-heat/) covers placement. Do not bleed radiators on the way out.",
        "A boiler that backdrafts when the clothes dryer or a kitchen hood runs is a combustion-air problem, the same interaction described in [ventilation and a tightened house](/guides/ventilation-and-combustion-air-in-a-tight-house/). Tightening an old house around a natural-draft boiler without looking at combustion air is a bad renovation sequence. Mention any recent air sealing if you call about smells or soot.",
      ],
    },
    {
      heading: "What a boiler does not want you to copy from furnace advice",
      paragraphs: [
        "There is usually no one-inch filter slot to upgrade to a high MERV number. There is no blower door. A setback that works on a furnace can leave a boiler’s mass and the radiators far behind in the morning. Read [setbacks](/guides/thermostat-setbacks-on-a-cold-night/) with that distinction in mind. Space heaters used to cover a dead zone have the same fire rules as anywhere else: three feet of clearance, no unattended “just for the night” plan, nothing plugged into a skinny extension cord as a permanent circuit.",
        "Annual service on a boiler is a combustion and safety check, a look at the vent, the pressure vessel’s visible condition, the expansion tank, the relief valve discharge, and the controls. It is not a hose-down. [What a heating visit covers](/guides/what-a-heating-maintenance-visit-covers/) is written around furnaces. Ask for the boiler version of that list when you book maintenance: venting, pressure, the low-water cutoff, and the circulators. Say boiler on the [heating repair](/services/heating-repair-freeport-il/) call so nobody arrives expecting a forced-air cabinet.",
      ],
    },
    {
      heading: "How to describe a boiler problem so the visit matches the house",
      paragraphs: [
        "Say hot water or steam if you know, or say you do not. Say whether the boiler is hot, whether the circulator is running, whether one floor or one radiator failed, and whether you have been adding water. Say if the relief valve has discharged. Give the town and ZIP. Radiator houses in Lena, Cedarville, and the other nearby towns are not a different technology. They are the same machines, and coverage is confirmed on the phone. The [service area](/service-area/) page is only a list of names.",
        "This site is not a boiler contractor. It connects the call to an independent professional and may be paid for that connection. The [disclosure](/disclaimer/) is the plain version. There is no price and no claim that every boiler problem in Stephenson County is something the person who answers will take. Ask. If the heat is actually a furnace and you landed here by mistake, [furnace blowing cold air](/guides/furnace-blowing-cold-air/) and [furnace repair](/services/furnace-repair-freeport-il/) are the better doors.",
      ],
    },
  ],
  relatedServices: [
    "heating-repair-freeport-il",
    "hvac-maintenance-freeport-il",
    "emergency-hvac-freeport-il",
  ],
  relatedGuides: [
    "balancing-radiators-in-an-older-house",
    "no-heat-in-house",
    "carbon-monoxide-alarms-for-gas-heat",
  ],
});
