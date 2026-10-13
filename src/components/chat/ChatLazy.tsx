"use client";

import dynamic from "next/dynamic";

const ChatRoot = dynamic(
  () => import("@/components/chat/ChatRoot").then((mod) => mod.ChatRoot),
  { ssr: false, loading: () => null },
);

export function ChatLazy() {
  return <ChatRoot />;
}
