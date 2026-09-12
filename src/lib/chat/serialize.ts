import type { Lead } from "@/lib/chat/types";

const MAX = 2000;

export function cleanText(value: unknown, max = MAX) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function serializeLead(lead: Lead) {
  return {
    sessionId: lead.sessionId,
    timestamp: lead.timestamp,
    sourcePage: lead.sourcePage,
    serviceType: lead.serviceType,
    intent: lead.intent,
    issue: lead.issue,
    systemStatus: lead.systemStatus,
    propertyType: lead.propertyType,
    zip: lead.zip,
    urgency: lead.urgency,
    name: lead.name,
    phone: lead.phone,
    qualificationStatus: lead.qualificationStatus,
    summary: lead.summary,
  };
}
