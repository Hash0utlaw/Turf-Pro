import type { Metadata } from "next"
import ServicePageTemplate, { type ServicePageTemplateProps } from "@/components/service-page-template"
import { CheckCircle, Star, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Putting Greens | Backyard & Indoor Golf Greens | Turf Pros",
  description:
    "Install a professional-quality custom putting green in your backyard or home. Our artificial turf greens offer true ball roll and realistic performance. Get a free quote!",
  openGraph: {
    title: "Custom Putting Greens | Backyard & Indoor Golf Greens | Turf Pros",
    description: "Practice your short game with a custom-designed, professional-grade putting green from Turf Pros.",
    images: [{ url: "/portfolio/bighome-backyard-putting-green-turf.jpg" }],
  },
}

const pageContent: ServicePageTemplateProps = {
  heroImageSrc: "/portfolio/bighome-backyard-putting-green-turf.jpg",
  heroVideoSrc: "/videos/turf-pro-putting-green-residential-home.MP4",
  heroVideoPosterSrc: "/portfolio/bighome-backyard-putting-green-turf.jpg",
  heroVideoAriaLabel: "Putting green installation drone footage at a residential home",
  heroImageAlt: "A professional-grade putting green in the backyard of a large home.",
  heroTitle: "Perfect Your Putt at Home",
  heroSubtitle:
    "Bring the golf course to your backyard with a custom-designed, professional-grade putting green. Experience true ball roll and practice your short game anytime.",
  heroCtaText: "Get a Putting Green Quote",

  benefitsTitle: "The Golfer's Dream Upgrade",
  benefitsSubtitle: "Our putting greens are engineered for realistic performance and lasting beauty.",
  benefits: [
    "True Roll technology for realistic ball speed and movement.",
    "Fully customizable with custom breaks, tiers, and hole placements.",
    "Low-maintenance, requiring no watering, mowing, or fertilizing.",
    "Durable and weather-resistant for year-round practice.",
    "Add sand traps, chipping areas, and other features.",
    "A stunning landscape feature that adds value to your home.",
  ],

  featuresImageSrc: "/luxury-backyard-putting-green.png",
  featuresImageAlt: "A close-up of a golf ball rolling smoothly towards the cup on an artificial turf putting green.",
  featuresTitle: "Tour-Quality Performance",
  featuresText:
    "We use specialized turf products designed specifically for putting greens, mimicking the feel and performance of the finest country club courses. Our expert design and installation process ensures every green is a masterpiece.",
  featuresList: [
    {
      icon: <Target className="h-5 w-5 mr-3 text-turf-green" />,
      text: "Adjustable Stimp Speeds to Match Your Preference",
    },
    {
      icon: <CheckCircle className="h-5 w-5 mr-3 text-turf-green" />,
      text: "Expert Installation for Flawless Playability",
    },
    { icon: <Star className="h-5 w-5 mr-3 text-turf-green" />, text: "Premium, High-Performance Turf" },
  ],

  galleryTitle: "Our Putting Green Portfolio",
  gallerySubtitle: "Explore some of the custom putting greens we've designed and installed for our clients.",
  galleryImages: [
    {
      src: "/portfolio/bighome-backyard-putting-green-turf.jpg",
      alt: "A large, multi-hole putting green in a luxury backyard",
    },
    {
      src: "/portfolio/putting-green-hardscape-backyard.jpg",
      alt: "A putting green integrated with beautiful hardscaping",
    },
    { src: "/portfolio/putting-green-night-lights.jpg", alt: "A putting green illuminated for nighttime practice" },
    {
      src: "/portfolio/wooded-backyard-putting-green-turf.jpg",
      alt: "A challenging putting green set in a wooded backyard",
    },
  ],

  finalCtaTitle: "Ready to Build Your Dream Green?",
  finalCtaSubtitle:
    "Our design consultants are ready to help you create the perfect putting green for your space and skill level. Contact us for a free, no-obligation quote.",
  finalCtaButtonText: "Design My Putting Green",
}

export default function PuttingGreensPage() {
  return <ServicePageTemplate {...pageContent} />
}
