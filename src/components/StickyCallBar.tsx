import { PhoneCta } from "@/components/PhoneCta";
import { site } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div
      data-sticky-call
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/20 bg-navy p-3 md:hidden"
    >
      <PhoneCta context="sticky-mobile" className="min-h-12 w-full">
        Call now · {site.phoneDisplay}
      </PhoneCta>
    </div>
  );
}
