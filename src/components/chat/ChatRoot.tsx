"use client";

import { useEffect, useState } from "react";
import { ChatWidget } from "@/components/chat/ChatWidget";

export function ChatRoot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    const idle = window.requestIdleCallback;
    if (typeof idle === "function") {
      const id = idle(start, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(start, 1500);
    return () => window.clearTimeout(id);
  }, []);

  if (!ready) return null;
  return <ChatWidget />;
}
