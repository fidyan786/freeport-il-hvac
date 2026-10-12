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
    <section data-reveal className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-wide text-white/80 uppercase">
            Freeport, Illinois 61032
          </p>
          <h2 className="mt-3 text-3xl text-balance text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">{body}</p>
          <PhoneCta
            location="inline"
            context={context}
            variant="light"
            className="mt-8 w-full sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              <PhoneIcon />
              {label ?? primaryCtaLabel()}
            </span>
          </PhoneCta>
          <p className="mt-4 text-sm text-white/75">
            Call to be connected. This website is not a heating and cooling contractor.
          </p>
        </div>
      </div>
    </section>
  );
}
