import type { Metadata } from "next"
import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { DollarSign, Shield, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Commercial Artificial Turf Charlotte NC | Business Turf Installation | Turf Pros",
  description:
    "Professional commercial turf installation in Charlotte NC. Perfect for restaurants, breweries, office parks, apartments & HOAs. Durable, low-maintenance synthetic grass. Serving Uptown, NoDa, South End & beyond.",
  keywords: [
    "commercial artificial turf Charlotte NC",
    "business turf installation Charlotte",
    "restaurant patio turf Charlotte",
    "office park landscaping Charlotte",
    "apartment complex turf Charlotte",
    "HOA common area turf Charlotte NC",
    "commercial synthetic grass Uptown Charlotte",
    "business landscaping NoDa",
    "brewery patio turf Charlotte",
    "commercial property turf South End",
  ],
  openGraph: {
    title: "Commercial Artificial Turf Charlotte NC | Business Turf Installation | Turf Pros",
    description:
      "Professional commercial turf installation in Charlotte NC. Perfect for restaurants, breweries, office parks, apartments & HOAs. Durable, low-maintenance synthetic grass.",
    images: [{ url: "/portfolio/rooftop-general-turf-low-maintenance.jpg" }],
  },
}

const pageContent: ServicePageTemplateProps = {
  heroImageSrc: "/portfolio/rooftop-general-turf-low-maintenance.jpg",
  heroImageAlt: "Commercial rooftop patio with low-maintenance artificial turf in Charlotte NC - Uptown city view",
  heroTitle: "Professional Turf for Your Business",
  heroSubtitle:
    "Make a lasting first impression with pristine, low-maintenance commercial turf solutions in Charlotte NC. Enhance your property's appeal while reducing operational costs.",
  heroCtaText: "Request a Commercial Consultation",

  benefitsTitle: "The Smart Investment for Your Property",
  benefitsSubtitle:
    "Our commercial-grade turf installation in Charlotte is engineered to withstand heavy traffic and look great year-round with minimal upkeep. Perfect for restaurants, breweries, office parks, and HOAs throughout Uptown, NoDa, and South End.",
  benefits: [
    "Drastically reduce water and landscaping maintenance costs.",
    "Maintain a professional, vibrant green appearance in all seasons.",
    "Durable enough for high-traffic areas, events, and common spaces.",
    "Eco-friendly solution that conserves water and eliminates pesticides.",
    "Create inviting green spaces for employees and customers.",
    "Contributes to LEED credits and sustainability goals.",
  ],

  featuresImageSrc: "/commercial-courtyard-turf.png",
  featuresImageAlt: "Corporate courtyard with artificial turf for employees in Charlotte NC business district",
  featuresTitle: "Engineered for Performance & Durability",
  featuresText:
    "We provide commercial turf that not only looks professional but is built to perform. Our products are perfect for office parks, retail storefronts, apartment complexes, and public event spaces in Charlotte, offering a reliable and attractive surface.",
  featuresList: [
    { icon: <DollarSign className="h-5 w-5 mr-3 text-turf-green" />, text: "Significant Return on Investment" },
    { icon: <Shield className="h-5 w-5 mr-3 text-turf-green" />, text: "Extreme Durability & Wear Resistance" },
    { icon: <Zap className="h-5 w-5 mr-3 text-turf-green" />, text: "Fast, Professional Installation" },
  ],

  galleryTitle: "Our Commercial Portfolio",
  gallerySubtitle:
    "See how we've helped businesses in Charlotte, NoDa, South End, and Uptown enhance their properties with premium artificial turf.",
  galleryImages: [
    {
      src: "/portfolio/rooftop-general-turf-low-maintenance.jpg",
      alt: "Artificial turf on trendy Charlotte rooftop bar patio",
    },
    {
      src: "/portfolio/school-commerical-field-turf.jpg",
      alt: "Multi-purpose school courtyard with commercial turf and basketball court - Charlotte NC",
    },
    {
      src: "/portfolio/school-playground-field-turf.jpg",
      alt: "Safe and durable school playground with artificial turf in Charlotte area",
    },
    {
      src: "/portfolio/driveway-concrete-general-turf.jpg",
      alt: "Modern commercial entrance combining synthetic turf with concrete pavers - Charlotte business property",
    },
  ],

  finalCtaTitle: "Elevate Your Commercial Space",
  finalCtaSubtitle:
    "Contact us today to discuss your project requirements and receive a detailed proposal from our Charlotte commercial turf specialists.",
  finalCtaButtonText: "Get a Professional Proposal",
}

export default function CommercialTurfPage() {
  return (
    <>
      <div className="bg-gray-50 py-4 px-4">
        <div className="container mx-auto max-w-4xl text-center text-sm text-gray-600">
          Also offering{" "}
          <Link href="/residential-lawn-turf" className="text-turf-green hover:underline font-medium">
            residential turf installation in Charlotte
          </Link>
          ,{" "}
          <Link href="/recreational-turf" className="text-turf-green hover:underline font-medium">
            recreational turf for Charlotte schools and daycares
          </Link>
          , and{" "}
          <Link href="/charlotte" className="text-turf-green hover:underline font-medium">
            artificial turf services throughout Charlotte NC
          </Link>
          .
        </div>
      </div>
      <ServicePageTemplate {...pageContent} />
    </>
  )
}
