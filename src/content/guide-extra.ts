import type { Guide } from "@/content/guide-types";
import { NICOR_GAS } from "@/lib/safety-contacts";

export const extraGuides: Guide[] = [
  {
    slug: "furnace-blowing-cold-air",
    href: "/guides/furnace-blowing-cold-air/",
    title: "Furnace blowing cold air in Freeport",
    metaTitle: "Furnace Blowing Cold Air in Freeport | Millrace Heating",
    metaDescription:
      "A furnace blowing cold air in Freeport is a blower moving unheated air. How to tell it from a fan setting, and when to call. Call (703) 703-7855.",
    h1: "Furnace blowing cold air in Freeport",
    lede:
      "A furnace blowing cold air in Freeport is not “the heat is on.” The blower can run for hours while the burners never light, and on a night in the teens that air is colder than the rooms. This is a furnace repair problem unless you only left the fan switch on.",
    datePublished: "2026-10-12",
    image: "/photos/heroes/gas-furnace-utility.webp",
    imageAlt: "Gas furnace in a utility space, the source of cold-air calls in Freeport.",
    body: [
      {
        heading: "Furnace blowing cold air versus the fan switch",
        paragraphs: [
          "Thermostats have a fan setting. On means the blower runs whether or not the furnace is heating. Auto means the blower runs only when there is a call for heat, or for a short cooldown after. If the fan is On and the system mode is off, you will feel air that never went across a flame. Set the fan back to Auto. If the air is still cold while the thermostat is calling for heat, the burners are not heating.",
          "A furnace that tries to light, fails, and then runs the blower anyway is a different case. You may hear a click, a brief whoosh, or nothing at all, then air at the registers. That sequence is worth describing on the call. It is not a reason to keep resetting the furnace.",
        ],
      },
      {
        heading: "Why it shows up on the coldest Freeport nights",
        paragraphs: [
          "Limit switches, pressure switches, and ignition parts fail in ways that leave the blower as the only thing still moving. A dirty filter after months of closed windows can overheat the furnace and trip a limit. The burners shut off. The blower may keep running to cool the heat exchanger, and the air you feel is not warm enough to hold the house. Replacing a filthy filter once is fair. Opening the cabinet is not.",
          "Older Freeport houses make the symptom feel worse because they lose heat quickly. A blower pushing basement air into a leaky two-story drops the rooms instead of holding them. If the indoor temperature is falling and the night is below freezing, shut the system off if you are sure the house is safe, and call for furnace repair or emergency HVAC.",
        ],
      },
      {
        heading: "Gas and what not to do while you wait",
        paragraphs: [
          `If you smell gas or a carbon monoxide alarm is sounding, cold air is no longer the topic. Leave and call 911 and Nicor Gas at ${NICOR_GAS.display} from outside. Nicor publishes that number for gas emergencies. Do not stay in the basement to watch the furnace try again.`,
          "Do not jumper a safety switch to force the burners. Do not run the fan on On overnight hoping the air will “catch.” Call to be connected with a local heating and cooling professional and say the blower runs and the air stays cold. That sentence is the whole diagnosis you can honestly give from the hallway.",
        ],
      },
    ],
    relatedServices: [
      "furnace-repair-freeport-il",
      "emergency-hvac-freeport-il",
      "heating-repair-freeport-il",
    ],
    relatedGuides: ["furnace-not-heating", "furnace-short-cycling", "thermostat-not-working"],
  },
  {
    slug: "no-heat-in-house",
    href: "/guides/no-heat-in-house/",
    title: "No heat in a Freeport house",
    metaTitle: "No Heat in a Freeport, IL House | Millrace Heating",
    metaDescription:
      "No heat in a Freeport house can be a furnace, a heat pump, a boiler, or a thermostat. What to look at, then who to call. Call (703) 703-7855.",
    h1: "No heat in a Freeport house",
    lede:
      "No heat in a Freeport house is the symptom. The equipment behind it might be a gas furnace, a heat pump, a boiler, or electric baseboard in an addition. You do not have to name the part before you call. You do have to say whether the whole house is cold and how cold it is inside.",
    datePublished: "2026-10-12",
    image: "/photos/heroes/snow-street-oak-park-illinois.webp",
    imageAlt: "Snow-covered houses, the setting for no-heat calls in Freeport.",
    body: [
      {
        heading: "No heat in the house is not one failure",
        paragraphs: [
          "Whole-house failure and one cold room are different jobs. If every register or every radiator is cold, start with the heat source and the thermostat. If the hallway is fine and a back bedroom is not, you may be looking at ducts, a closed register, or a room the original system never served. Say which one you have. Heating repair is the page when the equipment is unclear. Furnace repair is the page when you can see a gas furnace and ducts.",
          "Look, don’t dismantle. Is the thermostat set to heat, and is the setpoint above the room? Did a breaker trip after a storm? Is there an outdoor unit that usually runs in winter, which may be a heat pump whose backup heat did not come on? Radiators with no blower noise are not a furnace problem. Those observations are the call. They are not a repair.",
        ],
      },
      {
        heading: "Freeport nights do not give you a long window",
        paragraphs: [
          "Sub-freezing weather is normal here, and older houses drop fast once the heat stops. A temperature that is still in the 60s with a working backup plan is different from a house headed for the 50s after dark. Say the number. Emergency HVAC is the right description when waiting is the risky part. A mild complaint can be heating repair in ordinary time.",
          "Space heaters are a stopgap with a fire risk if they sit on extension cords or near curtains. If you use one, keep it in the open, on a proper circuit, and do not leave it running while you sleep. This guide cannot watch the house. The call can start a visit.",
        ],
      },
      {
        heading: "Leave the house if the air is unsafe",
        paragraphs: [
          `No heat plus a gas smell, or no heat plus a carbon monoxide alarm, is not a thermostat story. Get out. Call 911 and Nicor Gas at ${NICOR_GAS.display}. The heating equipment stays off until someone clears the building. Nicor lists that number for gas emergencies.`,
          "After the house is safe, call to be connected with a local heating and cooling professional and describe what kind of heat you think you have. If you are in Lena, Cedarville, Dakota, or another nearby town, say so. Coverage is confirmed on the phone, not by this page.",
        ],
      },
    ],
    relatedServices: [
      "heating-repair-freeport-il",
      "emergency-hvac-freeport-il",
      "furnace-repair-freeport-il",
    ],
    relatedGuides: ["furnace-not-heating", "thermostat-not-working", "furnace-blowing-cold-air"],
  },
  {
    slug: "ac-not-turning-on",
    href: "/guides/ac-not-turning-on/",
    title: "AC not turning on in Freeport",
    metaTitle: "AC Not Turning On in Freeport, IL | Millrace Heating",
    metaDescription:
      "AC not turning on in Freeport after a long winter idle: thermostat, disconnect, and a breaker that should not be reset twice. Call (703) 703-7855.",
    h1: "AC not turning on in Freeport, IL",
    lede:
      "AC not turning on in Freeport is a common first-hot-week complaint, because the outdoor unit sat through snow and freeze-thaw and then was asked to start. A silent condenser, a hum that never becomes a start, and a breaker that trips are three different reports. Ice on the lines can end in the same silence if a safety switch opened.",
    datePublished: "2026-10-12",
    image: "/photos/heroes/outdoor-ac-condenser.webp",
    imageAlt: "Outdoor air conditioner that may not start on the first hot week in Freeport.",
    body: [
      {
        heading: "AC not turning on: three checks, then stop",
        paragraphs: [
          "Confirm the thermostat is in cool and the setpoint is below the room temperature. After a long heating season, leftover heat mode is a real mistake on the first warm Saturday. Check the breaker once. Check that the outdoor disconnect, the pull-out block by the condenser, is seated. If the breaker trips again when the system tries to start, leave it off. A second and third reset is how a failing compressor or a shorted wire gets worse.",
          "Look at the outdoor unit without opening it. Silence is different from a fan that spins, and different from a hum with no spin. Leaves packed in the coil and a unit buried in last fall’s debris are worth mentioning. They are not a reason to spray water into the electrical compartment.",
        ],
      },
      {
        heading: "Ice, short cycling, and a system that used to run",
        paragraphs: [
          "An air conditioner that ran and then froze can stop turning on once a safety opens or the coil is a block of ice. That used to be its own page. It belongs here because the result the homeowner sees is a unit that will not start, or that starts and quits. Turn cooling off and set the fan to on only if you are trying to melt ice with airflow and you are not flooding a drain pan you cannot see. If water is already a problem indoors, shut it down and call.",
          "A system that never rests is a different symptom, covered with furnace short cycling when the pattern is start-stop-start. An AC that runs all afternoon on a humid Freeport day may be undersized or low on airflow, not “not turning on.” Describe the pattern you actually have.",
        ],
      },
      {
        heading: "When a dead condenser is urgent",
        paragraphs: [
          "Freeport summers are shorter than the winters, but heat still hurts. If someone in the home cannot tolerate a warm house, say that and use AC repair or emergency HVAC. If the unit is merely inconvenient and the night will cool the house, you can still call AC repair and describe the silence or the tripped breaker. Do not add refrigerant. Do not replace a capacitor because a video said so.",
          "Call to be connected with a local heating and cooling professional. Preparing the unit before summer is the other half of this story, on the guide about AC after a Freeport winter. If this condenser has failed every June, AC installation is the longer conversation after someone has seen it.",
        ],
      },
    ],
    relatedServices: [
      "ac-repair-freeport-il",
      "emergency-hvac-freeport-il",
      "hvac-maintenance-freeport-il",
    ],
    relatedGuides: ["ac-blowing-warm-air", "prepare-ac-after-winter", "poor-airflow"],
  },
  {
    slug: "thermostat-not-working",
    href: "/guides/thermostat-not-working/",
    title: "Thermostat not working in Freeport",
    metaTitle: "Thermostat Not Working in Freeport, IL | Millrace Heating",
    metaDescription:
      "A thermostat not working in Freeport may be batteries, mode, or the furnace ignoring the call. What you can check before a visit. Call (703) 703-7855.",
    h1: "Thermostat not working in Freeport, IL",
    lede:
      "A thermostat not working in Freeport is often the first thing people blame, and sometimes they are right. Dead batteries, a mode left on cool in January, a blank screen after a power blink, or a setpoint the furnace never answers are different problems. The wall control is not the furnace, and replacing it at random does not fix a lockout.",
    datePublished: "2026-10-12",
    image: "/photos/heroes/digital-wall-thermostat.webp",
    imageAlt: "Wall thermostat, the control people check first in Freeport heating calls.",
    body: [
      {
        heading: "Thermostat not working: what the screen is telling you",
        paragraphs: [
          "A blank screen on a battery thermostat is a battery job. Replace them with the type the compartment shows, and do not assume a wired thermostat uses batteries at all. A screen that is on but the system does not react is a different problem. Note the mode: heat, cool, off, or emergency heat. Note the fan: auto or on. Note whether the room temperature on the display is even close to a thermometer you trust. A display that reads 80 in a cold room is not a furnace failure yet.",
          "After a storm, a furnace and a thermostat can both be confused. One power cycle of the breaker is a fair check if you know which breaker it is. If the furnace clicks and locks out, you are past the thermostat. Write down any flashing light you can see through the furnace door without removing it.",
        ],
      },
      {
        heading: "Location, old houses, and false comfort",
        paragraphs: [
          "Thermostats in Freeport houses are often in a hallway that does not represent the rooms you live in. Sun on the wall, a lamp below the control, or a draft from a stairwell will make the display “right” while a bedroom is not. That is uneven temperatures, not a broken thermostat. Moving the control is a wiring job, not a weekend of extra holes in plaster.",
          "Emergency heat on a heat pump is a mode, not a stuck button to leave engaged for a week. If you do not know what the mode does, set it back to heat and see if the outdoor unit responds. If nothing responds and the house is getting colder, call. Heat pump service and heating repair are the pages that match. Do not buy a new thermostat because the old one is a color you dislike while the furnace is in a safety lockout.",
        ],
      },
      {
        heading: "When to stop adjusting it",
        paragraphs: [
          "If you have fresh batteries or a powered display, the mode is heat, the setpoint is well above the room, and nothing happens at the furnace or the outdoor unit, stop menu-diving. Call to be connected with a local heating and cooling professional and say what the display shows and what the equipment does not do. If you smell gas or a carbon monoxide alarm sounds, leave first.",
          "A thermostat that clicks and the furnace that answers with cold air is a furnace blowing cold air, not a control problem. A thermostat that never calls, in a house that is falling toward the 50s on a sub-freezing night, is emergency HVAC until someone sorts out whether the control or the equipment quit.",
        ],
      },
    ],
    relatedServices: [
      "heating-repair-freeport-il",
      "furnace-repair-freeport-il",
      "emergency-hvac-freeport-il",
    ],
    relatedGuides: ["no-heat-in-house", "furnace-not-heating", "uneven-temperatures"],
  },
  {
    slug: "prepare-ac-after-winter",
    href: "/guides/prepare-ac-after-winter/",
    title: "Prepare the AC after a Freeport winter",
    metaTitle: "Prepare AC After a Freeport Winter | Millrace Heating",
    metaDescription:
      "How to prepare an air conditioner after a Freeport winter: clearance, the filter, and a maintenance visit before the first humid week. Call (703) 703-7855.",
    h1: "Prepare the AC after a Freeport winter",
    lede:
      "Preparing an air conditioner after a Freeport winter is mostly about an outdoor unit that has not run since fall. Snow, freeze-thaw, cottonwood, and a disconnect nobody checked are the local story. The goal is a condenser that can start on the first humid week, not a surprise no-cool call.",
    datePublished: "2026-10-12",
    image: "/photos/heroes/outdoor-ac-condenser.webp",
    imageAlt: "Outdoor condenser that sits idle through a Freeport winter.",
    body: [
      {
        heading: "What you can do before a maintenance visit",
        paragraphs: [
          "Clear debris you can reach without removing panels. Leaves in the bottom of the coil, grass grown into the cabinet, and a winter cover that is still on are homeowner jobs. Cut power at the disconnect before you put your hands near the fan, and do not spin the fan blade by hand against a seized motor. Rinse the outside of the coil with a gentle hose only if you can keep water out of the electrical side. If you are unsure, leave it for the visit.",
          "Indoors, look at the filter. A winter of closed windows loads it, and that same filter will starve the indoor coil on the first cooling day. Replace it if it is collapsed or gray. Confirm the thermostat can be set to cool. That is the list. Refrigerant, capacitors, and contactors are not on it.",
        ],
      },
      {
        heading: "Why the first humid week is a bad time to discover a problem",
        paragraphs: [
          "Stephenson County cooling is a short season. Equipment that sat for months fails in a cluster when everyone wants it the same week. HVAC maintenance in spring is how you move that discovery earlier, while a weak capacitor is a part and not a weekend of warm bedrooms. This website connects the call. It does not book a route or promise a date. Ask the professional you reach what a cooling check includes.",
          "If the unit will not start when you do try it, stop resetting the breaker and read the guide on an AC that will not turn on. If it runs and the air stays warm, that is AC blowing warm air, and it is AC repair, not a rinse. Ice on the lines means shut cooling off and call rather than “letting it work through it.”",
        ],
      },
      {
        heading: "Pad, clearance, and the unit’s next winter",
        paragraphs: [
          "While you are outside, notice whether the pad has heaved, whether the cabinet leans, and whether a deck or a shrub has closed in the airflow. A condenser boxed in will run hot and fail early. Snow clearance matters even though the unit is for summer: a coil buried until April stays wet and dirty. Mention what you see when you call.",
          "If this outdoor unit has needed a repair every June, say that. AC installation may be the honest conversation after someone looks, not before. If someone in the home is already too hot because the system failed, skip the seasonal checklist and call AC repair or emergency HVAC.",
        ],
      },
    ],
    relatedServices: [
      "hvac-maintenance-freeport-il",
      "ac-repair-freeport-il",
      "emergency-hvac-freeport-il",
    ],
    relatedGuides: ["ac-not-turning-on", "ac-blowing-warm-air", "changing-a-furnace-filter"],
  },
  {
    slug: "carbon-monoxide-safety",
    href: "/guides/carbon-monoxide-safety/",
    title: "Carbon monoxide safety in Freeport",
    metaTitle: "Carbon Monoxide Safety in Freeport, IL | Millrace Heating",
    metaDescription:
      "Carbon monoxide safety in Freeport houses with gas furnaces: alarms, when to leave, and Nicor Gas at 888-642-6748 before any HVAC call. Call (703) 703-7855.",
    h1: "Carbon monoxide safety in Freeport, IL",
    lede:
      "Carbon monoxide safety in Freeport starts with the alarm and the exit, not with the furnace door. Gas furnaces in older houses, vent pipes in basements, and a long heating season are why this page exists. This is not a medical guide. If an alarm is sounding or someone is ill, you leave and you call for help from outside.",
    datePublished: "2026-10-12",
    image: "/photos/heroes/gas-furnace-utility.webp",
    imageAlt: "Gas furnace in a utility space, equipment that requires carbon monoxide alarms.",
    body: [
      {
        heading: "Carbon monoxide safety means leaving first",
        paragraphs: [
          `If a carbon monoxide alarm sounds, or you smell gas, get everyone out. Do not look for the furnace problem on the way. From outside, call 911 and Nicor Gas at ${NICOR_GAS.display}. Nicor publishes 888-642-6748 on its emergency page for gas leaks and gas emergencies. Do not use switches or phones in the area of the smell. Stay out until someone on site says the house is clear.`,
          "Symptoms people associate with carbon monoxide, such as headache and nausea, are a reason to get to fresh air and medical help, not a reason to search a basement. This page will not diagnose anyone. It will tell you the equipment stays off until the building is cleared.",
        ],
      },
      {
        heading: "Alarms, vents, and older Freeport basements",
        paragraphs: [
          "A gas furnace needs a carbon monoxide alarm installed the way the alarm’s instructions and local practice require, not taped to the furnace cabinet and not missing because the old one chirped and was removed. Vent pipe that has rusted through, a vent that came apart, or soot at a draft hood are reasons to stop running the furnace even when the alarm is quiet. High-efficiency furnaces vent through plastic pipe to a sidewall. Snow, a bird nest, or a recessed vent buried by a drift can block that path. Look from outside. Do not pull the pipe apart.",
          "A long heating season means the furnace runs for months. A problem that would be occasional in a milder climate gets more hours here. Maintenance before winter is when venting and the visible heat exchanger area get a look. It is not a promise that an alarm will never go off. If it does, the alarm wins.",
        ],
      },
      {
        heading: "The HVAC call comes after the house is cleared",
        paragraphs: [
          "Once you are allowed back, or once you are calling from a house that is safe and you are worried about a vent you saw, use furnace repair or emergency HVAC. Say there was an alarm, or say you saw a damaged vent, and say the furnace is still off. Do not turn it on to “see if it does it again.”",
          "Call to be connected with a local heating and cooling professional for the equipment. Call Nicor and 911 for the gas emergency. Those are different calls on purpose. Indoor air quality products, filters, and humidifiers are irrelevant while an alarm is sounding.",
        ],
      },
    ],
    relatedServices: [
      "emergency-hvac-freeport-il",
      "furnace-repair-freeport-il",
      "hvac-maintenance-freeport-il",
    ],
    relatedGuides: ["furnace-not-heating", "furnace-replacement-signals", "changing-a-furnace-filter"],
  },
  {
    slug: "changing-a-furnace-filter",
    href: "/guides/changing-a-furnace-filter/",
    title: "Changing a furnace filter in Freeport",
    metaTitle: "Changing a Furnace Filter in Freeport | Millrace Heating",
    metaDescription:
      "Changing a furnace filter in a closed-up Freeport house: size, direction, and why a thicker filter can starve the blower. Call (703) 703-7855.",
    h1: "Changing a furnace filter in Freeport",
    lede:
      "Changing a furnace filter in Freeport matters more than it does in a mild climate, because the house stays shut from late fall through March and the furnace recirculates the same air. A loaded filter can look like a dying furnace. A filter that is too restrictive can do the same thing while it still looks clean.",
    datePublished: "2026-10-12",
    image: "/photos/heroes/basement-flexible-ducts.webp",
    imageAlt: "Basement ducts that carry air through the furnace filter in a Freeport house.",
    body: [
      {
        heading: "Changing a furnace filter without creating a new problem",
        paragraphs: [
          "Match the size printed on the old filter or on the slot, not a size that “almost” fits. Note the arrow. It points in the direction of the airflow, toward the blower, not toward the return grille you like better. A filter installed backward or folded so it bypasses the slot dumps dust into the furnace and lets unfiltered air around the edges. Write the date on the frame.",
          "How often depends on the house. Pets, a renovation, and a winter of closed windows load a filter faster than a mild vacant month. If it is gray, collapsed, or you cannot see light through it, change it. If the furnace has been short cycling or blowing barely warm air, a filthy filter is the one check worth doing before you call. Then stop. Do not open the blower compartment.",
        ],
      },
      {
        heading: "Closed-up winters and filters that are too good for the slot",
        paragraphs: [
          "Freeport houses recirculate cooking, dust from old plaster, and whatever a basement return can reach. People respond by buying the thickest filter the hardware store sells. A one-inch slot that used to hold a basic filter may not be able to pull through a high-resistance pleat. The furnace overheats, the limit opens, and the burners stop. You did not “upgrade” the air. You starved the blower.",
          "If you want better filtration, the cabinet has to be built for it. That is an indoor air quality and maintenance conversation, not a filter bent into a slot. Humidity equipment is the same family of work: a dry winter house is real, and a gadget on the return is not automatically the fix. Smell, soot, or a carbon monoxide alarm is not a filter problem. Leave and call 911 and Nicor Gas.",
        ],
      },
      {
        heading: "When a new filter does not bring the heat back",
        paragraphs: [
          "Give the furnace one normal call for heat after the new filter is in and the door is shut, if the door being open was what stopped it. If it still will not stay lit, or the air stays cold, call furnace repair. Repeated resets are not part of a filter change. If the house is already cold and getting colder, use emergency HVAC.",
          "Call to be connected with a local heating and cooling professional and say you already changed the filter, what size it is, and what the furnace does now. That is more useful than a photograph of the aisle where you bought it. Maintenance before the next heating season is how the coil, the blower, and the vent get a look the filter change cannot give them.",
        ],
      },
    ],
    relatedServices: [
      "indoor-air-quality-freeport-il",
      "hvac-maintenance-freeport-il",
      "emergency-hvac-freeport-il",
    ],
    relatedGuides: ["furnace-short-cycling", "poor-airflow", "furnace-not-heating"],
  },
];
