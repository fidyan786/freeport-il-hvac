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
      "heat-pump-maintenance-freeport-il",
      "ductless-mini-split-freeport-il",
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
    title: "Emergency HVAC",
    href: "/services/emergency-hvac-freeport-il/",
    items: pick(["emergency-hvac-freeport-il"]),
  },
];

export const serviceLinks: NavLink[] = services.map((service) => ({
  href: service.href,
  label: service.navLabel,
  description: service.navDescription,
}));

export const primaryNav: NavLink[] = [
  { href: "/services/", label: "Services" },
  { href: "/services/#heating", label: "Heating" },
  { href: "/services/#cooling", label: "Cooling" },
  { href: "/services/indoor-air-quality-freeport-il/", label: "Indoor Air Quality" },
  { href: "/services/commercial-hvac-freeport-il/", label: "Commercial" },
  { href: "/service-area/", label: "Service Areas" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export const footerServiceHighlights: NavLink[] = [
  { href: "/services/furnace-repair-freeport-il/", label: "Furnace Repair" },
  { href: "/services/ac-repair-freeport-il/", label: "AC Repair" },
  { href: "/services/emergency-hvac-freeport-il/", label: "Emergency HVAC" },
  { href: "/services/hvac-maintenance-freeport-il/", label: "HVAC Maintenance" },
  { href: "/services/heat-pump-repair-freeport-il/", label: "Heat Pumps" },
  { href: "/services/ductless-mini-split-freeport-il/", label: "Mini Splits" },
  { href: "/services/indoor-air-quality-freeport-il/", label: "Indoor Air Quality" },
  { href: "/services/commercial-hvac-freeport-il/", label: "Commercial HVAC" },
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
  "/guides/ac-blowing-warm-air/",
  "/guides/ac-freezing-up/",
  "/guides/ac-constantly-running/",
  "/guides/furnace-not-heating/",
  "/guides/furnace-short-cycling/",
  "/guides/hvac-strange-noises/",
  "/guides/poor-airflow/",
  "/guides/uneven-temperatures/",
  "/guides/hvac-maintenance-checklist/",
  "/guides/furnace-replacement-signals/",
  "/guides/heat-pump-basics-northern-illinois/",
  "/guides/indoor-air-quality-closed-homes/",
  "/service-area/",
  "/about/",
  "/contact/",
  "/privacy-policy/",
  "/terms/",
] as const;
