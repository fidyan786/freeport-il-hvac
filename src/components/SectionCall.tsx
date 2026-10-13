import { PhoneCta, type CallLocation } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export function SectionCall({
  location = "inline",
  context = "section-call",
}: {
  location?: CallLocation;
  context?: string;
}) {
  return (
    <div className="mt-8">
      <PhoneCta location={location} context={context} className="min-h-14 w-full px-7 text-lg sm:w-auto">
        {primaryCtaLabel()}
      </PhoneCta>
    </div>
  );
}
