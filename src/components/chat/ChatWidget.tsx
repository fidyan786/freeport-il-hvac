"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { PhoneCta } from "@/components/PhoneCta";
import { track } from "@/lib/analytics";
import { openingTurn, processTurn } from "@/lib/chat/engine";
import type {
  ChatMessage,
  ChatTurnResponse,
  EngineResult,
  Lead,
  QuickReply,
} from "@/lib/chat/types";
import { isPhoneConfigured, primaryCtaLabel } from "@/lib/site";

const STORAGE_KEY = "freeport-hvac-chat-v1";
const SEEN_KEY = "freeport-hvac-chat-seen";

type StoredChat = {
  sessionId: string;
  messages: ChatMessage[];
  lead: Lead;
  quickReplies: QuickReply[];
  showCall: boolean;
  safety: boolean;
  serviceHref: string | null;
  serviceLabel: string | null;
  started: boolean;
};

function uid() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function assistantMessage(
  text: string,
  extras?: Pick<ChatMessage, "serviceHref" | "serviceLabel">,
): ChatMessage {
  return {
    id: uid(),
    role: "assistant",
    text,
    serviceHref: extras?.serviceHref,
    serviceLabel: extras?.serviceLabel,
  };
}

function loadStored(): StoredChat | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredChat) : null;
  } catch {
    return null;
  }
}

function bootstrapChat(path: string): StoredChat {
  const stored = loadStored();
  if (stored?.messages?.length) return stored;
  const sessionId = stored?.sessionId || uid();
  const opening = openingTurn(sessionId, path);
  return {
    sessionId,
    messages: [assistantMessage(opening.reply)],
    lead: opening.lead,
    quickReplies: opening.quickReplies,
    showCall: false,
    safety: false,
    serviceHref: null,
    serviceLabel: null,
    started: false,
  };
}

function fromEngine(engine: EngineResult, prior: ChatMessage[]) {
  return [
    ...prior,
    assistantMessage(engine.reply, {
      serviceHref: engine.serviceHref,
      serviceLabel: engine.serviceLabel,
    }),
  ];
}

export function ChatWidget() {
  const pathname = usePathname() ?? "/";
  const [boot] = useState(() =>
    bootstrapChat(typeof window === "undefined" ? pathname : window.location.pathname || pathname),
  );

  const panelId = useId();
  const titleId = useId();
  const inputId = useId();
  const liveId = useId();
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const startedRef = useRef(boot.started);
  const leadKeyRef = useRef("");
  const abandonedRef = useRef(false);
  const trackedService = useRef<string | null>(boot.lead.serviceType);
  const trackedIntent = useRef<string | null>(boot.lead.intent);
  const shownServiceLink = useRef(Boolean(boot.serviceHref));
  const hasUserRef = useRef(
    boot.messages.some((message) => message.role === "user"),
  );
  const greetingPathRef = useRef(pathname);

  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(false);
  const [sending, setSending] = useState(false);
  const [fallbackNotice, setFallbackNotice] = useState(false);
  const [input, setInput] = useState("");
  const [viewport, setViewport] = useState({ height: 0, offsetTop: 0 });
  const [sessionId] = useState(boot.sessionId);
  const [messages, setMessages] = useState<ChatMessage[]>(boot.messages);
  const [lead, setLead] = useState<Lead | null>(boot.lead);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>(boot.quickReplies);
  const [showCall, setShowCall] = useState(boot.showCall);
  const [safety, setSafety] = useState(boot.safety);
  const [serviceHref, setServiceHref] = useState<string | null>(boot.serviceHref);
  const [serviceLabel, setServiceLabel] = useState<string | null>(boot.serviceLabel);
  const [started, setStarted] = useState(boot.started);

  const applyEngine = useCallback(
    (engine: EngineResult | ChatTurnResponse) => {
      setLead(engine.lead);
      setQuickReplies(engine.quickReplies);
      setShowCall(engine.showCall);
      setSafety(engine.safety);
      setServiceHref(engine.serviceHref);
      setServiceLabel(engine.serviceLabel);
      const withLink = shownServiceLink.current
        ? { ...engine, serviceHref: null, serviceLabel: null }
        : engine;
      if (withLink.serviceHref) shownServiceLink.current = true;
      setMessages((current) => fromEngine(withLink, current));
      if (
        engine.lead.serviceType &&
        trackedService.current !== engine.lead.serviceType
      ) {
        trackedService.current = engine.lead.serviceType;
        track("service_selected", { service: engine.lead.serviceType });
      }
      if (engine.lead.intent && trackedIntent.current !== engine.lead.intent) {
        trackedIntent.current = engine.lead.intent;
        track("intent_selected", { intent: engine.lead.intent });
      }
      if (engine.safety) track("emergency_intent");
      if (
        engine.lead.qualificationStatus === "call_ready" ||
        engine.lead.qualificationStatus === "qualified"
      ) {
        track("lead_completed", { status: engine.lead.qualificationStatus });
      }
    },
    [],
  );

  useEffect(() => {
    const seen = sessionStorage.getItem(SEEN_KEY) === "1";
    if (seen) return;
    const timer = window.setTimeout(() => setUnread(true), 7000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!sessionId || !lead) return;
    const payload: StoredChat = {
      sessionId,
      messages,
      lead,
      quickReplies,
      showCall,
      safety,
      serviceHref,
      serviceLabel,
      started,
    };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Private mode can block sessionStorage.
    }
  }, [
    sessionId,
    messages,
    lead,
    quickReplies,
    showCall,
    safety,
    serviceHref,
    serviceLabel,
    started,
  ]);

  useEffect(() => {
    if (!lead) return;
    if (
      lead.qualificationStatus !== "call_ready" &&
      lead.qualificationStatus !== "qualified" &&
      lead.qualificationStatus !== "safety"
    ) {
      return;
    }
    const key = `${lead.sessionId}:${lead.summary}:${lead.qualificationStatus}`;
    if (leadKeyRef.current === key) return;
    leadKeyRef.current = key;
    void fetch("/api/leads/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lead }),
    }).catch(() => undefined);
  }, [lead]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, sending, open]);

  useEffect(() => {
    if (!open) return;
    const vv = window.visualViewport;
    const sync = () => {
      setViewport({
        height: vv?.height ?? window.innerHeight,
        offsetTop: vv?.offsetTop ?? 0,
      });
    };
    sync();
    vv?.addEventListener("resize", sync);
    vv?.addEventListener("scroll", sync);
    window.addEventListener("resize", sync);
    return () => {
      vv?.removeEventListener("resize", sync);
      vv?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("hvac-chat-open");
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = previous;
      document.body.classList.remove("hvac-chat-open");
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    if (startedRef.current && !abandonedRef.current && !lead?.phone) {
      abandonedRef.current = true;
      track("chatbot_abandoned");
    }
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  }, [lead?.phone]);

  const openPanel = useCallback(() => {
    if (!hasUserRef.current && greetingPathRef.current !== pathname) {
      const opening = openingTurn(sessionId, pathname);
      setLead(opening.lead);
      setQuickReplies(opening.quickReplies);
      setMessages([assistantMessage(opening.reply)]);
      setShowCall(false);
      setSafety(false);
      greetingPathRef.current = pathname;
    }
    setOpen(true);
    setUnread(false);
    sessionStorage.setItem(SEEN_KEY, "1");
    track("chatbot_open", { page: pathname });
  }, [pathname, sessionId]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = [
        ...panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], textarea, input, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((node) => !node.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  async function submit(text: string, quickReplyId?: string) {
    const trimmed = text.trim();
    if (!trimmed || sending || !lead) return;

    if (!startedRef.current) {
      startedRef.current = true;
      setStarted(true);
      track("chatbot_started");
      track("lead_started");
    }

    if (quickReplyId) {
      track("intent_selected", { intent: quickReplyId });
    }

    setInput("");
    setSending(true);
    setFallbackNotice(false);
    hasUserRef.current = true;
    setMessages((current) => [
      ...current,
      { id: uid(), role: "user", text: trimmed },
    ]);

    const local = processTurn({
      text: trimmed,
      lead,
      pagePath: pathname,
      quickReplyId,
    });

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          pagePath: pathname,
          text: trimmed,
          quickReplyId: quickReplyId ?? null,
          lead,
          companyWebsite: "",
        }),
        signal: controller.signal,
      });

      if (response.status === 429) {
        applyEngine(local);
        setFallbackNotice(true);
        return;
      }

      if (!response.ok) {
        applyEngine(local);
        setFallbackNotice(true);
        return;
      }

      const data = (await response.json()) as ChatTurnResponse & { ok?: boolean };
      if (!data.reply) {
        applyEngine(local);
        setFallbackNotice(true);
        return;
      }

      applyEngine(
        {
          reply: data.reply,
          lead: data.lead ?? local.lead,
          quickReplies: data.quickReplies?.length ? data.quickReplies : local.quickReplies,
          showCall: data.showCall,
          safety: data.safety,
          serviceHref: data.serviceHref,
          serviceLabel: data.serviceLabel,
          fallbackChoices: data.fallbackChoices,
        },
      );
      if (!data.usedAi) setFallbackNotice(Boolean(data.fallbackChoices));
    } catch {
      applyEngine(local);
      setFallbackNotice(true);
    } finally {
      window.clearTimeout(timer);
      setSending(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void submit(input);
  }

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className="hvac-chat-launcher fixed right-4 z-[90] inline-flex h-12 items-center rounded-brand bg-navy pr-1 text-white shadow-[0_12px_30px_rgba(11,30,46,0.28)] md:right-6"
        aria-label={open ? "Close Millrace Assistant" : "Open Millrace Assistant"}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => (open ? close() : openPanel())}
      >
        <span className="hidden pl-4 pr-1 text-sm font-semibold whitespace-nowrap md:inline">
            Need help?
        </span>
        <span className="flex h-12 w-12 items-center justify-center">
          <ChatIcon open={open} />
        </span>
        {unread && !open ? (
          <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-copper" aria-hidden="true" />
        ) : null}
      </button>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="hvac-chat-panel fixed inset-x-0 z-[95] flex flex-col border-t border-line bg-cream md:inset-auto md:right-6 md:bottom-24 md:w-[min(24rem,calc(100vw-2rem))] md:overflow-hidden md:rounded-brand md:border md:shadow-xl"
          style={
            {
              "--chat-top": `${viewport.offsetTop}px`,
              "--chat-height": viewport.height ? `${viewport.height}px` : "100dvh",
            } as CSSProperties
          }
          data-open="true"
        >
          <header className="flex shrink-0 items-start gap-3 bg-navy px-4 py-3 text-white">
            <div className="min-w-0 flex-1">
              <p id={titleId} className="font-serif text-lg leading-tight">
                Millrace Assistant
              </p>
              <p className="mt-0.5 text-xs text-white/70">
                HVAC help for Freeport. Not a technician — we get you to a call.
              </p>
            </div>
            <PhoneCta
              context="chatbot-header"
              className="min-h-10 shrink-0 px-3 py-2 text-xs"
            >
              {isPhoneConfigured() ? "Call now" : "Request Service"}
            </PhoneCta>
            <button
              type="button"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-brand border border-white/20"
              aria-label="Close chat"
              onClick={close}
            >
              ✕
            </button>
          </header>

          {safety ? (
            <p className="shrink-0 border-b border-danger/30 bg-white px-4 py-2 text-sm text-danger">
              If this is a gas, fire, or carbon monoxide emergency, leave and call
              911.
            </p>
          ) : null}

          <div
            ref={scrollerRef}
            className="min-h-0 flex-1 overflow-y-auto px-4 py-4"
            aria-live="polite"
            id={liveId}
          >
            <ul className="grid gap-3">
              {messages.map((message) => (
                <li
                  key={message.id}
                  className={
                    message.role === "user"
                      ? "ml-8 justify-self-end rounded-brand bg-navy px-3 py-2 text-sm text-white"
                      : "mr-6 rounded-brand border border-line bg-white px-3 py-2 text-sm text-ink"
                  }
                >
                  <p className="leading-relaxed">{message.text}</p>
                  {message.role === "assistant" &&
                  message.serviceHref &&
                  message.serviceLabel ? (
                    <p className="mt-2 text-xs">
                      <Link
                        href={message.serviceHref}
                        className="font-semibold text-ember underline-offset-2 hover:underline"
                      >
                        Read about {message.serviceLabel}
                      </Link>
                    </p>
                  ) : null}
                </li>
              ))}
              {sending ? (
                <li className="mr-6 rounded-brand border border-line bg-white px-3 py-2 text-sm text-muted">
                  <span className="hvac-chat-typing" aria-hidden="true">
                    ● ● ●
                  </span>
                  <span className="sr-only">Typing</span>
                </li>
              ) : null}
            </ul>
          </div>

          {showCall || safety ? (
            <div className="shrink-0 border-t border-line bg-white px-4 py-3">
              <p className="mb-2 text-sm font-semibold text-navy">Need help now?</p>
              <PhoneCta context="chatbot-cta" className="min-h-12 w-full">
                {primaryCtaLabel()}
              </PhoneCta>
            </div>
          ) : null}

          {quickReplies.length > 0 ? (
            <div className="shrink-0 border-t border-line px-3 py-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) =>
                  reply.id === "call" ? (
                    <PhoneCta
                      key={reply.id}
                      context="chatbot-quick-call"
                      variant="secondary"
                      className="min-h-10 px-3 py-2 text-xs"
                    >
                      {reply.label}
                    </PhoneCta>
                  ) : (
                    <button
                      key={reply.id}
                      type="button"
                      className="min-h-10 rounded-brand border border-navy/15 bg-white px-3 py-2 text-xs font-semibold text-navy hover:border-navy hover:bg-paper"
                      onClick={() => void submit(reply.label, reply.id)}
                    >
                      {reply.label}
                    </button>
                  ),
                )}
              </div>
            </div>
          ) : null}

          <form
            onSubmit={onSubmit}
            className="shrink-0 border-t border-line bg-white px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          >
            <label htmlFor={inputId} className="sr-only">
              Message
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                value=""
                readOnly
              />
              <textarea
                ref={inputRef}
                id={inputId}
                rows={1}
                value={input}
                maxLength={1000}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void submit(input);
                  }
                }}
                placeholder="Describe the problem…"
                className="max-h-28 min-h-11 flex-1 resize-none rounded-brand border border-line px-3 py-2 text-sm"
              />
              <button
                type="submit"
                disabled={sending || input.trim().length === 0}
                className="min-h-11 rounded-brand bg-ember px-4 text-sm font-semibold text-white hover:bg-ember-dark disabled:opacity-60"
              >
                Send
              </button>
            </div>
            {fallbackNotice ? (
              <p className="mt-2 text-xs text-muted">
                Chat is using the quick-help path. Calling still works.
              </p>
            ) : null}
            <span className="sr-only" aria-live="polite">
              {sending ? "Sending" : ""}
            </span>
          </form>
        </div>
      ) : null}
    </>
  );
}

function ChatIcon({ open }: { open: boolean }) {
  if (open) {
    return <span aria-hidden="true">✕</span>;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 6.5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 17.5H9l-4 3v-3A1.5 1.5 0 0 1 3.5 16V8A1.5 1.5 0 0 1 5 6.5Z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" strokeLinecap="round" />
    </svg>
  );
}
