import Image from "next/image"
import ContactDialog from "@/components/contact-dialog"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/premium-artificial-turf-backyard.png"
        alt="Lush artificial turf in a beautiful backyard setting"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
        className="brightness-[0.6]"
      />
      <div className="relative z-10 container px-4 md:px-6 space-y-6 md:space-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          Transform Your Outdoors with Premium Turf
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-200 drop-shadow-sm">
          Experience the beauty and convenience of high-quality artificial grass. Perfect lawns, stunning putting
          greens, and low-maintenance solutions.
        </p>
        <div>
          <ContactDialog
            triggerButtonText="Get a Free Quote Today"
            triggerButtonVariant="default"
            className="bg-turf-green hover:bg-turf-green-dark text-white px-8 py-3 h-12 text-lg rounded-lg shadow-soft-md hover:shadow-soft-lg transition-all"
          />
        </div>
      </div>
    </section>
  )
}
