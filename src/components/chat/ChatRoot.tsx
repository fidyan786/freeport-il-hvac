"use client";

import { useSyncExternalStore } from "react";
import { ChatWidget } from "./ChatWidget";

const emptySubscribe = () => () => {};

export function ChatRoot() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) return null;
  return <ChatWidget />;
}
