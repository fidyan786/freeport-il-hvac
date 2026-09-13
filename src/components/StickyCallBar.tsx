"use client";

import { usePathname } from "next/navigation";
import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export function StickyCallBar() {
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/contact")) return null;

  return (
    <div
      data-sticky-call
      role="region"
      aria-label="Call for HVAC service"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-spruce/20 bg-spruce p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <PhoneCta context="sticky-mobile" className="min-h-12 w-full">
        <span className="inline-flex items-center gap-2">
          <PhoneIcon />
          {primaryCtaLabel()}
        </span>
      </PhoneCta>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M7.5 3.8h3.1l1.1 3.2-1.7 1.1a12.5 12.5 0 0 0 5.9 5.9l1.1-1.7 3.2 1.1v3.1c0 .7-.6 1.3-1.3 1.3C10.6 18.8 5.2 13.4 5.2 5.1c0-.7.6-1.3 1.3-1.3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
