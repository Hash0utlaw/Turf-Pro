"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
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
    text: "Great job guys, I came home to beautiful turf installed in the front and back yard. Couldn't have asked for a better experience. Now it's time for our family and pups to enjoy our new yard",
  },
  {
    name: "Mike Bradley",
    stars: 5,
    text: "The upfront cost of artificial turf is saving me hundreds of dollars a month on landscaping maintenance at my Airbnb. I highly recommend!",
  },
  {
    name: "Annastacia Slater",
    stars: 5,
    text: "Very trustworthy crew, and very attentive to detail",
  },
  {
    name: "Sergey Gorelyshev",
    stars: 5,
    text: "Beautiful turf installed for my pup :) Fast, reliable and fair priced",
  },
  {
    name: "Zack Malal",
    stars: 5,
    text: "These guys crushed it! Turf Professionals made my yard look insanely good. Super chill crew, showed up on time, got it done right.",
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

export default function TestimonialsSection() {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-gray-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text md:text-xl">
            Hear from satisfied customers who transformed their spaces with Turf Professionals.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                {" "}
                {/* Show 2 on medium, 2 on large */}
                <div className="p-1">
                  <Card className="bg-card text-card-foreground rounded-2xl shadow-soft h-full flex flex-col">
                    <CardContent className="flex flex-col items-center text-center p-6 md:p-8 flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{testimonial.name}</h3>
                      <div className="flex justify-center my-4">
                        {Array(testimonial.stars)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        {Array(5 - testimonial.stars)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                          ))}
                      </div>
                      <p className="text-brand-gray-text text-base leading-relaxed italic flex-grow">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-background/80 hover:bg-accent text-foreground shadow-soft" />
          <CarouselNext className="hidden sm:flex bg-background/80 hover:bg-accent text-foreground shadow-soft" />
        </Carousel>
      </div>
    </section>
  )
}
