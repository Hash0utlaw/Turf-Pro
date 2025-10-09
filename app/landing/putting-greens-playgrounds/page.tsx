import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, Trophy, Heart, Shield, Sparkles, Star, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Putting Greens & Playground Turf Installation | Turf Pros Charlotte NC",
  description:
    "Transform your backyard with custom putting greens and safe playground turf. Perfect for families who want recreation and fun at home. Professional installation in Charlotte and surrounding areas. Get your free quote today!",
  openGraph: {
    title: "Custom Putting Greens & Playground Turf | Turf Pros",
    description: "Bring the fun home with custom putting greens and safe playground turf for your backyard.",
    images: [{ url: "/portfolio/backyard-tennis-court-putting-green-combo.jpg" }],
  },
}

export default function PuttingGreensPlaygroundsLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden bg-gray-800">
        <Image
          src="/portfolio/backyard-tennis-court-putting-green-combo.jpg"
          alt="Custom backyard putting green and recreational area"
          fill
          style={{ objectFit: "cover" }}
          quality={90}
          priority
          className="brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-[1]"></div>
        <div className="relative z-10 container px-4 md:px-6 space-y-6 md:space-y-8 max-w-5xl">
          <div className="inline-block bg-turf-green/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✓ Charlotte's Premier Putting Green & Playground Specialists
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
            Bring the Fun Home with Custom Putting Greens & Playgrounds
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-balance md:text-2xl lg:text-3xl text-gray-100 drop-shadow-md [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)] font-medium">
            Professional-Grade Putting Greens & Safe Playground Surfaces for Your Backyard
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
          <p className="text-sm text-gray-200 pt-2">Free consultation • Custom designs • Professional installation</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground mb-4">
              Why Add a Putting Green or Playground?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create lasting memories and add value to your home with custom recreational spaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Perfect Your Golf Game</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practice anytime with a professional-grade putting green in your backyard. Improve your short game and
                  lower your scores.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Family Entertainment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create a backyard destination for family fun. Host putting competitions, parties, and make lasting
                  memories at home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Safe for Kids</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Soft, cushioned playground turf provides a safe landing surface. Reduce injuries and give parents
                  peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Increase Home Value</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Custom putting greens and playgrounds are premium features that significantly boost property value and
                  appeal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Year-Round Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike natural grass, artificial turf performs perfectly in all weather. Play and practice 365 days a
                  year.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-turf-green transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-turf-green/10 rounded-lg flex items-center justify-center">
                  <Check className="h-6 w-6 text-turf-green" />
                </div>
                <h3 className="text-xl font-bold">Low Maintenance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No mowing, watering, or fertilizing required. Just brush occasionally and enjoy your investment for
                  years.
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
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by Charlotte Area Families</h2>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our backyard putting green is the best investment we've made. The kids love it, and I've improved
                    my golf game significantly!"
                  </p>
                  <p className="font-semibold">- John M., Matthews</p>
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
                    "The playground turf is perfect for our kids. It's soft, safe, and stays clean. No more muddy shoes
                    or grass stains!"
                  </p>
                  <p className="font-semibold">- Sarah T., Huntersville</p>
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
                    "Turf Pros designed an amazing putting green with multiple holes. Professional quality and
                    installation. Highly recommend!"
                  </p>
                  <p className="font-semibold">- David R., Lake Norman</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Custom Putting Greens & Playgrounds We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple practice greens to elaborate multi-hole courses and safe playground surfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/backyard-tennis-court-putting-green-combo.jpg"
                alt="Backyard tennis court and putting green combination"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/putting-green-night-lights.jpg"
                alt="Illuminated putting green with night lights"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/putting-green-waterfall-pool-hardscape.jpg"
                alt="Poolside putting green with waterfall feature"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/playground-putting-green-pet-friendly.jpg"
                alt="Family playground and putting green combination"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/wooded-backyard-putting-green-turf.jpg"
                alt="Wooded backyard putting green retreat"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/backyard-playground-general-turf.jpg"
                alt="Safe playground turf installation"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-brand-gray-light">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Custom Putting Green Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-turf-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Professional-Grade Turf</p>
                      <p className="text-muted-foreground">
                        True roll and realistic ball response for authentic practice
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-turf-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Custom Contours & Breaks</p>
                      <p className="text-muted-foreground">
                        Design challenging slopes and undulations to match your skill level
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-turf-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Multiple Hole Positions</p>
                      <p className="text-muted-foreground">Practice different putts with 3-9 hole configurations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-turf-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Sand Traps & Fringe</p>
                      <p className="text-muted-foreground">
                        Add realistic bunkers and fringe areas for complete practice
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Playground Turf Benefits</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-turf-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Impact-Absorbing Padding</p>
                      <p className="text-muted-foreground">Cushioned underlayment reduces fall injuries by up to 50%</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-turf-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Antimicrobial Protection</p>
                      <p className="text-muted-foreground">
                        Built-in protection against bacteria and odors for cleaner play
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-turf-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">No Mud or Mess</p>
                      <p className="text-muted-foreground">Kids stay clean even after rain - no more muddy clothes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-turf-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Pet-Friendly Design</p>
                      <p className="text-muted-foreground">Durable enough for pets and kids to play together safely</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Installation Process</h2>
            <p className="text-xl text-muted-foreground">From design to completion in 2-3 weeks</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-turf-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold">Free Design Consultation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We visit your property, discuss your vision, and create a custom design with detailed quote.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-turf-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold">Site Preparation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excavate, grade, and install proper drainage and base materials for long-lasting performance.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-turf-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold">Professional Installation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Install premium turf, create contours, add features, and ensure perfect seaming and finishing.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-turf-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold">Final Walkthrough</h3>
              <p className="text-muted-foreground leading-relaxed">
                We review the completed project with you and provide care instructions for years of enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-turf-green text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Ready to Create Your Dream Backyard?
            </h2>
            <p className="text-xl md:text-2xl text-balance opacity-95">
              Join families across Charlotte, Matthews, Concord, Huntersville, and Lake Norman who have transformed
              their backyards into recreational destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-turf-green px-8 py-6 h-auto text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
              >
                <Link href="/contact">Get Your Free Design Consultation</Link>
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
              <p className="text-lg opacity-90">✓ Custom designs tailored to your space</p>
              <p className="text-lg opacity-90">✓ Professional installation guaranteed</p>
              <p className="text-lg opacity-90">✓ Serving Charlotte & surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-turf-green text-white shadow-2xl border-t-4 border-turf-green-dark">
        <div className="container px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold">Ready to Bring the Fun Home?</p>
              <p className="text-sm opacity-90">Get your free design consultation - No obligation</p>
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
