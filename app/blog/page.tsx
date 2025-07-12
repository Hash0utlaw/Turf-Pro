import { blogPosts } from "@/lib/blog-data"
import { BlogPostCard } from "@/components/blog-post-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Turf Professionals",
  description:
    "Explore articles, tips, and insights on artificial turf installation, maintenance, and benefits from the experts at Turf Professionals.",
}

export default function BlogPage() {
  return (
    <div className="bg-background">
      <header className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground">Our Blog</h1>
          <p className="mt-2 text-lg text-primary-foreground/80">
            Your source for expert advice on artificial turf solutions.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
