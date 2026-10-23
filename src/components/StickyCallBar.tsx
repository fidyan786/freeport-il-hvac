import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div
      data-sticky-call
      role="region"
      aria-label="Call for heating and cooling help"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pt-2.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-14px_rgb(11,37,69,0.45)] backdrop-blur md:hidden"
    >
      <PhoneCta location="sticky" context="sticky-mobile" className="min-h-14 w-full rounded-xl text-lg font-bold">
        {primaryCtaLabel()}
      </PhoneCta>
      <p className="mt-1.5 text-center text-xs font-medium text-muted">
        Connects you with a local HVAC professional
      </p>
    </div>
  );
}
