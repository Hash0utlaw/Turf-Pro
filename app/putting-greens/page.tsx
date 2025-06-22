import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import ContactDialog from "@/components/contact-dialog"
import { CheckCircle, ClubIcon as GolfIcon, Star } from "lucide-react" // Using GolfIcon as a placeholder
import { Toaster } from "@/components/ui/toaster"
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
          url: "/luxury-backyard-putting-green.png", // Replace with an absolute URL in production
          width: 1200,
          height: 630,
          alt: "Luxury Backyard Putting Green",
        },
      ],
    },
  }
}

const benefits = [
  "Practice your short game anytime",
  "True ball roll for realistic play",
  "Low maintenance, no watering or mowing",
  "Custom designs to fit any space",
  "Adds value and beauty to your property",
  "Durable and weather-resistant materials",
]

const galleryImages = [
  { src: "/luxury-backyard-putting-green.png", alt: "Luxury backyard putting green with multiple holes" },
  { src: "/putting-green-closeup.png", alt: "Close-up of putting green turf quality" },
  { src: "/small-backyard-putting-green.png", alt: "Compact putting green in a small backyard" },
  { src: "/putting-green-sand-trap.png", alt: "Putting green with custom features like a sand trap" },
]

const testimonials = [
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
]

export default function PuttingGreensPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/luxury-backyard-putting-green.png"
          alt="Expansive backyard putting green under a clear sky"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="brightness-[0.6]"
        />
        <div className="relative z-10 container px-4 md:px-6 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-md">
            Professional Backyard Putting Greens
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-sm">
            Perfect your putt with a custom-designed, tour-quality green in your own backyard.
          </p>
          <ContactDialog
            triggerButtonText="Get a Free Putting Green Quote"
            triggerButtonVariant="default"
            className="bg-turf-green hover:bg-turf-green-dark text-white px-8 py-3 h-12 text-lg rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Why Choose a Turf Pros Putting Green?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text">
              Experience the ultimate convenience and performance with our expertly crafted putting greens.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
                src="/putting-green-installation.png"
                alt="Detailed view of putting green turf and installation"
                width={600}
                height={450}
                className="rounded-2xl shadow-soft-md object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Unmatched Quality and Realism
              </h2>
              <p className="text-lg text-brand-gray-text leading-relaxed">
                Our putting greens are designed to replicate the performance of a professional golf course. We use
                premium, US-made turf products that offer consistent ball roll, realistic speeds, and exceptional
                durability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-gray-text">
                  <GolfIcon className="h-5 w-5 text-turf-green mr-3" />
                  <span>Customizable speeds (stimp rating)</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <GolfIcon className="h-5 w-5 text-turf-green mr-3" />
                  <span>Options for undulations, breaks, and multiple holes</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <GolfIcon className="h-5 w-5 text-turf-green mr-3" />
                  <span>Expert base preparation for optimal drainage and stability</span>
                </li>
                <li className="flex items-center text-brand-gray-text">
                  <GolfIcon className="h-5 w-5 text-turf-green mr-3" />
                  <span>Professional installation by certified experts</span>
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
              Inspiring Putting Green Designs
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text">
              See how we've transformed backyards into golfer's havens.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-brand-gray-light">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Hear From Our Golfing Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card text-card-foreground rounded-2xl shadow-soft p-6">
                <CardContent className="space-y-3">
                  <div className="flex">
                    {Array(testimonial.stars)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                  </div>
                  <p className="text-brand-gray-text italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="font-semibold text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-turf-green-extralight">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-turf-green-dark">
            Ready to Build Your Dream Putting Green?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-brand-gray-text">
            Our experts are ready to help you design and install the perfect putting green for your space and skill
            level.
          </p>
          <div className="mt-8">
            <ContactDialog
              triggerButtonText="Discuss Your Putting Green Project"
              triggerButtonVariant="default"
              className="bg-turf-green hover:bg-turf-green-dark text-white px-10 py-4 h-14 text-xl rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
            />
          </div>
        </div>
      </section>
      <Toaster />
    </>
  )
}
