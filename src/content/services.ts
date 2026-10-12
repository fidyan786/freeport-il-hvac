import { acInstallation } from "@/content/pages/ac-installation";
import { acRepair } from "@/content/pages/ac-repair";
import { commercialHvac } from "@/content/pages/commercial";
import { ductless } from "@/content/pages/ductless";
import { emergencyHvac } from "@/content/pages/emergency";
import { furnaceInstallation } from "@/content/pages/furnace-installation";
import { furnaceRepair } from "@/content/pages/furnace-repair";
import { heatPump } from "@/content/pages/heat-pump";
import { heatingRepair } from "@/content/pages/heating-repair";
import { indoorAir } from "@/content/pages/indoor-air";
import { hvacMaintenance } from "@/content/pages/maintenance";
import { residentialHvac } from "@/content/pages/residential";
import type { ServiceCategory, ServicePageContent } from "@/content/service-types";

export type { ServiceCategory, ServicePageContent, ServiceFaq } from "@/content/service-types";

export const services: ServicePageContent[] = [
  emergencyHvac,
  furnaceRepair,
  acRepair,
  heatingRepair,
  furnaceInstallation,
  acInstallation,
  hvacMaintenance,
  heatPump,
  ductless,
  indoorAir,
  commercialHvac,
  residentialHvac,
];

export function getService(slug: string): ServicePageContent | undefined {
  return services.find((service) => service.slug === slug);
}

export function servicesByCategory(
  category: ServiceCategory,
): ServicePageContent[] {
  return services.filter((service) => service.category === category);
}

export function serviceBodyWords(service: ServicePageContent): number {
  const chunks = [service.lede];
  for (const section of service.sections) {
    chunks.push(...section.paragraphs);
    for (const sub of section.subsections ?? []) {
      chunks.push(...sub.paragraphs);
    }
  }
  return chunks.join(" ").trim().split(/\s+/).filter(Boolean).length;
}
