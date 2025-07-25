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
    images: [{ url: "/portfolio/backyard-turf.jpg" }],
  },
}

const pageContent: ServicePageTemplateProps = {
  heroImageSrc: "/portfolio/backyard-turf.jpg",
  heroImageAlt: "A beautiful residential backyard with lush, green artificial turf.",
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
    {
      src: "/portfolio/privacy-fence-general-turf-backyard.jpg",
      alt: "A clean, terraced backyard with a privacy fence and lush artificial turf.",
    },
    {
      src: "/portfolio/landscape-backyard-pet-friendly-turf.jpg",
      alt: "A manicured garden with a winding artificial turf path.",
    },
    { src: "/portfolio/pool-turf.jpg", alt: "A modern poolside patio with a checkerboard pattern of turf and pavers." },
    {
      src: "/portfolio/backyard-turf.jpg",
      alt: "An expansive turf lawn integrated beautifully into a wooded property.",
    },
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
