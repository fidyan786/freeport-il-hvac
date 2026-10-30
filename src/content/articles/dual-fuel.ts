import { article } from "@/content/articles/build";

export const dualFuel = article({
  slug: "dual-fuel-heat-pump-and-gas-furnace",
  category: "heat-pumps",
  title: "Dual fuel: a heat pump with a gas furnace",
  metaTitle: "Dual Fuel Heat Pump and Furnace | Millrace Heating",
  metaDescription:
    "How a heat pump and a gas furnace share a Freeport house, what switchover means, and what this setup does not guarantee.",
  h1: "Dual fuel means the heat pump and the furnace are supposed to take turns",
  lede:
    "A dual-fuel system uses a heat pump in milder cold and a gas furnace when the outdoor temperature, or the load, gets past what the pump should carry. In Stephenson County that pairing is a coherent idea. It is not automatic savings, and it is not a furnace with an air conditioner that happens to run backward unless someone set it up that way.",
  image: "/photos/condensing-furnace-vent.webp",
  imageAlt: "The plastic vent of a condensing furnace, often the backup heat in a dual-fuel system.",
  body: [
    {
      heading: "Two machines, one thermostat, and a rule for which one is allowed to run",
      paragraphs: [
        "In a typical dual-fuel house the outdoor unit is a heat pump, the indoor coil sits on a gas furnace, and a thermostat decides which source of heat is allowed to run. Above the chosen changeover, the heat pump heats. Below it, the furnace heats and the compressor stays off. Some controls also allow the furnace to help during defrost. The details are in the installer settings, which a homeowner usually cannot see and should not guess at from a menu labeled “installer.”",
        "This is different from a standard furnace plus air conditioner, where the outdoor unit only runs in cooling. It is also different from an all-electric heat pump with strips in the air handler. If you are not sure which one you have, look for a gas pipe and a flue or plastic vent at the furnace, and look for an outdoor unit that runs on a cold day. [Cold-climate heat pumps](/guides/cold-climate-heat-pumps-northern-illinois/) covers the all-electric and capacity questions. [Heat pump basics](/guides/heat-pump-basics-northern-illinois/) covers defrost. Read those if the outdoor unit is new to you.",
      ],
    },
    {
      heading: "Changeover is a choice. It is not printed on the Freeport water tower.",
      paragraphs: [
        "The outdoor temperature where the system switches can be chosen for capacity, so the furnace comes on when the pump can no longer hold the house, or with an eye on fuel cost, so the furnace comes on when gas is the cheaper way to make the next unit of heat. Those temperatures are not the same, and neither one is a city constant. Utility rates move. House leakage moves the capacity line. A changeover copied from a different state is just a number.",
        "This website will not tell you the temperature to enter. It will tell you to ask whoever set the system what they chose and why. If the gas furnace runs on every cool evening in October, the changeover may be high, the thermostat may be calling for backup because of a [setback](/guides/thermostat-setbacks-on-a-cold-night/), or the heat pump may be faulted and the furnace is quietly saving you. Those three causes feel identical from the sofa. They are not the same repair.",
      ],
    },
    {
      heading: "What you should feel indoors when the handoff is working",
      paragraphs: [
        "Heat-pump supply air is usually cooler than furnace supply air. When the furnace takes over, the registers often feel hotter and the sound of the house changes, because a burner and an inducer are different from a compressor. A short period of cooler air during defrost, then a return to heat, can be normal. Long stretches of lukewarm air on a night that should have switched to gas are not. Say which one you feel. “The air is warm but the outdoor unit never stops” is a different report from “the air went cold and stayed cold.”",
        "Both machines still need airflow. A [restrictive filter](/guides/furnace-filter-merv-and-blower-limits/) or [leaky ducts](/guides/ducts-in-basements-and-cold-attics/) will make the heat pump feel weak and can also trip the furnace on limit once the burner is doing the work. People then conclude dual fuel “doesn’t work here.” Sometimes the building is what does not work. [Uneven rooms](/guides/uneven-temperatures/) are a clue that the handoff is being judged from the wrong room.",
      ],
    },
    {
      heading: "The furnace half still has furnace problems",
      paragraphs: [
        "The gas furnace in a dual-fuel pair can lock out, freeze a condensate line, or fail a pressure switch like any other furnace. If the changeover calls for gas and the furnace does not light, the house gets whatever the heat pump can still do, or it gets nothing if the control will not run both and the pump is locked out below the changeover. That is a cold-house scenario. [When a furnace locks out](/guides/when-a-furnace-locks-out/) and [condensate on high-efficiency furnaces](/guides/high-efficiency-furnace-condensate-problems/) apply directly. Do not keep resetting a furnace that lights and dies.",
        "Combustion safety does not go away because a heat pump is fashionable. A gas furnace still needs a clear vent, a working carbon monoxide alarm, and a heat exchanger that is intact. If you smell gas or the alarm sounds, leave. Call 911 and Nicor Gas at [888-642-6748](tel:+18886426748) from outside. The heat pump is irrelevant until the house is cleared. [Carbon monoxide alarms](/guides/carbon-monoxide-alarms-for-gas-heat/) is the longer version of the alarm advice.",
      ],
    },
    {
      heading: "The heat pump half still has heat pump problems",
      paragraphs: [
        "A dual-fuel outdoor unit can fail a capacitor, ice over, or lose charge. If it fails in mild weather, you may not notice until someone realizes the furnace has been carrying October. If it fails in January, you may not notice if the furnace was going to run anyway. The maintenance point is that both halves need a look. A fall check that only looks at the burners misses the outdoor unit. A spring check that only hoses the condenser misses the heat exchanger. [What a heating visit should cover](/guides/what-a-heating-maintenance-visit-covers/) is written for furnaces and still lists the items that should not be skipped when a heat pump is attached.",
        "Refrigerant is not a homeowner task and not a seasonal top-off. EPA Section 608 certification is required to handle it. A system that is low on charge has a leak. Adding refrigerant and leaving the leak is how compressors get replaced later. Say “dual fuel” on the [heat pump repair](/services/heat-pump-repair-freeport-il/) call so the person who answers does not assume you have strips in an air handler and no gas furnace.",
      ],
    },
    {
      heading: "When dual fuel is a sensible conversation, and when it is a distraction",
      paragraphs: [
        "It is a sensible conversation when you already have a gas furnace and ducts, you are replacing the air conditioner or the furnace anyway, and you want the milder part of the heating season carried by a heat pump. It is a distraction when the house has no ducts, the furnace is condemned for a cracked heat exchanger you have not addressed, or the electrical panel cannot feed the outdoor unit. It is also a distraction on a night the house is already cold. Repair or emergency heat first. Equipment philosophy later, and only after someone is in the building.",
        "Houses on radiators do not become dual fuel by adding an outdoor unit to a boiler. They might get a [ductless unit for one room](/guides/ductless-for-one-cold-room/) or a separate ducted system. Pretending a boiler and a heat pump automatically stage together is how controls get tangled. [Boilers](/guides/hot-water-boilers-in-older-houses/) stay on their own page for a reason.",
      ],
    },
    {
      heading: "Questions that produce a real answer",
      paragraphs: [
        "Ask what outdoor temperature the changeover uses now, and whether it was chosen for capacity or for cost. Ask whether the furnace runs during defrost. Ask what happens if the heat pump faults: does the furnace take over, or does the house just stop. Ask whether the ducts were measured or only assumed. Ask who services both halves. The [hiring questions](/guides/questions-before-you-hire-hvac-help/) page adds the license, insurance, and scope items that apply to any visit. None of these questions include a price, because this site does not publish one.",
        "Ask what the plan is for a night near the January normal, not for a 40°F demonstration. The Freeport station’s January average low is near 11°F. A dual-fuel system that cannot explain that night is a heat pump with a furnace standing next to it, not a system. [What to fix in the house first](/guides/what-to-fix-before-you-replace-hvac-equipment/) still applies. A changeover setting cannot patch an open attic hatch.",
      ],
    },
    {
      heading: "How to describe the problem if the handoff is what failed",
      paragraphs: [
        "Say “dual fuel” or “heat pump and gas furnace.” Say whether you hear the burner, whether the outdoor unit is running, and what the thermostat displays for auxiliary or emergency. Say the outdoor temperature if you know it. Say the town and ZIP. If this started after a new thermostat, say that immediately and look at [thermostat replacement](/guides/replacing-a-thermostat-in-an-older-house/). A universal thermostat set up as a single-fuel furnace will run the wrong machine with complete confidence.",
        "The number on this site connects you with an independent local professional. The site is not a contractor and is not paid to prefer gas or electricity. The [disclosure](/disclaimer/) states that. If only the cooling side failed in summer, you can still say dual fuel, and you can also start from [AC not turning on](/guides/ac-not-turning-on/), because the outdoor unit is the cooling machine too.",
      ],
    },
  ],
  relatedServices: [
    "heat-pump-repair-freeport-il",
    "furnace-repair-freeport-il",
    "furnace-installation-freeport-il",
  ],
  relatedGuides: [
    "cold-climate-heat-pumps-northern-illinois",
    "heat-pump-basics-northern-illinois",
    "thermostat-setbacks-on-a-cold-night",
  ],
});
