import { extractSignals, type ExtractedSignals } from "@/lib/chat/extract";
import { CALL_ONLY_REPLIES, FALLBACK_REPLIES, getPageContext } from "@/lib/chat/page-context";
import { zipCoverageLine } from "@/lib/chat/service-area";
import { servicePage } from "@/lib/chat/services";
import type {
  EngineResult,
  Lead,
  LeadField,
  QuickReply,
  ServiceType,
} from "@/lib/chat/types";
import { NICOR_GAS } from "@/lib/safety-contacts";

const STATUS_REPLIES: QuickReply[] = [
  { id: "down", label: "Completely down" },
  { id: "partial", label: "Partially working" },
  { id: "abnormal", label: "Running but abnormal" },
  { id: "call", label: "Call Now" },
];

const PROPERTY_REPLIES: QuickReply[] = [
  { id: "home", label: "Home" },
  { id: "business", label: "Business" },
  { id: "other_property", label: "Other" },
  { id: "call", label: "Call Now" },
];

const URGENCY_REPLIES: QuickReply[] = [
  { id: "now", label: "Need help now" },
  { id: "asap", label: "ASAP" },
  { id: "this_week", label: "This week" },
  { id: "planning", label: "Planning ahead" },
  { id: "call", label: "Call Now" },
];

const ZIP_REPLIES: QuickReply[] = [
  { id: "zip_61032", label: "61032" },
  { id: "call", label: "Call Now" },
];

export function createLead(sessionId: string, sourcePage: string): Lead {
  return {
    sessionId,
    timestamp: new Date().toISOString(),
    sourcePage,
    serviceType: null,
    intent: null,
    issue: null,
    systemStatus: null,
    propertyType: null,
    zip: null,
    urgency: null,
    name: null,
    phone: null,
    qualificationStatus: "started",
    summary: "",
    highIntent: false,
    safety: false,
    asked: [],
    provided: [],
  };
}

function serviceLabel(service: ServiceType | null) {
  switch (service) {
    case "ac_repair":
      return "an AC problem";
    case "ac_install":
      return "a new AC system";
    case "furnace_repair":
      return "a heating problem";
    case "furnace_install":
      return "a new furnace";
    case "heat_pump":
      return "a heat pump issue";
    case "mini_split":
      return "a mini split";
    case "iaq":
      return "indoor air quality";
    case "maintenance":
      return "HVAC maintenance";
    case "hvac_replace":
      return "HVAC replacement";
    case "emergency":
      return "an urgent HVAC problem";
    case "commercial":
      return "commercial HVAC help";
    default:
      return "an HVAC issue";
  }
}

function mergeLead(lead: Lead, extracted: ExtractedSignals, sourcePage: string): Lead {
  const next: Lead = {
    ...lead,
    timestamp: new Date().toISOString(),
    sourcePage: sourcePage || lead.sourcePage,
    asked: [...lead.asked],
    provided: [...lead.provided],
  };

  const assign = <K extends LeadField>(field: K, value: Lead[K]) => {
    if (value == null || value === "") return;
    next[field] = value;
    if (!next.provided.includes(field)) next.provided.push(field);
  };

  assign("serviceType", extracted.serviceType);
  assign("intent", extracted.intent);
  assign("issue", extracted.issue);
  assign("systemStatus", extracted.systemStatus);
  assign("propertyType", extracted.propertyType);
  assign("zip", extracted.zip);
  assign("urgency", extracted.urgency);
  assign("name", extracted.name);
  assign("phone", extracted.phone);

  if (extracted.highIntent) next.highIntent = true;
  if (extracted.safety) {
    next.safety = true;
    next.intent = "safety";
  }

  return next;
}

function asked(lead: Lead, id: string) {
  if (lead.asked.includes(id)) return lead;
  return { ...lead, asked: [...lead.asked, id] };
}

function has(lead: Lead, field: LeadField) {
  return lead.provided.includes(field) && Boolean(lead[field]);
}

function summarize(lead: Lead) {
  const parts: string[] = [];
  if (lead.issue) parts.push(lead.issue);
  else if (lead.serviceType) parts.push(serviceLabel(lead.serviceType).replace(/^an? /, ""));
  if (lead.systemStatus === "down") parts.push("system down");
  if (lead.systemStatus === "partial") parts.push("partially working");
  if (lead.systemStatus === "abnormal") parts.push("running abnormally");
  if (lead.zip) parts.push(`ZIP ${lead.zip}`);
  if (lead.propertyType) parts.push(lead.propertyType);
  if (lead.urgency === "now") parts.push("needs help today");
  else if (lead.urgency === "asap") parts.push("ASAP");
  else if (lead.urgency === "this_week") parts.push("this week");
  else if (lead.urgency === "planning") parts.push("planning ahead");
  if (lead.name) parts.push(`name ${lead.name}`);
  if (lead.phone) parts.push("phone provided");
  return parts.join(" · ") || "HVAC inquiry";
}

function qualify(lead: Lead): Lead {
  const next = { ...lead, summary: summarize(lead) };
  if (next.safety) {
    next.qualificationStatus = "safety";
    return next;
  }
  if (next.highIntent || next.urgency === "now" || next.systemStatus === "down") {
    next.qualificationStatus = "call_ready";
    return next;
  }
  const filled = [next.serviceType, next.zip, next.urgency, next.propertyType].filter(Boolean)
    .length;
  if (filled >= 3) next.qualificationStatus = "qualified";
  else if (filled >= 1 || next.issue) next.qualificationStatus = "partial";
  else next.qualificationStatus = "started";
  return next;
}

function result(
  reply: string,
  lead: Lead,
  extra: Partial<EngineResult> = {},
): EngineResult {
  const qualified = qualify(lead);
  const page = qualified.safety ? null : servicePage(qualified.serviceType);
  const showCall =
    extra.showCall ??
    (qualified.highIntent ||
      qualified.qualificationStatus === "call_ready" ||
      qualified.qualificationStatus === "qualified" ||
      qualified.safety);
  return {
    reply,
    lead: qualified,
    quickReplies: extra.quickReplies ?? (showCall ? CALL_ONLY_REPLIES : FALLBACK_REPLIES),
    showCall,
    safety: qualified.safety,
    serviceHref: extra.serviceHref !== undefined ? extra.serviceHref : page?.href ?? null,
    serviceLabel: extra.serviceLabel !== undefined ? extra.serviceLabel : page?.label ?? null,
    fallbackChoices: extra.fallbackChoices ?? false,
  };
}

function gotItLine(lead: Lead) {
  const chunks: string[] = [];
  if (lead.issue) chunks.push(`you're dealing with ${lead.issue}`);
  else if (lead.serviceType) chunks.push(`you're dealing with ${serviceLabel(lead.serviceType)}`);
  if (lead.zip) chunks.push(`in ${lead.zip}`);
  if (lead.urgency === "now") chunks.push("and need help today");
  else if (lead.urgency === "asap") chunks.push("and need help ASAP");
  if (chunks.length === 0) return "The fastest next step is to call the HVAC team.";
  return `Got it — ${chunks.join(" ")}. The fastest next step is to call the HVAC team.`;
}

function isRepair(lead: Lead) {
  return (
    lead.intent === "repair" ||
    lead.serviceType === "ac_repair" ||
    lead.serviceType === "furnace_repair" ||
    lead.serviceType === "heat_pump" ||
    lead.serviceType === "mini_split" ||
    lead.serviceType === "emergency"
  );
}

export function openingTurn(sessionId: string, pagePath: string): EngineResult {
  const page = getPageContext(pagePath);
  const lead = createLead(sessionId, page.path);
  return {
    reply: page.greeting,
    lead,
    quickReplies: page.quickReplies,
    showCall: false,
    safety: false,
    serviceHref: null,
    serviceLabel: null,
    fallbackChoices: false,
  };
}

export function processTurn(input: {
  text: string;
  lead: Lead;
  pagePath: string;
  quickReplyId?: string | null;
}): EngineResult {
  const text = input.text.trim();
  if (!text && !input.quickReplyId) {
    return result(
      "What can we help with — cooling, heating, or something else?",
      input.lead,
      { quickReplies: FALLBACK_REPLIES, showCall: true, fallbackChoices: true },
    );
  }

  const extracted = extractSignals(text, input.quickReplyId);
  let lead = mergeLead(input.lead, extracted, input.pagePath);

  if (extracted.safety || lead.safety) {
    lead = { ...lead, safety: true, highIntent: true, intent: "safety" };
    return result(
      `If you smell gas, see smoke, or a carbon monoxide alarm is sounding, leave the building with everyone in it. Do not turn lights or appliances on or off. From a safe place, call 911 and Nicor Gas at ${NICOR_GAS.display}. HVAC service comes after the property is safe.`,
      lead,
      { showCall: true, quickReplies: CALL_ONLY_REPLIES },
    );
  }

  if (extracted.pricing) {
    lead = asked(lead, "pricing");
    return result(
      "Repair costs depend on what's actually causing the problem. The quickest way to get help with your specific system is to call the HVAC team.",
      { ...lead, highIntent: true },
      { showCall: true, quickReplies: CALL_ONLY_REPLIES },
    );
  }

  if (extracted.wantsCall) {
    return result(
      lead.serviceType || lead.issue
        ? gotItLine(lead)
        : "Need help now? Calling is the fastest way to reach the HVAC team.",
      { ...lead, highIntent: true },
      { showCall: true, quickReplies: CALL_ONLY_REPLIES },
    );
  }

  const known =
    has(lead, "serviceType") ||
    has(lead, "issue") ||
    has(lead, "zip") ||
    has(lead, "urgency") ||
    has(lead, "propertyType");

  if (!known && !extracted.highIntent) {
    lead = asked(lead, "topic");
    return result(
      "How can we help?",
      lead,
      { quickReplies: FALLBACK_REPLIES, showCall: true, fallbackChoices: true },
    );
  }

  const coverage = zipCoverageLine(lead.zip);

  if (isRepair(lead) && !has(lead, "systemStatus") && !lead.asked.includes("status")) {
    lead = asked(lead, "status");
    const intro = lead.issue
      ? `That can happen for a few different reasons. An HVAC professional can determine what's causing it.`
      : `We can help with ${serviceLabel(lead.serviceType)}.`;
    const question =
      lead.serviceType === "furnace_repair"
        ? "Is it completely off, or running without producing enough heat?"
        : "Is it completely down, partially working, or running but abnormal?";
    return result(`${intro} ${question}`, lead, {
      quickReplies: STATUS_REPLIES,
      showCall: lead.highIntent,
    });
  }

  if (
    !has(lead, "zip") &&
    lead.asked.includes("zip") &&
    /^\d{1,6}$/.test(text.replace(/\D/g, "")) &&
    text.replace(/\D/g, "").length !== 5
  ) {
    return result("Please use a 5-digit ZIP, such as 61032.", lead, {
      quickReplies: ZIP_REPLIES,
      showCall: true,
    });
  }

  if (!has(lead, "zip") && !lead.asked.includes("zip")) {
    lead = asked(lead, "zip");
    const prefix = lead.highIntent
      ? "Need help now? Call whenever you're ready. "
      : "";
    return result(
      `${prefix}What ZIP are you in? Freeport is 61032 — nearby towns can be confirmed by phone.`,
      lead,
      { quickReplies: ZIP_REPLIES, showCall: lead.highIntent },
    );
  }

  if (!has(lead, "propertyType") && !lead.asked.includes("property")) {
    lead = asked(lead, "property");
    return result("Is this for a home or a business?", lead, {
      quickReplies: PROPERTY_REPLIES,
      showCall: lead.highIntent,
    });
  }

  if (!has(lead, "urgency") && !lead.asked.includes("urgency") && !lead.highIntent) {
    lead = asked(lead, "urgency");
    return result("When do you need help?", lead, {
      quickReplies: URGENCY_REPLIES,
      showCall: true,
    });
  }

  const lines = [gotItLine(lead)];
  if (coverage) lines.push(coverage);
  if (lead.phone) {
    lines.push("Thanks — calling is still the fastest way to get on the schedule.");
  }

  return result(lines.join(" "), { ...lead, highIntent: true }, {
    showCall: true,
    quickReplies: CALL_ONLY_REPLIES,
  });
}

export function fallbackTurn(lead: Lead): EngineResult {
  return result("How can we help?", lead, {
    quickReplies: FALLBACK_REPLIES,
    showCall: true,
    fallbackChoices: true,
  });
}

export function stripInventedPrices(text: string) {
  return text.replace(/\$\s*\d[\d,]*(?:\.\d{2})?/g, "the actual cost");
}
