/**
 * Central place to manage portfolio items.
 * Extend or replace with real data as you add projects.
 */
export type CategorySlug = "all" | "residential" | "commercial" | "putting-greens" | "recreational"

export interface PortfolioItem {
  id: string
  title: string
  category: CategorySlug
  categoryLabel: string
  description: string
  imageUrl: string
  gallery?: string[]
  details: { label: string; value: string }[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "backyard-green",
    title: "Luxury Backyard Putting Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description: "A professional-grade putting green installed in a small residential backyard.",
    imageUrl: "/luxury-backyard-putting-green.png",
    gallery: ["/putting-green-closeup.png", "/small-backyard-putting-green.png", "/putting-green-sand-trap.png"],
    details: [
      { label: "Location", value: "San Diego, CA" },
      { label: "Area", value: "650 sq ft" },
      { label: "Completed", value: "May 2024" },
    ],
  },
  {
    id: "commercial-courtyard",
    title: "Commercial Courtyard Revamp",
    category: "commercial",
    categoryLabel: "Commercial",
    description: "Low-maintenance courtyard turf for a mixed-use commercial complex.",
    imageUrl: "/commercial-courtyard-turf.png",
    details: [
      { label: "Location", value: "Orange County, CA" },
      { label: "Area", value: "3 200 sq ft" },
      { label: "Completed", value: "Jan 2024" },
    ],
  },
  {
    id: "modern-backyard",
    title: "Modern Backyard Oasis",
    category: "residential",
    categoryLabel: "Residential",
    description: "Clean lines and lush turf create a modern look that’s easy to maintain.",
    imageUrl: "/modern-backyard-artificial-turf.png",
    details: [
      { label: "Location", value: "Irvine, CA" },
      { label: "Area", value: "1 100 sq ft" },
      { label: "Completed", value: "Aug 2023" },
    ],
  },
]
