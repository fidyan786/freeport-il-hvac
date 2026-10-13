import { nearbyCommunities, problemLinks } from "@/lib/nav";
import { NICOR_GAS } from "@/lib/safety-contacts";
import { phoneDisplayLabel } from "@/lib/site";

export type ChatReply = {
  text: string;
  href?: string;
  linkLabel?: string;
  safety?: boolean;
};

const PHONE = phoneDisplayLabel();

const TOPICS: Array<ChatReply & { keys: string[] }> = [
  {
    keys: ["ice", "frozen", "iced"],
    href: "/services/ac-repair-freeport-il/",
    linkLabel: "AC repair",
    text: `Ice on a coil means stop the system and let it thaw. Do not chip the ice, and do not add refrigerant from a can. Say whether the outdoor fan is turning and whether the filter is packed. Call ${PHONE}.`,
  },
  {
    keys: ["musty", "burning smell", "smells", "smell"],
    href: "/services/furnace-repair-freeport-il/",
    linkLabel: "Furnace repair",
    text: `A burning or musty smell from the equipment is a reason to switch the system off and call. If it smells like gas, leave and call 911 and Nicor Gas instead. Otherwise call ${PHONE} and say where the smell starts.`,
  },
  {
    keys: ["no heat", "furnace", "not heating", "cold air", "short cycl", "won't heat", "will not heat", "burner"],
    href: "/services/furnace-repair-freeport-il/",
    linkLabel: "Furnace repair",
    text: `A Freeport furnace that will not light, will not stay lit, or blows air that never warms the rooms is a furnace repair call. January nights in Stephenson County often fall into the teens, so a house that loses the burners does not coast until morning. If the house is otherwise safe, check heat mode, the furnace switch, and a packed filter once. Then call ${PHONE} and describe the symptom and the ZIP. This assistant cannot diagnose the furnace.`,
  },
  {
    keys: ["warm air", "not cooling", "air conditioner", " ac ", "a/c", "condenser", "not turning on", "won't cool", "will not cool"],
    href: "/services/ac-repair-freeport-il/",
    linkLabel: "AC repair",
    text: `Warm supply air, or an air conditioner that will not start after sitting through a Freeport winter, is an AC repair call. Confirm cool mode and a setpoint below the room temperature, look once at the outdoor fan, and do not keep resetting a breaker that trips. Do not add refrigerant from a can. Call ${PHONE} and say what the outdoor unit is doing.`,
  },
  {
    keys: ["emergency", "no cooling", "falling", "right now", "tonight", "urgent"],
    href: "/services/emergency-hvac-freeport-il/",
    linkLabel: "Emergency HVAC",
    text: `If the indoor temperature is falling in sub-freezing weather, or someone cannot safely wait through the heat, say emergency HVAC when you call. This website connects the call. It does not promise an arrival time, a 24-hour window, or that a truck is already on the way. Call ${PHONE} with the indoor temperature, the town, and the ZIP.`,
  },
  {
    keys: ["heating repair", "boiler", "radiator", "baseboard", "don't know", "do not know", "not sure"],
    href: "/services/heating-repair-freeport-il/",
    linkLabel: "Heating repair",
    text: `If the house is cold and you are not sure the equipment is a gas furnace, start with heating repair. Say whether you see vents, radiators, or an outdoor cabinet. Furnace repair is the more specific page when you can see a furnace and ducts. Both use the same number: ${PHONE}.`,
  },
  {
    keys: ["install", "replacement", "replace", "new furnace", "new ac", "new system"],
    href: "/services/furnace-installation-freeport-il/",
    linkLabel: "Installation topics",
    text: `Replacement is a separate conversation from a unit that quit this hour. Furnace installation and AC installation are for equipment that should not carry another season. This site does not quote a price or recommend a brand. Call ${PHONE} and say whether the system still runs.`,
  },
  {
    keys: ["maintenance", "tune", "seasonal", "filter"],
    href: "/services/hvac-maintenance-freeport-il/",
    linkLabel: "HVAC maintenance",
    text: `Maintenance is a seasonal check while the equipment still runs, before the next cold snap or the first humid week. A system that is already down belongs on furnace repair or AC repair. Call ${PHONE} and say which season you are heading into.`,
  },
  {
    keys: ["heat pump"],
    href: "/services/heat-pump-repair-freeport-il/",
    linkLabel: "Heat pump",
    text: `A heat pump that is noisy, iced over, or not keeping up is its own topic in a Freeport heating season. Describe whether the outdoor unit is running and whether the house is on backup heat. Call ${PHONE}. This assistant is not a technician.`,
  },
  {
    keys: ["mini split", "ductless"],
    href: "/services/ductless-mini-split-freeport-il/",
    linkLabel: "Ductless mini split",
    text: `A ductless head that runs but does not change the room, or an outdoor unit that will not start, is a mini-split call. Say which rooms have heads. Call ${PHONE}.`,
  },
  {
    keys: ["commercial", "business", "shop", "office", "church", "rooftop"],
    href: "/services/commercial-hvac-freeport-il/",
    linkLabel: "Commercial HVAC",
    text: `Shops, offices, churches, and rooftop or packaged units belong with commercial HVAC. A home office is still a house. Say the building type and whether the equipment is on a roof. Coverage, including roof access, is confirmed on the call at ${PHONE}.`,
  },
  {
    keys: ["service area", "lena", "cedarville", "dakota", "pearl", "orangeville", "ridott", "german valley", "davis", "rock city", "winslow", "61032", "zip", "stephenson"],
    href: "/service-area/",
    linkLabel: "Service area",
    text: `Freeport, ZIP 61032, in Stephenson County is the city these pages are written for. Nearby towns — ${nearbyCommunities.map((town) => town.name).join(", ")} — can often be reached, and that is confirmed on the call rather than assumed from a map. Say the town and the ZIP when you dial ${PHONE}.`,
  },
  {
    keys: ["thermostat"],
    href: "/guides/thermostat-not-working/",
    linkLabel: "Thermostat guide",
    text: `A thermostat that does not match what the system does is worth one check: mode, setpoint, and batteries on a battery model. If the equipment still ignores it, call ${PHONE}. Do not open the furnace or the outdoor unit to chase a control problem.`,
  },
  {
    keys: ["noise", "banging", "squeal", "rattle", "grinding"],
    href: "/guides/hvac-strange-noises/",
    linkLabel: "Noise guide",
    text: `Banging, squealing, rattling, or grinding is a reason to stop experimenting and call. Say where the sound starts, furnace or outdoor unit, and whether the system still heats or cools. Call ${PHONE}.`,
  },
  {
    keys: ["airflow", "uneven", "one room"],
    href: "/guides/poor-airflow/",
    linkLabel: "Airflow guide",
    text: `Weak airflow or one room that never catches up is common in older Freeport houses with additions and ducts that were not redesigned. Say whether the rest of the house is comfortable. Call ${PHONE}.`,
  },
  {
    keys: ["contractor", "who are you", "license", "licensed", "are you"],
    href: "/about/",
    linkLabel: "About this website",
    text: `Millrace Heating & Air is a website that connects callers with independent local heating and cooling professionals. It is not itself a contractor, it does not employ technicians, and this assistant is automated. It does not publish a street address or a review score. Call ${PHONE} and judge the visit by what the person explains on site.`,
  },
];

function includesAny(haystack: string, keys: string[]) {
  return keys.some((key) => haystack.includes(key));
}

export function answerQuestion(raw: string): ChatReply {
  const text = ` ${raw.toLowerCase().replace(/\s+/g, " ")} `;

  if (
    includesAny(text, [
      "smell gas",
      "gas smell",
      "smell of gas",
      "carbon monoxide",
      " co ",
      "co alarm",
      "hiss",
    ])
  ) {
    return {
      safety: true,
      text: `Leave the building with everyone in it. Do not turn lights or appliances on or off, and do not use a phone inside the home. From a safe location, call 911 and Nicor Gas at ${NICOR_GAS.display}. Stay out until emergency personnel say it is safe to return. HVAC help comes after the property is safe. Then call ${PHONE}. This assistant is not a technician.`,
    };
  }

  if (
    includesAny(text, [
      "how much",
      "price",
      "cost",
      "quote",
      "estimate",
      "coupon",
      "discount",
      "special",
      "cheap",
      "financing",
    ])
  ) {
    return {
      href: "/contact/",
      linkLabel: "Call instead",
      text: `This website does not publish prices, offers, or quotes. What a visit costs depends on the equipment and what the independent professional finds on site, and that is not something this assistant can know. Call ${PHONE} and describe the symptom.`,
    };
  }

  if (
    includesAny(text, [
      "how soon",
      "how fast",
      "arrival",
      "what time",
      "24/7",
      "24 hour",
      "guarantee",
    ])
  ) {
    return {
      href: "/services/emergency-hvac-freeport-il/",
      linkLabel: "Emergency HVAC",
      text: `This site does not promise an arrival time or 24-hour coverage. Availability is whatever the independent local professional can actually do. If the indoor temperature is falling, say so when you call ${PHONE}.`,
    };
  }

  if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(raw) || /(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/.test(raw)) {
    return {
      text: `Do not leave a phone number or email here. This assistant does not collect names, numbers, or messages for anyone to call you back. If you need help, you call ${PHONE}.`,
    };
  }

  if (includesAny(text, ["my name is", "name is"])) {
    return {
      text: `You do not need to give a name. This chat does not save contact details. Call ${PHONE} and describe the heating or cooling problem and the ZIP.`,
    };
  }

  let best: (typeof TOPICS)[number] | undefined;
  let score = 0;
  for (const topic of TOPICS) {
    const hits = topic.keys.filter((key) => text.includes(key)).length;
    if (hits > score) {
      score = hits;
      best = topic;
    }
  }
  if (best && score > 0) {
    return {
      text: best.text,
      href: best.href,
      linkLabel: best.linkLabel,
      safety: best.safety,
    };
  }

  const examples = problemLinks
    .slice(0, 4)
    .map((item) => item.label.toLowerCase())
    .join(", ");
  return {
    href: "/services/",
    linkLabel: "Browse services",
    text: `I can explain symptoms this site already covers, such as ${examples}. I am an automated assistant, not a technician, and I cannot book a visit. Call ${PHONE} and say what the system is doing.`,
  };
}

export const OPENING = `Hi. I am an automated assistant on this website, not a technician. I do not collect your name, phone, or email. Ask about a furnace, cooling, a thermostat, or a safety concern, then call ${PHONE}.`;

export const QUICK_REPLIES = [
  "Furnace not heating",
  "AC not cooling",
  "Ice on the coil",
  "Thermostat",
  "Heat pump",
  "I smell gas",
] as const;
