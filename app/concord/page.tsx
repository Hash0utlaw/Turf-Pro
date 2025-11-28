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
  title: "Artificial Turf Installation Concord NC | Turf Professionals",
  description:
    "Professional artificial turf installation in Concord NC. Beautiful synthetic grass for residential lawns, commercial properties & putting greens. Free quotes! Call (704) 956-2687",
  keywords: [
    "artificial turf installation Concord NC",
    "synthetic grass Concord",
    "turf installers Concord",
    "artificial grass company Concord NC",
    "residential turf Concord",
    "commercial turf Concord",
    "putting green Concord NC",
  ],
  openGraph: {
    title: "Artificial Turf Installation Concord NC | Turf Professionals",
    description:
      "Professional artificial turf installation in Concord NC. Beautiful synthetic grass for homes & businesses.",
    images: [{ url: "/hero-homepage-new.png" }],
  },
}

const neighborhoods = [
  "Downtown Concord",
  "Afton Village",
  "Weddington Chase",
  "Christenbury",
  "Harrisburg (nearby)",
  "Kannapolis (nearby)",
]

const nearbyAreas = ["Charlotte", "Harrisburg", "Kannapolis", "Midland", "Mount Pleasant"]

const services = [
  {
    title: "Residential Turf Installation",
    description:
      "Transform your Concord home with beautiful, maintenance-free artificial turf. Perfect for backyards, front yards & pool areas.",
    link: "/residential-lawn-turf",
  },
  {
    title: "Commercial Turf Installation",
    description:
      "Professional commercial turf for Concord businesses, restaurants & office parks. Durable, low-maintenance synthetic grass.",
    link: "/commercial-turf",
  },
  {
    title: "Putting Green Installation",
    description:
      "Custom backyard putting greens in Concord NC with professional-grade synthetic turf and true ball roll.",
    link: "/putting-greens",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turf Professionals - Concord NC",
  image: "https://www.turf-professionals.com/hero-homepage-new.png",
  "@id": "https://www.turf-professionals.com/concord",
  url: "https://www.turf-professionals.com/concord",
  telephone: "+1-704-956-2687",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Concord",
    addressRegion: "NC",
    postalCode: "28025",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Concord, NC" },
    { "@type": "City", name: "Harrisburg, NC" },
    { "@type": "City", name: "Kannapolis, NC" },
  ],
}

export default function ConcordPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={localBusinessSchema} />

      <section className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/beautiful-artificial-turf-backyard-in-concord-nc.jpg"
            alt="Professional artificial turf installation in Concord NC"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-turf-green" />
              <span className="text-sm font-medium text-turf-green">Serving Concord & Cabarrus County</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
              Artificial Turf Installation <span className="block mt-2">Concord NC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-balance leading-relaxed">
              Professional synthetic grass installation for homes and businesses in Concord and surrounding areas.
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
                <Link href="tel:+17049562687">
                  <Phone className="mr-2 h-5 w-5" />
                  (704) 956-2687
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See The Transformation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real Concord artificial turf installations that transformed ordinary yards into beautiful outdoor spaces
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/patchy-brown-natural-grass-lawn-before-artificial-.jpg"
                  alt="Before: Natural grass lawn in Concord"
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
                  alt="After: Beautiful artificial turf in Concord"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-turf-green">After</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Beautiful, maintenance-free artificial turf</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Concord Homeowners Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Save Water</h3>
                <p className="text-sm text-gray-600">Reduce your water bills dramatically</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Pet Friendly</h3>
                <p className="text-sm text-gray-600">Safe, durable, and easy to clean for pets</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Year-Round Beauty</h3>
                <p className="text-sm text-gray-600">Green lawn every season in Concord</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Low Maintenance</h3>
                <p className="text-sm text-gray-600">No mowing, fertilizing, or weeding</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Concord NC & Nearby Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional{" "}
              <Link href="/residential-lawn-turf" className="text-turf-green hover:underline">
                residential turf installation
              </Link>{" "}
              throughout Concord, Harrisburg, Kannapolis, and surrounding communities.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6 text-turf-green" />
              Concord Areas & Nearby Cities
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-6">
              {neighborhoods.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-turf-green-extralight rounded-full text-turf-green-dark font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {nearbyAreas.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Concord Turf Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial turf solutions for every need in Concord NC.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Concord Residents Are Saying</h2>
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Chris & Emily S." />
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Chris & Emily S.</p>
                    <p className="text-sm text-gray-500">Concord</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Fantastic job on our Concord backyard! The artificial turf looks natural and the installation crew
                  was professional and efficient."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Brian M." />
                    <AvatarFallback>BM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Brian M.</p>
                    <p className="text-sm text-gray-500">Concord</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Our putting green in Concord is amazing! Great quality turf and excellent workmanship. Would highly
                  recommend to anyone in the area."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Patricia L." />
                    <AvatarFallback>PL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Patricia L.</p>
                    <p className="text-sm text-gray-500">Property Manager</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Perfect solution for our Concord commercial property. Looks professional, requires minimal upkeep,
                  and stays green all year!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-turf-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Concord Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-balance">
            Get a free, no-obligation quote from Concord's trusted{" "}
            <Link href="/commercial-turf" className="underline hover:text-gray-200">
              artificial turf installation
            </Link>{" "}
            company. Call us today!
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
              <Link href="tel:+17049562687">
                <Phone className="mr-2 h-5 w-5" />
                Call (704) 956-2687
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-100">Call now for same-day quotes • Free site evaluation</p>
        </div>
      </section>
    </div>
  )
}
