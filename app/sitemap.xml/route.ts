// app/sitemap.xml/route.ts
import type { MetadataRoute } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.yourturfprosdomain.com" // Fallback, replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  // Define static pages
  const staticPages = [
    "", // Homepage
    "/services",
    "/putting-greens",
    "/pet-friendly-turf",
    "/recreational-turf",
    "/privacy-policy",
    "/terms-of-service",
    // Add other static pages like /about, /contact if they become separate pages
  ]

  const staticPageEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path === "" ? "/" : path}`, // Ensure homepage URL is just the base URL
    lastModified: new Date(),
    changeFrequency: path.includes("policy") || path.includes("terms") ? "yearly" : "monthly",
    priority: path === "" ? 1.0 : 0.8, // Homepage highest priority
  }))

  // Example: If you had dynamic blog posts or portfolio items, you'd fetch them here
  // const dynamicPosts = await fetch('...').then(res => res.json());
  // const dynamicPostEntries = dynamicPosts.map(post => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }));

  return [
    ...staticPageEntries,
    // ...dynamicPostEntries, // Uncomment if you have dynamic content
  ]
}
