import Image from "next/image"
import { Card } from "@/components/ui/card"
import ContactDialog from "@/components/contact-dialog"
import { CheckCircle, PawPrint, ShieldCheck, Sparkles } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"
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
          url: "/placeholder-pjsuy.png", // Replace with an absolute URL and actual image
          width: 1200,
          height: 630,
          alt: "Happy Dog on Pet-Friendly Turf",
        },
      ],
    },
  }
}

const benefitsPetTurf = [
  "Safe and non-toxic for all pets",
  "Excellent drainage for easy cleanup",
  "Durable and resistant to digging and rough play",
  "No more muddy paws or patchy lawns",
  "Reduces pests like fleas and ticks",
  "Hypoallergenic and comfortable for pets",
]

const galleryImagesPetTurf = [
  { src: "/placeholder-pjsuy.png", alt: "Happy dog playing on pet-friendly artificial turf" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Close-up of pet turf drainage system" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Cat enjoying a sunbath on an artificial grass patio" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Dedicated dog run area with pet-friendly turf" },
]

export default function PetFriendlyTurfPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/placeholder.svg?width=1920&height=1080"
          alt="Happy pets enjoying clean and safe artificial turf"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="brightness-[0.6]"
        />
        <div className="relative z-10 container px-4 md:px-6 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-md">
            The Perfect Lawn for Your Furry Friends
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-sm">
            Discover durable, safe, and easy-to-clean pet-friendly turf solutions.
          </p>
          <ContactDialog
            triggerButtonText="Get a Pet-Friendly Turf Quote"
            className="bg-turf-green hover:bg-turf-green-dark text-white px-8 py-3 h-12 text-lg rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Why Pet Owners Love Our Turf
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text">
              A clean, green, and safe space for your pets to play, year-round.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsPetTurf.map((benefit, index) => (
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
                alt="Cross-section showing layers of pet-friendly turf and infill"
                width={600}
                height={450}
                className="rounded-2xl shadow-soft-md object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Designed for Pets, Built for Durability
              </h2>
              <p className="text-lg text-brand-gray-text leading-relaxed">
                Our pet turf systems are engineered to withstand the toughest play while ensuring maximum hygiene and
                comfort for your beloved animals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-gray-text">
                  <PawPrint className="h-5 w-5 text-turf-green mr-3" />
                  <span>Proprietary drainage systems for fast liquid runoff</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <ShieldCheck className="h-5 w-5 text-turf-green mr-3" />
                  <span>Antimicrobial infill options to reduce odors and bacteria</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <Sparkles className="h-5 w-5 text-turf-green mr-3" />
                  <span>Easy to clean and sanitize</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <CheckCircle className="h-5 w-5 text-turf-green mr-3" />
                  <span>Resistant to staining and discoloration</span>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Happy Pets, Happy Owners</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text">See our pet-friendly turf in action.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImagesPetTurf.map((image, index) => (
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
            Give Your Pet the Best with Turf Pros
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-brand-gray-text">
            Contact us for a free consultation on the ideal turf solution for your pets and your yard.
          </p>
          <div className="mt-8">
            <ContactDialog
              triggerButtonText="Get My Pet Turf Quote"
              className="bg-turf-green hover:bg-turf-green-dark text-white px-10 py-4 h-14 text-xl rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
            />
          </div>
        </div>
      </section>
      <Toaster />
    </>
  )
}
