"use client";

import { usePathname } from "next/navigation";
import { PhoneIcon } from "@/components/Icons";
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
      className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/15 bg-navy p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
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
