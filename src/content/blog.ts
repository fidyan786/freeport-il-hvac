export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  hero: string;
  body: string[];
  related: Array<{ href: string; label: string; note: string }>;
};

export const posts: BlogPost[] = [
  {
    slug: "furnace-stops-working-freeport-winter",
    title: "What to do when a furnace stops in a Freeport winter",
    description:
      "Safe steps if heat fails in Freeport, Illinois: gas and carbon monoxide rules, what you can check, and when to call for furnace repair.",
    datePublished: "2026-09-12",
    hero: "A dead furnace on an 11°F night is a safety problem first and an HVAC problem second.",
    body: [
      "Freeport winters are long enough that a furnace failure is not a minor inconvenience. NOAA normals put January nights near 11°F. Indoor temperatures fall fast in older houses, and pipes are not theoretical.",
      "If you smell rotten-egg gas, hear hissing near the meter or furnace, or a carbon monoxide alarm is sounding, leave. Do not flip switches. From outside, call 911 and Nicor Gas at 888-642-6748. HVAC troubleshooting starts only after the house is safe.",
      "If there is no gas odor and no CO alarm, check three things: the thermostat has power and is set to heat, the furnace switch (it looks like a light switch) is on, and the filter is not packed solid. Then stop. Do not remove burner covers or bypass safety switches.",
      "Call for furnace repair if the unit will not ignite, runs then shuts off, or blows cold air. The emergency HVAC page is the right next stop when the house is already getting cold.",
    ],
    related: [
      {
        href: "/emergency-hvac-freeport-il/",
        label: "Emergency HVAC",
        note: "Phone-first no-heat help.",
      },
      {
        href: "/furnace-repair-freeport-il/",
        label: "Furnace repair",
        note: "Diagnosis after the immediate call.",
      },
    ],
  },
  {
    slug: "ac-fails-after-illinois-winter",
    title: "Why AC fails after sitting through an Illinois winter",
    description:
      "Freeport air conditioners sit idle through snow and freeze-thaw. Here is why they often fail on the first hot day and when to call for repair.",
    datePublished: "2026-09-12",
    hero: "Cooling equipment in 61032 spends most of the year off. The first real call for cooling is a stress test.",
    body: [
      "Stephenson County is a heating climate. The outdoor AC still has to work when July highs sit around 82°F and humidity climbs. The hard part is the idle season: snow, ice, and months without a run cycle.",
      "Capacitors weaken. Contactors pit. Fans seize. Rodent damage and debris show up only when someone finally turns the thermostat to cool. That is why “it was fine last August” is not evidence the machine is ready.",
      "If the outdoor unit is silent, the air is warm, or the breaker trips, call for AC repair. Adding refrigerant from a can is not a plan. A spring maintenance visit is how you find this before the first sticky week.",
    ],
    related: [
      {
        href: "/ac-repair-freeport-il/",
        label: "AC repair",
        note: "When the system will not cool.",
      },
      {
        href: "/hvac-maintenance-freeport-il/",
        label: "HVAC maintenance",
        note: "Spring checks before the first hot stretch.",
      },
    ],
  },
  {
    slug: "furnace-short-cycling-cold-weather",
    title: "Furnace short cycling in Freeport cold weather",
    description:
      "Why a furnace in Freeport may start and stop in short bursts during cold weather, and why that is a service call rather than a DIY project.",
    datePublished: "2026-09-12",
    hero: "A furnace that fires for a minute, stops, and repeats is not “saving energy.” It is failing to complete a cycle.",
    body: [
      "Short cycling shows up more in heating-dominated climates because the furnace is asked to run for hours. Flame sensors, pressure switches, overheating from poor airflow, and oversized equipment can all cut a cycle short.",
      "Closed registers and dirty filters are the only homeowner checks that are usually safe. If those are fine and the unit still chatters on and off, especially on a hard-cold night, call for furnace repair. Repeated lockouts can leave you with no heat at the worst time.",
      "Replacement is not the automatic answer. Sometimes the fix is airflow. Sometimes it is a failed part. That is why this site does not turn the symptom into a shopping page.",
    ],
    related: [
      {
        href: "/furnace-repair-freeport-il/",
        label: "Furnace repair",
        note: "Short cycling, no heat, weak heat.",
      },
      {
        href: "/furnace-installation-replacement-freeport-il/",
        label: "Furnace replacement",
        note: "When the equipment cannot keep up anymore.",
      },
    ],
  },
  {
    slug: "indoor-air-closed-up-winter-homes",
    title: "Indoor air in closed-up Stephenson County winters",
    description:
      "What actually happens to indoor air when Freeport homes stay shut from November through March, and which HVAC issues are worth a call.",
    datePublished: "2026-09-12",
    hero: "Windows do not open for months. The furnace recirculates whatever is already in the house.",
    body: [
      "A Freeport winter is a closed-building season. Forced-air heat dries the air. Dust from ducts and everyday living has nowhere to go. That can feel like an “air quality” problem even when the furnace is running correctly.",
      "HVAC-related fixes are unglamorous: the right filter that does not choke the furnace, a coil that is not filthy, humidification discussed without medical promises, and catching combustion problems before they become emergencies.",
      "If you smell gas or a CO alarm sounds, that is not an indoor-air product conversation. Leave and call 911 and Nicor Gas. For everything else, indoor air quality service and maintenance are the honest next steps.",
    ],
    related: [
      {
        href: "/indoor-air-quality-freeport-il/",
        label: "Indoor air quality",
        note: "Filtration and HVAC-related air issues.",
      },
      {
        href: "/hvac-maintenance-freeport-il/",
        label: "Maintenance",
        note: "The practical starting point.",
      },
    ],
  },
  {
    slug: "heat-pumps-northern-illinois",
    title: "Heat pumps in a northern Illinois heating climate",
    description:
      "How to think about heat pumps in Freeport, Illinois, where heating degree days dwarf cooling degree days and January nights are genuinely cold.",
    datePublished: "2026-09-12",
    hero: "A heat pump that cannot heat near Freeport’s January normals is the wrong heat pump.",
    body: [
      "Freeport books on the order of 6,956 heating degree days and 690 cooling degree days. That ratio should control the equipment conversation. A heat pump has to heat here, not just cool in July.",
      "Cold-climate heat pumps exist. Dual-fuel systems exist. Bargain equipment selected from a mild-climate catalog also exists, and it struggles. Defrost behavior, backup heat, and duct design decide whether rooms stay livable.",
      "If you already own a heat pump and it is not heating, call for heat pump service. If you are considering one during a furnace replacement, say so on the phone. This is not a rebate shopping page and it is not an anti-heat-pump rant. It is climate math.",
    ],
    related: [
      {
        href: "/heat-pump-services-freeport-il/",
        label: "Heat pump services",
        note: "Repair and replacement conversations.",
      },
      {
        href: "/furnace-installation-replacement-freeport-il/",
        label: "Furnace replacement",
        note: "When gas heat remains the primary plan.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function postPath(slug: string) {
  return `/blog/${slug}/`;
}
