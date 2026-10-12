"use client";

import { track } from "@/lib/analytics";
import { useEffect } from "react";

const LOCATIONS = new Set(["header", "hero", "sticky", "footer", "inline"]);

export function CtaTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='tel:']");
      if (!(link instanceof HTMLAnchorElement)) return;
      const raw = link.getAttribute("data-cta-location") ?? "inline";
      const location = LOCATIONS.has(raw) ? raw : "inline";
      track("call_click", { location });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
