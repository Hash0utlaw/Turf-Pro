import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Star, CheckCircle2, Award, Shield, Clock } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Artificial Turf Installation Waxhaw NC | Atlantic Turf Specialists",
  description:
    "Professional artificial turf installation in Waxhaw NC. Beautiful synthetic grass for Waxhaw homes, luxury properties & putting greens. Serving Marvin, Weddington & surrounding areas. Free quotes! Call (704) 995-6265",
  keywords: [
    "artificial turf installation Waxhaw NC",
    "synthetic grass Waxhaw",
    "Waxhaw NC turf installation",
    "artificial grass Waxhaw NC",
    "residential turf Waxhaw",
    "putting green Waxhaw NC",
    "turf company Waxhaw NC",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialists.com/waxhaw",
  },
  openGraph: {
    title: "Artificial Turf Installation Waxhaw NC | Atlantic Turf Specialists",
    description: "Professional artificial turf installation in Waxhaw NC. Serving Marvin, Weddington & surrounding areas.",
    images: [{ url: "/hero-homepage-new.png" }],
  },
}

const neighborhoods = ["Downtown Waxhaw", "Cureton", "Kensington", "Providence", "Lawson", "Marvin Acres"]

const nearbyAreas = ["Marvin", "Weddington", "Indian Trail", "Monroe", "Ballantyne", "Charlotte"]

const services = [
  {
    title: "Residential Turf Installation",
    description:
      "Transform your Waxhaw home with beautiful, maintenance-free artificial turf. Perfect for Waxhaw's upscale neighborhoods and luxury properties.",
    link: "/residential-lawn-turf",
  },
  {
    title: "Putting Green Installation",
    description:
      "Custom backyard putting greens in Waxhaw NC. Perfect for Waxhaw's spacious lots with professional-grade synthetic turf.",
    link: "/putting-greens",
  },
  {
    title: "Pet-Friendly Turf",
    description:
      "Safe, durable pet turf for Waxhaw homes. Easy-clean artificial grass with excellent drainage — no mud, no mess.",
    link: "/pet-friendly-turf",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atlantic Turf Specialists - Waxhaw NC",
  image: "https://www.atlanticturfspecialists.com/hero-homepage-new.png",
  "@id": "https://www.atlanticturfspecialists.com/waxhaw",
  url: "https://www.atlanticturfspecialists.com/waxhaw",
  telephone: "+1-704-995-6265",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Waxhaw",
    addressRegion: "NC",
    postalCode: "28173",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.9243,
    longitude: -80.7401,
  },
  areaServed: [
    { "@type": "City", name: "Waxhaw, NC" },
    { "@type": "City", name: "Marvin, NC" },
    { "@type": "City", name: "Weddington, NC" },
    { "@type": "City", name: "Indian Trail, NC" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
}

export default function WaxhawPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={localBusinessSchema} />

      <section className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-homepage-new.png"
            alt="Professional artificial turf installation in Waxhaw NC"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-turf-green" />
              <span className="text-sm font-medium text-turf-green">Waxhaw & Southern Charlotte Specialists</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
              Artificial Turf Installation <span className="block mt-2">Waxhaw NC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-balance leading-relaxed">
              Professional synthetic grass installation for Waxhaw's upscale homes and properties.
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
                <Link href="tel:+17049956265">
                  <Phone className="mr-2 h-5 w-5" />
                  (704) 995-6265
                </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Waxhaw Turf Transformations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real Waxhaw installations that turned ordinary yards into stunning luxury outdoor spaces
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/patchy-brown-natural-grass-lawn-before-artificial-.jpg"
                  alt="Before: Natural grass lawn in Waxhaw NC"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500">Before</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Struggling natural grass lawn</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/lush-green-artificial-turf-lawn-after-professional.jpg"
                  alt="After: Beautiful artificial turf in Waxhaw NC"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-turf-green">After</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Stunning artificial turf transformation</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Waxhaw Homeowners Choose Artificial Turf</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Luxury Appearance</h3>
                <p className="text-sm text-gray-600">Perfectly manicured look that enhances property value</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">No Water Bills</h3>
                <p className="text-sm text-gray-600">Eliminates irrigation costs year-round</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Year-Round Green</h3>
                <p className="text-sm text-gray-600">Always lush, even in NC heat and drought</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Safe for All</h3>
                <p className="text-sm text-gray-600">Non-toxic for children, pets, and the environment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Waxhaw & Surrounding Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in{" "}
              <Link href="/residential-lawn-turf" className="text-turf-green hover:underline">
                artificial turf installation
              </Link>{" "}
              for Waxhaw homes and the southern Charlotte region.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6 text-turf-green" />
              Waxhaw Neighborhoods & Nearby Cities
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Waxhaw Turf Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial turf solutions for Waxhaw and surrounding communities.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Waxhaw Residents Are Saying</h2>
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Mark & Susan H." />
                    <AvatarFallback>MH</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Mark & Susan H.</p>
                    <p className="text-sm text-gray-500">Waxhaw</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Our Waxhaw property looks like it belongs on a magazine cover. The installation team was
                  exceptional and the quality is beyond what we expected."
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jennifer P." />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Jennifer P.</p>
                    <p className="text-sm text-gray-500">Waxhaw</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "I have three dogs and the pet-friendly turf has been a game changer. No more muddy paws — ever!
                  Highly recommend Atlantic Turf Specialists."
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Greg F." />
                    <AvatarFallback>GF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Greg F.</p>
                    <p className="text-sm text-gray-500">Marvin Area</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Had a custom putting green installed and it's absolutely perfect. My neighbors keep asking who did
                  the work — I send them to Atlantic Turf every time."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-turf-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Waxhaw Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-balance">
            Get a free quote from Waxhaw's premier{" "}
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
              <Link href="tel:+17049956265">
                <Phone className="mr-2 h-5 w-5" />
                Call (704) 995-6265
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-100">Call now for same-day quotes • Free site evaluation</p>
        </div>
      </section>
    </div>
  )
}
