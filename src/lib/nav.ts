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
    id: "heating",
    title: "Heating",
    href: "/services/#heating",
    items: pick([
      "furnace-repair-freeport-il",
      "heating-repair-freeport-il",
      "furnace-installation-freeport-il",
    ]),
  },
  {
    id: "cooling",
    title: "Cooling",
    href: "/services/#cooling",
    items: pick([
      "ac-repair-freeport-il",
      "ac-installation-freeport-il",
    ]),
  },
  {
    id: "heat-pump",
    title: "Heat Pumps",
    href: "/services/#heat-pumps",
    items: pick([
      "heat-pump-repair-freeport-il",
      "ductless-mini-split-freeport-il",
    ]),
  },
  {
    id: "whole-home",
    title: "Whole Home",
    href: "/services/#residential",
    items: pick([
      "residential-hvac-freeport-il",
      "hvac-maintenance-freeport-il",
      "indoor-air-quality-freeport-il",
      "emergency-hvac-freeport-il",
    ]),
  },
  {
    id: "commercial",
    title: "Commercial",
    href: "/services/#commercial",
    items: pick(["commercial-hvac-freeport-il"]),
  },
];

export const serviceLinks: NavLink[] = services.map((service) => ({
  href: service.href,
  label: service.navLabel,
  description: service.navDescription,
}));

export const primaryNav: NavLink[] = [
  { href: "/guides/", label: "Guides" },
  { href: "/service-area/", label: "Service Areas" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Call" },
];

export const footerServiceHighlights: NavLink[] = pick([
  "emergency-hvac-freeport-il",
  "furnace-repair-freeport-il",
  "ac-repair-freeport-il",
  "heating-repair-freeport-il",
  "furnace-installation-freeport-il",
  "ac-installation-freeport-il",
  "hvac-maintenance-freeport-il",
  "residential-hvac-freeport-il",
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
  { href: "/about/", label: "About this site" },
];

export const problemLinks: Array<NavLink & { text: string }> = [
  {
    href: "/guides/furnace-not-heating/",
    label: "Furnace not heating",
    text: "No ignition, weak heat, or a house that will not hold temperature.",
  },
  {
    href: "/guides/furnace-blowing-cold-air/",
    label: "Furnace blowing cold air",
    text: "The blower runs, but the air from the registers never warms up.",
  },
  {
    href: "/guides/no-heat-in-house/",
    label: "No heat in the house",
    text: "The rooms are cold and you are not sure which equipment quit.",
  },
  {
    href: "/guides/ac-blowing-warm-air/",
    label: "AC blowing warm air",
    text: "The system runs, but supply vents feel like outdoor air.",
  },
  {
    href: "/guides/ac-not-turning-on/",
    label: "AC not turning on",
    text: "Nothing starts, or the breaker trips when cooling is called.",
  },
  {
    href: "/guides/hvac-strange-noises/",
    label: "HVAC making strange noises",
    text: "Banging, squealing, rattling, or grinding from the equipment.",
  },
  {
    href: "/guides/furnace-short-cycling/",
    label: "Furnace short cycling",
    text: "The furnace starts, stops, and starts again before the house is warm.",
  },
  {
    href: "/guides/uneven-temperatures/",
    label: "Uneven temperatures",
    text: "One room is comfortable and another never catches up.",
  },
  {
    href: "/guides/poor-airflow/",
    label: "Weak airflow",
    text: "Rooms starve for air even though the blower sounds busy.",
  },
  {
    href: "/guides/thermostat-not-working/",
    label: "Thermostat not working",
    text: "The control on the wall does not match what the system does.",
  },
];

export function servicesByNavCategory(category: ServiceCategory) {
  return servicesByCategory(category);
}
