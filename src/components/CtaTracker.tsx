"use client";

import { track } from "@/lib/analytics";
import { useEffect } from "react";

export function CtaTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[data-cta]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const context = link.getAttribute("data-cta") ?? "unknown";
      const type = link.getAttribute("data-cta-type") ?? "";
      if (type === "phone" || type === "contact-fallback") {
        track("call_clicked", { context, type });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
