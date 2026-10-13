"use client";

import { useEffect, useRef } from "react";

const CLIENT = "ca-pub-2140760506973241";
const SLOT = "2221322231";

type AdsWindow = Window & {
  adsbygoogle?: Record<string, unknown>[];
};

export function AdSlot({ className = "" }: { className?: string }) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    const ins = insRef.current;
    if (!ins) return;

    const push = () => {
      if (pushed.current) return;
      if (ins.getAttribute("data-adsbygoogle-status")) return;
      pushed.current = true;
      try {
        const ads = (window as AdsWindow).adsbygoogle || [];
        (window as AdsWindow).adsbygoogle = ads;
        ads.push({});
      } catch {
        pushed.current = false;
      }
    };

    if (!("IntersectionObserver" in window)) {
      push();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        push();
        observer.disconnect();
      },
      { rootMargin: "240px 0px" },
    );
    observer.observe(ins);
    return () => observer.disconnect();
  }, []);

  return (
    <aside className={`ad-slot ${className}`.trim()} aria-label="Advertisement">
      <p className="ad-slot-label">Advertisement</p>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={CLIENT}
        data-ad-slot={SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
