import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Droplets, Scissors, DollarSign, Sparkles, Star, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Low Maintenance Artificial Turf for Residential Yards | Turf Pros Charlotte NC",
  description:
    "Transform your yard with beautiful, low-maintenance artificial turf. No mowing, no watering, no hassle. Perfect green lawns year-round in Charlotte and surrounding areas. Get your free quote today!",
  openGraph: {
    title: "Low Maintenance Artificial Turf for Residential Yards | Turf Pros",
    description: "Beautiful, hassle-free lawns with artificial turf. No mowing, no watering, no maintenance.",
    images: [{ url: "/portfolio/residential-backyard-artificial-turf-landscaping.jpg" }],
  },
}

export default function ResidentialLowMaintenanceLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden bg-gray-800">
        <Image
          src="/portfolio/residential-backyard-artificial-turf-landscaping.jpg"
          alt="Beautiful low maintenance artificial turf residential yard"
          fill
          style={{ objectFit: "cover" }}
          quality={90}
          priority
          className="brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-[1]"></div>
        <div className="relative z-10 container px-4 md:px-6 space-y-6 md:space-y-8 max-w-5xl">
          <div className="inline-block bg-turf-green/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✓ Trusted by 500+ Charlotte Area Homeowners
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
            Say Goodbye to Lawn Maintenance Forever
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-balance md:text-2xl lg:text-3xl text-gray-100 drop-shadow-md [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)] font-medium">
            Beautiful, Green Lawns Year-Round. Zero Mowing. Zero Watering. Zero Hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-turf-green hover:bg-turf-green-dark text-white px-8 py-6 h-auto text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              <Link href="/contact">Get Your Free Quote Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/95 hover:bg-white text-gray-900 border-2 border-white px-8 py-6 h-auto text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              <Link href="tel:704-956-2687">
                <Phone className="mr-2 h-5 w-5" />
                Call: (704) 956-2687
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-200 pt-2">Free consultation • No obligation • Same-day quotes available</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground mb-4">
              Why Homeowners Choose Artificial Turf
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reclaim your weekends and enjoy a perfect lawn without the endless maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Scissors className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">No More Mowing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Never push a mower again. Save 2-4 hours every week and eliminate the cost of lawn equipment and gas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Zero Watering Required</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Save thousands of gallons of water annually. Lower your water bill by up to $1,200 per year.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Reclaim Your Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Spend your weekends doing what you love, not maintaining your lawn. Over 100 hours saved per year.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Perfect Year-Round</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lush, green grass 365 days a year. No brown patches, no mud, no dead spots—even in winter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Long-Term Savings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No fertilizers, pesticides, or lawn services. Your investment pays for itself in 3-5 years.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Check className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Pet & Kid Friendly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Durable, safe, and easy to clean. Perfect for active families and pets who love to play outside.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Rated 5 Stars by Charlotte Homeowners</h2>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "I was referred to this company, I knew the quality was going to be good but they blew my mind with
                    how fast and amazing it all turned out."
                  </p>
                  <p className="font-semibold">- Dwayne Matthews</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "The upfront cost of artificial turf is saving me hundreds of dollars a month on landscaping
                    maintenance. I highly recommend!"
                  </p>
                  <p className="font-semibold">- Mike Bradley</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "These guys crushed it! Made my yard look insanely good. Super chill crew, showed up on time, got it
                    done right."
                  </p>
                  <p className="font-semibold">- Zack Malal</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Real Transformations in Charlotte & Surrounding Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped homeowners in Matthews, Concord, Huntersville, and Lake Norman create their dream
              yards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/residential-backyard-artificial-turf-landscaping.jpg"
                alt="Beautiful residential artificial turf installation"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/basic-turf-installation-backyard.jpg"
                alt="Low maintenance backyard turf installation"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/hardscape-basic-turf-backyard.jpg"
                alt="Turf integrated with hardscape design"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/pool-turf.jpg"
                alt="Pool area with artificial turf"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/driveway-concrete-general-turf.jpg"
                alt="Modern turf installation with concrete"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/general-turf-installation.jpg"
                alt="Professional turf installation process"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-brand-gray-light">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Simple 3-Step Process</h2>
            <p className="text-xl text-muted-foreground">From quote to completion in as little as 1-2 weeks</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-turf-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-2xl font-bold">Free Consultation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We visit your property, measure your space, and provide a detailed quote with no obligation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-turf-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-2xl font-bold">Professional Installation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our expert team prepares your ground, installs premium turf, and ensures perfect drainage and seaming.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-turf-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-2xl font-bold">Enjoy Your New Yard</h3>
              <p className="text-muted-foreground leading-relaxed">
                Relax and enjoy your beautiful, maintenance-free lawn backed by our quality guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-turf-green text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Ready to Transform Your Yard?</h2>
            <p className="text-xl md:text-2xl text-balance opacity-95">
              Join hundreds of satisfied homeowners in Charlotte, Matthews, Concord, Huntersville, and Lake Norman who
              have made the switch to low-maintenance artificial turf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-turf-green px-8 py-6 h-auto text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
              >
                <Link href="/contact">Get Your Free Quote Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-6 h-auto text-lg rounded-lg transition-all font-semibold"
              >
                <Link href="tel:704-956-2687">
                  <Phone className="mr-2 h-5 w-5" />
                  (704) 956-2687
                </Link>
              </Button>
            </div>
            <div className="pt-6 space-y-2">
              <p className="text-lg opacity-90">✓ Free consultation & quote</p>
              <p className="text-lg opacity-90">✓ Professional installation guaranteed</p>
              <p className="text-lg opacity-90">✓ Serving Charlotte & surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-turf-green text-white shadow-2xl border-t-4 border-turf-green-dark">
        <div className="container px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold">Ready for a Maintenance-Free Lawn?</p>
              <p className="text-sm opacity-90">Get your free quote today - No obligation</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-turf-green px-6 py-3 h-auto font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 h-auto font-bold transition-all"
              >
                <Link href="tel:704-956-2687">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 sm:h-20" />
    </div>
  )
}
