import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { profile } from "@/data";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { Providers } from "@/components/providers/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/effects/background";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { JsonLd } from "@/components/shared/json-ld";

/* Brand typography — Sora (display) · Plus Jakarta Sans (body) · JetBrains Mono (code accents) */
const display = Sora({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const body = Plus_Jakarta_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const code = JetBrains_Mono({ variable: "--font-code", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: profile.name, url: siteConfig.url }],
  creator: profile.name,
  applicationName: `${siteConfig.name} Portfolio`,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    firstName: "Maulik",
    lastName: "Savaliya",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor.dark },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ "--brand": siteConfig.brandColor } as React.CSSProperties}
      className={`${display.variable} ${body.variable} ${code.variable} antialiased`}
    >
      <body className="relative min-h-svh overflow-x-clip">
        <JsonLd data={personJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Providers>
          <a
            href="#main"
            className="sr-only z-[70] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Background />
          <Navbar />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
