import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { ChatRoot } from "@/components/chat/ChatRoot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCallBar } from "@/components/StickyCallBar";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { SOCIAL_IMAGE } from "@/lib/seo";
import { BRAND, getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c1e1c",
};

const defaultTitle = `Heating & Cooling Service in Freeport, IL | ${BRAND.shortName}`;
const defaultDescription =
  "Furnace repair, AC repair, and HVAC help for Freeport, Illinois (61032) in Stephenson County. Request heating and cooling service from Millrace Heating & Air.";

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
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
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
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="min-h-full bg-cream font-sans text-ink antialiased pb-[4.75rem] md:pb-0">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
        <ChatRoot />
        <Analytics />
      </body>
    </html>
  );
}
