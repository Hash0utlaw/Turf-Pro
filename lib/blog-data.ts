export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  publishedAt: string
  isPublished: boolean
  tags: string[]
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "artificial-turf-benefits-comprehensive-guide-2025",
    title: "Artificial Turf Benefits: A Comprehensive Guide (2025)",
    description:
      "Discover the numerous benefits of artificial turf in this comprehensive guide. Learn how it can enhance your landscape and lifestyle.",
    content: "This is where the content of the artificial turf benefits blog post will go.",
    publishedAt: "2025-07-26",
    isPublished: true,
    tags: ["artificial turf", "landscaping", "benefits"],
    image: "/images/artificial-turf.jpg",
  },
  {
    slug: "choosing-the-right-patio-furniture",
    title: "Choosing the Right Patio Furniture for Your Outdoor Space",
    description:
      "A guide to selecting the perfect patio furniture to create a comfortable and stylish outdoor living area.",
    content: "This is where the content of the patio furniture blog post will go.",
    publishedAt: "2024-05-15",
    isPublished: true,
    tags: ["patio furniture", "outdoor living", "design"],
    image: "/images/patio-furniture.jpg",
  },
  {
    slug: "spring-gardening-tips-for-beginners",
    title: "Spring Gardening Tips for Beginners",
    description:
      "Easy-to-follow tips for beginner gardeners to help them get their spring gardens off to a great start.",
    content: "This is where the content of the spring gardening tips blog post will go.",
    publishedAt: "2024-03-20",
    isPublished: true,
    tags: ["gardening", "spring", "beginners"],
    image: "/images/spring-garden.jpg",
  },
]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}
