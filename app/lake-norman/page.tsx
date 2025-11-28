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
  title: "Artificial Turf Installation Lake Norman NC | Turf Professionals",
  description:
    "Professional artificial turf installation for Lake Norman waterfront homes. Beautiful synthetic grass for Cornelius, Davidson, Huntersville & Mooresville. Free quotes! Call (704) 956-2687",
  keywords: [
    "artificial turf installation Lake Norman",
    "synthetic grass Lake Norman",
    "Lake Norman turf installers",
    "waterfront turf installation",
    "artificial grass Lake Norman NC",
    "Cornelius turf installation",
    "Davidson synthetic grass",
    "Mooresville artificial turf",
  ],
  openGraph: {
    title: "Artificial Turf Installation Lake Norman NC | Turf Professionals",
    description: "Professional artificial turf installation for Lake Norman waterfront homes and properties.",
    images: [{ url: "/hero-homepage-new.png" }],
  },
}

const lakeNormanAreas = ["Cornelius", "Davidson", "Huntersville", "Mooresville", "Denver", "Terrell"]

const neighborhoods = ["Peninsula", "The Point", "Birkdale Village", "The Coves", "River Run", "Jetton"]

const services = [
  {
    title: "Waterfront Residential Turf",
    description:
      "Transform your Lake Norman waterfront property with beautiful, maintenance-free artificial turf that handles humidity and looks great year-round.",
    link: "/residential-lawn-turf",
  },
  {
    title: "Lakeside Commercial Turf",
    description:
      "Professional commercial turf for Lake Norman businesses, marinas & waterfront properties. Durable, low-maintenance synthetic grass.",
    link: "/commercial-turf",
  },
  {
    title: "Lakeside Putting Greens",
    description:
      "Custom backyard putting greens for Lake Norman homes with professional-grade synthetic turf. Perfect for waterfront properties.",
    link: "/putting-greens",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turf Professionals - Lake Norman NC",
  image: "https://www.turf-professionals.com/hero-homepage-new.png",
  "@id": "https://www.turf-professionals.com/lake-norman",
  url: "https://www.turf-professionals.com/lake-norman",
  telephone: "+1-704-956-2687",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lake Norman",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Lake Norman, NC" },
    { "@type": "City", name: "Cornelius, NC" },
    { "@type": "City", name: "Davidson, NC" },
    { "@type": "City", name: "Huntersville, NC" },
    { "@type": "City", name: "Mooresville, NC" },
  ],
}

export default function LakeNormanPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={localBusinessSchema} />

      <section className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stunning-lake-norman-waterfront-home-with-artifici.jpg"
            alt="Professional artificial turf installation Lake Norman NC"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-turf-green" />
              <span className="text-sm font-medium text-turf-green">Premier Lake Norman Turf Specialists</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
              Artificial Turf Installation <span className="block mt-2">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-balance leading-relaxed">
              Professional synthetic grass installation for Lake Norman waterfront homes and businesses across
              Cornelius, Davidson, Huntersville & Mooresville.
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
              Real waterfront installations across Cornelius, Davidson, Huntersville & Mooresville
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/patchy-brown-natural-grass-lawn-before-artificial-.jpg"
                  alt="Before: Natural grass lawn at Lake Norman"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500">Before</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Struggling lakeside lawn</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/lush-green-artificial-turf-lawn-after-professional.jpg"
                  alt="After: Beautiful artificial turf at Lake Norman"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-turf-green">After</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-center">Stunning waterfront oasis</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for Lake Norman Living</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Waterfront Ready</h3>
                <p className="text-sm text-gray-600">Built for lakeside moisture & humidity</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Dock-Friendly</h3>
                <p className="text-sm text-gray-600">No muddy paths from dock to home</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">Always Beautiful</h3>
                <p className="text-sm text-gray-600">Stunning year-round lakeside views</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-turf-green mx-auto mb-4" />
                <h3 className="font-bold mb-2">More Lake Time</h3>
                <p className="text-sm text-gray-600">Zero lawn maintenance required</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving All of Lake Norman</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in{" "}
              <Link href="/residential-lawn-turf" className="text-turf-green hover:underline">
                waterfront artificial turf installation
              </Link>{" "}
              throughout the Lake Norman region.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6 text-turf-green" />
              Lake Norman Cities & Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-6">
              {lakeNormanAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-turf-green-extralight rounded-full text-turf-green-dark font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
            <h4 className="text-xl font-semibold mb-4 text-center">Popular Waterfront Communities</h4>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700"
                >
                  {neighborhood}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Lake Norman Turf Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized artificial turf solutions for Lake Norman waterfront properties.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Lake Norman Residents Are Saying</h2>
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John & Susan B." />
                    <AvatarFallback>JB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">John & Susan B.</p>
                    <p className="text-sm text-gray-500">Cornelius</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Perfect for our Lake Norman waterfront home! The turf handles the lake humidity and looks beautiful.
                  No more muddy spots near the dock!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Greg P." />
                    <AvatarFallback>GP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Greg P.</p>
                    <p className="text-sm text-gray-500">Davidson</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Our Davidson lakeside putting green is amazing! Turf Professionals understood our waterfront property
                  needs and delivered exceptional results."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Lisa K." />
                    <AvatarFallback>LK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Lisa K.</p>
                    <p className="text-sm text-gray-500">Mooresville</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Best investment for our Lake Norman marina. The commercial turf looks professional and handles heavy
                  foot traffic beautifully!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-turf-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Lake Norman Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-balance">
            Get a free quote from Lake Norman's premier{" "}
            <Link href="/putting-greens" className="underline hover:text-gray-200">
              waterfront artificial turf installation
            </Link>{" "}
            company. Serving all Lake Norman communities!
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
