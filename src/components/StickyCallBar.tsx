import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div
      data-sticky-call
      role="region"
      aria-label="Call for heating and cooling help"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-deep/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-18px_rgb(11,30,46,0.8)] backdrop-blur-md md:hidden"
    >
      <PhoneCta location="sticky" context="sticky-mobile" className="min-h-14 w-full text-lg">
        {primaryCtaLabel()}
      </PhoneCta>
    </div>
  );
}
