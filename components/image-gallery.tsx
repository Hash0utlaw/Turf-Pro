"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import type { GalleryImage } from "./service-page-template"

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
                <div className="overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-md transition-shadow cursor-pointer group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-2 sm:p-4">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  quality={100}
                  sizes="90vw"
                  className="rounded-lg object-contain w-full h-auto max-h-[80vh]"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
