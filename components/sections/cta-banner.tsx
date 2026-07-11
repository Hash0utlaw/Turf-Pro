import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CtaBanner() {
  return (
    <section id="contact-banner" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background photo */}
      <Image
        src="/portfolio/artificial-turf-putting-green-install-13.webp"
        alt="Lush backyard putting green and lawn by Atlantic Turf Specialists"
        fill
        className="object-cover brightness-[0.3]"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[1]" />

      <div className="relative z-10 container px-4 md:px-8">
        <div className="max-w-2xl">
          <p className="text-turf-green text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Free Consultation
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white text-balance leading-tight mb-6">
            Ready to Ditch<br />the Lawnmower?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg text-balance">
            Get a free, no-obligation quote from Charlotte&apos;s most trusted artificial turf team. Most quotes
            delivered within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-turf-green hover:bg-turf-green-dark text-white h-14 px-10 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-14 px-8 text-lg rounded-lg transition-all"
            >
              <Link href="/portfolio">See All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
