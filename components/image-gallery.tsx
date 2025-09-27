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
              <DialogContent className="max-w-[95vw] max-h-[95vh] w-full p-2 sm:p-4 bg-black/95 border-0 shadow-none overflow-auto">
                <div className="relative w-full h-auto min-h-[50vh] flex items-center justify-center">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1000px"
                    className="object-contain max-w-full max-h-[85vh] w-auto h-auto rounded-lg"
                    priority
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
