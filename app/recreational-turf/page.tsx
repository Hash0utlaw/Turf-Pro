import Image from "next/image"
import { Card } from "@/components/ui/card"
import ContactDialog from "@/components/contact-dialog"
import { CheckCircle, Zap, Users, Shield } from "lucide-react" // Zap for activity, Users for multi-use, Shield for safety
import { Toaster } from "@/components/ui/toaster"
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
          url: "/recreational-sports-turf.png", // Replace with an absolute URL and actual image
          width: 1200,
          height: 630,
          alt: "Recreational Sports Turf Field",
        },
      ],
    },
  }
}

const benefitsRecreationalTurf = [
  "Versatile for various sports and activities",
  "Consistent playing surface year-round",
  "Reduced risk of injuries compared to hard surfaces",
  "Low maintenance, saving time and resources",
  "Durable enough for high-traffic areas",
  "Enhances the aesthetic of play areas",
]

const galleryImagesRecreationalTurf = [
  { src: "/placeholder.svg?width=600&height=400", alt: "Backyard mini soccer field with artificial turf" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Playground with safe and colorful artificial grass" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Multi-sport game court with lines on artificial turf" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Rooftop recreational area with artificial turf" },
]

export default function RecreationalTurfPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/placeholder.svg?width=1920&height=1080"
          alt="Kids playing various sports on a vibrant artificial turf field"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="brightness-[0.6]"
        />
        <div className="relative z-10 container px-4 md:px-6 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-md">
            Active Play, All Year Round
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-sm">
            High-performance recreational turf for sports, playgrounds, and active lifestyles.
          </p>
          <ContactDialog
            triggerButtonText="Get a Recreational Turf Quote"
            className="bg-turf-green hover:bg-turf-green-dark text-white px-8 py-3 h-12 text-lg rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              The Ultimate Surface for Play and Sports
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text">
              Our recreational turf is designed for safety, durability, and peak performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsRecreationalTurf.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-turf-green mt-1 flex-shrink-0" />
                <p className="text-brand-gray-text text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Details Section */}
      <section className="py-16 md:py-24 bg-brand-gray-light">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?width=600&height=450"
                alt="Illustration of recreational turf with shock pad system for safety"
                width={600}
                height={450}
                className="rounded-2xl shadow-soft-md object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Engineered for Fun and Safety
              </h2>
              <p className="text-lg text-brand-gray-text leading-relaxed">
                Whether it's for a backyard sports court, a community playground, or a commercial facility, our
                recreational turf solutions meet the highest standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-gray-text">
                  <Zap className="h-5 w-5 text-turf-green mr-3" />
                  <span>Variety of pile heights and densities for different activities</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <Shield className="h-5 w-5 text-turf-green mr-3" />
                  <span>Optional shock-absorbent padding for enhanced safety</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <Users className="h-5 w-5 text-turf-green mr-3" />
                  <span>Customizable with game lines for various sports</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <CheckCircle className="h-5 w-5 text-turf-green mr-3" />
                  <span>UV stabilized to resist fading and wear</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Versatile Recreational Spaces
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text">
              Explore the possibilities with our recreational turf installations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImagesRecreationalTurf.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-md transition-shadow"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-turf-green-extralight">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-turf-green-dark">
            Ready to Create Your Ultimate Play Area?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-brand-gray-text">
            Let's discuss your recreational turf needs and design a space that's perfect for fun, sports, and everything
            in between.
          </p>
          <div className="mt-8">
            <ContactDialog
              triggerButtonText="Plan Your Recreational Space"
              className="bg-turf-green hover:bg-turf-green-dark text-white px-10 py-4 h-14 text-xl rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
            />
          </div>
        </div>
      </section>
      <Toaster />
    </>
  )
}
