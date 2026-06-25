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
    default: "Artificial Turf Installation Charlotte NC | Atlantic Turf Specialists",
    template: "%s | Atlantic Turf Specialists",
  },
  description:
    "Charlotte's premier artificial turf specialists. Professional synthetic grass for residential lawns, commercial properties & putting greens. Serving Charlotte, Matthews, Huntersville, Concord, Lake Norman & surrounding NC areas. Free quotes! Call (704) 995-6265",
  keywords: [
    "artificial turf installation Charlotte NC",
    "synthetic grass Charlotte",
    "Atlantic Turf Specialists Charlotte",
    "artificial grass company Charlotte",
    "residential turf Charlotte",
    "commercial turf Charlotte NC",
    "backyard putting green Charlotte",
    "pet-friendly turf Charlotte",
    "artificial lawn Matthews NC",
    "turf installation Huntersville",
    "synthetic grass Concord NC",
    "Lake Norman artificial turf",
    "turf company near me Charlotte",
    "artificial grass installation Charlotte",
    "turf specialist Charlotte NC",
    "lawn replacement Charlotte NC",
    "backyard turf Charlotte",
    "artificial grass Matthews",
    "synthetic turf Huntersville NC",
    "turf installation near me",
  ],
  authors: [{ name: "Atlantic Turf Specialists" }],
  creator: "Atlantic Turf Specialists",
  publisher: "Atlantic Turf Specialists",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.atlanticturfspecialists.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.atlanticturfspecialists.com",
    title: "Artificial Turf Installation Charlotte NC | Atlantic Turf Specialists",
    description:
      "Charlotte's premier artificial turf specialists. Professional synthetic grass for residential lawns, commercial properties & putting greens. Serving Charlotte, Matthews, Huntersville, Concord, Lake Norman & surrounding NC areas.",
    siteName: "Atlantic Turf Specialists",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Atlantic Turf Specialists - Charlotte NC Artificial Turf Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Turf Installation Charlotte NC | Atlantic Turf Specialists",
    description:
      "Charlotte's premier artificial turf specialists. Professional synthetic grass for residential lawns, commercial properties & putting greens. Serving Charlotte & surrounding NC areas.",
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
  // Add your Google Search Console verification code here when available
  // verification: { google: "your-actual-code" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
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
