import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { StructuredData } from "@/components/structured-data"
import { generateOrganizationSchema } from "@/lib/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Turf Professionals | Premium Artificial Turf Installation",
    template: "%s | Turf Professionals",
  },
  description:
    "Transform your outdoor space with premium artificial turf installation. Professional synthetic grass solutions for residential, commercial, and recreational properties. Expert installation, quality materials, lasting results.",
  keywords: [
    "artificial turf",
    "synthetic grass",
    "turf installation",
    "artificial grass",
    "lawn replacement",
    "landscaping",
    "putting greens",
    "pet-friendly turf",
    "commercial turf",
    "residential turf",
  ],
  authors: [{ name: "Turf Professionals" }],
  creator: "Turf Professionals",
  publisher: "Turf Professionals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.turf-professionals.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.turf-professionals.com",
    title: "Turf Professionals | Premium Artificial Turf Installation",
    description:
      "Transform your outdoor space with premium artificial turf installation. Professional synthetic grass solutions for residential, commercial, and recreational properties.",
    siteName: "Turf Professionals",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Turf Professionals - Premium Artificial Turf Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turf Professionals | Premium Artificial Turf Installation",
    description:
      "Transform your outdoor space with premium artificial turf installation. Professional synthetic grass solutions for residential, commercial, and recreational properties.",
    images: ["/opengraph-image.png"],
  },
  robots: {
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <StructuredData data={generateOrganizationSchema()} />
      </head>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
