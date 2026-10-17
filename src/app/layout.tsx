import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chellans-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chellan's Studio | Photography Studio in Tripunithura, Ernakulam",
    template: "%s | Chellan's Studio, Tripunithura",
  },
  description:
    "Chellan's Studio, Tripunithura's photography studio since 1976. Studio portraits, wedding photography, cinematic videography, photo restoration and custom photo framing in Ernakulam, Kerala.",
  keywords: [
    "photography studio in Tripunithura",
    "photography studio in Ernakulam",
    "studio portraits Tripunithura",
    "photo framing Tripunithura",
    "photo restoration Tripunithura",
    "wedding photography Tripunithura",
    "Chellan's Studio",
    "Chellans Studio and Frames",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Chellan's Studio | Photography Studio in Tripunithura, Ernakulam",
    description:
      "A legacy of memories, reimagined for today. Photography, videography, portraits, restoration and fine-art framing in Tripunithura since 1976.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1600,
        height: 1067,
        alt: "Indian bride and groom dancing under a spotlight, cinematic wedding photograph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chellan's Studio | Photography Studio in Tripunithura, Ernakulam",
    description:
      "A legacy of memories, reimagined for today. Photography, videography, portraits, restoration and fine-art framing since 1976.",
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  alternateName: SITE.altName,
  description:
    "Photography studio in Tripunithura, Ernakulam since 1976. Studio portraits, wedding photography, cinematic videography, photo retouching, photo restoration, and custom photo framing.",
  telephone: "+918136846979",
  email: SITE.email,
  foundingDate: "1976",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: ["Tripunithura", "Kakkanad", "Thrikkakara", "Ernakulam", "Kochi", "Kerala"],
  hasMap: SITE.mapsSearchUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-full bg-ink font-sans text-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
