import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { ClubIcon as GolfIcon } from "lucide-react"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Backyard Putting Greens | Professional Installation | Turf Pros",
    description:
      "Transform your backyard with a professional-grade putting green from Turf Pros. Custom designs, true ball roll, and low maintenance. Get your free quote today!",
    keywords: [
      "backyard putting greens",
      "custom putting greens",
      "artificial turf putting green",
      "synthetic putting green",
      "golf practice green",
      "home putting green",
      "turf pros putting greens",
      "residential putting greens",
    ],
    openGraph: {
      title: "Custom Backyard Putting Greens | Turf Pros",
      description: "Design your dream backyard putting green with our expert installation services.",
      images: [
        {
          url: "/hero-putting-green.png",
          width: 1200,
          height: 630,
          alt: "Luxury Backyard Putting Green",
        },
      ],
    },
  }
}

const puttingGreensData: ServicePageTemplateProps = {
  heroImageSrc: "/hero-putting-green.png",
  heroImageAlt: "Expansive backyard putting green under a clear sky",
  heroTitle: "Professional Backyard Putting Greens",
  heroSubtitle: "Perfect your putt with a custom-designed, tour-quality green in your own backyard.",
  heroCtaText: "Get a Free Putting Green Quote",
  benefitsTitle: "Why Choose a Turf Pros Putting Green?",
  benefitsSubtitle: "Experience the ultimate convenience and performance with our expertly crafted putting greens.",
  benefits: [
    "Practice your short game anytime",
    "True ball roll for realistic play",
    "Low maintenance, no watering or mowing",
    "Custom designs to fit any space",
    "Adds value and beauty to your property",
    "Durable and weather-resistant materials",
  ],
  featuresImageSrc: "/putting-green-installation.png",
  featuresImageAlt: "Detailed view of putting green turf and installation",
  featuresTitle: "Unmatched Quality and Realism",
  featuresText:
    "Our putting greens are designed to replicate the performance of a professional golf course. We use premium, US-made turf products that offer consistent ball roll, realistic speeds, and exceptional durability.",
  featuresList: [
    { icon: <GolfIcon className="h-5 w-5 text-turf-green mr-3" />, text: "Customizable speeds (stimp rating)" },
    {
      icon: <GolfIcon className="h-5 w-5 text-turf-green mr-3" />,
      text: "Options for undulations, breaks, and multiple holes",
    },
    {
      icon: <GolfIcon className="h-5 w-5 text-turf-green mr-3" />,
      text: "Expert base preparation for optimal drainage and stability",
    },
    {
      icon: <GolfIcon className="h-5 w-5 text-turf-green mr-3" />,
      text: "Professional installation by certified experts",
    },
  ],
  galleryTitle: "Inspiring Putting Green Designs",
  gallerySubtitle: "See how we've transformed backyards into golfer's havens.",
  galleryImages: [
    { src: "/luxury-backyard-putting-green.png", alt: "Luxury backyard putting green with multiple holes" },
    { src: "/putting-green-closeup.png", alt: "Close-up of putting green turf quality" },
    { src: "/small-backyard-putting-green.png", alt: "Compact putting green in a small backyard" },
    { src: "/putting-green-sand-trap.png", alt: "Putting green with custom features like a sand trap" },
  ],
  testimonialsTitle: "Hear From Our Golfing Clients",
  testimonials: [
    {
      name: "Mike R.",
      text: "My custom putting green from Turf Pros is a game-changer! The quality is exceptional, and I've already seen improvement in my short game. The installation team was fantastic.",
      stars: 5,
    },
    {
      name: "Linda S.",
      text: "We love our new backyard putting green. It's perfect for family fun and serious practice. Turf Pros delivered exactly what they promised.",
      stars: 5,
    },
  ],
  finalCtaTitle: "Ready to Build Your Dream Putting Green?",
  finalCtaSubtitle:
    "Our experts are ready to help you design and install the perfect putting green for your space and skill level.",
  finalCtaButtonText: "Discuss Your Putting Green Project",
}

export default function PuttingGreensPage() {
  return <ServicePageTemplate {...puttingGreensData} />
}
