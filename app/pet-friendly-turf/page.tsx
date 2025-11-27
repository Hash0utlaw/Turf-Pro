import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { PawPrint, ShieldCheck, Sparkles, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pet-Friendly Artificial Turf Charlotte NC | Dog Turf Installation | Turf Pros",
    description:
      "Safe, durable pet turf installation in Charlotte NC. Easy-clean dog runs & pet-friendly artificial grass with excellent drainage. Perfect for Charlotte's climate. No mud, no mess!",
    keywords: [
      "pet-friendly turf Charlotte NC",
      "dog turf installation Charlotte",
      "artificial grass for dogs Charlotte",
      "pet safe synthetic grass Charlotte NC",
      "dog run turf Charlotte",
      "pet turf installation Matthews",
      "dog friendly grass Huntersville",
      "pet artificial turf Lake Norman",
      "easy clean dog turf Charlotte",
      "synthetic pet grass Charlotte NC",
    ],
    openGraph: {
      title: "Pet-Friendly Artificial Turf Charlotte NC | Dog Turf Installation | Turf Pros",
      description:
        "Safe, durable pet turf installation in Charlotte NC. Easy-clean dog runs & pet-friendly artificial grass with excellent drainage. Perfect for Charlotte's climate.",
      images: [
        {
          url: "/portfolio/pet-friendly-lawn-turf-hero.jpg",
          width: 1200,
          height: 630,
          alt: "Pet-friendly artificial turf lawn in Charlotte NC backyard",
        },
      ],
    },
  }
}

const petTurfData: ServicePageTemplateProps = {
  heroImageSrc: "/portfolio/pet-friendly-lawn-turf-hero.jpg",
  heroImageAlt:
    "Golden retriever relaxing on pet-friendly artificial turf lawn in Charlotte NC backyard - safe synthetic grass for dogs",
  heroTitle: "The Perfect Lawn for Your Furry Friends",
  heroSubtitle: "Discover durable, safe, and easy-to-clean pet-friendly turf solutions for Charlotte NC homes.",
  heroCtaText: "Get a Pet-Friendly Turf Quote",
  benefitsTitle: "Why Pet Owners Love Our Turf",
  benefitsSubtitle:
    "A clean, green, and safe space for your pets to play year-round in Charlotte, Matthews, and Lake Norman.",
  benefits: [
    "Safe and non-toxic for all pets",
    "Excellent drainage for easy cleanup",
    "Durable and resistant to digging and rough play",
    "No more muddy paws or patchy lawns",
    "Reduces pests like fleas and ticks",
    "Hypoallergenic and comfortable for pets",
  ],
  featuresImageSrc: "/pet-turf-drainage.png",
  featuresImageAlt:
    "Cross-section showing drainage layers of pet-friendly artificial turf system for Charlotte NC dogs",
  featuresTitle: "Designed for Pets, Built for Durability",
  featuresText:
    "Our pet turf systems are engineered to withstand the toughest play while ensuring maximum hygiene and comfort for your beloved animals in Charlotte's climate.",
  featuresList: [
    {
      icon: <PawPrint className="h-5 w-5 text-turf-green mr-3" />,
      text: "Proprietary drainage systems for fast liquid runoff",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-turf-green mr-3" />,
      text: "Antimicrobial infill options to reduce odors and bacteria",
    },
    { icon: <Sparkles className="h-5 w-5 text-turf-green mr-3" />, text: "Easy to clean and sanitize" },
    { icon: <CheckCircle className="h-5 w-5 text-turf-green mr-3" />, text: "Resistant to staining and discoloration" },
  ],
  galleryTitle: "Happy Pets, Happy Owners",
  gallerySubtitle: "See our pet-friendly turf installations in Charlotte, Ballantyne, and surrounding NC areas.",
  galleryImages: [
    {
      src: "/portfolio/backyard-pet-friendly-general-turf.jpg",
      alt: "Happy dog enjoying spacious and clean pet-friendly artificial turf lawn in Charlotte NC",
    },
    {
      src: "/portfolio/deck-general-turf-pet-friendly.jpg",
      alt: "Clean and safe dog turf area next to raised patio - Charlotte NC installation",
    },
    {
      src: "/portfolio/backyard-pool-pet-friendly-general-turf.jpg",
      alt: "Pet-friendly synthetic grass surrounding beautiful poolside in Charlotte NC backyard",
    },
    {
      src: "/portfolio/pet-friendly-putting-green-backyard-general-turf.jpg",
      alt: "Versatile Charlotte backyard with pet-safe artificial turf and putting green installation",
    },
  ],
  finalCtaTitle: "Give Your Pet the Best with Turf Pros",
  finalCtaSubtitle:
    "Contact us for a free consultation on the ideal pet-friendly turf solution for your Charlotte NC yard.",
  finalCtaButtonText: "Get My Pet Turf Quote",
}

export default function PetFriendlyTurfPage() {
  return (
    <>
      <div className="bg-gray-50 py-4 px-4">
        <div className="container mx-auto max-w-4xl text-center text-sm text-gray-600">
          Need other services? View our{" "}
          <Link href="/residential-lawn-turf" className="text-turf-green hover:underline font-medium">
            home lawn replacement Charlotte
          </Link>
          ,{" "}
          <Link href="/putting-greens" className="text-turf-green hover:underline font-medium">
            custom putting green installation Charlotte
          </Link>
          , or{" "}
          <Link href="/charlotte" className="text-turf-green hover:underline font-medium">
            all Charlotte turf services
          </Link>
          .
        </div>
      </div>
      <ServicePageTemplate {...petTurfData} />
    </>
  )
}
