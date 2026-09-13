import type { ServiceType } from "@/lib/chat/types";

export const SERVICE_PAGES: Partial<
  Record<ServiceType, { href: string; label: string }>
> = {
  ac_repair: {
    href: "/services/ac-repair-freeport-il/",
    label: "AC repair in Freeport",
  },
  furnace_repair: {
    href: "/services/furnace-repair-freeport-il/",
    label: "furnace repair in Freeport",
  },
  heat_pump: {
    href: "/services/heat-pump-repair-freeport-il/",
    label: "heat pump service",
  },
  mini_split: {
    href: "/services/ductless-mini-split-freeport-il/",
    label: "ductless mini splits",
  },
  iaq: {
    href: "/services/indoor-air-quality-freeport-il/",
    label: "indoor air quality",
  },
  maintenance: {
    href: "/services/hvac-maintenance-freeport-il/",
    label: "HVAC maintenance",
  },
  ac_install: {
    href: "/services/ac-installation-freeport-il/",
    label: "AC installation",
  },
  furnace_install: {
    href: "/services/furnace-installation-freeport-il/",
    label: "furnace installation",
  },
  emergency: {
    href: "/services/emergency-hvac-freeport-il/",
    label: "emergency HVAC",
  },
  commercial: {
    href: "/services/commercial-hvac-freeport-il/",
    label: "commercial HVAC",
  },
  hvac_replace: {
    href: "/services/hvac-replacement-freeport-il/",
    label: "HVAC replacement",
  },
};

export function servicePage(service: ServiceType | null) {
  if (!service) return null;
  return SERVICE_PAGES[service] ?? null;
}
