import type { NextConfig } from "next";
import path from "path";

const legacyRedirects = [
  ["/ac-repair-freeport-il", "/services/ac-repair-freeport-il"],
  ["/ac-installation-replacement-freeport-il", "/services/ac-installation-freeport-il"],
  ["/furnace-repair-freeport-il", "/services/furnace-repair-freeport-il"],
  ["/furnace-installation-replacement-freeport-il", "/services/furnace-installation-freeport-il"],
  ["/hvac-maintenance-freeport-il", "/services/hvac-maintenance-freeport-il"],
  ["/heat-pump-services-freeport-il", "/services/heat-pump-repair-freeport-il"],
  ["/ductless-mini-split-freeport-il", "/services/ductless-mini-split-freeport-il"],
  ["/indoor-air-quality-freeport-il", "/services/indoor-air-quality-freeport-il"],
  ["/commercial-hvac-freeport-il", "/services/commercial-hvac-freeport-il"],
  ["/emergency-hvac-freeport-il", "/services/emergency-hvac-freeport-il"],
  ["/service-areas", "/service-area"],
  ["/reviews", "/about"],
  ["/blog", "/guides"],
  ["/blog/furnace-stops-working-freeport-winter", "/guides/furnace-not-heating"],
  ["/blog/ac-fails-after-illinois-winter", "/guides/ac-blowing-warm-air"],
  ["/blog/furnace-short-cycling-cold-weather", "/guides/furnace-short-cycling"],
  ["/blog/indoor-air-closed-up-winter-homes", "/guides/indoor-air-quality-closed-homes"],
  ["/blog/heat-pumps-northern-illinois", "/guides/heat-pump-basics-northern-illinois"],
] as const;

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
