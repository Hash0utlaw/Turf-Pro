"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { portfolioItems, type PortfolioItem } from "@/lib/portfolio-data"

// First 6 items — mix of residential, putting greens, and playground
const featuredItems = portfolioItems.slice(0, 6)

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = React.useState<PortfolioItem | null>(null)

  return (
    <section id="portfolio" className="py-16 md:py-28 bg-card border-y border-border">
      <div className="container px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-turf-green text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Work</p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground text-balance">
              Recent Projects
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-turf-green text-turf-green hover:bg-turf-green hover:text-white transition-colors shrink-0 self-start md:self-auto"
          >
            <Link href="/portfolio">View Full Portfolio &rarr;</Link>
          </Button>
        </div>

        {/* Bento-style grid */}
        <Dialog onOpenChange={(open) => { if (!open) setSelectedItem(null) }}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {featuredItems.map((item, i) => (
              <DialogTrigger
                asChild
                key={item.id}
                onClick={() => setSelectedItem(item)}
              >
                <button
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
                    i === 0 ? "col-span-2 lg:col-span-2 row-span-2" : ""
                  }`}
                >
                  <div className={`relative w-full overflow-hidden ${i === 0 ? "h-72 md:h-[440px]" : "h-44 md:h-52"}`}>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-turf-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs text-turf-green font-semibold uppercase tracking-widest mb-1">
                        {item.categoryLabel}
                      </p>
                      <h3 className="text-base md:text-lg font-bold text-white leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                      <span className="bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full">
                        View Project
                      </span>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
            ))}
          </div>

          {selectedItem && (
            <DialogContent className="sm:max-w-[800px] p-0 bg-background rounded-2xl overflow-hidden">
              <DialogHeader className="p-0">
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-auto max-h-[55vh] rounded-t-2xl"
                />
                <div className="p-5 md:p-6">
                  <p className="text-turf-green text-xs font-semibold uppercase tracking-widest mb-1">
                    {selectedItem.categoryLabel}
                  </p>
                  <DialogTitle className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {selectedItem.title}
                  </DialogTitle>
                  <DialogDescription className="text-brand-gray-text text-sm md:text-base leading-relaxed">
                    {selectedItem.description}
                  </DialogDescription>
                </div>
              </DialogHeader>
              <div className="px-5 pb-5 md:px-6 md:pb-6">
                <Button
                  variant="outline"
                  onClick={() => setSelectedItem(null)}
                  className="w-full border-border text-foreground hover:bg-accent"
                >
                  Close
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}
