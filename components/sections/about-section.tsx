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
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?width=600&height=450"
              alt="Turf Professionals team working on an installation"
              width={600}
              height={450}
              className="rounded-2xl shadow-soft-md object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              About Turf Professionals
            </h2>
            <p className="text-lg text-brand-gray-text leading-relaxed">
              At Turf Professionals, we are passionate about transforming outdoor spaces with high-quality artificial
              turf. With years of experience in the industry, our dedicated team combines expertise with a commitment to
              excellence, ensuring every project meets the highest standards of beauty and durability.
            </p>
            <p className="text-lg text-brand-gray-text leading-relaxed">
              We believe in using only the best materials and the latest installation techniques to deliver results that
              not only look fantastic but also stand the test of time. Our focus is on providing reliable, professional
              service and achieving complete customer satisfaction.
            </p>
            <ul className="space-y-3">
              {qualities.map((quality) => (
                <li key={quality} className="flex items-center text-brand-gray-text">
                  <CheckCircle className="h-5 w-5 text-turf-green mr-3 flex-shrink-0" />
                  <span>{quality}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-turf-green hover:bg-turf-green-dark text-white shadow-soft hover:shadow-soft-md transition-shadow"
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
