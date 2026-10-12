import { PhoneIcon } from "@/components/Icons";
import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div
      data-sticky-call
      role="region"
      aria-label="Call for heating and cooling help"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <PhoneCta location="sticky" context="sticky-mobile" className="w-full">
        <span className="inline-flex items-center gap-2">
          <PhoneIcon />
          {primaryCtaLabel()}
        </span>
      </PhoneCta>
    </div>
  );
}
