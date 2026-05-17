import { blogPosts } from "@/lib/blog-data"
import { BlogPostCard } from "@/components/blog-post-card"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog | Artificial Turf Tips & Insights Charlotte NC | Atlantic Turf Specialists",
  description:
    "Expert articles, installation tips, and insights on artificial turf from Atlantic Turf Specialists. Learn about synthetic grass maintenance, costs, pet-friendly turf, putting greens, and more.",
  keywords: [
    "artificial turf blog",
    "synthetic grass tips Charlotte NC",
    "turf installation advice",
    "artificial grass maintenance tips",
    "putting green blog",
    "pet turf guide",
    "turf cost guide Charlotte",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialist.com/blog",
  },
  openGraph: {
    title: "Blog | Artificial Turf Tips & Insights | Atlantic Turf Specialists",
    description:
      "Expert articles and insights on artificial turf installation, maintenance, and benefits from the specialists at Atlantic Turf Specialists in Charlotte NC.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Atlantic Turf Specialists blog - Charlotte NC turf experts" }],
  },
}

export default function BlogPage() {
  return (
    <div className="bg-background">
      <header className="relative overflow-hidden py-24">
        <Image
          src="/portfolio/sports-field-aritifical-turf-hero.jpg"
          alt="Artificial turf sports field installation by Atlantic Turf Specialists"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Blog</h1>
          <p className="mt-4 text-lg text-gray-200">Your source for expert advice on artificial turf solutions.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
