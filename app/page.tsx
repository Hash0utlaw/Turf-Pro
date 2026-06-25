import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"

export const metadata: Metadata = {
  title: "Artificial Turf Installation Charlotte NC | Atlantic Turf Specialists",
  description:
    "Charlotte's #1 artificial turf company. Professional synthetic grass installation for residential lawns, backyard putting greens, pet-friendly turf & commercial properties. Serving Charlotte, Huntersville, Matthews, Concord & Lake Norman. Free quotes! Call (704) 995-6265",
  keywords: [
    "artificial turf installation Charlotte NC",
    "synthetic grass Charlotte NC",
    "artificial turf company Charlotte",
    "backyard putting green Charlotte NC",
    "pet friendly turf Charlotte",
    "residential artificial turf Charlotte",
    "commercial turf installation Charlotte",
    "lawn replacement Charlotte NC",
    "artificial grass Huntersville NC",
    "synthetic turf Matthews NC",
    "turf installation Lake Norman",
    "artificial grass Concord NC",
    "turf company near me Charlotte",
    "artificial turf specialists Charlotte",
    "best turf company Charlotte NC",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialists.com",
  },
}

import ServicesSection from "@/components/sections/services-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import AboutSection from "@/components/sections/about-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FaqSection from "@/components/sections/faq-section"
import CtaBanner from "@/components/sections/cta-banner"
import { Toaster } from "@/components/ui/toaster" // Needed for ContactDialog notifications

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
      <Toaster />
    </>
  )
}
