"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { portfolioItems, type PortfolioItem } from "@/lib/portfolio-data"

// Select the first 4 portfolio items to feature on the home page
const featuredItems = portfolioItems.slice(0, 4)

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = React.useState<PortfolioItem | null>(null)

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedItem(null)
    }
  }

  return (
    <section id="portfolio" className="py-12 md:py-24 bg-brand-gray-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Our Recent Work</h2>
          <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-brand-gray-text md:text-xl">
            Browse through a selection of our successfully completed turf projects.
          </p>
        </div>
        <Dialog onOpenChange={handleOpenChange}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredItems.map((item) => (
              <DialogTrigger asChild key={item.id} onClick={() => setSelectedItem(item)}>
                <Card className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-md transition-all cursor-pointer">
                  <CardContent className="p-0">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-brand-green-light">{item.categoryLabel}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="outline"
                        className="bg-white/20 text-white border-white/50 hover:bg-white/30 backdrop-blur-sm"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
            ))}
          </div>

          {selectedItem && (
            <DialogContent className="sm:max-w-[800px] p-0 bg-background rounded-2xl shadow-soft-lg">
              <DialogHeader className="p-0">
                <Image
                  src={selectedItem.imageUrl || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-auto max-h-[60vh] sm:max-h-[500px] rounded-t-2xl"
                />
                <div className="p-4 sm:p-6">
                  <DialogTitle className="text-xl sm:text-2xl font-semibold text-foreground">
                    {selectedItem.title}
                  </DialogTitle>
                  <DialogDescription className="text-brand-gray-text mt-2 text-sm sm:text-base">
                    <strong>Category:</strong> {selectedItem.categoryLabel} <br />
                    {selectedItem.description}
                  </DialogDescription>
                </div>
              </DialogHeader>
              <div className="p-4 sm:p-6 pt-0">
                <Button
                  variant="outline"
                  onClick={() => setSelectedItem(null)}
                  className="bg-transparent text-foreground hover:bg-accent w-full"
                >
                  Close
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold">
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
