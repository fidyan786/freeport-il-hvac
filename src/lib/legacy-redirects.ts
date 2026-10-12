/** Old URLs that must 301 in one hop, including the no-slash form. */
export const legacyRedirects = [
  ["/ac-repair-freeport-il", "/services/ac-repair-freeport-il"],
  ["/ac-installation-freeport-il", "/services/ac-installation-freeport-il"],
  ["/ac-installation-replacement-freeport-il", "/services/ac-installation-freeport-il"],
  ["/ac-maintenance-freeport-il", "/services/hvac-maintenance-freeport-il"],
  ["/ac-replacement-freeport-il", "/services/ac-installation-freeport-il"],
  ["/furnace-repair-freeport-il", "/services/furnace-repair-freeport-il"],
  ["/furnace-installation-freeport-il", "/services/furnace-installation-freeport-il"],
  ["/furnace-installation-replacement-freeport-il", "/services/furnace-installation-freeport-il"],
  ["/heating-maintenance-freeport-il", "/services/hvac-maintenance-freeport-il"],
  ["/hvac-maintenance-freeport-il", "/services/hvac-maintenance-freeport-il"],
  ["/hvac-replacement-freeport-il", "/services/residential-hvac-freeport-il"],
  ["/hvac-repair-freeport-il", "/services/residential-hvac-freeport-il"],
  ["/heat-pump-repair-freeport-il", "/services/heat-pump-repair-freeport-il"],
  ["/heat-pump-installation-freeport-il", "/services/heat-pump-repair-freeport-il"],
  ["/heat-pump-services-freeport-il", "/services/heat-pump-repair-freeport-il"],
  ["/ductless-mini-split-freeport-il", "/services/ductless-mini-split-freeport-il"],
  ["/indoor-air-quality-freeport-il", "/services/indoor-air-quality-freeport-il"],
  ["/commercial-hvac-freeport-il", "/services/commercial-hvac-freeport-il"],
  ["/emergency-hvac-freeport-il", "/services/emergency-hvac-freeport-il"],
  ["/residential-hvac-freeport-il", "/services/residential-hvac-freeport-il"],
  ["/hvac-contractor-freeport-il", "/about"],
  ["/hvac-company-freeport-il", "/"],
  ["/heating-and-cooling-freeport-il", "/"],
  ["/air-conditioning-repair-freeport-il", "/services/ac-repair-freeport-il"],
  ["/service-areas", "/service-area"],
  ["/reviews", "/about"],
  ["/blog", "/guides"],
  ["/blog/furnace-stops-working-freeport-winter", "/guides/furnace-not-heating"],
  ["/blog/ac-fails-after-illinois-winter", "/guides/ac-blowing-warm-air"],
  ["/blog/furnace-short-cycling-cold-weather", "/guides/furnace-short-cycling"],
  ["/blog/indoor-air-closed-up-winter-homes", "/services/indoor-air-quality-freeport-il"],
  ["/services/ac-replacement-freeport-il", "/services/ac-installation-freeport-il"],
  ["/services/ac-maintenance-freeport-il", "/services/hvac-maintenance-freeport-il"],
  ["/services/furnace-maintenance-freeport-il", "/services/hvac-maintenance-freeport-il"],
  ["/services/hvac-repair-freeport-il", "/services/residential-hvac-freeport-il"],
  ["/services/hvac-replacement-freeport-il", "/services/residential-hvac-freeport-il"],
  ["/services/heat-pump-installation-freeport-il", "/services/heat-pump-repair-freeport-il"],
  ["/services/heat-pump-maintenance-freeport-il", "/services/heat-pump-repair-freeport-il"],
  ["/services/mini-split-repair-freeport-il", "/services/ductless-mini-split-freeport-il"],
  ["/services/mini-split-installation-freeport-il", "/services/ductless-mini-split-freeport-il"],
  ["/services/air-filtration-freeport-il", "/services/indoor-air-quality-freeport-il"],
  ["/services/humidifiers-dehumidifiers-freeport-il", "/services/indoor-air-quality-freeport-il"],
  ["/services/commercial-ac-repair-freeport-il", "/services/commercial-hvac-freeport-il"],
  ["/services/commercial-heating-repair-freeport-il", "/services/commercial-hvac-freeport-il"],
  ["/services/commercial-hvac-maintenance-freeport-il", "/services/commercial-hvac-freeport-il"],
  ["/guides/ac-freezing-up", "/guides/ac-not-turning-on"],
  ["/guides/ac-constantly-running", "/services/ac-repair-freeport-il"],
  ["/guides/hvac-maintenance-checklist", "/services/hvac-maintenance-freeport-il"],
  ["/guides/indoor-air-quality-closed-homes", "/services/indoor-air-quality-freeport-il"],
  ["/blog/heat-pumps-northern-illinois", "/guides/heat-pump-basics-northern-illinois"],
] as const;

export function legacyDestination(pathname: string): string | undefined {
  const bare = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const match = legacyRedirects.find(([source]) => source === bare);
  if (!match) return undefined;
  const dest = match[1];
  if (dest === "/") return "/";
  return dest.endsWith("/") ? dest : `${dest}/`;
}
