import type {
  Intent,
  LeadField,
  PropertyType,
  ServiceType,
  SystemStatus,
  Urgency,
} from "@/lib/chat/types";

export type ExtractedSignals = {
  serviceType: ServiceType | null;
  intent: Intent | null;
  issue: string | null;
  systemStatus: SystemStatus | null;
  propertyType: PropertyType | null;
  zip: string | null;
  urgency: Urgency | null;
  name: string | null;
  phone: string | null;
  highIntent: boolean;
  safety: boolean;
  pricing: boolean;
  wantsCall: boolean;
  provided: LeadField[];
};

const EMPTY: ExtractedSignals = {
  serviceType: null,
  intent: null,
  issue: null,
  systemStatus: null,
  propertyType: null,
  zip: null,
  urgency: null,
  name: null,
  phone: null,
  highIntent: false,
  safety: false,
  pricing: false,
  wantsCall: false,
  provided: [],
};

const QUICK_REPLY_MAP: Record<string, Partial<ExtractedSignals>> = {
  ac: { serviceType: "ac_repair", intent: "repair", issue: "AC / cooling" },
  heat: { serviceType: "furnace_repair", intent: "repair", issue: "heating" },
  install: { intent: "replace", issue: "installation or replacement" },
  maintenance: {
    serviceType: "maintenance",
    intent: "maintenance",
    issue: "maintenance",
  },
  urgent: { urgency: "now", highIntent: true, intent: "emergency" },
  question: { intent: "question" },
  call: { wantsCall: true, highIntent: true },
  not_cooling: {
    serviceType: "ac_repair",
    intent: "repair",
    issue: "not cooling",
    systemStatus: "partial",
  },
  not_heating: {
    serviceType: "furnace_repair",
    intent: "repair",
    issue: "not heating",
    systemStatus: "partial",
  },
  wont_start: { systemStatus: "down", highIntent: true, issue: "won't start" },
  leaking: { issue: "leaking", systemStatus: "abnormal" },
  noise: { issue: "making noise", systemStatus: "abnormal" },
  other_problem: { intent: "repair", issue: "other problem" },
  replace_ac: {
    serviceType: "ac_install",
    intent: "replace",
    issue: "new AC",
    highIntent: true,
  },
  replace_furnace: {
    serviceType: "furnace_install",
    intent: "replace",
    issue: "new furnace",
    highIntent: true,
  },
  replace_both: {
    serviceType: "hvac_replace",
    intent: "replace",
    issue: "full system replacement",
    highIntent: true,
  },
  heat_pump: { serviceType: "heat_pump", intent: "repair", issue: "heat pump" },
  mini_split: {
    serviceType: "mini_split",
    intent: "repair",
    issue: "mini split",
  },
  iaq: { serviceType: "iaq", intent: "question", issue: "indoor air quality" },
  commercial: {
    serviceType: "commercial",
    intent: "commercial",
    propertyType: "business",
  },
  no_heat: {
    serviceType: "furnace_repair",
    intent: "emergency",
    issue: "no heat",
    systemStatus: "down",
    highIntent: true,
    urgency: "now",
  },
  no_cool: {
    serviceType: "ac_repair",
    intent: "emergency",
    issue: "no cooling",
    systemStatus: "down",
    highIntent: true,
  },
  zip_61032: { zip: "61032" },
  down: { systemStatus: "down", highIntent: true },
  partial: { systemStatus: "partial" },
  abnormal: { systemStatus: "abnormal" },
  home: { propertyType: "home" },
  business: { propertyType: "business" },
  other_property: { propertyType: "other" },
  now: { urgency: "now", highIntent: true },
  asap: { urgency: "asap", highIntent: true },
  this_week: { urgency: "this_week" },
  planning: { urgency: "planning" },
};

function mark(
  signals: ExtractedSignals,
  field: LeadField,
  value: ExtractedSignals[LeadField],
) {
  if (value == null || value === "") return;
  (signals as Record<string, unknown>)[field] = value;
  if (!signals.provided.includes(field)) signals.provided.push(field);
}

export function extractSignals(
  text: string,
  quickReplyId?: string | null,
): ExtractedSignals {
  const signals: ExtractedSignals = {
    ...EMPTY,
    provided: [],
  };
  const raw = text.trim();
  const lower = raw.toLowerCase();

  if (quickReplyId && QUICK_REPLY_MAP[quickReplyId]) {
    Object.assign(signals, QUICK_REPLY_MAP[quickReplyId]);
    for (const key of [
      "serviceType",
      "intent",
      "issue",
      "systemStatus",
      "propertyType",
      "zip",
      "urgency",
      "name",
      "phone",
    ] as const) {
      if (signals[key]) {
        if (key !== "intent" && key !== "issue") {
          if (!signals.provided.includes(key)) signals.provided.push(key);
        } else if (key === "issue" && signals.issue) {
          signals.provided.push("issue");
        } else if (key === "intent" && signals.intent) {
          signals.provided.push("intent");
        }
      }
    }
  }

  if (!raw) return signals;

  if (
    /\b(gas leak|smell(?:s|ing)?(?:\s+like)?\s+gas|i smell gas|natural gas leak|carbon monoxide|\bco alarm\b|smoke in the (?:house|home|building)|(?:house|home|building) (?:is )?on fire|electrical (?:fire|danger)|burning smell|wires? sparking)\b/i.test(
      raw,
    )
  ) {
    signals.safety = true;
    signals.intent = "safety";
    signals.highIntent = true;
  }

  if (
    /\b(how much|cost|price|pricing|estimate|quote|cheap(?:er)?|expensive|financing|payment plan|dollar)\b/i.test(
      lower,
    )
  ) {
    signals.pricing = true;
    if (!signals.intent) signals.intent = "pricing";
  }

  if (
    /\b(call now|call the (?:hvac )?team|give (?:them|you) a call)\b/i.test(lower) ||
    quickReplyId === "call"
  ) {
    signals.wantsCall = true;
    signals.highIntent = true;
  }

  const zipMatch = raw.match(/\b(6\d{4})\b/) ?? raw.match(/\b(\d{5})\b/);
  if (zipMatch) mark(signals, "zip", zipMatch[1]);
  else if (/\bfreeport\b/i.test(raw)) mark(signals, "zip", "61032");

  const phoneMatch = raw.match(
    /(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/,
  );
  if (phoneMatch) {
    const digits = phoneMatch[0].replace(/\D/g, "");
    if (digits.length >= 10 && !digits.endsWith("911")) {
      mark(signals, "phone", digits.slice(-10));
    }
  }

  const nameMatch = raw.match(
    /\b(?:my name is|this is|i(?:'| a)?m)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/,
  );
  if (nameMatch) mark(signals, "name", nameMatch[1]);

  if (/\b(business|commercial|office|shop|restaurant|company)\b/i.test(lower)) {
    mark(signals, "propertyType", "business");
    if (!signals.serviceType) {
      mark(signals, "serviceType", "commercial");
    }
    if (!signals.intent) mark(signals, "intent", "commercial");
  } else if (/\b(homeowner|at home|my (?:house|home)|residential)\b/i.test(lower)) {
    mark(signals, "propertyType", "home");
  }

  if (
    /\b(right now|need someone(?:\s+\w+){0,3}\s+(?:now|today)|come today|someone today|immediately|asap|emergency|urgent)\b/i.test(
      lower,
    )
  ) {
    mark(signals, "urgency", "now");
    signals.highIntent = true;
  } else if (/\btoday\b/i.test(lower) || /\bneed someone\b/i.test(lower)) {
    mark(signals, "urgency", "now");
    signals.highIntent = true;
  } else if (/\bthis week\b/i.test(lower)) {
    mark(signals, "urgency", "this_week");
  } else if (/\b(planning|next month|sometime|not urgent)\b/i.test(lower)) {
    mark(signals, "urgency", "planning");
  }

  if (
    /\b(stopped working|completely dead|won'?t turn on|won'?t start|not turning on|is dead|completely down|isn'?t working|not working|no heat|no cooling|need an? hvac company|schedule service)\b/i.test(
      lower,
    )
  ) {
    signals.highIntent = true;
  }

  if (
    /\b(stopped working|completely dead|won'?t turn on|won'?t start|not turning on|completely down|is dead)\b/i.test(
      lower,
    )
  ) {
    mark(signals, "systemStatus", "down");
  } else if (
    /\b(barely|not enough|running but|partial(?:ly)?|intermittent|not getting cold|isn'?t cooling|isn'?t heating|not cooling|not heating)\b/i.test(
      lower,
    )
  ) {
    mark(signals, "systemStatus", "partial");
  } else if (
    /\b(noise|noisy|strange sound|making (?:a )?noise|leaking|leak|short cycl)\b/i.test(
      lower,
    )
  ) {
    mark(signals, "systemStatus", "abnormal");
  }

  if (/\bheat pumps?\b/i.test(lower)) {
    mark(signals, "serviceType", "heat_pump");
    if (!signals.intent) mark(signals, "intent", "repair");
    if (!signals.issue) mark(signals, "issue", "heat pump issue");
  } else if (/\b(mini[- ]?split|ductless)\b/i.test(lower)) {
    mark(signals, "serviceType", "mini_split");
    if (!signals.intent) mark(signals, "intent", "repair");
  } else if (
    /\b(indoor air|air quality|humidifier|air purifier)\b/i.test(lower)
  ) {
    mark(signals, "serviceType", "iaq");
    if (!signals.intent) mark(signals, "intent", "question");
  } else if (/\b(maintenance|tune[- ]?up|check[- ]?up)\b/i.test(lower)) {
    mark(signals, "serviceType", "maintenance");
    mark(signals, "intent", "maintenance");
    if (!signals.issue) mark(signals, "issue", "maintenance");
  } else if (
    /\b(a\/?c|air condit(?:ioner|ioning)?|cooling|not (?:getting )?cold)\b/i.test(
      lower,
    )
  ) {
    const replacing = /\b(replace|replacement|new (?:a\/?c|air|system)|install)\b/i.test(
      lower,
    );
    mark(signals, "serviceType", replacing ? "ac_install" : "ac_repair");
    mark(signals, "intent", replacing ? "replace" : "repair");
    if (!signals.issue) {
      mark(
        signals,
        "issue",
        replacing ? "a new AC system" : /cold|cool/i.test(lower) ? "an AC that's not cooling" : "an AC problem",
      );
    }
  } else if (
    /\b(furnace|no heat|not heating|won'?t heat|house is freezing|heater|heating|boiler)\b/i.test(
      lower,
    )
  ) {
    const replacing = /\b(replace|replacement|new furnace|new (?:heat|heating) system|install)\b/i.test(
      lower,
    );
    mark(signals, "serviceType", replacing ? "furnace_install" : "furnace_repair");
    mark(signals, "intent", replacing ? "replace" : "repair");
    if (!signals.issue) {
      mark(
        signals,
        "issue",
        replacing ? "a new furnace" : "a heating problem",
      );
    }
  } else if (/\b(new hvac|replace.*hvac|hvac system)\b/i.test(lower)) {
    mark(signals, "serviceType", "hvac_replace");
    mark(signals, "intent", "replace");
    mark(signals, "issue", "HVAC replacement");
    signals.highIntent = true;
  }

  if (
    /\b(need a new|want to replace|replacement|install(?:ation)?)\b/i.test(lower) &&
    !signals.intent
  ) {
    mark(signals, "intent", "replace");
    signals.highIntent = true;
  }

  if (/\bschedule service\b/i.test(lower) || /\bneed an? hvac company\b/i.test(lower)) {
    signals.highIntent = true;
    if (!signals.intent) mark(signals, "intent", "repair");
  }

  if (signals.urgency === "now" || signals.systemStatus === "down") {
    signals.highIntent = true;
  }

  return signals;
}

export function isEmptyMessage(text: string) {
  return text.trim().length === 0;
}
