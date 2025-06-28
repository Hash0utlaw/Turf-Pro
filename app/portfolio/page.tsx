import type { Metadata } from "next"
import PortfolioClient from "./portfolio-client"
import { portfolioItems, categories } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Our Work - Portfolio",
  description:
    "Explore a gallery of our completed artificial turf projects, including residential lawns, commercial spaces, putting greens, and pet-friendly installations. See the quality of our work for yourself.",
  openGraph: {
    title: "Our Work - Portfolio | Turf Professionals",
    description: "A gallery of our completed artificial turf projects.",
    images: [
      {
        url: "/og-portfolio.png", // Create a specific OG image for the portfolio page
        width: 1200,
        height: 630,
        alt: "A collage of completed turf projects.",
      },
    ],
  },
}

export default function PortfolioPage() {
  return <PortfolioClient allItems={portfolioItems} categories={categories} />
}
