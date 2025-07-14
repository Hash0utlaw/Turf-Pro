import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Turf Professionals | Premium Artificial Turf Solutions",
    template: "%s | Turf Professionals",
  },
  description:
    "Your trusted partner for premium artificial turf solutions, from residential lawns and putting greens to commercial spaces and pet-friendly areas.",
  keywords: [
    "artificial turf",
    "synthetic grass",
    "putting greens",
    "pet-friendly turf",
    "commercial turf",
    "residential turf",
    "turf installation",
  ],
  authors: [{ name: "Turf Professionals" }],
  creator: "Turf Professionals",
  publisher: "Turf Professionals",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Turf Professionals",
            image: "https://www.turf-professionals.com/turf-pros-logo.png",
            "@id": "https://www.turf-professionals.com/",
            url: "https://www.turf-professionals.com/",
            telephone: "(704) 995-6265",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Charlotte",
              addressRegion: "NC",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 35.2270869,
              longitude: -81.0348424,
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 35.2270869,
                longitude: -81.0348424,
              },
              geoRadius: "96561", // 60-mile radius
            },
          })}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Suspense fallback={null}>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-grow">{children}</main>
              <SiteFooter />
            </div>
            <Toaster />
            <CookieConsentBanner />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
