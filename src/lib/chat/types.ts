export const SERVICE_TYPES = [
  "ac_repair",
  "furnace_repair",
  "heat_pump",
  "mini_split",
  "iaq",
  "maintenance",
  "ac_install",
  "furnace_install",
  "hvac_replace",
  "emergency",
  "commercial",
  "general",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export const INTENTS = [
  "repair",
  "install",
  "replace",
  "maintenance",
  "commercial",
  "emergency",
  "question",
  "pricing",
  "safety",
] as const;

export type Intent = (typeof INTENTS)[number];

export type SystemStatus = "down" | "partial" | "abnormal" | "unknown";
export type PropertyType = "home" | "business" | "other";
export type Urgency = "now" | "asap" | "this_week" | "planning";
export type QualificationStatus =
  | "started"
  | "partial"
  | "qualified"
  | "call_ready"
  | "safety";

export type LeadField =
  | "serviceType"
  | "intent"
  | "issue"
  | "systemStatus"
  | "propertyType"
  | "zip"
  | "urgency"
  | "name"
  | "phone";

export type Lead = {
  sessionId: string;
  timestamp: string;
  sourcePage: string;
  serviceType: ServiceType | null;
  intent: Intent | null;
  issue: string | null;
  systemStatus: SystemStatus | null;
  propertyType: PropertyType | null;
  zip: string | null;
  urgency: Urgency | null;
  name: string | null;
  phone: string | null;
  qualificationStatus: QualificationStatus;
  summary: string;
  highIntent: boolean;
  safety: boolean;
  asked: string[];
  provided: LeadField[];
};

export type QuickReply = {
  id: string;
  label: string;
};

export type ChatRole = "assistant" | "user";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  serviceHref?: string | null;
  serviceLabel?: string | null;
};

export type EngineResult = {
  reply: string;
  lead: Lead;
  quickReplies: QuickReply[];
  showCall: boolean;
  safety: boolean;
  serviceHref: string | null;
  serviceLabel: string | null;
  fallbackChoices: boolean;
};

export type ChatTurnResponse = EngineResult & {
  usedAi: boolean;
};
