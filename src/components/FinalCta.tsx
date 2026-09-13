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
    <section className="bg-spruce text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl text-balance sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">{body}</p>
          <PhoneCta context={context} className="mt-8 min-h-12">
            {label ?? primaryCtaLabel()}
          </PhoneCta>
        </div>
      </div>
    </section>
  );
}
