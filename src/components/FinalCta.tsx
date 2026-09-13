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
    <section className="relative overflow-hidden bg-spruce text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-20 h-64 w-64 rounded-full bg-copper/20 blur-2xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
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
