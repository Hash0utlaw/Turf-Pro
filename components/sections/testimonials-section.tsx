"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  // TODO: Replace these examples with your actual Google Reviews.
  // Simply copy and paste the text, name, and star rating.
  {
    name: "Michael R.",
    stars: 5,
    text: "We had Turf Professionals install a new lawn in our backyard and couldn't be happier. The entire process was seamless, from the initial consultation to the final installation. The crew was professional, on time, and left the site immaculate. Our new turf looks and feels amazing!",
    avatarUrl: "/happy-customer.png",
  },
  {
    name: "Jessica Chen",
    stars: 5,
    text: "The putting green they installed is a dream come true! The quality is outstanding, and it rolls true. It's completely transformed our backyard into a fun and functional space for the whole family. Highly recommend their services for any golf enthusiast.",
    avatarUrl: "/smiling-person.png",
  },
  {
    name: "David Lee",
    stars: 5,
    text: "Our two dogs love the new pet-friendly turf. It's durable, easy to clean, and looks great year-round. The team at Turf Professionals was fantastic to work with and really understood our needs. A five-star experience from start to finish.",
    avatarUrl: "/person-with-dog.png",
  },
  {
    name: "Emily S.",
    stars: 5,
    text: "Exceptional service and a beautiful result. Our front yard has never looked better, and we've received so many compliments from our neighbors. No more watering or mowing is a huge plus. Thank you, Turf Professionals!",
    avatarUrl: "/happy-homeowner.png",
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
                        alt={`Avatar of ${testimonial.name}`}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 shadow-md"
                      />
                      <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
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
