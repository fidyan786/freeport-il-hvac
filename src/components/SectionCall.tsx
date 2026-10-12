import { PhoneIcon } from "@/components/Icons";
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
      <PhoneCta location={location} context={context} className="w-full sm:w-auto">
        <span className="inline-flex items-center gap-2">
          <PhoneIcon />
          {primaryCtaLabel()}
        </span>
      </PhoneCta>
    </div>
  );
}
