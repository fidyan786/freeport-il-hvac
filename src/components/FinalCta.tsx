import { PhoneIcon } from "@/components/Icons";
import { PhoneCta } from "@/components/PhoneCta";
import { primaryCtaLabel } from "@/lib/site";

export function FinalCta({
  title,
  body,
  context,
  label,
}: {
  title: string;
  body: string;
  context: string;
  label?: string;
}) {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-balance text-navy">{title}</h2>
          <p className="mt-4 leading-relaxed text-muted">{body}</p>
          <PhoneCta location="inline" context={context} className="mt-8 w-full sm:w-auto">
            <span className="inline-flex items-center gap-2">
              <PhoneIcon />
              {label ?? primaryCtaLabel()}
            </span>
          </PhoneCta>
        </div>
      </div>
    </section>
  );
}
