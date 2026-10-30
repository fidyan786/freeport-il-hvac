import type { GuideCategoryId } from "@/content/guide-types";

export type GuideCategory = {
  id: GuideCategoryId;
  label: string;
  blurb: string;
};

export const guideCategories: GuideCategory[] = [
  {
    id: "climate",
    label: "Climate and seasons",
    blurb:
      "How a Stephenson County year actually loads heating and cooling equipment, from a long winter to a short, humid summer and the weeks that swing between the two.",
  },
  {
    id: "furnaces",
    label: "Furnaces",
    blurb:
      "Gas furnaces in Freeport houses: what a long heating season does to them, how high-efficiency drains behave, and how to read a lockout without turning the cabinet into a project.",
  },
  {
    id: "cooling",
    label: "Cooling",
    blurb:
      "Air conditioners that sit idle for months, then have to pull both heat and moisture out of a northern Illinois afternoon.",
  },
  {
    id: "heat-pumps",
    label: "Heat pumps",
    blurb:
      "Cold-climate heat pumps, dual fuel with a gas furnace, and ductless units used for one room the old ducts never reached.",
  },
  {
    id: "boilers",
    label: "Boilers and radiators",
    blurb:
      "Hot-water and steam heat in older houses, which is a different machine from the forced-air furnace next door.",
  },
  {
    id: "indoor-air",
    label: "Indoor air",
    blurb:
      "Dry winter air, filters, and the combustion-air problem that shows up when an older furnace sits in a house that has been tightened.",
  },
  {
    id: "thermostats",
    label: "Thermostats",
    blurb:
      "Setbacks, recovery, and why a new wall control can fail in an older Freeport house even when the furnace itself is fine.",
  },
  {
    id: "efficiency",
    label: "Energy use",
    blurb:
      "What to look at in the house before you assume the next furnace or air conditioner has to be larger.",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    blurb:
      "Homeowner checks that stay outside the burner compartment, and what a real heating visit is supposed to cover.",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    blurb:
      "Symptom guides for houses that are cold in one room, wet under the coil, or locked out after a reset.",
  },
  {
    id: "hiring",
    label: "Hiring help",
    blurb:
      "Questions to ask before you treat a phone call as a hiring decision. This site is not the contractor.",
  },
  {
    id: "safety",
    label: "Safety",
    blurb:
      "Carbon monoxide alarms, gas leaks, and how to decide whether a no-heat night can wait until morning.",
  },
];

export const legacyGuideCategories: Record<string, GuideCategoryId> = {
  "ac-blowing-warm-air": "cooling",
  "furnace-not-heating": "furnaces",
  "furnace-short-cycling": "furnaces",
  "hvac-strange-noises": "troubleshooting",
  "poor-airflow": "troubleshooting",
  "uneven-temperatures": "troubleshooting",
  "furnace-replacement-signals": "furnaces",
  "heat-pump-basics-northern-illinois": "heat-pumps",
  "furnace-blowing-cold-air": "furnaces",
  "no-heat-in-house": "troubleshooting",
  "ac-not-turning-on": "cooling",
  "thermostat-not-working": "thermostats",
  "prepare-ac-after-winter": "maintenance",
  "carbon-monoxide-safety": "safety",
  "changing-a-furnace-filter": "maintenance",
};

export function categoryById(id: GuideCategoryId) {
  return guideCategories.find((category) => category.id === id);
}
