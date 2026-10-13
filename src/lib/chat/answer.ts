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
    text: `Stop the system and let the ice thaw. Don't chip it. Call ${PHONE}.`,
  },
  {
    keys: ["musty", "burning smell", "smells", "smell"],
    href: "/services/furnace-repair-freeport-il/",
    linkLabel: "Furnace repair",
    text: `Turn the system off. If it smells like gas, leave and call 911. Otherwise call ${PHONE}.`,
  },
  {
    keys: ["no heat", "furnace", "not heating", "cold air", "short cycl", "won't heat", "will not heat", "burner"],
    href: "/services/furnace-repair-freeport-il/",
    linkLabel: "Furnace repair",
    text: `Check heat mode, the furnace switch, and the filter once. Then call ${PHONE} and say no heat plus the ZIP.`,
  },
  {
    keys: ["warm air", "not cooling", "air conditioner", " ac ", "a/c", "condenser", "not turning on", "won't cool", "will not cool"],
    href: "/services/ac-repair-freeport-il/",
    linkLabel: "AC repair",
    text: `Set the thermostat to cool, below the room temperature. Don't add refrigerant. Call ${PHONE}.`,
  },
  {
    keys: ["emergency", "no cooling", "falling", "right now", "tonight", "urgent"],
    href: "/services/emergency-hvac-freeport-il/",
    linkLabel: "Emergency HVAC",
    text: `If the indoor temperature is falling, call ${PHONE} and say emergency HVAC, the town, and the ZIP.`,
  },
  {
    keys: ["heating repair", "boiler", "radiator", "baseboard", "don't know", "do not know", "not sure"],
    href: "/services/heating-repair-freeport-il/",
    linkLabel: "Heating repair",
    text: `If you're not sure it's a furnace, say whether you see vents, radiators, or an outdoor unit. Call ${PHONE}.`,
  },
  {
    keys: ["install", "replacement", "replace", "new furnace", "new ac", "new system"],
    href: "/services/furnace-installation-freeport-il/",
    linkLabel: "Installation topics",
    text: `Replacement is a different call from a unit that just quit. This site doesn't quote a price. Call ${PHONE}.`,
  },
  {
    keys: ["maintenance", "tune", "seasonal", "filter"],
    href: "/services/hvac-maintenance-freeport-il/",
    linkLabel: "HVAC maintenance",
    text: `A tune-up is for a system that still runs. If it's already down, call ${PHONE} for repair.`,
  },
  {
    keys: ["heat pump"],
    href: "/services/heat-pump-repair-freeport-il/",
    linkLabel: "Heat pump",
    text: `Say if the outdoor unit is running and whether the house is on backup heat. Call ${PHONE}.`,
  },
  {
    keys: ["mini split", "ductless"],
    href: "/services/ductless-mini-split-freeport-il/",
    linkLabel: "Ductless mini split",
    text: `Say which room has the indoor head. Call ${PHONE}.`,
  },
  {
    keys: ["commercial", "business", "shop", "office", "church", "rooftop"],
    href: "/services/commercial-hvac-freeport-il/",
    linkLabel: "Commercial HVAC",
    text: `Say if it's a shop, office, or church, and if the unit is on the roof. Call ${PHONE}.`,
  },
  {
    keys: ["service area", "lena", "cedarville", "dakota", "pearl", "orangeville", "ridott", "german valley", "davis", "rock city", "winslow", "61032", "zip", "stephenson"],
    href: "/service-area/",
    linkLabel: "Service area",
    text: `Freeport 61032 is the city. Name your town and ZIP when you call ${PHONE}.`,
  },
  {
    keys: ["thermostat"],
    href: "/guides/thermostat-not-working/",
    linkLabel: "Thermostat guide",
    text: `Check mode, setpoint, and batteries. If it still does nothing, call ${PHONE}.`,
  },
  {
    keys: ["noise", "banging", "squeal", "rattle", "grinding"],
    href: "/guides/hvac-strange-noises/",
    linkLabel: "Noise guide",
    text: `Stop experimenting. Say if the sound is the furnace or the outdoor unit. Call ${PHONE}.`,
  },
  {
    keys: ["airflow", "uneven", "one room"],
    href: "/guides/poor-airflow/",
    linkLabel: "Airflow guide",
    text: `One weak room is common in older Freeport houses. Call ${PHONE} and say which rooms are off.`,
  },
  {
    keys: ["contractor", "who are you", "license", "licensed", "are you"],
    href: "/about/",
    linkLabel: "About this website",
    text: `This website connects the call. It is not the contractor. Call ${PHONE}.`,
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
      text: `Leave now. From outside, call 911 and Nicor Gas at ${NICOR_GAS.display}. After it's safe, call ${PHONE}.`,
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
      text: `This site doesn't publish prices. Call ${PHONE} and describe the symptom.`,
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
      text: `This site doesn't promise an arrival time. If the house is getting colder, say so when you call ${PHONE}.`,
    };
  }

  if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(raw) || /(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/.test(raw)) {
    return {
      text: `Don't leave a number or email here. Call ${PHONE}.`,
    };
  }

  if (includesAny(text, ["my name is", "name is"])) {
    return {
      text: `No name needed. Call ${PHONE} and say the problem and the ZIP.`,
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

  return {
    href: "/services/",
    linkLabel: "Services",
    text: `Tell me the symptom, such as no heat or warm air. Call ${PHONE}.`,
  };
}

export const OPENING = "Hi! What's going on with your heating or cooling?";

export const QUICK_REPLIES = [
  "Furnace not heating",
  "AC not cooling",
  "Ice on the coil",
  "Thermostat",
  "Heat pump",
  "I smell gas",
] as const;
