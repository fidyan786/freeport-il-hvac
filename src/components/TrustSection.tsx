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
        <p className="kicker">How we work</p>
        <h2 className="mt-2 font-serif text-3xl text-navy sm:text-4xl">
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
              <div key={item.id} className="surface-card p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-brand bg-navy text-white">
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
