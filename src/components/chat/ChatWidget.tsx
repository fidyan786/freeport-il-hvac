"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { LogoMark } from "@/components/Logo";
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

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4.5 12 19 5.5 13.2 19l-1.8-6.2L4.5 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatWidget({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const inputId = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const started = useRef(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Bubble[]>([
    { id: "open", role: "assistant", text: OPENING },
  ]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, typing]);

  function ask(raw: string) {
    const text = raw.trim();
    if (!text || typing) return;
    if (!started.current) {
      started.current = true;
      track("chatbot_started");
    }
    const reply = answerQuestion(text);
    const shown = redact(text);
    setMessages((current) => [...current, { id: uid(), role: "user", text: shown }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: uid(),
          role: "assistant",
          text: reply.text,
          href: reply.href,
          linkLabel: reply.linkLabel,
          safety: reply.safety,
        },
      ]);
      setTyping(false);
    }, 420);
  }

  return (
    <section className="chat-panel" role="dialog" aria-modal="false" aria-labelledby={titleId}>
      <header className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <LogoMark className="h-10 w-10 shrink-0" />
        <div className="min-w-0 flex-1">
          <p id={titleId} className="flex items-center gap-2 font-serif text-lg text-white">
            {BRAND.chatbotName}
            <span className="chat-online" aria-hidden="true" />
            <span className="sr-only">Online</span>
          </p>
          <p className="text-sm text-white/70">Automated assistant, not a technician.</p>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white hover:bg-white/10"
          onClick={onClose}
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
        {typing ? (
          <div className="chat-bot chat-typing" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        ) : null}
      </div>
      <div className="chat-chips">
        {QUICK_REPLIES.map((label) => (
          <button key={label} type="button" onClick={() => ask(label)}>
            {label}
          </button>
        ))}
      </div>
      <form
        className="chat-compose"
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
          rows={1}
          value={input}
          maxLength={400}
          placeholder="Describe the symptom. Do not leave your phone number."
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              ask(input);
            }
          }}
        />
        <button type="submit" aria-label="Send">
          <SendIcon />
        </button>
      </form>
      <div className="chat-call">
        <PhoneCta location="chat" context="chat-panel" className="w-full">
          {primaryCtaLabel()}
        </PhoneCta>
        <p>Nothing you type is sent to a server or saved.</p>
      </div>
    </section>
  );
}
