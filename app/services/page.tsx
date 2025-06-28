import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClubIcon as GolfIcon, PawPrint, Zap, Users, Wrench, Building } from "lucide-react"
import type { Metadata } from "next"
import ContactDialog from "@/components/contact-dialog"
import { Toaster } from "@/components/ui/toaster"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Artificial Turf Services | Turf Pros",
    description:
      "Explore a comprehensive range of artificial turf services from Turf Pros, including putting greens, pet-friendly solutions, recreational turf, and professional installation.",
    keywords: [
      "artificial turf services",
      "synthetic grass solutions",
      "turf installation",
      "putting greens",
      "pet turf",
      "sports turf",
      "commercial turf",
      "residential turf",
    ],
    openGraph: {
      title: "Comprehensive Artificial Turf Services | Turf Pros",
      description: "Discover all the ways Turf Pros can transform your outdoor and indoor spaces with premium turf.",
      images: [
        {
          url: "/all-services-overview.png",
          width: 1200,
          height: 630,
          alt: "Overview of Various Turf Applications",
        },
      ],
    },
  }
}

const allServicesList = [
  {
    icon: GolfIcon,
    title: "Backyard Putting Greens",
    description: "Custom-designed golf greens for practice and leisure, right in your backyard.",
    href: "/putting-greens",
    imgSrc: "/luxury-backyard-putting-green.png",
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly Turf",
    description: "Safe, durable, and easy-to-clean turf solutions perfect for your furry companions.",
    href: "/pet-friendly-turf",
    imgSrc: "/happy-dog-turf.png",
  },
  {
    icon: Users,
    title: "Recreational & Sports Turf",
    description: "High-performance turf for playgrounds, sports courts, and active areas.",
    href: "/recreational-turf",
    imgSrc: "/recreational-sports-turf.png",
  },
  {
    icon: Zap,
    title: "Residential Lawn Turf",
    description: "Beautiful, low-maintenance artificial lawns that stay green all year round.",
    href: "/residential-lawn-turf",
    imgSrc: "/residential-lawn-hero.png",
  },
  {
    icon: Building,
    title: "Commercial Turf Solutions",
    description: "Durable and attractive turf for businesses, public spaces, and commercial landscapes.",
    href: "/commercial-turf",
    imgSrc: "/commercial-turf-hero.png",
  },
  {
    icon: Wrench,
    title: "General Turf Installation",
    description: "Expert installation for any artificial turf project, ensuring a flawless finish.",
    href: "/general-turf-installation",
    imgSrc: "/turf-installation-process.png",
  },
]

export default function AllServicesPage() {
  return (
    <>
      <section className="py-12 md:py-20 bg-brand-gray-light">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-turf-green-dark">
            Our Comprehensive Turf Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray-text md:text-xl">
            Discover how Turf Professionals can transform your space with our wide range of premium artificial turf
            solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServicesList.map((service) => (
              <Card
                key={service.title}
                className="bg-card text-card-foreground rounded-2xl shadow-soft hover:shadow-soft-md transition-all h-full flex flex-col overflow-hidden group"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.imgSrc || "/placeholder.svg"}
                    alt={`Image for ${service.title}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-turf-green-extralight rounded-full mr-3">
                      <service.icon className="h-6 w-6 text-turf-green" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-turf-green transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-brand-gray-text text-sm leading-relaxed min-h-[60px]">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 mt-auto">
                  <Button
                    asChild
                    variant="default"
                    className="w-full bg-turf-green hover:bg-turf-green-dark text-white shadow-soft hover:shadow-soft-md transition-shadow"
                  >
                    <Link href={service.href}>
                      Learn More
                      <span aria-hidden="true" className="ml-1">
                        {" "}
                        &rarr;
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-turf-green-extralight">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-turf-green-dark">
            Ready to Start Your Turf Project?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-brand-gray-text md:text-xl">
            No matter the scope or type of turf you need, our experts are here to help.
          </p>
          <div className="mt-8">
            <ContactDialog
              triggerButtonText="Get Your Free Consultation"
              className="bg-turf-green hover:bg-turf-green-dark text-white px-10 py-4 h-14 text-xl rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
            />
          </div>
        </div>
      </section>
      <Toaster />
    </>
  )
}
