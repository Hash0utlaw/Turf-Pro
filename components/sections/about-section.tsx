import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const qualities = [
    "Premium Quality Materials",
    "Expert Craftsmanship",
    "Customer Satisfaction Guaranteed",
    "Reliable & Professional Service",
  ]

  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 flex items-center justify-center">
            <Image
              src="/turf-pros-logo.png"
              alt="Turf Professionals Logo"
              width={400}
              height={400}
              className="rounded-2xl object-contain"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">About Turf Professionals</h2>
            <p className="text-base sm:text-lg text-brand-gray-text leading-relaxed">
              At Turf Professionals, we are passionate about transforming outdoor spaces with high-quality artificial
              turf. With years of experience in the industry, our dedicated team combines expertise with a commitment to
              excellence, ensuring every project meets the highest standards of beauty and durability.
            </p>
            <p className="text-base sm:text-lg text-brand-gray-text leading-relaxed">
              We believe in using only the best materials and the latest installation techniques to deliver results that
              not only look fantastic but also stand the test of time. Our focus is on providing reliable, professional
              service and achieving complete customer satisfaction.
            </p>
            <ul className="space-y-3">
              {qualities.map((quality) => (
                <li key={quality} className="flex items-center text-brand-gray-text text-sm sm:text-base">
                  <CheckCircle className="h-5 w-5 text-turf-green mr-3 flex-shrink-0" />
                  <span>{quality}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-turf-green hover:bg-turf-green-dark text-white shadow-soft hover:shadow-soft-md transition-shadow w-full sm:w-auto"
              >
                <Link href="#contact">Learn More About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
