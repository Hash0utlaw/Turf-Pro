"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah L.",
    location: "Greenvalley, CA",
    avatarUrl: "/placeholder.svg?width=80&height=80",
    stars: 5,
    text: "Turf Professionals did an amazing job on our backyard! The turf looks incredibly real, and the kids love playing on it. The team was professional and efficient. Highly recommend!",
  },
  {
    name: "John B.",
    location: "Springfield, IL",
    avatarUrl: "/placeholder.svg?width=80&height=80",
    stars: 5,
    text: "My new putting green is fantastic! The quality of the turf and the installation is top-notch. It's like having a professional course in my own backyard. Thanks, Turf Pros!",
  },
  {
    name: "Maria G.",
    location: "Austin, TX",
    avatarUrl: "/placeholder.svg?width=80&height=80",
    stars: 4,
    text: "We had our front lawn replaced with artificial turf, and it has made such a difference. No more mowing or watering! The installation process was smooth, and the result is beautiful.",
  },
  {
    name: "David K.",
    location: "Phoenix, AZ",
    avatarUrl: "/placeholder.svg?width=80&height=80",
    stars: 5,
    text: "Excellent service from start to finish. The team was knowledgeable, helped us choose the right turf for our needs, and the installation was flawless. Our yard looks perfect.",
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
                      <Image
                        src={testimonial.avatarUrl || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 shadow-md"
                      />
                      <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-brand-gray-dark mb-2">{testimonial.location}</p>
                      <div className="flex justify-center mb-4">
                        {Array(testimonial.stars)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        {Array(5 - testimonial.stars)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i + testimonial.stars} className="h-5 w-5 text-yellow-400" />
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
