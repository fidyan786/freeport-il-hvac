import { NICOR_GAS } from "@/lib/safety-contacts";
import { defineService } from "@/content/service-types";

export const indoorAir = defineService({
  slug: "indoor-air-quality-freeport-il",
  category: "iaq",
  navLabel: "Indoor Air Quality",
  navDescription: "Filters, humidity equipment, and airflow in a house that stays shut all winter.",
  metaTitle: "Indoor Air Quality in Freeport, IL | Millrace Heating",
  metaDescription:
    "Indoor air quality for closed-up Freeport houses: filters, humidity equipment, and airflow that has gone dusty or weak. Call (703) 703-7855.",
  h1: "Indoor Air Quality in Freeport, IL",
  eyebrow: "Filters, humidity, and the air path",
  lede:
    "Indoor air quality in Freeport, IL, on this site, means the equipment that filters and humidifies the air a furnace is already moving. It is not a medical page, and it is not a catalog of gadgets. Winters here keep houses closed for months. The same air goes through the same filter and the same ducts. When that path is dirty, restricted, or bone-dry, people notice.",
  image: "/photos/heroes/basement-flexible-ducts.webp",
  imageAlt:
    "Flexible air ducts in a basement, part of indoor air quality concerns in Freeport, IL houses.",
  sections: [
    {
      heading: "What indoor air quality means in a closed winter house",
      paragraphs: [
        "From the first hard freeze until spring, windows in Stephenson County stay shut. Cooking, showers, laundry, dust from old plaster, and whatever sits in a basement return all stay in the loop. Forced-air heat also dries the air, because cold outdoor air holds little moisture and the furnace warms it. Static, shrinking woodwork, and air that feels harsh are comfort problems. They are not, by themselves, a reason to buy a whole-house product you cannot describe.",
        "Start with the air path you already have. A loaded filter, a blower that cannot pull through a filter that is too tight, a coil that has never been cleaned, and a return that is open to a storage basement explain a lot of “the air is bad” calls. The filter guide covers the change you can do. HVAC maintenance covers the coil, the drain, and the blower. This page is for the equipment beyond that: better filtration the cabinet can actually use, and humidifiers or dehumidifiers tied to the system.",
      ],
    },
    {
      heading: "What to expect when you call about indoor air",
      paragraphs: [
        "Call and describe the symptom in house words. Dust on surfaces a day after you clean. Air that feels dry enough to bother woodwork. A smell when the blower starts. A humidifier that runs and the windows pour water, or a humidifier that has not been opened in a year. Give the ZIP. This website connects the call with an independent local heating and cooling professional. It does not claim the visit will treat allergies, asthma, or any other condition.",
        "Ask what they would actually install or service, and what they would check first. A filthy filter and a disconnected return duct should be fixed before anyone adds a device. A humidifier on a furnace needs a water supply, a drain, and a seasonal shutdown so it is not a wet pad all summer. A dehumidifier for a damp basement is a different machine from a furnace humidifier. Say which problem you have so you are not sold the opposite one.",
      ],
    },
    {
      heading: "Humidity in a heating climate, and damp basements",
      paragraphs: [
        "Winter dryness and summer basement damp are both real in Freeport, and they are opposite problems. A furnace-mounted humidifier is a heating-season tool. It should be off when the air conditioner is running, or you will be adding moisture while the coil is trying to remove it. A portable unit in one bedroom only treats that room and can wet a cold exterior wall if it runs unattended. Whole-house equipment has to match the ducts and the season.",
        "Basements in older homes are often the return-air path whether anyone intended that or not. Stored cardboard, a sump that sometimes smells, and a dryer that is not vented outdoors will show up at the registers. That is a building and duct problem as much as an “air quality” product problem. Poor airflow and uneven temperatures have their own guides. If the air is weak, fix the air path before you thicken the filter and make the blower work harder.",
      ],
    },
    {
      heading: "Combustion is not an accessory",
      paragraphs: [
        `A gas smell, a carbon monoxide alarm, soot at the furnace, or exhaust odor is not an indoor-air upgrade. Leave if the alarm is sounding or you smell gas, and call 911 and Nicor Gas at ${NICOR_GAS.display}. Nicor publishes that number for gas emergencies. Do not install a filter on the way out. After the house is cleared, furnace repair or emergency HVAC is the follow-up, because the heat exchanger and the vent are the issue.`,
        "Filtration and humidity equipment also have to let the furnace breathe. A filter rack that collapses, a media cabinet with no room for the blower, or a humidifier damper stuck closed will create the repair you were trying to avoid. Say you want the furnace’s safety and airflow considered first. The commercial HVAC page is the better fit for a shop or office. Houses stay here. Towns outside Freeport are listed on the service area page and confirmed when you call.",
      ],
    },
  ],
  faqs: [
    {
      q: "Will an air cleaner fix allergies?",
      a: "This site does not make medical claims. Filtration can reduce dust the furnace was recirculating. It does not treat a condition, and it will not help if the real problem is a blocked return, a dirty coil, or combustion fumes. Those get fixed first.",
      detail:
        "Describe dust, dryness, or a smell, and say when it happens. A smell only at startup in the fall is often dust burning off, and it should fade. A smell like exhaust should stop the furnace.",
    },
    {
      q: "Do I need a humidifier in Freeport?",
      a: "Many forced-air houses feel very dry in a long heating season, and a furnace humidifier can add moisture if it is installed and maintained as heating equipment. It is not automatic. A unit that is the wrong size, or left running into summer, causes wet windows and a different complaint.",
      detail:
        "If only one room feels dry, a whole-house unit may be more than the symptom. Say what you are noticing, including woodwork and static, and ask what maintenance the pad needs.",
    },
    {
      q: "Is a thicker filter always better?",
      a: "No. A filter the blower cannot pull through will starve the furnace or the coil the same way a filthy thin filter does. The cabinet has to be able to use the filter you want. That is a measurement, not a slogan on the filter package.",
      detail:
        "The filter-change guide covers the homeowner steps. If the slot is a one-inch rack and you want something deeper, that is an indoor-air and maintenance conversation, not a filter bent into the slot.",
    },
    {
      q: "How is this different from duct cleaning ads?",
      a: "This page is about filtration, humidity equipment, and the air the system is moving. Opening ducts without a reason can make a mess and miss a dirty coil. If you have a smell or dust problem, say that, and let the visit start at the filter, the coil, and the returns.",
      detail:
        "A disconnected flex duct in a basement will dump dust no gadget will catch. Mention unfinished basement returns when you call.",
    },
  ],
  related: [
    "hvac-maintenance-freeport-il",
    "furnace-repair-freeport-il",
    "residential-hvac-freeport-il",
  ],
});
