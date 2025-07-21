import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import CookieConsentBanner from "@/components/cookie-consent-banner"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Turf Professionals | Premium Artificial Turf Solutions",
  description:
    "Expert installation of high-quality artificial turf for residential and commercial properties. Get a free quote for your lawn, putting green, or pet-friendly space.",
  openGraph: {
    title: "Turf Professionals | Premium Artificial Turf Solutions",
    description: "Expert installation of high-quality artificial turf for residential and commercial properties.",
    url: "https://www.turf-professionals.com",
    siteName: "Turf Professionals",
    images: [
      {
        url: "/opengraph-image.png", // This points to the new static image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turf Professionals | Premium Artificial Turf Solutions",
    description: "Expert installation of high-quality artificial turf for residential and commercial properties.",
    images: ["/opengraph-image.png"], // This also points to the new image
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <Toaster />
            <CookieConsentBanner />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
