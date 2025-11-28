import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Star, Check, ArrowRight } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Artificial Turf Installation Matthews NC | Turf Professionals",
  description:
    "Professional artificial turf installation in Matthews NC. Beautiful synthetic grass for residential lawns, commercial properties & putting greens. Free quotes! Call (704) 956-2687",
  keywords: [
    "artificial turf installation Matthews NC",
    "synthetic grass Matthews",
    "turf installers Matthews",
    "artificial grass company Matthews NC",
    "residential turf Matthews",
    "commercial turf Matthews",
    "putting green Matthews NC",
  ],
  openGraph: {
    title: "Artificial Turf Installation Matthews NC | Turf Professionals",
    description:
      "Professional artificial turf installation in Matthews NC. Beautiful synthetic grass for homes & businesses.",
    images: [{ url: "/hero-homepage-new.png" }],
  },
}

const neighborhoods = [
  "Downtown Matthews",
  "Sardis Woods",
  "Providence Plantation",
  "Fairview",
  "Mint Hill (nearby)",
  "Indian Trail (nearby)",
]

const nearbyAreas = ["Charlotte", "Mint Hill", "Indian Trail", "Stallings", "Weddington"]

const services = [
  {
    title: "Residential Turf Installation",
    description:
      "Transform your Matthews home with beautiful, maintenance-free artificial turf. Perfect for backyards, front yards & pool areas.",
    link: "/residential-lawn-turf",
    icon: "🏡",
  },
  {
    title: "Commercial Turf Installation",
    description:
      "Professional commercial turf for Matthews businesses, restaurants & office parks. Durable, low-maintenance synthetic grass.",
    link: "/commercial-turf",
    icon: "🏢",
  },
  {
    title: "Putting Green Installation",
    description:
      "Custom backyard putting greens in Matthews NC with professional-grade synthetic turf and true ball roll.",
    link: "/putting-greens",
    icon: "⛳",
  },
]

const benefits = [
  "No Mowing Required",
  "Water Conservation",
  "Pet & Kid Friendly",
  "Year-Round Green",
  "Low Maintenance",
  "Drought Resistant",
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turf Professionals - Matthews NC",
  image: "https://www.turf-professionals.com/hero-homepage-new.png",
  "@id": "https://www.turf-professionals.com/matthews",
  url: "https://www.turf-professionals.com/matthews",
  telephone: "+1-704-956-2687",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Matthews",
    addressRegion: "NC",
    postalCode: "28105",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Matthews, NC" },
    { "@type": "City", name: "Mint Hill, NC" },
    { "@type": "City", name: "Indian Trail, NC" },
  ],
}

export default function MatthewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={localBusinessSchema} />

      {/* Hero Section with Image */}
      <section className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/beautiful-artificial-turf-backyard-in-matthews-nc-.jpg"
            alt="Professional artificial turf installation in Matthews NC"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 text-turf-green" />
                <span className="text-sm font-medium text-turf-green">Serving Matthews NC</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-white">
                Artificial Turf Installation <span className="block mt-2">Matthews NC</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed">
                Transform your Matthews property with professional synthetic grass. Beautiful, maintenance-free lawns
                that stay green year-round.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {benefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-turf-green text-white hover:bg-turf-green-dark text-lg px-8">
                  <Link href="/contact">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
            </div>

            {/* Right Column - Trust Badge */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Floating Trust Badge */}
              <div className="bg-white text-turf-green-dark rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-2xl">5.0</div>
                    <div className="text-sm text-gray-600">50+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See The Matthews Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from Matthews homeowners who chose artificial turf
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/patchy-brown-natural-grass-lawn-before-artificial-.jpg"
                  alt="Natural grass lawn in Matthews NC before artificial turf installation - patchy and brown"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                  Before
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Patchy, high-maintenance natural grass requiring constant watering</p>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="overflow-hidden border-4 border-turf-green">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/lush-green-artificial-turf-lawn-after-professional.jpg"
                  alt="Beautiful artificial turf lawn in Matthews NC after professional installation - lush and green"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-turf-green text-white px-4 py-2 rounded-full font-bold">
                  After
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Beautiful, maintenance-free artificial turf that stays green year-round</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-turf-green hover:bg-turf-green-dark text-lg px-8">
              <Link href="/contact">
                Transform Your Lawn Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proudly Serving Matthews & Nearby Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to provide professional{" "}
              <Link href="/residential-lawn-turf" className="text-turf-green hover:underline font-semibold">
                artificial turf installation
              </Link>{" "}
              throughout Matthews and surrounding communities.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6 text-turf-green" />
              Matthews Neighborhoods & Nearby Cities
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Matthews Turf Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial turf solutions for every Matthews property
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Button asChild variant="outline" className="w-full group bg-transparent">
                    <Link href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Matthews Residents Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold">5.0 Stars - Rated by Local Homeowners</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-t-4 border-t-turf-green">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "Excellent work on our Matthews backyard! The turf looks amazing and the installation was
                  professional. Our kids and dog absolutely love it. Highly recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-turf-green-light flex items-center justify-center text-turf-green-dark font-bold text-xl">
                    J
                  </div>
                  <div>
                    <p className="font-bold">Jennifer W.</p>
                    <p className="text-sm text-gray-500">Matthews, NC</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-turf-green">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "Our Matthews putting green is incredible! Perfect ball roll and looks like a real golf course. Turf
                  Professionals exceeded our expectations in every way."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-turf-green-light flex items-center justify-center text-turf-green-dark font-bold text-xl">
                    R
                  </div>
                  <div>
                    <p className="font-bold">Robert L.</p>
                    <p className="text-sm text-gray-500">Matthews, NC</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-turf-green">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "Best decision for our commercial property in Matthews. Low maintenance, looks great year-round, and
                  our tenants absolutely love the transformation!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-turf-green-light flex items-center justify-center text-turf-green-dark font-bold text-xl">
                    D
                  </div>
                  <div>
                    <p className="font-bold">David K.</p>
                    <p className="text-sm text-gray-500">Matthews Property Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-turf-green-extralight">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Matthews Chooses Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-turf-green flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <span className="font-semibold text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-turf-green to-turf-green-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Ready to Transform Your Matthews Property?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed">
              Join hundreds of satisfied Matthews homeowners. Get a free, no-obligation quote from Matthews' trusted{" "}
              <Link href="/putting-greens" className="underline hover:text-gray-200 font-semibold">
                artificial turf installation
              </Link>{" "}
              experts today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-turf-green hover:bg-gray-100 text-lg px-10 py-6">
                <Link href="/contact">
                  Request Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6"
              >
                <Link href="tel:+17049562687">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (704) 956-2687
                </Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Free Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
