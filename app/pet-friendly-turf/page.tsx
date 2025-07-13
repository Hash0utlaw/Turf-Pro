import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { PawPrint, ShieldCheck, Sparkles, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pet-Friendly Artificial Turf | Safe & Durable Lawns for Dogs | Turf Pros",
    description:
      "Keep your pets happy and your yard clean with Turf Pros' pet-friendly artificial turf. Safe, durable, excellent drainage, and easy to clean. Ideal for dogs and cats.",
    keywords: [
      "pet-friendly turf",
      "artificial grass for dogs",
      "synthetic turf for pets",
      "dog run turf",
      "pet safe artificial grass",
      "turf for pets",
      "easy clean turf for dogs",
      "durable pet turf",
    ],
    openGraph: {
      title: "Pet-Friendly Artificial Turf Solutions | Turf Pros",
      description: "Safe, durable, and easy-to-clean artificial grass for your beloved pets.",
      images: [
        {
          url: "/hero-pet-turf.png",
          width: 1200,
          height: 630,
          alt: "Happy Dog on Pet-Friendly Turf",
        },
      ],
    },
  }
}

const petTurfData: ServicePageTemplateProps = {
  heroImageSrc: "/hero-pet-turf.png",
  heroImageAlt: "Happy dog playing on a clean and safe artificial turf lawn",
  heroTitle: "The Perfect Lawn for Your Furry Friends",
  heroSubtitle: "Discover durable, safe, and easy-to-clean pet-friendly turf solutions.",
  heroCtaText: "Get a Pet-Friendly Turf Quote",
  benefitsTitle: "Why Pet Owners Love Our Turf",
  benefitsSubtitle: "A clean, green, and safe space for your pets to play, year-round.",
  benefits: [
    "Safe and non-toxic for all pets",
    "Excellent drainage for easy cleanup",
    "Durable and resistant to digging and rough play",
    "No more muddy paws or patchy lawns",
    "Reduces pests like fleas and ticks",
    "Hypoallergenic and comfortable for pets",
  ],
  featuresImageSrc: "/pet-turf-drainage.png",
  featuresImageAlt: "Cross-section showing layers of pet-friendly turf and infill",
  featuresTitle: "Designed for Pets, Built for Durability",
  featuresText:
    "Our pet turf systems are engineered to withstand the toughest play while ensuring maximum hygiene and comfort for your beloved animals.",
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
  gallerySubtitle: "See our pet-friendly turf in action.",
  galleryImages: [
    {
      src: "/portfolio/backyard-pet-friendly-general-turf.jpg",
      alt: "A happy dog enjoying a spacious and clean pet-friendly lawn.",
    },
    {
      src: "/portfolio/deck-general-turf-pet-friendly.jpg",
      alt: "A clean and safe turf area for pets next to a raised patio.",
    },
    {
      src: "/portfolio/backyard-pool-pet-friendly-general-turf.jpg",
      alt: "Lush, pet-friendly turf surrounding a beautiful poolside.",
    },
    {
      src: "/portfolio/pet-friendly-putting-green-backyard-general-turf.jpg",
      alt: "A versatile backyard that is safe for pets and includes a putting green.",
    },
  ],
  finalCtaTitle: "Give Your Pet the Best with Turf Pros",
  finalCtaSubtitle: "Contact us for a free consultation on the ideal turf solution for your pets and your yard.",
  finalCtaButtonText: "Get My Pet Turf Quote",
}

export default function PetFriendlyTurfPage() {
  return <ServicePageTemplate {...petTurfData} />
}
