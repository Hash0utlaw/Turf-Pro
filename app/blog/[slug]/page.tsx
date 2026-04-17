import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata, ResolvingMetadata } from "next"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StructuredData } from "@/components/structured-data"
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const previousImages = (await parent).openGraph?.images || []
  const url = `https://www.turf-professionals.com/blog/${params.slug}`

  return {
    title: `${post.title} | Turf Professionals Blog`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image, ...previousImages],
      type: "article",
      publishedTime: post.date,
      authors: ["Turf Professionals"],
      url: url,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const url = `https://www.turf-professionals.com/blog/${params.slug}`
  const articleSchema = generateArticleSchema(
    post.title,
    post.excerpt,
    `https://www.turf-professionals.com${post.image}`,
    post.date,
    post.date,
    url,
  )

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.turf-professionals.com" },
    { name: "Blog", url: "https://www.turf-professionals.com/blog" },
    { name: post.title },
  ])

  return (
    <div className="bg-background">
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="mb-8 bg-transparent">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold !mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>

            <div
              className="prose-p:text-foreground/80 prose-headings:text-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
    </div>
  )
}
