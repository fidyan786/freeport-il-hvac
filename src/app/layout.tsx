import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCallBar } from "@/components/StickyCallBar";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c2238",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `HVAC Service in Freeport, Illinois | ${site.businessName}`,
    template: `%s | ${site.city}, ${site.stateCode} HVAC`,
  },
  description:
    "Furnace repair, AC repair, and emergency HVAC help for Freeport, Illinois (61032) in Stephenson County. Call for heating and cooling service.",
  applicationName: site.businessName,
  keywords: [
    "Freeport IL HVAC",
    "furnace repair Freeport",
    "AC repair Freeport Illinois",
    "emergency HVAC 61032",
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
        <Analytics />
      </body>
    </html>
  );
}
