import { guides } from "@/content/guides";
import {
  services,
  servicesByCategory,
  type ServiceCategory,
} from "@/content/services";

export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type MegaGroup = {
  id: string;
  title: string;
  href: string;
  items: NavLink[];
};

export const nearbyCommunities = [
  { name: "Lena", zip: "61048" },
  { name: "Cedarville", zip: "61013" },
  { name: "Dakota", zip: "61018" },
  { name: "Pearl City", zip: "61062" },
  { name: "Orangeville", zip: "61060" },
  { name: "Ridott", zip: "61067" },
  { name: "German Valley", zip: "61039" },
  { name: "Davis", zip: "61019" },
  { name: "Rock City", zip: "61070" },
  { name: "Winslow", zip: "61089" },
] as const;

function pick(slugs: string[]): NavLink[] {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .map((service) => ({
      href: service.href,
      label: service.navLabel,
    }));
}

export const megaGroups: MegaGroup[] = [
  {
    id: "cooling",
    title: "Cooling",
    href: "/services/#cooling",
    items: pick([
      "ac-repair-freeport-il",
      "ac-installation-freeport-il",
      "ac-replacement-freeport-il",
      "ac-maintenance-freeport-il",
    ]),
  },
  {
    id: "heating",
    title: "Heating",
    href: "/services/#heating",
    items: pick([
      "furnace-repair-freeport-il",
      "furnace-installation-freeport-il",
      "furnace-maintenance-freeport-il",
      "heating-repair-freeport-il",
    ]),
  },
  {
    id: "heat-pump",
    title: "Heat Pumps",
    href: "/services/#heat-pumps",
    items: pick([
      "heat-pump-repair-freeport-il",
      "heat-pump-installation-freeport-il",
      "ductless-mini-split-freeport-il",
      "mini-split-repair-freeport-il",
      "mini-split-installation-freeport-il",
    ]),
  },
  {
    id: "iaq",
    title: "Indoor Air Quality",
    href: "/services/#iaq",
    items: pick([
      "indoor-air-quality-freeport-il",
      "air-filtration-freeport-il",
      "humidifiers-dehumidifiers-freeport-il",
    ]),
  },
  {
    id: "commercial",
    title: "Commercial",
    href: "/services/#commercial",
    items: pick([
      "commercial-hvac-freeport-il",
      "commercial-ac-repair-freeport-il",
      "commercial-heating-repair-freeport-il",
      "commercial-hvac-maintenance-freeport-il",
    ]),
  },
  {
    id: "emergency",
    title: "Urgent",
    href: "/services/#emergency",
    items: pick([
      "emergency-hvac-freeport-il",
      "residential-hvac-freeport-il",
      "hvac-repair-freeport-il",
      "hvac-maintenance-freeport-il",
      "hvac-replacement-freeport-il",
    ]),
  },
];

export const serviceLinks: NavLink[] = services.map((service) => ({
  href: service.href,
  label: service.navLabel,
  description: service.navDescription,
}));

export const primaryNav: NavLink[] = [
  { href: "/service-area/", label: "Service Areas" },
  { href: "/about/", label: "About" },
  { href: "/guides/", label: "Resources" },
];

export const footerServiceHighlights: NavLink[] = pick([
  "furnace-repair-freeport-il",
  "ac-repair-freeport-il",
  "heating-repair-freeport-il",
  "ac-installation-freeport-il",
  "emergency-hvac-freeport-il",
  "hvac-maintenance-freeport-il",
  "residential-hvac-freeport-il",
  "commercial-hvac-freeport-il",
]);

export const intentLinks: NavLink[] = [
  { href: "/services/furnace-repair-freeport-il/", label: "Furnace repair" },
  { href: "/services/ac-repair-freeport-il/", label: "AC repair" },
  { href: "/services/ac-installation-freeport-il/", label: "AC installation" },
  { href: "/services/furnace-installation-freeport-il/", label: "Furnace installation" },
  { href: "/services/heating-repair-freeport-il/", label: "Heating repair" },
  { href: "/services/hvac-maintenance-freeport-il/", label: "HVAC maintenance" },
  { href: "/services/emergency-hvac-freeport-il/", label: "Emergency HVAC" },
  { href: "/services/residential-hvac-freeport-il/", label: "Residential HVAC" },
  { href: "/services/commercial-hvac-freeport-il/", label: "Commercial HVAC" },
  { href: "/about/", label: "HVAC contractor" },
];

export const problemLinks: Array<NavLink & { text: string }> = [
  {
    href: "/guides/ac-blowing-warm-air/",
    label: "AC blowing warm air",
    text: "The system runs, but supply vents feel like outdoor air.",
  },
  {
    href: "/services/furnace-repair-freeport-il/",
    label: "Furnace not heating",
    text: "No ignition, weak heat, or a house that will not hold temperature.",
  },
  {
    href: "/services/hvac-repair-freeport-il/",
    label: "System won't turn on",
    text: "No response from heat or cooling when the thermostat calls.",
  },
  {
    href: "/guides/hvac-strange-noises/",
    label: "HVAC making strange noises",
    text: "Banging, squealing, rattling, or grinding from the equipment.",
  },
  {
    href: "/guides/poor-airflow/",
    label: "Weak airflow",
    text: "Rooms starve for air even though the blower sounds busy.",
  },
  {
    href: "/guides/uneven-temperatures/",
    label: "Uneven temperatures",
    text: "One floor is fine. Another is a different season.",
  },
  {
    href: "/guides/ac-constantly-running/",
    label: "System constantly running",
    text: "The equipment never finishes a cycle, or short-cycles and starts again.",
  },
  {
    href: "/guides/indoor-air-quality-closed-homes/",
    label: "Poor indoor air quality",
    text: "Dust, dryness, or stale air after months of closed windows.",
  },
];

export function servicesByNavCategory(category: ServiceCategory) {
  return servicesByCategory(category);
}

export const indexablePaths = [
  "/",
  "/services/",
  ...services.map((service) => service.href),
  "/guides/",
  ...guides.map((guide) => guide.href),
  "/service-area/",
  "/about/",
  "/contact/",
  "/privacy-policy/",
  "/terms/",
];
