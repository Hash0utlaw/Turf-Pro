import Link from "next/link"
import Image from "next/image"

const services = [
  {
    imageUrl: "/portfolio/artificial-turf-side-yard-install-02.webp",
    imageAlt: "Lush residential artificial turf lawn installation in Charlotte NC backyard",
    title: "Residential Lawn Turf",
    description: "A stunning, permanently green yard with zero mowing, watering, or upkeep — ever.",
    href: "/residential-lawn-turf",
    tag: "Most Popular",
  },
  {
    imageUrl: "/portfolio/school-commerical-field-turf.jpg",
    imageAlt: "Commercial artificial turf field installation in Charlotte NC",
    title: "Commercial Turf",
    description: "Durable, professional-grade turf that elevates any business property year-round.",
    href: "/commercial-turf",
    tag: null,
  },
  {
    imageUrl: "/portfolio/artificial-turf-putting-green-night-02.webp",
    imageAlt: "Custom multi-hole backyard putting green with night lighting",
    title: "Backyard Putting Greens",
    description: "Custom-designed greens with true, realistic roll for your short game — day or night.",
    href: "/putting-greens",
    tag: "Fan Favorite",
  },
  {
    imageUrl: "/portfolio/artificial-turf-side-yard-install-03.webp",
    imageAlt: "Pet-friendly artificial turf lawn safe for dogs in Charlotte NC",
    title: "Pet-Friendly Turf",
    description: "Safe, easy-to-clean synthetic grass engineered specifically for dogs and outdoor pets.",
    href: "/pet-friendly-turf",
    tag: null,
  },
  {
    imageUrl: "/portfolio/grace-covenant-church-playground-04.webp",
    imageAlt: "Recreational and sports artificial turf field installation in Charlotte NC",
    title: "Recreational & Sports Turf",
    description: "High-performance surfaces for playgrounds, courts, and active outdoor areas.",
    href: "/recreational-turf",
    tag: null,
  },
  {
    imageUrl: "/portfolio/artificial-turf-side-yard-pathway-install-01.webp",
    imageAlt: "Professional general artificial turf installation by Atlantic Turf Specialists",
    title: "General Turf Installation",
    description: "Expert installation for any turf project — residential, commercial, or custom.",
    href: "/general-turf-installation",
    tag: null,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-28 bg-background">
      <div className="container px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-turf-green text-sm font-semibold tracking-[0.2em] uppercase mb-2">What We Do</p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground text-balance">
              Our Services
            </h2>
          </div>
          <p className="text-brand-gray-text text-base md:text-lg max-w-sm leading-relaxed">
            Every project is built to last — from first cut to final brushing.
          </p>
        </div>

        {/* Grid: 2 large + 4 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative overflow-hidden rounded-2xl block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                i < 2 ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative w-full overflow-hidden ${i < 2 ? "h-72 md:h-80" : "h-56 md:h-64"}`}>
                <Image
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Tag badge */}
                {service.tag && (
                  <span className="absolute top-4 left-4 bg-turf-green text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                )}

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-turf-green transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {service.description}
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-turf-green uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
