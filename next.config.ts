import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://stats.g.doubleclick.net",
      "worker-src 'self' blob:",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
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

const nextConfig: NextConfig = {
  // Hostinger's Next.js preset wraps this file and sets output: "standalone".
  // Do not set output here. A value such as "export" is replaced and is ignored.
  trailingSlash: true,
  // One 301 in src/proxy.ts owns trailing slashes, so Next does not add a second hop.
  skipTrailingSlashRedirect: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
