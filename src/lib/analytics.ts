export type ChatAnalyticsEvent =
  | "chatbot_open"
  | "chatbot_started"
  | "intent_selected"
  | "service_selected"
  | "lead_started"
  | "lead_completed"
  | "call_clicked"
  | "emergency_intent"
  | "chatbot_abandoned";

type TrackParams = Record<string, string | number | boolean | null | undefined>;

export function track(event: ChatAnalyticsEvent | string, params?: TrackParams) {
  if (typeof window === "undefined") return;

  const payload: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) payload[key] = value;
    }
  }

  const w = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };

  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
  w.gtag?.("event", event, payload);
}
