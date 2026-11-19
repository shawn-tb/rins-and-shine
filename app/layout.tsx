import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

const source = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "paddle cleaner",
    "pickleball paddle cleaner",
    "carbon fiber paddle cleaning spray",
    "non-abrasive paddle care",
    "Rins & Shine",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/img/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/img/og.jpg"],
  },
  icons: {
    icon: [{ url: "/img/icon-512.png", type: "image/png" }],
    apple: [{ url: "/img/apple-icon.png" }],
  },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = { themeColor: "#0c0a0b" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={source.variable}>
      <body>{children}</body>
    </html>
  );
}
