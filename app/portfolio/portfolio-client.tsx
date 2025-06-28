"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import PortfolioCard from "@/components/portfolio-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { PortfolioItem, CategorySlug } from "@/lib/portfolio-data"

type PortfolioClientProps = {
  allItems: PortfolioItem[]
  categories: readonly {
    name: string
    slug: CategorySlug
    icon: React.ElementType
  }[]
}

export default function PortfolioClient({ allItems, categories }: PortfolioClientProps) {
  const [activeFilter, setActiveFilter] = useState<CategorySlug>("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return allItems
    }
    return allItems.filter((item) => item.category === activeFilter)
  }, [activeFilter, allItems])

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Our Work</h1>
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
                className="transition-all duration-200"
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
        </div>
      </section>

      <Dialog open={!!selectedItem} onOpenChange={(isOpen) => !isOpen && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[900px] p-0 bg-background rounded-2xl shadow-soft-lg">
          {selectedItem && (
            <>
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl sm:text-3xl font-semibold text-foreground">
                  {selectedItem.title}
                </DialogTitle>
                <DialogDescription className="text-brand-gray-text mt-2 text-base">
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="order-2 md:order-1">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Project Details</h4>
                  <ul className="space-y-2 text-brand-gray-text">
                    {selectedItem.details.map((detail) => (
                      <li key={detail.label} className="flex justify-between border-b pb-2">
                        <span className="font-medium text-foreground/80">{detail.label}:</span>
                        <span>{detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  {selectedItem.gallery && selectedItem.gallery.length > 0 ? (
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedItem.gallery.map((imgUrl, index) => (
                          <CarouselItem key={index}>
                            <Image
                              src={imgUrl || "/placeholder.svg"}
                              alt={`${selectedItem.title} - Image ${index + 1}`}
                              width={600}
                              height={400}
                              className="rounded-lg object-cover w-full h-auto aspect-video"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  ) : (
                    <Image
                      src={selectedItem.imageUrl || "/placeholder.svg"}
                      alt={selectedItem.title}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
