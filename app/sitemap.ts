import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-data"
import { portfolioItems } from "@/lib/portfolio-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.turf-professionals.com"
  const currentDate = new Date()

  const postUrls = blogPosts
    .filter((post) => post.isPublished)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  // Main static pages of the site with proper priorities and change frequencies
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  // All individual service pages with high priority for SEO
  const serviceUrls = [
    {
      url: `${baseUrl}/putting-greens`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pet-friendly-turf`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recreational-turf`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/residential-lawn-turf`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial-turf`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/general-turf-installation`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ]

  const landingPageUrls = [
    {
      url: `${baseUrl}/landing/residential-low-maintenance`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/landing/putting-greens-playgrounds`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  const portfolioImageUrls = portfolioItems.map((item) => ({
    url: `${baseUrl}${item.image}`,
    lastModified: currentDate,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }))

  // Combine all URLs and sort by priority (highest first) for better SEO
  const allUrls = [...staticUrls, ...serviceUrls, ...landingPageUrls, ...postUrls, ...portfolioImageUrls]

  return allUrls.sort((a, b) => b.priority - a.priority)
}
