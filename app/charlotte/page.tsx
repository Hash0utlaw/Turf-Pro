import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Star } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Artificial Turf Installation Company Charlotte NC | Turf Professionals",
  description:
    "Charlotte's #1 artificial turf installation company. Professional synthetic grass for homes & businesses in Charlotte, Matthews, Huntersville, Lake Norman & surrounding NC areas. Free quotes!",
  keywords: [
    "artificial turf installation company Charlotte NC",
    "turf professionals Charlotte",
    "synthetic grass Charlotte",
    "artificial grass company Charlotte",
    "turf installers Charlotte NC",
    "Charlotte turf installation",
    "Matthews artificial turf",
    "Huntersville synthetic grass",
    "Lake Norman turf company",
  ],
  openGraph: {
    title: "Artificial Turf Installation Company Charlotte NC | Turf Professionals",
    description:
      "Charlotte's #1 artificial turf installation company. Professional synthetic grass for homes & businesses.",
    images: [{ url: "/hero-homepage-new.png" }],
  },
}

const neighborhoods = [
  "Ballantyne",
  "Myers Park",
  "South Park",
  "Dilworth",
  "NoDa",
  "Plaza Midwood",
  "Uptown Charlotte",
  "South End",
  "Elizabeth",
  "Freedom Park",
  "Cotswold",
  "SouthPark",
]

const cities = [
  "Charlotte",
  "Matthews",
  "Huntersville",
  "Concord",
  "Cornelius",
  "Davidson",
  "Mooresville",
  "Waxhaw",
  "Indian Trail",
  "Mint Hill",
  "Fort Mill, SC",
  "Lake Norman Area",
]

const services = [
  {
    title: "Residential Turf Installation",
    description:
      "Transform your Charlotte home with beautiful, maintenance-free artificial turf for backyards, front yards & pool areas.",
    link: "/residential-lawn-turf",
  },
  {
    title: "Commercial Turf Installation",
    description:
      "Professional commercial turf for Charlotte businesses, restaurants, breweries, office parks & HOAs. Durable & low-maintenance.",
    link: "/commercial-turf",
  },
  {
    title: "Putting Green Installation",
    description:
      "Custom backyard putting greens in Charlotte NC with professional-grade synthetic turf. Perfect for Lake Norman & Ballantyne homes.",
    link: "/putting-greens",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turf Professionals",
  image: "https://www.turf-professionals.com/hero-homepage-new.png",
  "@id": "https://www.turf-professionals.com/charlotte",
  url: "https://www.turf-professionals.com/charlotte",
  telephone: "+1-704-956-2687",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    postalCode: "28202",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.2271,
    longitude: -80.8431,
  },
  areaServed: cities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
}

export default function CharlottePage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={localBusinessSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-turf-green to-turf-green-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Artificial Turf Installation Company <span className="block mt-2">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 text-balance leading-relaxed">
              Professional synthetic grass installation for homes and businesses in Charlotte, Matthews, Huntersville,
              Lake Norman & surrounding NC areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-turf-green hover:bg-gray-100">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="tel:+17049562687">
                  <Phone className="mr-2 h-5 w-5" />
                  (704) 956-2687
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Charlotte NC & Surrounding Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to provide professional artificial turf installation throughout the Charlotte metropolitan
              area and beyond.
            </p>
          </div>

          {/* Cities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6 text-turf-green" />
              Cities We Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Neighborhoods */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Charlotte Neighborhoods</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="px-4 py-2 bg-turf-green-extralight rounded-full text-turf-green-dark font-medium"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Charlotte Turf Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial turf solutions for every need in Charlotte NC.
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

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Charlotte Residents Are Saying</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold">5.0 Stars - 50+ Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Best decision we made for our Ballantyne backyard! The kids and dog love it, and we love not having
                  to mow anymore. Turf Professionals did an amazing job."
                </p>
                <p className="font-semibold">- Sarah M., Ballantyne</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Our Lake Norman putting green turned out even better than expected. Professional installation and
                  excellent customer service throughout the entire process."
                </p>
                <p className="font-semibold">- Mike T., Lake Norman</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "We installed turf for our Myers Park restaurant patio and it's been perfect. Low maintenance, looks
                  great, and our customers love it!"
                </p>
                <p className="font-semibold">- James K., Myers Park Business Owner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-turf-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Charlotte Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-balance">
            Get a free, no-obligation quote from Charlotte's premier artificial turf installation company. Call us today
            or request a quote online!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-turf-green hover:bg-gray-100">
              <Link href="/contact">Request Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="tel:+17049562687">
                <Phone className="mr-2 h-5 w-5" />
                Call (704) 956-2687
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
