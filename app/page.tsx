import HeroSection from "@/components/sections/hero-section"
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
