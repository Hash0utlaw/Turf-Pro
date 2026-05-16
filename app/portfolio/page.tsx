import type { Metadata } from "next"
import PortfolioClient from "./portfolio-client"
import { portfolioItems } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Portfolio | Artificial Turf Installation Projects Charlotte NC | Atlantic Turf Specialist",
  description:
    "Browse our portfolio of completed artificial turf projects in Charlotte NC — residential lawns, commercial spaces, backyard putting greens, pet-friendly turf, and more. See real results from Atlantic Turf Specialist.",
  keywords: [
    "artificial turf portfolio Charlotte NC",
    "turf installation gallery Charlotte",
    "synthetic grass projects Charlotte",
    "before and after turf Charlotte",
    "putting green portfolio",
    "residential turf gallery",
    "commercial turf projects Charlotte",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialist.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Artificial Turf Installation Projects Charlotte NC | Atlantic Turf Specialist",
    description:
      "Browse our portfolio of completed artificial turf projects in Charlotte NC — residential lawns, commercial spaces, backyard putting greens, and more.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Atlantic Turf Specialist portfolio of completed turf projects" }],
  },
}

export default function PortfolioPage() {
  // Only serialisable data (no functions) is passed to the client
  return <PortfolioClient allItems={portfolioItems} />
}
