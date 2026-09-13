import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { ChatRoot } from "@/components/chat/ChatRoot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCallBar } from "@/components/StickyCallBar";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
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
  themeColor: "#14352c",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `Heating & Cooling in Freeport, IL | ${BRAND.name}`,
    template: `%s | ${BRAND.shortName}`,
  },
  description:
    "Furnace repair, AC repair, and HVAC help for Freeport, Illinois (61032) in Stephenson County. Request heating and cooling service from Millrace Heating & Air.",
  applicationName: site.businessName,
  keywords: [
    "Freeport IL HVAC",
    "furnace repair Freeport",
    "AC repair Freeport Illinois",
    "heating and cooling 61032",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.businessName,
  },
  twitter: { card: "summary_large_image" },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/logo-icon.png", type: "image/png" },
    ],
    apple: "/brand/logo-icon.png",
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
