import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"
import type { ReactNode } from "react"

interface Feature {
  icon: ReactNode
  text: string
}

interface GalleryImage {
  src: string
  alt: string
}

interface Testimonial {
  name: string
  text: string
  stars: number
}

export interface ServicePageTemplateProps {
  heroImageSrc: string
  heroImageAlt: string
  heroTitle: string
  heroSubtitle: string
  heroCtaText: string
  benefitsTitle: string
  benefitsSubtitle: string
  benefits: string[]
  featuresImageSrc: string
  featuresImageAlt: string
  featuresTitle: string
  featuresText: string
  featuresList: Feature[]
  galleryTitle: string
  gallerySubtitle: string
  galleryImages: GalleryImage[]
  testimonialsTitle?: string
  testimonials?: Testimonial[]
  finalCtaTitle: string
  finalCtaSubtitle: string
  finalCtaButtonText: string
}

export default function ServicePageTemplate({
  heroImageSrc,
  heroImageAlt,
  heroTitle,
  heroSubtitle,
  heroCtaText,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  featuresImageSrc,
  featuresImageAlt,
  featuresTitle,
  featuresText,
  featuresList,
  galleryTitle,
  gallerySubtitle,
  galleryImages,
  testimonials,
  testimonialsTitle,
  finalCtaTitle,
  finalCtaSubtitle,
  finalCtaButtonText,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src={heroImageSrc || "/placeholder.svg"}
          alt={heroImageAlt}
          fill
          className="object-cover brightness-[0.6]"
          quality={85}
          priority
        />
        <div className="relative z-10 container px-4 md:px-6 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-md text-balance">
            {heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-sm text-balance">
            {heroSubtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-turf-green hover:bg-turf-green-dark text-white px-8 py-3 h-12 text-lg rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
          >
            <Link href="/contact">{heroCtaText}</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              {benefitsTitle}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text text-balance">{benefitsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-turf-green mt-1 flex-shrink-0" />
                <p className="text-brand-gray-text text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Details Section */}
      <section className="py-12 md:py-24 bg-brand-gray-light">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <Image
                src={featuresImageSrc || "/placeholder.svg"}
                alt={featuresImageAlt}
                width={600}
                height={450}
                className="rounded-2xl shadow-soft-md object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                {featuresTitle}
              </h2>
              <p className="text-lg text-brand-gray-text leading-relaxed">{featuresText}</p>
              <ul className="space-y-3">
                {featuresList.map((feature, index) => (
                  <li key={index} className="flex items-center text-brand-gray-text">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              {galleryTitle}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text text-balance">{gallerySubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-md transition-shadow"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Conditional) */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-12 md:py-24 bg-brand-gray-light">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                {testimonialsTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card text-card-foreground rounded-2xl shadow-soft p-6">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex">
                      {Array(testimonial.stars)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <p className="text-brand-gray-text italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <p className="font-semibold text-foreground">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-12 md:py-24 bg-turf-green-extralight">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-turf-green-dark text-balance">
            {finalCtaTitle}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-brand-gray-text text-balance">{finalCtaSubtitle}</p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-turf-green hover:bg-turf-green-dark text-white px-10 py-4 h-14 text-xl rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
            >
              <Link href="/contact">{finalCtaButtonText}</Link>
            </Button>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  )
}
