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
  title: "Artificial Turf Installation Cornelius NC | Lake Norman Area | Turf Professionals",
  description:
    "Professional artificial turf installation in Cornelius NC on Lake Norman. Beautiful synthetic grass for waterfront homes & commercial properties. Free quotes! Call (704) 956-2687",
  keywords: [
    "artificial turf installation Cornelius NC",
    "synthetic grass Cornelius",
    "Lake Norman turf installation",
    "artificial grass Cornelius NC",
    "waterfront turf Cornelius",
    "residential turf Cornelius",
    "commercial turf Cornelius",
  ],
  openGraph: {
    title: "Artificial Turf Installation Cornelius NC | Lake Norman | Turf Professionals",
    description: "Professional artificial turf installation in Cornelius NC on Lake Norman.",
    images: [{ url: "/hero-homepage-new.png" }],
  },
}

const neighborhoods = ["Peninsula", "Antiquity", "The Point", "Westmoreland", "Jetton", "Cain Road"]

const nearbyAreas = ["Lake Norman", "Huntersville", "Davidson", "Mooresville", "Charlotte"]

const services = [
  {
    title: "Residential Turf Installation",
    description:
      "Transform your Cornelius waterfront home with beautiful, maintenance-free artificial turf. Perfect for Lake Norman properties.",
    link: "/residential-lawn-turf",
  },
  {
    title: "Commercial Turf Installation",
    description:
      "Professional commercial turf for Cornelius businesses and waterfront properties. Durable synthetic grass for all seasons.",
    link: "/commercial-turf",
  },
  {
    title: "Putting Green Installation",
    description:
      "Custom backyard putting greens in Cornelius NC. Perfect for Lake Norman homes with professional-grade synthetic turf.",
    link: "/putting-greens",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turf Professionals - Cornelius NC",
  image: "https://www.turf-professionals.com/hero-homepage-new.png",
  "@id": "https://www.turf-professionals.com/cornelius",
  url: "https://www.turf-professionals.com/cornelius",
  telephone: "+1-704-956-2687",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cornelius",
    addressRegion: "NC",
    postalCode: "28031",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Cornelius, NC" },
    { "@type": "City", name: "Lake Norman Area" },
    { "@type": "City", name: "Davidson, NC" },
  ],
}

export default function CorneliusPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={localBusinessSchema} />

      <section className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/beautiful-artificial-turf-backyard-in-cornelius-nc.jpg"
            alt="Professional artificial turf installation in Cornelius NC"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-turf-green" />
              <span className="text-sm font-medium text-turf-green">Lake Norman Waterfront Specialists</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
              Artificial Turf Installation <span className="block mt-2">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-balance leading-relaxed">
              Professional synthetic grass installation for Lake Norman waterfront homes and businesses in Cornelius.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lake Norman Property Transformations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real Cornelius waterfront installations that turned lakeside yards into stunning outdoor retreats
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/patchy-brown-natural-grass-lawn-before-artificial-.jpg"
                  alt="Before: Natural grass lawn in Cornelius"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500">Before</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Struggling waterfront lawn</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/lush-green-artificial-turf-lawn-after-professional.jpg"
                  alt="After: Beautiful artificial turf in Cornelius"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-turf-green">After</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Beautiful Lake Norman turf oasis</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for Lake Norman Properties</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Humidity Resistant</h3>
                <p className="text-sm text-gray-600">Handles Lake Norman moisture perfectly</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Waterfront Durable</h3>
                <p className="text-sm text-gray-600">Built for lakeside conditions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Year-Round Green</h3>
                <p className="text-sm text-gray-600">Beautiful lawn every season</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Zero Maintenance</h3>
                <p className="text-sm text-gray-600">More time enjoying the lake</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Cornelius & Lake Norman Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in{" "}
              <Link href="/putting-greens" className="text-turf-green hover:underline">
                artificial turf installation
              </Link>{" "}
              for Cornelius waterfront properties and Lake Norman area homes.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6 text-turf-green" />
              Cornelius Areas & Nearby Cities
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cornelius Turf Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial turf solutions for Lake Norman waterfront properties.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Cornelius Residents Are Saying</h2>
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Tom & Karen W." />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Tom & Karen W.</p>
                    <p className="text-sm text-gray-500">Cornelius</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Perfect for our Cornelius waterfront property! The turf handles the Lake Norman humidity beautifully
                  and looks amazing year-round."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Rachel M." />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Rachel M.</p>
                    <p className="text-sm text-gray-500">Cornelius</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Our Lake Norman home's backyard is now our favorite space! The artificial turf installation was
                  seamless and the results are stunning."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael D." />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Michael D.</p>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Excellent work on our Cornelius commercial property. The turf looks professional and requires
                  virtually no maintenance!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-turf-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Cornelius Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-balance">
            Get a free quote from Cornelius and Lake Norman's premier{" "}
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
