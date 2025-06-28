import type { Metadata } from "next"
import PortfolioClient from "./portfolio-client"
import { portfolioItems } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Our Work – Portfolio",
  description:
    "Explore a gallery of our completed artificial turf projects, including residential lawns, commercial spaces, putting greens, and more.",
}

export default function PortfolioPage() {
  // Only serialisable data (no functions) is passed to the client
  return <PortfolioClient allItems={portfolioItems} />
}
