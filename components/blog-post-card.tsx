import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog-data"
import { Calendar } from "lucide-react"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle>
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </Link>
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="w-full sm:w-auto">
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
