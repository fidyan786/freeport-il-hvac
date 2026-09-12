import type { ServiceType } from "@/lib/chat/types";

export const SERVICE_PAGES: Partial<
  Record<ServiceType, { href: string; label: string }>
> = {
  ac_repair: { href: "/ac-repair-freeport-il/", label: "AC repair in Freeport" },
  furnace_repair: {
    href: "/furnace-repair-freeport-il/",
    label: "furnace repair in Freeport",
  },
  heat_pump: {
    href: "/heat-pump-services-freeport-il/",
    label: "heat pump service",
  },
  mini_split: {
    href: "/ductless-mini-split-freeport-il/",
    label: "ductless mini splits",
  },
  iaq: {
    href: "/indoor-air-quality-freeport-il/",
    label: "indoor air quality",
  },
  maintenance: {
    href: "/hvac-maintenance-freeport-il/",
    label: "HVAC maintenance",
  },
  ac_install: {
    href: "/ac-installation-replacement-freeport-il/",
    label: "AC installation",
  },
  furnace_install: {
    href: "/furnace-installation-replacement-freeport-il/",
    label: "furnace installation",
  },
  emergency: {
    href: "/emergency-hvac-freeport-il/",
    label: "emergency HVAC",
  },
  commercial: {
    href: "/commercial-hvac-freeport-il/",
    label: "commercial HVAC",
  },
};

export function servicePage(service: ServiceType | null) {
  if (!service) return null;
  return SERVICE_PAGES[service] ?? null;
}
