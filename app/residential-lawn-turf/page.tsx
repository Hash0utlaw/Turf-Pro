import type { Metadata } from "next"
import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { Leaf, Droplets, Sun } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Residential Artificial Turf Charlotte NC | Home Lawn Installation | Turf Pros",
  description:
    "Transform your Charlotte home with beautiful, maintenance-free artificial turf. Perfect for backyards, front yards & pool areas. Serving Ballantyne, Myers Park, Lake Norman & all Charlotte suburbs. Free estimate!",
  keywords: [
    "residential artificial turf Charlotte NC",
    "backyard turf installation Charlotte",
    "front yard artificial grass Charlotte",
    "home lawn replacement Charlotte",
    "low maintenance yard Charlotte NC",
    "pool area turf Charlotte",
    "artificial lawn Lake Norman",
    "backyard artificial grass Myers Park",
    "synthetic grass residential Charlotte",
    "turf installation Ballantyne",
  ],
  openGraph: {
    title: "Residential Artificial Turf Charlotte NC | Home Lawn Installation | Turf Pros",
    description:
      "Transform your Charlotte home with beautiful, maintenance-free artificial turf. Perfect for backyards, front yards & pool areas. Serving Ballantyne, Myers Park, Lake Norman & all Charlotte suburbs.",
    images: [{ url: "/portfolio/backyard-turf.jpg" }],
  },
}

const pageContent: ServicePageTemplateProps = {
  heroImageSrc: "/portfolio/backyard-turf.jpg",
  heroImageAlt:
    "Residential backyard artificial turf installation in Charlotte NC - beautiful, lush green synthetic grass lawn",
  heroTitle: "The Perfect Residential Lawn, Made Easy",
  heroSubtitle:
    "Enjoy a lush, green, and beautiful lawn all year round without the constant watering, mowing, and maintenance. The perfect upgrade for your Charlotte home.",
  heroCtaText: "Get a Free Residential Quote",

  benefitsTitle: "Why Homeowners Love Our Turf",
  benefitsSubtitle:
    "Our residential turf installation in Charlotte provides homeowners with stunning, low-maintenance artificial grass solutions designed to enhance your lifestyle and boost your home's curb appeal.",
  benefits: [
    "Eliminate mowing, watering, and fertilizing forever.",
    "Save significantly on your monthly water bills.",
    "Provides a safe, clean, and allergen-free area for kids and pets.",
    "Stays green and pristine through every season, sun or shade.",
    "Drains quickly after rain, eliminating mud and puddles.",
    "Increases your property value with a stunning, low-maintenance landscape.",
  ],

  featuresImageSrc: "/family-enjoying-turf.png",
  featuresImageAlt: "Family playing on durable and soft artificial grass backyard in Charlotte NC",
  featuresTitle: "Designed for Family, Built to Last",
  featuresText:
    "We use only the highest quality, lead-free materials that are soft to the touch but incredibly durable. Our turf stands up to heavy foot traffic, active kids, and playful pets, ensuring your investment looks great for years to come. Perfect for Charlotte's climate and weather conditions.",
  featuresList: [
    { icon: <Leaf className="h-5 w-5 mr-3 text-turf-green" />, text: "100% Non-Toxic & Lead-Free Materials" },
    { icon: <Droplets className="h-5 w-5 mr-3 text-turf-green" />, text: "Advanced Drainage for Quick Drying" },
    { icon: <Sun className="h-5 w-5 mr-3 text-turf-green" />, text: "UV-Protected to Prevent Fading" },
  ],

  galleryTitle: "Residential Turf Inspiration",
  gallerySubtitle:
    "See how we've transformed backyards, front yards, and patios for homeowners in Charlotte, Matthews, Huntersville, and Lake Norman.",
  galleryImages: [
    {
      src: "/portfolio/privacy-fence-general-turf-backyard.jpg",
      alt: "Clean, terraced backyard with privacy fence and artificial turf installation in Charlotte NC",
    },
    {
      src: "/portfolio/landscape-backyard-pet-friendly-turf.jpg",
      alt: "Manicured Charlotte garden with winding artificial turf path and landscaping",
    },
    {
      src: "/portfolio/pool-turf.jpg",
      alt: "Modern poolside patio with checkerboard pattern of synthetic turf and pavers - Charlotte NC project",
    },
    {
      src: "/portfolio/backyard-turf.jpg",
      alt: "Expansive artificial turf lawn integrated beautifully into wooded Charlotte property",
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
    "Let's talk about your project. Our team is ready to provide a no-obligation quote and answer all your questions about residential turf installation in Charlotte NC.",
  finalCtaButtonText: "Start Your Transformation",
}

export default function ResidentialLawnTurfPage() {
  return (
    <>
      <div className="bg-gray-50 py-4 px-4">
        <div className="container mx-auto max-w-4xl text-center text-sm text-gray-600">
          Looking for other services? Check out our{" "}
          <Link href="/commercial-turf" className="text-turf-green hover:underline font-medium">
            Charlotte commercial turf services
          </Link>
          ,{" "}
          <Link href="/putting-greens" className="text-turf-green hover:underline font-medium">
            Lake Norman putting green installation
          </Link>
          , or{" "}
          <Link href="/pet-friendly-turf" className="text-turf-green hover:underline font-medium">
            pet-friendly turf for Charlotte homes
          </Link>
          .
        </div>
      </div>
      <ServicePageTemplate {...pageContent} />
    </>
  )
}
