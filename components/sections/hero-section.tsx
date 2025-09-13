import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden bg-gray-800">
      <Image
        src="/beautiful-modern-backyard-with-artificial-turf-law.jpg"
        alt="Stunning modern backyard with a pristine artificial turf lawn at sunset"
        fill
        style={{ objectFit: "cover" }}
        quality={85}
        priority
        className="brightness-[0.4]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-[1]"></div>
      <div className="relative z-10 container px-4 md:px-6 space-y-6 md:space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
          Transform Your Outdoors with Premium Turf
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-balance md:text-xl lg:text-2xl text-gray-100 drop-shadow-md [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)]">
          Experience the beauty and convenience of high-quality artificial grass. Perfect lawns, stunning putting
          greens, and low-maintenance solutions.
        </p>
        <div>
          <Button
            asChild
            size="lg"
            className="bg-turf-green hover:bg-turf-green-dark text-white px-6 py-3 sm:px-8 sm:py-3 h-auto sm:h-12 text-base sm:text-lg rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
          >
            <Link href="/contact">Get a Free Quote Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
