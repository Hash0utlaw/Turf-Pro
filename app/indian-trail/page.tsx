import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Star, CheckCircle2, Award, Shield, Clock } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { PhoneLink } from "@/components/phone-link"

export const metadata: Metadata = {
  title: "Artificial Turf Installation Indian Trail NC | Atlantic Turf Specialists",
  description:
    "Professional artificial turf installation in Indian Trail NC. Beautiful synthetic grass for Indian Trail homes, backyards & putting greens. Serving Matthews, Stallings & surrounding areas. Free quotes! Call (704) 995-6265",
  keywords: [
    "artificial turf installation Indian Trail NC",
    "synthetic grass Indian Trail",
    "Indian Trail NC turf installation",
    "artificial grass Indian Trail NC",
    "residential turf Indian Trail",
    "turf company Indian Trail NC",
    "lawn replacement Indian Trail",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialists.com/indian-trail",
  },
  openGraph: {
    title: "Artificial Turf Installation Indian Trail NC | Atlantic Turf Specialists",
    description: "Professional artificial turf installation in Indian Trail NC. Serving Matthews, Stallings & surrounding areas.",
    images: [{ url: "/hero-homepage-new.png" }],
  },
}

const neighborhoods = ["Oakleigh", "Westchester", "Summerfield", "Creekside", "Heritage", "Shannon Glen"]

const nearbyAreas = ["Matthews", "Stallings", "Waxhaw", "Monroe", "Mint Hill", "Charlotte"]

const services = [
  {
    title: "Residential Turf Installation",
    description:
      "Transform your Indian Trail home with beautiful, maintenance-free artificial turf. Perfect for Indian Trail's family-friendly neighborhoods.",
    link: "/residential-lawn-turf",
  },
  {
    title: "Pet-Friendly Turf",
    description:
      "Safe, durable pet turf for Indian Trail homes. Easy-clean artificial grass with excellent drainage built for active families and pets.",
    link: "/pet-friendly-turf",
  },
  {
    title: "Putting Green Installation",
    description:
      "Custom backyard putting greens in Indian Trail NC. Professional-grade synthetic turf for the perfect home golf experience.",
    link: "/putting-greens",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atlantic Turf Specialists - Indian Trail NC",
  image: "https://www.atlanticturfspecialists.com/hero-homepage-new.png",
  "@id": "https://www.atlanticturfspecialists.com/indian-trail",
  url: "https://www.atlanticturfspecialists.com/indian-trail",
  telephone: "+1-704-995-6265",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indian Trail",
    addressRegion: "NC",
    postalCode: "28079",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.0765,
    longitude: -80.6435,
  },
  areaServed: [
    { "@type": "City", name: "Indian Trail, NC" },
    { "@type": "City", name: "Matthews, NC" },
    { "@type": "City", name: "Stallings, NC" },
    { "@type": "City", name: "Monroe, NC" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
}

export default function IndianTrailPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={localBusinessSchema} />

      <section className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-homepage-new.png"
            alt="Professional artificial turf installation in Indian Trail NC"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-turf-green" />
              <span className="text-sm font-medium text-turf-green">Indian Trail & Southeast Charlotte Specialists</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
              Artificial Turf Installation <span className="block mt-2">Indian Trail NC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-balance leading-relaxed">
              Professional synthetic grass installation for Indian Trail homes and families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-turf-green text-white hover:bg-turf-green-dark text-lg px-8">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/90 backdrop-blur-sm border-2 border-white text-turf-green hover:bg-white text-lg px-8"
              >
                <PhoneLink href="tel:+17049956265">
                  <Phone className="mr-2 h-5 w-5" />
                  (704) 995-6265
                </PhoneLink>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Fast Installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Indian Trail Turf Transformations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real Indian Trail installations that families love year-round
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/patchy-brown-natural-grass-lawn-before-artificial-.jpg"
                  alt="Before: Natural grass lawn in Indian Trail NC"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500">Before</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Patchy, high-maintenance natural grass</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/lush-green-artificial-turf-lawn-after-professional.jpg"
                  alt="After: Beautiful artificial turf in Indian Trail NC"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-turf-green">After</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Beautiful, lush artificial turf all year</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-turf-green hover:bg-turf-green-dark">
              <Link href="/contact">Get Your Free Quote Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Indian Trail Families Choose Artificial Turf</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Kid Safe</h3>
                <p className="text-sm text-gray-600">Soft, non-toxic surface perfect for active kids</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Pet Friendly</h3>
                <p className="text-sm text-gray-600">No mud, no mess — great for dogs and cats</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Year-Round Green</h3>
                <p className="text-sm text-gray-600">Perfect lawn in every season, zero effort</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Zero Maintenance</h3>
                <p className="text-sm text-gray-600">No mowing, watering, or fertilizing ever</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Indian Trail & Surrounding Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in{" "}
              <Link href="/residential-lawn-turf" className="text-turf-green hover:underline">
                artificial turf installation
              </Link>{" "}
              for Indian Trail families and the southeast Charlotte region.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6 text-turf-green" />
              Indian Trail Neighborhoods & Nearby Cities
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-6">
              {neighborhoods.map((area) => (
                <span key={area} className="px-4 py-2 bg-turf-green-extralight rounded-full text-turf-green-dark font-medium">
                  {area}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {nearbyAreas.map((city) => (
                <span key={city} className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Indian Trail Turf Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Indian Trail Residents Are Saying</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold">5.0 Stars from 50+ Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Brian & Amy C." />
                    <AvatarFallback>BC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Brian & Amy C.</p>
                    <p className="text-sm text-gray-500">Indian Trail</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Our kids play outside every day on the artificial turf — no muddy shoes, no bare patches. It's been
                  the best upgrade to our Indian Trail home."
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michelle V." />
                    <AvatarFallback>MV</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Michelle V.</p>
                    <p className="text-sm text-gray-500">Indian Trail</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Atlantic Turf Specialists came out quickly, gave us a fair quote, and finished the job on time.
                  The lawn looks amazing and my dog absolutely loves it."
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Tony S." />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Tony S.</p>
                    <p className="text-sm text-gray-500">Indian Trail</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Had a putting green added to the backyard and it looks incredible. My kids use it every day and
                  neighbors always stop to ask about it."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-turf-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Indian Trail Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-balance">
            Get a free quote from Indian Trail's premier{" "}
            <Link href="/residential-lawn-turf" className="underline hover:text-gray-200">
              artificial turf installation
            </Link>{" "}
            company!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="bg-white text-turf-green hover:bg-gray-100 text-lg px-8">
              <Link href="/contact">Request Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              <PhoneLink href="tel:+17049956265">
                <Phone className="mr-2 h-5 w-5" />
                Call (704) 995-6265
              </PhoneLink>
            </Button>
          </div>
          <p className="text-sm text-gray-100">Call now for same-day quotes • Free site evaluation</p>
        </div>
      </section>
    </div>
  )
}
