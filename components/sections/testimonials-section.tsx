"use client"

import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dwayne Matthews",
    stars: 5,
    text: "I was referred to this company, I knew the quality was going to be good but they blew my mind with how fast and amazing it all turned out. Would highly recommend them for any of your turf needs.",
  },
  {
    name: "Athanasios Muder",
    stars: 5,
    text: "Great job guys, I came home to beautiful turf installed in the front and back yard. Couldn't have asked for a better experience. Now it's time for our family and pups to enjoy our new yard.",
  },
  {
    name: "Mike Bradley",
    stars: 5,
    text: "The upfront cost of artificial turf is saving me hundreds of dollars a month on landscaping maintenance at my Airbnb. I highly recommend!",
  },
  {
    name: "Annastacia Slater",
    stars: 5,
    text: "Very trustworthy crew, and very attentive to detail.",
  },
  {
    name: "Sergey Gorelyshev",
    stars: 5,
    text: "Beautiful turf installed for my pup. Fast, reliable and fair priced.",
  },
  {
    name: "Zack Malal",
    stars: 5,
    text: "These guys crushed it! Atlantic Turf Specialists made my yard look insanely good. Super chill crew, showed up on time, got it done right.",
  },
  {
    name: "Austin Schoenbaum",
    stars: 5,
    text: "Fantastic service! Quick and affordable.",
  },
  {
    name: "Alejandro Ramy",
    stars: 5,
    text: "Used for my investment property. 10/10 recommend. Turfed complete back yard and looks amazing.",
  },
  {
    name: "HSL Powersports",
    stars: 5,
    text: "Not the cheapest option, but the quality of work speaks for itself!",
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array(5).fill(0).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const plugin = React.useRef(Autoplay({ delay: 4500, stopOnInteraction: true }))

  return (
    <section id="testimonials" className="py-16 md:py-28 bg-card border-y border-border overflow-hidden">
      <div className="container px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-turf-green text-sm font-semibold tracking-[0.2em] uppercase mb-2">Real Reviews</p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground text-balance">
              Don&apos;t Take Our Word For It
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-foreground font-bold text-lg">5.0</span>
            <span className="text-brand-gray-text text-sm">on Google</span>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-background border border-border rounded-2xl p-6 h-full flex flex-col hover:border-turf-green/40 transition-colors">
                  <StarRow count={t.stars} />
                  <p className="text-brand-gray-text text-base leading-relaxed flex-grow">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-foreground font-semibold text-sm mt-5 pt-5 border-t border-border">
                    {t.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 bg-card border-border text-foreground hover:bg-accent" />
          <CarouselNext className="hidden sm:flex -right-4 bg-card border-border text-foreground hover:bg-accent" />
        </Carousel>
      </div>
    </section>
  )
}
