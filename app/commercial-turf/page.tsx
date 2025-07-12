import type { Metadata } from "next"
import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { DollarSign, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Turf Solutions | Low Maintenance, High Impact | Turf Pros",
  description:
    "Elevate your business's appearance with our durable, cost-effective commercial artificial turf. Perfect for storefronts, office parks, and event spaces. Request a consultation.",
  openGraph: {
    title: "Commercial Turf Solutions | Low Maintenance, High Impact | Turf Pros",
    description: "Elevate your business's appearance with our durable, cost-effective commercial artificial turf.",
    images: [{ url: "/hero-commercial-turf.png" }],
  },
}

const pageContent: ServicePageTemplateProps = {
  heroImageSrc: "/hero-commercial-turf.png",
  heroImageAlt: "A modern office building with a clean, green artificial turf entrance.",
  heroTitle: "Professional Turf for Your Business",
  heroSubtitle:
    "Make a lasting first impression with pristine, low-maintenance commercial turf solutions. Enhance your property's appeal while reducing operational costs.",
  heroCtaText: "Request a Commercial Consultation",

  benefitsTitle: "The Smart Investment for Your Property",
  benefitsSubtitle:
    "Our commercial-grade turf is engineered to withstand heavy traffic and look great year-round with minimal upkeep.",
  benefits: [
    "Drastically reduce water and landscaping maintenance costs.",
    "Maintain a professional, vibrant green appearance in all seasons.",
    "Durable enough for high-traffic areas, events, and common spaces.",
    "Eco-friendly solution that conserves water and eliminates pesticides.",
    "Create inviting green spaces for employees and customers.",
    "Contributes to LEED credits and sustainability goals.",
  ],

  featuresImageSrc: "/commercial-courtyard-turf.png",
  featuresImageAlt: "A corporate courtyard with artificial turf for employees to relax.",
  featuresTitle: "Engineered for Performance & Durability",
  featuresText:
    "We provide commercial turf that not only looks professional but is built to perform. Our products are perfect for office parks, retail storefronts, apartment complexes, and public event spaces, offering a reliable and attractive surface.",
  featuresList: [
    { icon: <DollarSign className="h-5 w-5 mr-3 text-turf-green" />, text: "Significant Return on Investment" },
    { icon: <Shield className="h-5 w-5 mr-3 text-turf-green" />, text: "Extreme Durability & Wear Resistance" },
    { icon: <Zap className="h-5 w-5 mr-3 text-turf-green" />, text: "Fast, Professional Installation" },
  ],

  galleryTitle: "Our Commercial Portfolio",
  gallerySubtitle: "See how we've helped businesses enhance their properties with premium artificial turf.",
  galleryImages: [
    { src: "/portfolio/rooftop-general-turf-low-maintenance.jpg", alt: "Artificial turf on a trendy rooftop bar" },
    {
      src: "/portfolio/school-commerical-field-turf.jpg",
      alt: "Clean artificial grass enhancing a commercial storefront",
    },
    { src: "/portfolio/school-playground-field-turf.jpg", alt: "A common area in an office park with artificial turf" },
    { src: "/portfolio/driveway-concrete-general-turf.jpg", alt: "Durable turf for a multi-use outdoor event space" },
  ],

  finalCtaTitle: "Elevate Your Commercial Space",
  finalCtaSubtitle:
    "Contact us today to discuss your project requirements and receive a detailed proposal from our commercial turf specialists.",
  finalCtaButtonText: "Get a Professional Proposal",
}

export default function CommercialTurfPage() {
  return <ServicePageTemplate {...pageContent} />
}
