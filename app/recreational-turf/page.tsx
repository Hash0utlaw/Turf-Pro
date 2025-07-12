import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { Zap, Users, Shield, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Recreational & Sports Turf | Playgrounds, Game Courts | Turf Pros",
    description:
      "Install high-performance recreational turf for sports fields, playgrounds, and active play areas with Turf Pros. Durable, safe, and low-maintenance solutions.",
    keywords: [
      "recreational turf",
      "sports turf",
      "playground turf",
      "artificial grass for sports",
      "synthetic turf for play areas",
      "multi-sport turf",
      "game court turf",
      "safe play surfaces",
    ],
    openGraph: {
      title: "Recreational & Sports Turf Applications | Turf Pros",
      description: "Durable and safe artificial turf for all your recreational and sports needs.",
      images: [
        {
          url: "/hero-recreational-turf.png",
          width: 1200,
          height: 630,
          alt: "Recreational Sports Turf Field",
        },
      ],
    },
  }
}

const recreationalTurfData: ServicePageTemplateProps = {
  heroImageSrc: "/hero-recreational-turf.png",
  heroImageAlt: "Kids playing various sports on a vibrant artificial turf field",
  heroTitle: "Active Play, All Year Round",
  heroSubtitle: "High-performance recreational turf for sports, playgrounds, and active lifestyles.",
  heroCtaText: "Get a Recreational Turf Quote",
  benefitsTitle: "The Ultimate Surface for Play and Sports",
  benefitsSubtitle: "Our recreational turf is designed for safety, durability, and peak performance.",
  benefits: [
    "Versatile for various sports and activities",
    "Consistent playing surface year-round",
    "Reduced risk of injuries compared to hard surfaces",
    "Low maintenance, saving time and resources",
    "Durable enough for high-traffic areas",
    "Enhances the aesthetic of play areas",
  ],
  featuresImageSrc: "/portfolio/playground-putting-green-pet-friendly.jpg",
  featuresImageAlt: "Illustration of recreational turf with shock pad system for safety",
  featuresTitle: "Engineered for Fun and Safety",
  featuresText:
    "Whether it's for a backyard sports court, a community playground, or a commercial facility, our recreational turf solutions meet the highest standards.",
  featuresList: [
    {
      icon: <Zap className="h-5 w-5 text-turf-green mr-3" />,
      text: "Variety of pile heights and densities for different activities",
    },
    {
      icon: <Shield className="h-5 w-5 text-turf-green mr-3" />,
      text: "Optional shock-absorbent padding for enhanced safety",
    },
    {
      icon: <Users className="h-5 w-5 text-turf-green mr-3" />,
      text: "Customizable with game lines for various sports",
    },
    { icon: <CheckCircle className="h-5 w-5 text-turf-green mr-3" />, text: "UV stabilized to resist fading and wear" },
  ],
  galleryTitle: "Versatile Recreational Spaces",
  gallerySubtitle: "Explore the possibilities with our recreational turf installations.",
  galleryImages: [
    {
      src: "/recreational-sports-turf.png",
      alt: "Backyard mini soccer field with artificial turf",
    },
    {
      src: "/portfolio/backyard-playground-general-turf.jpg",
      alt: "Playground with safe and colorful artificial grass",
    },
    {
      src: "/portfolio/school-commerical-field-turf.jpg",
      alt: "Multi-sport game court with lines on artificial turf",
    },
    {
      src: "/portfolio/rooftop-general-turf-low-maintenance.jpg",
      alt: "Rooftop recreational area with artificial turf",
    },
  ],
  finalCtaTitle: "Ready to Create Your Ultimate Play Area?",
  finalCtaSubtitle:
    "Let's discuss your recreational turf needs and design a space that's perfect for fun, sports, and everything in between.",
  finalCtaButtonText: "Plan Your Recreational Space",
}

export default function RecreationalTurfPage() {
  return <ServicePageTemplate {...recreationalTurfData} />
}
