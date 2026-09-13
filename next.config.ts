import type { NextConfig } from "next";
import path from "path";

const legacyRedirects = [
  ["/ac-repair-freeport-il", "/services/ac-repair-freeport-il"],
  ["/ac-installation-freeport-il", "/services/ac-installation-freeport-il"],
  ["/ac-installation-replacement-freeport-il", "/services/ac-installation-freeport-il"],
  ["/ac-maintenance-freeport-il", "/services/ac-maintenance-freeport-il"],
  ["/ac-replacement-freeport-il", "/services/ac-replacement-freeport-il"],
  ["/furnace-repair-freeport-il", "/services/furnace-repair-freeport-il"],
  ["/furnace-installation-freeport-il", "/services/furnace-installation-freeport-il"],
  ["/furnace-installation-replacement-freeport-il", "/services/furnace-installation-freeport-il"],
  ["/heating-maintenance-freeport-il", "/services/furnace-maintenance-freeport-il"],
  ["/hvac-maintenance-freeport-il", "/services/hvac-maintenance-freeport-il"],
  ["/hvac-replacement-freeport-il", "/services/hvac-replacement-freeport-il"],
  ["/heat-pump-repair-freeport-il", "/services/heat-pump-repair-freeport-il"],
  ["/heat-pump-installation-freeport-il", "/services/heat-pump-installation-freeport-il"],
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

const scriptSrc = [
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",
];
if (process.env.NODE_ENV !== "production") {
  scriptSrc[0] += " 'unsafe-eval' 'wasm-unsafe-eval'";
}

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  scriptSrc[0],
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
  securityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  });
}

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
