"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import type { PortfolioItem } from "@/lib/portfolio-data"

interface PortfolioCardProps {
  item: PortfolioItem
  onOpen: () => void
}

export default function PortfolioCard({ item, onOpen }: PortfolioCardProps) {
  return (
    <Card
      className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-md transition-all cursor-pointer"
      onClick={onOpen}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${item.title}`}
    >
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
          <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-lg">{item.title}</h3>
          <p className="text-sm text-white drop-shadow-lg">{item.categoryLabel}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline" className="bg-black/60 text-white border-white hover:bg-black/80 backdrop-blur-sm">
            <Eye className="mr-2 h-4 w-4" />
            View Project
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
