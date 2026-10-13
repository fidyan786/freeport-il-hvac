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
    <section data-reveal className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_240px_at_10%_0%,rgb(194_65_12/0.35),transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <p className="kicker !text-[#a5f3fc]">
            Freeport, Illinois 61032
          </p>
          <h2 className="mt-3 text-3xl text-balance text-white sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">{body}</p>
          <PhoneCta
            location="inline"
            context={context}
            className="mt-8 min-h-14 w-full px-7 text-lg sm:w-auto"
          >
            {label ?? primaryCtaLabel()}
          </PhoneCta>
          <p className="mt-4 text-sm text-white/75">
            Call to be connected. This website is not a heating and cooling contractor.
          </p>
        </div>
      </div>
    </section>
  );
}
