import type { QuickReply, ServiceType } from "@/lib/chat/types";

export type PageChatContext = {
  path: string;
  greeting: string;
  quickReplies: QuickReply[];
  hintService: ServiceType | null;
};

const HOME_REPLIES: QuickReply[] = [
  { id: "ac", label: "AC Problem" },
  { id: "heat", label: "Furnace Problem" },
  { id: "hvac_repair", label: "HVAC Repair" },
  { id: "install", label: "Installation" },
  { id: "maintenance", label: "Maintenance" },
  { id: "iaq", label: "Indoor Air Quality" },
  { id: "urgent", label: "Emergency Problem" },
  { id: "call", label: "Call Now" },
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

export const FALLBACK_REPLIES: QuickReply[] = [
  { id: "ac", label: "AC Problem" },
  { id: "heat", label: "Furnace Problem" },
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

function context(
  greeting: string,
  quickReplies: QuickReply[],
  hintService: ServiceType | null,
): Omit<PageChatContext, "path"> {
  return { greeting, quickReplies, hintService };
}

export function getPageContext(path: string): PageChatContext {
  const normalized = normalizePath(path);

  if (normalized === "/") {
    return {
      path: normalized,
      ...context(
        "Need help with heating or cooling in Freeport?",
        HOME_REPLIES,
        null,
      ),
    };
  }

  if (normalized.includes("emergency")) {
    return {
      path: normalized,
      ...context("Need urgent HVAC help?", [
        { id: "no_heat", label: "No Heat" },
        { id: "no_cool", label: "No Cooling" },
        { id: "urgent", label: "Need Someone Today" },
        { id: "call", label: "Call Now" },
      ], "emergency"),
    };
  }

  if (normalized.includes("commercial")) {
    return {
      path: normalized,
      ...context("Does your business need HVAC help?", [
        { id: "commercial", label: "Business HVAC" },
        { id: "urgent", label: "Urgent Problem" },
        { id: "call", label: "Call Now" },
      ], "commercial"),
    };
  }

  if (normalized.includes("mini-split") || normalized.includes("ductless")) {
    return {
      path: normalized,
      ...context("Questions about ductless mini splits?", [
        { id: "mini_split", label: "Mini Split Problem" },
        { id: "install", label: "New Mini Split" },
        { id: "call", label: "Call Now" },
      ], "mini_split"),
    };
  }

  if (normalized.includes("heat-pump")) {
    return {
      path: normalized,
      ...context("Need heat pump repair or installation?", [
        { id: "heat_pump", label: "Heat Pump Issue" },
        { id: "noise", label: "Making Noise" },
        { id: "install", label: "Replacement" },
        { id: "call", label: "Call Now" },
      ], "heat_pump"),
    };
  }

  if (
    normalized.includes("indoor-air") ||
    normalized.includes("filtr") ||
    normalized.includes("humid")
  ) {
    return {
      path: normalized,
      ...context("Concerned about indoor air quality?", [
        { id: "iaq", label: "Air Quality Help" },
        { id: "question", label: "Question" },
        { id: "call", label: "Call Now" },
      ], "iaq"),
    };
  }

  if (normalized.includes("ac-install") || normalized.includes("ac-replacement")) {
    return {
      path: normalized,
      ...context("Looking for a new cooling system?", INSTALL_REPLIES, "ac_install"),
    };
  }

  if (normalized.includes("furnace-install")) {
    return {
      path: normalized,
      ...context("Looking for a new heating system?", INSTALL_REPLIES, "furnace_install"),
    };
  }

  if (normalized.includes("maintenance")) {
    return {
      path: normalized,
      ...context("Looking for HVAC maintenance?", MAINT_REPLIES, "maintenance"),
    };
  }

  if (normalized.includes("ac-")) {
    return {
      path: normalized,
      ...context("Having trouble with your AC?", AC_REPLIES, "ac_repair"),
    };
  }

  if (normalized.includes("furnace") || normalized.includes("heating")) {
    return {
      path: normalized,
      ...context("Having trouble with your furnace?", FURNACE_REPLIES, "furnace_repair"),
    };
  }

  if (normalized.includes("service-area")) {
    return {
      path: normalized,
      ...context("Checking if we cover your area?", [
        { id: "zip_61032", label: "Freeport 61032" },
        { id: "question", label: "Other ZIP" },
        { id: "call", label: "Call Now" },
      ], null),
    };
  }

  if (normalized.includes("contact")) {
    return { path: normalized, ...context("Ready to talk with Millrace?", HOME_REPLIES, null) };
  }

  return { path: normalized, ...context("What can we help with?", HOME_REPLIES, null) };
}
