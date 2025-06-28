import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.yourturfprosdomain.com" // Fallback

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL), // Important for resolving relative OG image paths
  title: {
    default: "Turf Professionals - Premium Artificial Turf Solutions",
    template: "%s | Turf Professionals", // For page-specific titles
  },
  description:
    "Expert turf installation, backyard putting greens, and maintenance services. Transform your space with high-quality artificial grass in [Your City/Region].",
  keywords: [
    "artificial turf",
    "putting greens",
    "turf installation",
    "synthetic grass",
    "low-maintenance lawn",
    "backyard design",
    "pet-friendly turf",
    "recreational turf",
    "commercial turf",
    // Add your city/region keywords
  ],
  authors: [{ name: "Turf Professionals", url: BASE_URL }],
  creator: "Turf Professionals",
  publisher: "Turf Professionals",
  robots: {
    // Default robots policy
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Turf Professionals - Premium Artificial Turf Solutions",
    description: "Expert turf installation, backyard putting greens, and maintenance services.",
    url: BASE_URL,
    siteName: "Turf Professionals",
    images: [
      {
        url: "/og-image.png", // Create a general OG image (e.g., 1200x630px) in /public
        width: 1200,
        height: 630,
        alt: "Turf Professionals - Premium Artificial Turf",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turf Professionals - Premium Artificial Turf Solutions",
    description: "Expert turf installation, backyard putting greens, and maintenance services.",
    // siteId: "[Your Twitter Site ID if you have one]",
    creator: "@[YourTwitterHandle]", // Your company's Twitter handle
    // creatorId: "[Your Twitter Creator ID if different]",
    images: [`${BASE_URL}/og-image.png`], // Must be an absolute URL
  },
  alternates: {
    canonical: "/", // Default canonical for the homepage
  },
  generator: "v0.dev",
}

// Define LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turf Professionals",
  image: `${BASE_URL}/og-image.png`, // Use your main OG image or logo
  "@id": BASE_URL,
  url: BASE_URL,
  telephone: "[Your Business Phone Number]", // e.g., "+11234567890"
  priceRange: "$$", // Optional: Adjust as needed (e.g., $, $$, $$$)
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Your Street Address]",
    addressLocality: "[Your City]",
    addressRegion: "[Your State Abbreviation, e.g., CA]",
    postalCode: "[Your Zip Code]",
    addressCountry: "[Your Country Code, e.g., US]",
  },
  geo: {
    // Optional, but good for local SEO
    "@type": "GeoCoordinates",
    latitude: "[Your Business Latitude]", // e.g., 34.052235
    longitude: "[Your Business Longitude]", // e.g., -118.243683
  },
  openingHoursSpecification: [
    // Optional: Adjust to your actual hours
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    // {
    //   "@type": "OpeningHoursSpecification",
    //   dayOfWeek: "Saturday",
    //   opens: "10:00",
    //   closes: "14:00"
    // }
  ],
  sameAs: [
    // Optional: Links to your social media profiles
    "[Your Facebook URL]",
    "[Your Twitter URL]",
    "[Your Instagram URL]",
    // Add other relevant profiles
  ],
  // description: metadata.description, // Can reuse the main description
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE_URL,
  name: "Turf Professionals",
  potentialAction: {
    // For Sitelinks Search Box
    "@type": "SearchAction",
    target: `${BASE_URL}/search?q={search_term_string}`, // If you implement site search
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-dvh flex-col bg-brand-gray-light">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
