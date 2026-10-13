import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { ChatLazy } from "@/components/chat/ChatLazy";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { StickyCallBar } from "@/components/StickyCallBar";
import { BRAND_COLORS } from "@/lib/brand";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { SOCIAL_IMAGE } from "@/lib/seo";
import { BRAND, getSiteUrl, googleSiteVerification, site } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  weight: ["400", "500", "600", "700"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  weight: ["500", "600", "700"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: BRAND_COLORS.navy,
};

const defaultTitle =
  "Heating and Cooling in Freeport, IL | Millrace Heating";
const defaultDescription = `Heating and cooling help for Freeport, IL 61032. Furnace trouble, an air conditioner that will not cool, or a system that will not start. Call ${site.phoneDisplay}.`;

const googleVerification = googleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: defaultTitle,
    template: `%s | ${BRAND.shortName}`,
  },
  description: defaultDescription,
  applicationName: site.businessName,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getSiteUrl()}/`,
    siteName: site.businessName,
    title: defaultTitle,
    description: defaultDescription,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [SOCIAL_IMAGE.url],
  },
  verification: googleVerification
    ? { google: googleVerification }
    : undefined,
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/icon/", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon/", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full`}>
      <body className="min-h-full bg-cream font-sans text-ink antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <RevealOnScroll />
        <main id="main" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
        <ChatLazy />
        <Analytics />
      </body>
    </html>
  );
}
