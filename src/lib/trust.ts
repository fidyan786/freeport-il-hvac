import { site } from "@/lib/site";

export type TrustSignal = {
  id: string;
  title: string;
  text: string;
  kind: "practice" | "credential" | "review";
};

/**
 * Only verified business facts belong in `credentials` or `reviews`.
 * Practice signals are truthful operating principles already used on the site —
 * they are not licenses, ratings, or awards.
 */
export const verifiedCredentials: TrustSignal[] = [];

export const verifiedPracticeSignals: TrustSignal[] = [
  {
    id: "diagnosis-first",
    title: "Diagnosis first",
    text: "Age alone does not decide repair versus replacement. The equipment, the ducts, and how the house is behaving do.",
    kind: "practice",
  },
  {
    id: "plain-language",
    title: "Clear next steps",
    text: "A local professional can explain what failed, what can wait, and what needs attention.",
    kind: "practice",
  },
  {
    id: "freeport-first",
    title: "Local to 61032",
    text: "Freeport winters and short summers shape the work. Nearby Stephenson County towns are confirmed when you call.",
    kind: "practice",
  },
];

export function verifiedReviews() {
  return site.reviews;
}
