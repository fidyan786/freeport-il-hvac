import { ClipboardIcon, PinIcon, WrenchIcon } from "@/components/Icons";
import {
  verifiedCredentials,
  verifiedPracticeSignals,
  verifiedReviews,
} from "@/lib/trust";

const practiceIcons = {
  "diagnosis-first": WrenchIcon,
  "plain-language": ClipboardIcon,
  "freeport-first": PinIcon,
} as const;

const trustDelays = ["", "trust-d2", "trust-d3"] as const;

export function TrustRow() {
  return (
    <ul className="grid grid-cols-3 gap-2 sm:gap-3">
      {verifiedPracticeSignals.map((item, index) => {
        const Icon = practiceIcons[item.id as keyof typeof practiceIcons] ?? PinIcon;
        return (
          <li
            key={item.id}
            className={`glass-panel trust-icon flex flex-col items-start gap-2 rounded-xl px-2.5 py-2.5 sm:flex-row sm:items-center sm:gap-3 sm:px-3 sm:py-3 ${trustDelays[index] ?? ""}`}
          >
            <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-brass">
              <Icon className="h-5 w-5" />
            </span>
            <p className="text-sm leading-tight font-semibold text-white sm:text-base">{item.title}</p>
          </li>
        );
      })}
    </ul>
  );
}

export function TrustSignals() {
  const reviews = verifiedReviews();
  const credentials = verifiedCredentials;

  if (reviews.length > 0) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="kicker">From Freeport customers</p>
          <h2 className="mt-2 font-serif text-3xl text-navy sm:text-4xl">
            What people tell us after the visit
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={`${review.author}-${review.quote.slice(0, 24)}`}
                className="surface-card bg-cream p-6"
              >
                <blockquote className="text-sm leading-relaxed text-ink">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-navy">
                  {review.author}
                  {review.location ? (
                    <span className="font-normal text-muted">
                      {" "}
                      · {review.location}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="kicker">How a call works</p>
        <h2 className="mt-2 text-3xl text-navy">
          Straight answers for a house that needs heat or cooling
        </h2>
        {credentials.length ? (
          <ul className="mt-6 flex flex-wrap gap-2 text-sm">
            {credentials.map((item) => (
              <li
                key={item.id}
                className="rounded-brand border border-line bg-white px-3 py-1.5 font-semibold text-navy"
              >
                {item.title}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {verifiedPracticeSignals.map((item) => {
            const Icon =
              practiceIcons[item.id as keyof typeof practiceIcons] ?? WrenchIcon;
            return (
              <div key={item.id} className="surface-card card-lift p-6">
                <span className="icon-badge">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** @deprecated Use TrustSignals. Kept so existing imports keep working. */
export function TrustSection() {
  return <TrustSignals />;
}
