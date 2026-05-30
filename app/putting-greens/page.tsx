import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { StructuredData } from "@/components/structured-data"
import { generateServiceSchema, generateBreadcrumbSchema, generateVideoSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Backyard Putting Green Installation Charlotte NC | Custom Golf Greens | Atlantic Turf Specialists",
  description:
    "Custom backyard putting green installation in Charlotte NC. Professional-grade synthetic turf with true ball roll. Perfect for Lake Norman, Ballantyne & Myers Park homes. Get your free putting green quote!",
  keywords: [
    "backyard putting green Charlotte NC",
    "custom putting green Charlotte",
    "home golf green installation Charlotte",
    "artificial putting green Lake Norman",
    "residential putting green Matthews NC",
    "golf green installation Ballantyne",
    "putting green Myers Park",
    "synthetic putting green Charlotte",
    "backyard golf green Huntersville",
    "custom golf green Charlotte NC",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialist.com/putting-greens",
  },
  openGraph: {
    title: "Backyard Putting Green Installation Charlotte NC | Custom Golf Greens | Atlantic Turf Specialists",
    description:
      "Custom backyard putting green installation in Charlotte NC. Professional-grade synthetic turf with true ball roll. Perfect for Lake Norman, Ballantyne & Myers Park homes.",
    images: [{ url: "/portfolio/artificial-turf-putting-green-night-02.webp", width: 1200, height: 630, alt: "Custom backyard putting green installation in Charlotte NC by Atlantic Turf Specialists" }],
  },
}

const galleryImages = [
  { src: "/portfolio/artificial-turf-putting-green-night-02.webp", alt: "Multi-hole putting green with professional pole and perimeter lighting at night — Charlotte NC" },
  { src: "/portfolio/artificial-turf-putting-green-install-15.webp", alt: "Two-hole putting green with fringe turf and white vinyl fence — Charlotte NC backyard" },
  { src: "/portfolio/artificial-turf-putting-green-install-13.webp", alt: "Three-hole putting green integrated into full artificial backyard lawn with cedar privacy fence" },
  { src: "/portfolio/artificial-turf-putting-green-night-01.webp", alt: "Organic-shaped putting green illuminated at dusk beside a pool patio — Charlotte NC" },
  { src: "/portfolio/artificial-turf-putting-green-install-14.webp", alt: "Estate courtyard putting green with chipping ramp and stacked-stone seating walls" },
  { src: "/portfolio/artificial-turf-putting-green-install-08.webp", alt: "Multi-hole putting green with fringe turf and landscape lighting at brick farmhouse estate" },
]

const benefits = [
  "True Roll technology for realistic ball speed and movement.",
  "Fully customizable with custom breaks, tiers, and hole placements.",
  "Low-maintenance — no watering, mowing, or fertilizing required.",
  "Durable and weather-resistant for year-round practice.",
  "Add sand traps, chipping areas, and other practice features.",
  "A stunning landscape feature that adds value to your home.",
]

export default function PuttingGreensPage() {
  const serviceSchema = generateServiceSchema(
    "Custom Putting Green Installation",
    "Professional-quality custom putting greens for residential and commercial properties. Our artificial turf greens offer true ball roll and realistic performance for year-round practice.",
    "Artificial Turf Installation",
  )

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.atlanticturfspecialist.com" },
    { name: "Putting Greens" },
  ])

  const videoSchema = generateVideoSchema(
    "Custom Putting Green Installation - Atlantic Turf Specialists",
    "Watch how we install professional-quality custom putting greens for residential backyards. Our artificial turf greens offer true ball roll and realistic performance for year-round golf practice at home.",
    "https://www.atlanticturfspecialist.com/putting-green-with-night-lighting.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turf-pro-putting-green-residential-home-medium-iB8P1yagGBoib76YM5qXM7kY15ka6A.mp4",
    "2024-01-15",
    "PT45S",
  )

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={videoSchema} />

      {/* Internal link bar */}
      <nav aria-label="Related services" className="bg-brand-gray-light py-4 px-4 border-b border-turf-green/20">
        <div className="container mx-auto max-w-4xl text-center text-sm text-brand-gray-text">
          Explore our other Charlotte services:{" "}
          <Link href="/residential-lawn-turf" className="text-turf-green hover:underline font-medium">
            residential artificial turf Charlotte NC
          </Link>
          {" | "}
          <Link href="/commercial-turf" className="text-turf-green hover:underline font-medium">
            Charlotte commercial turf installation
          </Link>
          {" | "}
          <Link href="/pet-friendly-turf" className="text-turf-green hover:underline font-medium">
            pet-friendly synthetic grass Charlotte
          </Link>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Putting green hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          poster="/portfolio/artificial-turf-putting-green-night-02.webp"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turf-pro-putting-green-residential-home-medium-iB8P1yagGBoib76YM5qXM7kY15ka6A.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance drop-shadow-lg">
            Perfect Your Putt at Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-balance text-white/90">
            Bring the golf course to your backyard with a custom-designed, professional-grade putting green in Charlotte
            NC. Experience true ball roll and practice your short game anytime in Lake Norman, Ballantyne, or Myers
            Park.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-turf-green hover:bg-turf-green-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Get a Putting Green Quote
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-brand-gray-light" aria-labelledby="benefits-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="benefits-heading" className="text-4xl font-bold text-foreground mb-4 text-balance">
              The Golfer&apos;s Dream Upgrade
            </h2>
            <p className="text-xl text-brand-gray-text text-balance">
              Our putting greens are engineered for realistic performance and lasting beauty.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-turf-green text-xl flex-shrink-0 mt-0.5" aria-hidden="true">&#10003;</span>
                <p className="text-brand-gray-text">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-background" aria-labelledby="gallery-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="gallery-heading" className="text-4xl font-bold text-foreground mb-4 text-balance">
              Our Putting Green Portfolio
            </h2>
            <p className="text-xl text-brand-gray-text text-balance">
              Explore custom putting greens we&apos;ve designed and installed for Charlotte NC homeowners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl border border-turf-green/20">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-turf-green-extralight border-y border-turf-green/30" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-white mb-4 text-balance">
            Ready to Build Your Dream Green?
          </h2>
          <p className="text-xl text-brand-gray-text mb-8 text-balance">
            Our design consultants are ready to help you create the perfect putting green for your space and skill level.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-turf-green hover:bg-turf-green-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Design My Putting Green
          </Link>
        </div>
      </section>
    </div>
  )
}
