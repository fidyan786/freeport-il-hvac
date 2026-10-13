"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { PhoneCta } from "@/components/PhoneCta";
import { track } from "@/lib/analytics";
import { OPENING, QUICK_REPLIES, answerQuestion } from "@/lib/chat/answer";
import { BRAND, primaryCtaLabel } from "@/lib/site";

type Role = "assistant" | "user";

type Bubble = {
  id: string;
  role: Role;
  text: string;
  href?: string;
  linkLabel?: string;
  safety?: boolean;
};

function uid() {
  return `m-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 8)}`;
}

function redact(value: string) {
  return value
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[not saved]")
    .replace(/(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/g, "[not saved]")
    .slice(0, 400);
}

export function ChatWidget() {
  const panelId = useId();
  const titleId = useId();
  const inputId = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const started = useRef(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Bubble[]>([
    { id: "open", role: "assistant", text: OPENING },
  ]);

  useEffect(() => {
    document.body.toggleAttribute("data-chat-open", open);
    return () => document.body.removeAttribute("data-chat-open");
  }, [open]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  function toggle(next: boolean) {
    setOpen(next);
    if (next) track("chatbot_open");
  }

  function ask(raw: string) {
    const text = raw.trim();
    if (!text) return;
    if (!started.current) {
      started.current = true;
      track("chatbot_started");
    }
    const reply = answerQuestion(text);
    const shown = redact(text);
    setMessages((current) => [
      ...current,
      { id: uid(), role: "user", text: shown },
      {
        id: uid(),
        role: "assistant",
        text: reply.text,
        href: reply.href,
        linkLabel: reply.linkLabel,
        safety: reply.safety,
      },
    ]);
    setInput("");
  }

  return (
    <div className="chat-dock">
      {open ? (
        <section
          id={panelId}
          className="chat-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
        >
          <header className="flex items-start justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div>
              <p id={titleId} className="font-serif text-lg text-white">
                {BRAND.chatbotName}
              </p>
              <p className="text-white/70">Automated assistant, not a technician.</p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 text-white"
              onClick={() => toggle(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </header>
          <div ref={scrollerRef} className="chat-log" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={message.role === "user" ? "chat-user" : "chat-bot"}>
                <p>{message.text}</p>
                {message.href && message.linkLabel ? (
                  <Link className="mt-2 inline-flex font-semibold text-cyan underline underline-offset-2" href={message.href}>
                    {message.linkLabel}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto px-3 py-2">
            {QUICK_REPLIES.map((label) => (
              <button
                key={label}
                type="button"
                className="shrink-0 rounded-full border border-cyan/40 px-3 py-2 text-white hover:border-cyan"
                onClick={() => ask(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <form
            className="grid gap-2 border-t border-white/10 px-3 py-3"
            onSubmit={(event) => {
              event.preventDefault();
              ask(input);
            }}
          >
            <label className="sr-only" htmlFor={inputId}>
              Ask about heating or cooling
            </label>
            <textarea
              ref={inputRef}
              id={inputId}
              rows={2}
              value={input}
              maxLength={400}
              placeholder="Describe the symptom. Do not leave your phone number."
              className="w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/50"
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  ask(input);
                }
              }}
            />
            <button type="submit" className="min-h-11 rounded-full border border-cyan/50 font-semibold text-white hover:bg-white/10">
              Ask
            </button>
            <PhoneCta location="chat" context="chat-panel" className="w-full">
              {primaryCtaLabel()}
            </PhoneCta>
            <p className="text-white/60">
              Nothing you type is sent to a server or saved as a lead.
            </p>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        className="chat-launcher"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => toggle(!open)}
      >
        <span className="chat-launcher-glow" aria-hidden="true" />
        {open ? "Close" : "Ask"}
      </button>
    </div>
  );
}
