import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"

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
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
