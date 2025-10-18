// Structured Data (Schema.org JSON-LD) utilities for SEO

export interface OrganizationSchema {
  "@context": "https://schema.org"
  "@type": "LocalBusiness"
  name: string
  description: string
  url: string
  telephone: string
  email?: string
  address: {
    "@type": "PostalAddress"
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  geo?: {
    "@type": "GeoCoordinates"
    latitude: number
    longitude: number
  }
  areaServed: Array<{
    "@type": "City" | "State"
    name: string
  }>
  priceRange?: string
  openingHours?: string[]
  sameAs?: string[]
  image?: string
}

export interface ArticleSchema {
  "@context": "https://schema.org"
  "@type": "BlogPosting"
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: {
    "@type": "Organization"
    name: string
    url: string
  }
  publisher: {
    "@type": "Organization"
    name: string
    url: string
    logo: {
      "@type": "ImageObject"
      url: string
    }
  }
  mainEntityOfPage: {
    "@type": "WebPage"
    "@id": string
  }
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org"
  "@type": "BreadcrumbList"
  itemListElement: Array<{
    "@type": "ListItem"
    position: number
    name: string
    item?: string
  }>
}

export interface ServiceSchema {
  "@context": "https://schema.org"
  "@type": "Service"
  name: string
  description: string
  provider: {
    "@type": "LocalBusiness"
    name: string
    url: string
  }
  areaServed: Array<{
    "@type": "City" | "State"
    name: string
  }>
  serviceType: string
  offers?: {
    "@type": "Offer"
    availability: string
    priceRange?: string
  }
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Turf Professionals",
    description:
      "Premium artificial turf installation services for residential, commercial, and recreational properties in Charlotte, NC and surrounding areas.",
    url: "https://www.turf-professionals.com",
    telephone: "+1-704-956-2687",
    email: "info@turf-professionals.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Charlotte" },
      { "@type": "City", name: "Concord" },
      { "@type": "City", name: "Matthews" },
      { "@type": "City", name: "Huntersville" },
      { "@type": "City", name: "Cornelius" },
      { "@type": "City", name: "Davidson" },
      { "@type": "City", name: "Mooresville" },
      { "@type": "City", name: "Waxhaw" },
      { "@type": "City", name: "Weddington" },
      { "@type": "City", name: "Fort Mill" },
      { "@type": "State", name: "North Carolina" },
    ],
    priceRange: "$$-$$$",
    sameAs: [
      "https://www.facebook.com/turfprofessionals",
      "https://www.instagram.com/turfprofessionals",
      "https://twitter.com/turfpros",
    ],
  }
}

export function generateArticleSchema(
  title: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string,
  url: string,
): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Organization",
      name: "Turf Professionals",
      url: "https://www.turf-professionals.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Turf Professionals",
      url: "https://www.turf-professionals.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.turf-professionals.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema(name: string, description: string, serviceType: string): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "Turf Professionals",
      url: "https://www.turf-professionals.com",
    },
    areaServed: [
      { "@type": "City", name: "Charlotte" },
      { "@type": "City", name: "Concord" },
      { "@type": "City", name: "Matthews" },
      { "@type": "City", name: "Huntersville" },
      { "@type": "State", name: "North Carolina" },
    ],
    serviceType: serviceType,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceRange: "$$-$$$",
    },
  }
}
