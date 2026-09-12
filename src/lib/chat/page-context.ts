import type { QuickReply, ServiceType } from "@/lib/chat/types";

export type PageChatContext = {
  path: string;
  greeting: string;
  quickReplies: QuickReply[];
  hintService: ServiceType | null;
};

const HOME_REPLIES: QuickReply[] = [
  { id: "ac", label: "❄️ AC / Cooling" },
  { id: "heat", label: "🔥 Heating" },
  { id: "install", label: "🏠 Installation / Replacement" },
  { id: "maintenance", label: "🛠 Maintenance" },
  { id: "urgent", label: "🚨 Urgent Problem" },
  { id: "question", label: "❓ Question" },
  { id: "call", label: "📞 Call Now" },
];

const AC_REPLIES: QuickReply[] = [
  { id: "not_cooling", label: "Not Cooling" },
  { id: "wont_start", label: "Won't Turn On" },
  { id: "leaking", label: "Leaking" },
  { id: "noise", label: "Making Noise" },
  { id: "call", label: "Call Now" },
];

const FURNACE_REPLIES: QuickReply[] = [
  { id: "not_heating", label: "Not Heating" },
  { id: "wont_start", label: "Won't Start" },
  { id: "noise", label: "Making Noise" },
  { id: "other_problem", label: "Other Problem" },
  { id: "call", label: "Call Now" },
];

const INSTALL_REPLIES: QuickReply[] = [
  { id: "replace_ac", label: "New AC" },
  { id: "replace_furnace", label: "New Furnace" },
  { id: "replace_both", label: "Full System" },
  { id: "call", label: "Call Now" },
];

const MAINT_REPLIES: QuickReply[] = [
  { id: "maintenance", label: "Tune-up" },
  { id: "question", label: "Question" },
  { id: "call", label: "Call Now" },
];

const PAGES: Record<string, Omit<PageChatContext, "path">> = {
  "/": {
    greeting: "Need help with your home's heating or cooling?",
    quickReplies: HOME_REPLIES,
    hintService: null,
  },
  "/ac-repair-freeport-il/": {
    greeting: "Having trouble with your AC?",
    quickReplies: AC_REPLIES,
    hintService: "ac_repair",
  },
  "/furnace-repair-freeport-il/": {
    greeting: "Having trouble with your furnace?",
    quickReplies: FURNACE_REPLIES,
    hintService: "furnace_repair",
  },
  "/ac-installation-replacement-freeport-il/": {
    greeting: "Looking for a new cooling system?",
    quickReplies: INSTALL_REPLIES,
    hintService: "ac_install",
  },
  "/furnace-installation-replacement-freeport-il/": {
    greeting: "Looking for a new heating system?",
    quickReplies: INSTALL_REPLIES,
    hintService: "furnace_install",
  },
  "/heat-pump-services-freeport-il/": {
    greeting: "Need heat pump repair or installation?",
    quickReplies: [
      { id: "heat_pump", label: "Heat Pump Issue" },
      { id: "noise", label: "Making Noise" },
      { id: "install", label: "Replacement" },
      { id: "call", label: "Call Now" },
    ],
    hintService: "heat_pump",
  },
  "/hvac-maintenance-freeport-il/": {
    greeting: "Looking for HVAC maintenance?",
    quickReplies: MAINT_REPLIES,
    hintService: "maintenance",
  },
  "/emergency-hvac-freeport-il/": {
    greeting: "Need urgent HVAC help?",
    quickReplies: [
      { id: "no_heat", label: "No Heat" },
      { id: "no_cool", label: "No Cooling" },
      { id: "urgent", label: "Need Someone Today" },
      { id: "call", label: "Call Now" },
    ],
    hintService: "emergency",
  },
  "/ductless-mini-split-freeport-il/": {
    greeting: "Questions about ductless mini splits?",
    quickReplies: [
      { id: "mini_split", label: "Mini Split Problem" },
      { id: "install", label: "New Mini Split" },
      { id: "call", label: "Call Now" },
    ],
    hintService: "mini_split",
  },
  "/indoor-air-quality-freeport-il/": {
    greeting: "Concerned about indoor air quality?",
    quickReplies: [
      { id: "iaq", label: "Air Quality Help" },
      { id: "question", label: "Question" },
      { id: "call", label: "Call Now" },
    ],
    hintService: "iaq",
  },
  "/commercial-hvac-freeport-il/": {
    greeting: "Does your business need HVAC help?",
    quickReplies: [
      { id: "commercial", label: "Business HVAC" },
      { id: "urgent", label: "Urgent Problem" },
      { id: "call", label: "Call Now" },
    ],
    hintService: "commercial",
  },
  "/service-areas/": {
    greeting: "Checking if we cover your area?",
    quickReplies: [
      { id: "zip_61032", label: "Freeport 61032" },
      { id: "question", label: "Other ZIP" },
      { id: "call", label: "Call Now" },
    ],
    hintService: null,
  },
  "/contact/": {
    greeting: "Ready to talk with the HVAC team?",
    quickReplies: HOME_REPLIES,
    hintService: null,
  },
};

export const FALLBACK_REPLIES: QuickReply[] = [
  { id: "ac", label: "AC Problem" },
  { id: "heat", label: "Heating Problem" },
  { id: "install", label: "Installation" },
  { id: "maintenance", label: "Maintenance" },
  { id: "call", label: "Call Now" },
];

export const CALL_ONLY_REPLIES: QuickReply[] = [{ id: "call", label: "Call Now" }];

export function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return withSlash.startsWith("/") ? withSlash : `/${withSlash}`;
}

export function getPageContext(path: string): PageChatContext {
  const normalized = normalizePath(path);
  const match = PAGES[normalized];
  if (match) return { path: normalized, ...match };
  if (normalized.startsWith("/blog/")) {
    return { path: normalized, ...PAGES["/"] };
  }
  return { path: normalized, ...PAGES["/"] };
}
