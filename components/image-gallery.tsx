"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import type { GalleryImage } from "@/components/service-page-template"

interface ImageGalleryProps {
  galleryTitle: string
  gallerySubtitle: string
  galleryImages: GalleryImage[]
}

export function ImageGallery({ galleryTitle, gallerySubtitle, galleryImages }: ImageGalleryProps) {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">{galleryTitle}</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-brand-gray-text text-balance">{gallerySubtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-md transition-shadow cursor-pointer group">
                  <div className="relative w-full h-64">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-1 bg-transparent border-0 shadow-none">
                <div className="relative aspect-video w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    className="object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
