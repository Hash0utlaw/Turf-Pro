import type { Metadata } from "next"
import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { Leaf, Droplets, Sun } from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Lawn Turf | Perfect Lawns, Zero Hassle | Turf Pros",
  description:
    "Discover beautiful, low-maintenance residential artificial turf solutions. Save water, time, and money while enjoying a perfect green lawn year-round. Get your free quote today!",
  openGraph: {
    title: "Residential Lawn Turf | Perfect Lawns, Zero Hassle | Turf Pros",
    description:
      "Discover beautiful, low-maintenance residential artificial turf solutions. Save water, time, and money while enjoying a perfect green lawn year-round.",
    images: [{ url: "/hero-residential-lawn.png" }],
  },
}

const pageContent: ServicePageTemplateProps = {
  heroImageSrc: "/hero-residential-lawn.png",
  heroImageAlt: "A beautiful suburban home with a perfect artificial grass lawn.",
  heroTitle: "The Perfect Residential Lawn, Made Easy",
  heroSubtitle:
    "Enjoy a lush, green, and beautiful lawn all year round without the constant watering, mowing, and maintenance. The perfect upgrade for your home.",
  heroCtaText: "Get a Free Residential Quote",

  benefitsTitle: "Why Homeowners Love Our Turf",
  benefitsSubtitle:
    "Our residential turf solutions are designed to enhance your lifestyle and boost your home's curb appeal.",
  benefits: [
    "Eliminate mowing, watering, and fertilizing forever.",
    "Save significantly on your monthly water bills.",
    "Provides a safe, clean, and allergen-free area for kids and pets.",
    "Stays green and pristine through every season, sun or shade.",
    "Drains quickly after rain, eliminating mud and puddles.",
    "Increases your property value with a stunning, low-maintenance landscape.",
  ],

  featuresImageSrc: "/family-enjoying-turf.png",
  featuresImageAlt: "A family playing on their durable and soft artificial grass backyard.",
  featuresTitle: "Designed for Family, Built to Last",
  featuresText:
    "We use only the highest quality, lead-free materials that are soft to the touch but incredibly durable. Our turf stands up to heavy foot traffic, active kids, and playful pets, ensuring your investment looks great for years to come.",
  featuresList: [
    { icon: <Leaf className="h-5 w-5 mr-3 text-turf-green" />, text: "100% Non-Toxic & Lead-Free Materials" },
    { icon: <Droplets className="h-5 w-5 mr-3 text-turf-green" />, text: "Advanced Drainage for Quick Drying" },
    { icon: <Sun className="h-5 w-5 mr-3 text-turf-green" />, text: "UV-Protected to Prevent Fading" },
  ],

  galleryTitle: "Residential Turf Inspiration",
  gallerySubtitle: "See how we've transformed backyards, front yards, and patios for homeowners just like you.",
  galleryImages: [
    { src: "/residential-front-yard.png", alt: "A pristine artificial turf front yard" },
    { src: "/residential-backyard-patio.png", alt: "Artificial grass integrated with a stone patio" },
    { src: "/poolside-turf-installation.png", alt: "Lush green turf surrounding a swimming pool" },
    { src: "/playground-safe-turf.png", alt: "Safe and soft artificial turf under a children's playset" },
  ],

  testimonials: [
    {
      name: "The Miller Family",
      text: "Our backyard has been completely transformed. The kids and the dog love it, and I love not having to mow it every weekend!",
      stars: 5,
    },
    {
      name: "Jessica P.",
      text: "I was hesitant about 'fake grass' but this looks and feels so real. Our water bill has dropped dramatically. Worth every penny.",
      stars: 5,
    },
  ],
  testimonialsTitle: "What Our Clients Are Saying",

  finalCtaTitle: "Ready for Your Dream Lawn?",
  finalCtaSubtitle:
    "Let's talk about your project. Our team is ready to provide a no-obligation quote and answer all your questions.",
  finalCtaButtonText: "Start Your Transformation",
}

export default function ResidentialLawnTurfPage() {
  return <ServicePageTemplate {...pageContent} />
}
