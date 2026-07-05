import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "5★", label: "Average Rating" },
  { value: "Charlotte", label: "Based In NC" },
  { value: "100%", label: "Satisfaction Guaranteed" },
]

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/hero-homepage-new.png"
        alt="Professional artificial turf installation in Charlotte NC"
        fill
        style={{ objectFit: "cover" }}
        quality={90}
        priority
        className="brightness-[0.45]"
      />

      {/* Layered gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-[1]" />

      {/* Main content — left-aligned, sitting above the fold */}
      <div className="relative z-10 container px-4 md:px-8 pb-16 md:pb-24 pt-32">
        <div className="max-w-4xl">
          <p className="text-turf-green text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
            Charlotte&apos;s Premier Installer
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl text-balance mb-6 [text-shadow:_0_2px_20px_rgb(0_0_0_/_60%)]">
            Transform Your&nbsp;Yard.<br />
            <span className="text-turf-green">Zero Maintenance.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-10 text-balance">
            Premium artificial turf for residential lawns, commercial properties, and custom putting greens across the
            greater Charlotte area.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-turf-green hover:bg-turf-green-dark text-white h-14 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-14 px-8 text-lg rounded-lg transition-all"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats bar anchored to bottom of hero */}
      <div className="relative z-10 w-full bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-5 px-4 text-center">
                <span className="text-2xl md:text-3xl font-extrabold text-turf-green leading-none">{stat.value}</span>
                <span className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
