import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, PawPrint, ClubIcon as GolfIcon } from "lucide-react" // Using GolfIcon as a placeholder for putting greens

const services = [
  {
    icon: Zap,
    title: "Turf Installation",
    description:
      "Professional installation of high-quality artificial turf for residential and commercial properties. Durable, beautiful, and eco-friendly.",
    href: "/#contact", // General installation might still point to a contact section or a general services page if created
  },
  {
    icon: GolfIcon,
    title: "Backyard Putting Greens",
    description:
      "Custom-designed putting greens to perfect your short game. We use premium turf for a true roll and realistic feel.",
    href: "/putting-greens",
  },
  {
    icon: PawPrint, // Changed icon to PawPrint for Pet-Friendly Turf
    title: "Pet-Friendly Turf", // Updated title
    description:
      "Safe, durable, and easy-to-clean artificial turf solutions designed specifically for your furry friends. No more muddy paws!", // Updated description
    href: "/pet-friendly-turf",
  },
  // You can add a card for Recreational Turf here if you want it on the homepage services grid
  // {
  //   icon: Users, // Example icon for Recreational Turf
  //   title: "Recreational & Sports Turf",
  //   description: "High-performance turf for playgrounds, sports courts, and active areas. Safe, durable, and versatile.",
  //   href: "/recreational-turf",
  // },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Our Services</h2>
          <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-brand-gray-text md:text-xl">
            Delivering excellence in every turf project, from installation to maintenance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} passHref legacyBehavior>
              <a className="block rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <Card className="bg-card text-card-foreground rounded-2xl shadow-soft hover:shadow-soft-md transition-all h-full flex flex-col overflow-hidden group">
                  <CardHeader className="p-6 items-center text-center">
                    <div className="p-4 bg-turf-green-extralight rounded-full mb-4 inline-block transition-transform group-hover:scale-110">
                      <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-turf-green" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-semibold group-hover:text-turf-green transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 text-center flex-grow">
                    <CardDescription className="text-brand-gray-text text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 pt-2 text-center">
                    <span className="text-sm font-medium text-turf-green group-hover:underline">Learn More &rarr;</span>
                  </div>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
