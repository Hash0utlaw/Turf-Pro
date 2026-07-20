import { PhoneLink } from "@/components/phone-link"
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
  title: "Artificial Turf Installation Fort Mill SC | Atlantic Turf Specialists",
  description:
    "Professional artificial turf installation in Fort Mill SC. Beautiful synthetic grass for Fort Mill homes, luxury properties & putting greens. Serving Tega Cay, Indian Land & Charlotte areas. Free quotes! Call (704) 995-6265",
  keywords: [
    "artificial turf installation Fort Mill SC",
    "synthetic grass Fort Mill",
    "Fort Mill SC turf installation",
    "artificial grass Fort Mill SC",
    "residential turf Fort Mill",
    "putting green Fort Mill SC",
    "turf company Fort Mill SC",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialists.com/fort-mill",
  },
  openGraph: {
    title: "Artificial Turf Installation Fort Mill SC | Atlantic Turf Specialists",
    description: "Professional artificial turf installation in Fort Mill SC. Serving Tega Cay, Indian Land & Charlotte.",
    images: [{ url: "/hero-homepage-new.png" }],
  },
}

const neighborhoods = ["Baxter Village", "Waterside", "Gold Hill Farms", "The Falls", "Springfield", "Kingsley"]

const nearbyAreas = ["Tega Cay", "Indian Land", "Lake Wylie", "Ballantyne", "Waxhaw", "Charlotte"]

const services = [
  {
    title: "Residential Turf Installation",
    description:
      "Transform your Fort Mill home with beautiful, maintenance-free artificial turf. Perfect for Fort Mill's upscale neighborhoods and growing communities.",
    link: "/residential-lawn-turf",
  },
  {
    title: "Putting Green Installation",
    description:
      "Custom backyard putting greens in Fort Mill SC. Professional-grade synthetic turf for the ultimate golf experience at home.",
    link: "/putting-greens",
  },
  {
    title: "Commercial Turf Installation",
    description:
      "Professional commercial turf for Fort Mill businesses. Durable synthetic grass that maintains curb appeal with zero maintenance.",
    link: "/commercial-turf",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atlantic Turf Specialists - Fort Mill SC",
  image: "https://www.atlanticturfspecialists.com/hero-homepage-new.png",
  "@id": "https://www.atlanticturfspecialists.com/fort-mill",
  url: "https://www.atlanticturfspecialists.com/fort-mill",
  telephone: "+1-704-995-6265",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Mill",
    addressRegion: "SC",
    postalCode: "29715",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.0079,
    longitude: -80.9423,
  },
  areaServed: [
    { "@type": "City", name: "Fort Mill, SC" },
    { "@type": "City", name: "Tega Cay, SC" },
    { "@type": "City", name: "Indian Land, SC" },
    { "@type": "City", name: "Lake Wylie, SC" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
}

export default function FortMillPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={localBusinessSchema} />

      <section className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-homepage-new.png"
            alt="Professional artificial turf installation in Fort Mill SC"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-turf-green" />
              <span className="text-sm font-medium text-turf-green">Fort Mill SC & Greater Charlotte Specialists</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
              Artificial Turf Installation <span className="block mt-2">Fort Mill SC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-balance leading-relaxed">
              Professional synthetic grass installation for Fort Mill's fast-growing luxury communities.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fort Mill Turf Transformations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real Fort Mill installations that elevate luxury properties year-round
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/patchy-brown-natural-grass-lawn-before-artificial-.jpg"
                  alt="Before: Natural grass lawn in Fort Mill SC"
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
                  alt="After: Beautiful artificial turf in Fort Mill SC"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-turf-green">After</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Stunning luxury artificial turf</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Fort Mill Homeowners Choose Artificial Turf</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Premium Look</h3>
                <p className="text-sm text-gray-600">Luxury aesthetic that complements Fort Mill homes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">SC Heat Ready</h3>
                <p className="text-sm text-gray-600">Engineered to handle South Carolina summers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Year-Round Green</h3>
                <p className="text-sm text-gray-600">Perfect lawn every season with zero effort</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Adds Property Value</h3>
                <p className="text-sm text-gray-600">Increases home value and buyer appeal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Fort Mill & Surrounding Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in{" "}
              <Link href="/residential-lawn-turf" className="text-turf-green hover:underline">
                artificial turf installation
              </Link>{" "}
              for Fort Mill's growing luxury communities and surrounding SC areas.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6 text-turf-green" />
              Fort Mill Communities & Nearby Areas
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Fort Mill Turf Services</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Fort Mill Residents Are Saying</h2>
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Scott & Laura M." />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Scott & Laura M.</p>
                    <p className="text-sm text-gray-500">Baxter Village, Fort Mill</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Our Fort Mill home looks like a model home now. The turf is gorgeous, feels incredibly natural, and
                  we save so much time not maintaining a lawn."
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Nancy K." />
                    <AvatarFallback>NK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Nancy K.</p>
                    <p className="text-sm text-gray-500">Fort Mill SC</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Best investment in our home. The installation was clean, fast, and the crew respected our property.
                  We've already referred three Fort Mill neighbors."
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dan L." />
                    <AvatarFallback>DL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Dan L.</p>
                    <p className="text-sm text-gray-500">Waterside, Fort Mill</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "The putting green they installed is a showstopper. My backyard is now the neighborhood gathering
                  spot — couldn't be happier with Atlantic Turf Specialists."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-turf-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Fort Mill Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-balance">
            Get a free quote from Fort Mill's premier{" "}
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
