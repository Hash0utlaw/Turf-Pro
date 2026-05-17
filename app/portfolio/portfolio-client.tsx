"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import PortfolioCard from "@/components/portfolio-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { PortfolioItem, CategorySlug } from "@/lib/portfolio-data"
import { Blocks, Home, Briefcase, Target, Aperture } from "lucide-react"

type Props = {
  allItems: PortfolioItem[]
}

/* Icons are defined here (inside the client component) so no
   functions are passed across the server → client boundary */
const categories: {
  name: string
  slug: CategorySlug
  icon: React.ComponentType<{ className?: string }>
}[] = [
  { name: "All", slug: "all", icon: Blocks },
  { name: "Residential", slug: "residential", icon: Home },
  { name: "Commercial", slug: "commercial", icon: Briefcase },
  { name: "Putting Greens", slug: "putting-greens", icon: Target },
  { name: "Recreational", slug: "recreational", icon: Aperture },
]

export default function PortfolioClient({ allItems }: Props) {
  const [activeFilter, setActiveFilter] = useState<CategorySlug>("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return allItems
    return allItems.filter((i) => i.category === activeFilter)
  }, [activeFilter, allItems])

  return (
    <section className="py-16 md:py-24 container px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Our Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray-text">
          Browse our gallery of successfully completed projects.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(({ name, slug, icon: Icon }) => (
          <Button
            key={slug}
            variant={activeFilter === slug ? "default" : "outline"}
            onClick={() => setActiveFilter(slug)}
          >
            <Icon className="mr-2 h-4 w-4" />
            {name}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard item={item} onOpen={() => setSelectedItem(item)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox dialog — image only with title */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] sm:max-w-[900px] p-0 bg-black/95 rounded-2xl shadow-soft-lg overflow-hidden border-0">
          {selectedItem && (
            <>
              {/* Hidden for a11y */}
              <DialogDescription className="sr-only">{selectedItem.title}</DialogDescription>

              {/* Image */}
              {selectedItem.gallery?.length ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedItem.gallery.map((url, i) => (
                      <CarouselItem key={i}>
                        <div className="relative w-full aspect-[4/3]">
                          <Image
                            src={url}
                            alt={`${selectedItem.title} — photo ${i + 1}`}
                            fill
                            sizes="(max-width: 768px) 95vw, 900px"
                            className="object-cover"
                            priority={i === 0}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3 bg-black/50 border-0 text-white hover:bg-black/70" />
                  <CarouselNext className="right-3 bg-black/50 border-0 text-white hover:bg-black/70" />
                </Carousel>
              ) : (
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    fill
                    sizes="(max-width: 768px) 95vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Title bar */}
              <DialogHeader className="px-5 py-3 bg-black/80">
                <DialogTitle className="text-white text-base sm:text-lg font-medium tracking-wide">
                  {selectedItem.title}
                </DialogTitle>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
