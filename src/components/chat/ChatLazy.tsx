"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";

const ChatWidget = dynamic(
  () => import("@/components/chat/ChatWidget").then((mod) => mod.ChatWidget),
  { ssr: false, loading: () => null },
);

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <path
        d="M6 16.5 4.2 19.2c-.3.5.1 1.1.7 1.1H8l.2-.1A8.2 8.2 0 1 0 6 16.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatLazy() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    document.body.toggleAttribute("data-chat-open", open);
    return () => document.body.removeAttribute("data-chat-open");
  }, [open]);

  return (
    <div className="chat-dock">
      {open ? (
        <ChatWidget onClose={() => setOpen(false)} />
      ) : (
        <button
          type="button"
          className="chat-launcher"
          aria-expanded={false}
          aria-label="Open assistant"
          onClick={() => {
            setSeen(true);
            setOpen(true);
            track("chatbot_open");
          }}
        >
          <ChatIcon />
          {!seen ? <span className="chat-dot" aria-hidden="true" /> : null}
        </button>
      )}
    </div>
  );
}
