import { Home, ClubIcon as GolfCourse, Building, PawPrint, Grid } from "lucide-react"

export const categories = [
  { name: "All", slug: "all", icon: Grid },
  { name: "Residential", slug: "residential", icon: Home },
  { name: "Commercial", slug: "commercial", icon: Building },
  { name: "Putting Greens", slug: "putting-greens", icon: GolfCourse },
  { name: "Pet-Friendly", slug: "pet-friendly", icon: PawPrint },
] as const

export type CategorySlug = (typeof categories)[number]["slug"]

export type PortfolioItem = {
  id: number
  title: string
  slug: string
  category: CategorySlug
  categoryLabel: string
  imageUrl: string
  gallery?: string[]
  description: string
  details: {
    label: string
    value: string
  }[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Residential Paradise",
    slug: "modern-residential-paradise",
    category: "residential",
    categoryLabel: "Residential",
    imageUrl: "/modern-backyard-artificial-turf.png",
    gallery: ["/modern-backyard-artificial-turf.png", "/poolside-turf-installation.png", "/residential-front-yard.png"],
    description:
      "A stunning transformation of a residential backyard, featuring lush, evergreen artificial turf perfect for family activities and pets. This project focused on creating a low-maintenance, visually appealing space that stays green all year round.",
    details: [
      { label: "Location", value: "Sunnyvale, CA" },
      { label: "Turf Type", value: "Premium Residential Blend" },
      { label: "Area", value: "1,200 sq. ft." },
      { label: "Features", value: "Integrated drainage, UV protection" },
    ],
  },
  {
    id: 2,
    title: "Championship Backyard Green",
    slug: "championship-backyard-green",
    category: "putting-greens",
    categoryLabel: "Putting Greens",
    imageUrl: "/luxury-backyard-putting-green.png",
    gallery: ["/luxury-backyard-putting-green.png", "/putting-green-closeup.png", "/putting-green-sand-trap.png"],
    description:
      "A custom-designed backyard putting green offering a professional-grade playing surface for a golf enthusiast. Includes custom undulations and a sand trap for a true course feel.",
    details: [
      { label: "Location", value: "Palo Alto, CA" },
      { label: "Turf Type", value: "Nylon Pro-Putt" },
      { label: "Area", value: "800 sq. ft." },
      { label: "Features", value: "Sand trap, custom breaks, professional cups" },
    ],
  },
  {
    id: 3,
    title: "Corporate Courtyard",
    slug: "corporate-courtyard",
    category: "commercial",
    categoryLabel: "Commercial",
    imageUrl: "/commercial-courtyard-turf.png",
    gallery: ["/commercial-courtyard-turf.png", "/office-park-common-area.png"],
    description:
      "Durable and aesthetically pleasing turf solution for a high-traffic commercial courtyard. This installation enhances the building's appeal and provides a welcoming green space for employees and visitors.",
    details: [
      { label: "Location", value: "San Jose, CA" },
      { label: "Turf Type", value: "High-Traffic Commercial Grade" },
      { label: "Area", value: "2,500 sq. ft." },
      { label: "Features", value: "Heavy-duty infill, ADA accessible" },
    ],
  },
  {
    id: 4,
    title: "Dog's Dream Play Area",
    slug: "dogs-dream-play-area",
    category: "pet-friendly",
    categoryLabel: "Pet-Friendly",
    imageUrl: "/happy-dog-turf.png",
    gallery: ["/happy-dog-turf.png", "/pet-turf-drainage.png", "/dog-run-turf.png"],
    description:
      "A safe, clean, and durable play area for pets. This project used specialized pet-friendly turf with superior drainage to handle waste and prevent odors, ensuring a happy environment for furry friends.",
    details: [
      { label: "Location", value: "Mountain View, CA" },
      { label: "Turf Type", value: "Pet-Pro Synthetic with ZeoFill" },
      { label: "Area", value: "600 sq. ft." },
      { label: "Features", value: "Odor-control infill, advanced drainage matrix" },
    ],
  },
  {
    id: 5,
    title: "Suburban Family Lawn",
    slug: "suburban-family-lawn",
    category: "residential",
    categoryLabel: "Residential",
    imageUrl: "/family-enjoying-turf.png",
    gallery: ["/family-enjoying-turf.png", "/residential-backyard-patio.png"],
    description:
      "A complete lawn replacement for a family home, providing a perfect, safe surface for children to play on without the hassle of mud, grass stains, or pesticides.",
    details: [
      { label: "Location", value: "Cupertino, CA" },
      { label: "Turf Type", value: "Soft-Weave Residential" },
      { label: "Area", value: "950 sq. ft." },
      { label: "Features", value: "Non-toxic materials, soft-fall rating" },
    ],
  },
  {
    id: 6,
    title: "Rooftop Bar & Lounge",
    slug: "rooftop-bar-lounge",
    category: "commercial",
    categoryLabel: "Commercial",
    imageUrl: "/rooftop-bar-turf.png",
    gallery: ["/rooftop-bar-turf.png", "/event-space-turf.png"],
    description:
      "Transforming a concrete rooftop into a chic and inviting bar and lounge area with artificial turf. The result is a stunning urban oasis that attracts customers and enhances the venue's atmosphere.",
    details: [
      { label: "Location", value: "San Francisco, CA" },
      { label: "Turf Type", value: "Light-Weight Commercial" },
      { label: "Area", value: "1,800 sq. ft." },
      { label: "Features", value: "Rooftop-specific drainage, fire-retardant" },
    ],
  },
]
