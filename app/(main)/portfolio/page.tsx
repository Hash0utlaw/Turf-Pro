import type { Metadata } from "next"
import PortfolioClient from "./portfolio-client"
import { portfolioItems } from "@/lib/portfolio-data"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Portfolio | Artificial Turf Installation Projects Charlotte NC | Atlantic Turf Specialists",
  description:
    "Browse our portfolio of completed artificial turf projects in Charlotte NC — residential lawns, commercial spaces, backyard putting greens, pet-friendly turf, and more. See real results from Atlantic Turf Specialists.",
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
    canonical: "https://www.atlanticturfspecialists.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Artificial Turf Installation Projects Charlotte NC | Atlantic Turf Specialists",
    description:
      "Browse our portfolio of completed artificial turf projects in Charlotte NC — residential lawns, commercial spaces, backyard putting greens, and more.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Atlantic Turf Specialists portfolio of completed turf projects" }],
  },
}

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Artificial Turf Portfolio | Atlantic Turf Specialists",
  description:
    "Browse completed artificial turf projects in Charlotte NC — residential lawns, commercial spaces, putting greens, and pet-friendly turf installations.",
  url: "https://www.atlanticturfspecialists.com/portfolio",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlantic Turf Specialists",
    url: "https://www.atlanticturfspecialists.com",
  },
}

export default function PortfolioPage() {
  // Only serialisable data (no functions) is passed to the client
  return (
    <>
      <StructuredData data={portfolioSchema} />
      <PortfolioClient allItems={portfolioItems} />
    </>
  )
}
