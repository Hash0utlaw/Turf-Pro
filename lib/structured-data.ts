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
  aggregateRating?: {
    "@type": "AggregateRating"
    ratingValue: string
    reviewCount: string
  }
  hasOfferCatalog?: {
    "@type": "OfferCatalog"
    name: string
    itemListElement: Array<{
      "@type": "Offer"
      itemOffered: {
        "@type": "Service"
        name: string
        description: string
      }
    }>
  }
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

export interface VideoSchema {
  "@context": "https://schema.org"
  "@type": "VideoObject"
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl: string
  embedUrl?: string
  duration?: string
  publisher?: {
    "@type": "Organization"
    name: string
    logo: {
      "@type": "ImageObject"
      url: string
    }
  }
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Turf Professionals",
    description:
      "Professional artificial turf installation services for residential, commercial, and recreational properties in Charlotte, NC and surrounding areas including Matthews, Huntersville, Concord, Lake Norman, and Fort Mill SC.",
    url: "https://www.turf-professionals.com",
    telephone: "+1-704-956-2687",
    email: "info@turf-professionals.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      postalCode: "28202",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.2271,
      longitude: -80.8431,
    },
    areaServed: [
      { "@type": "City", name: "Charlotte, NC" },
      { "@type": "City", name: "Matthews, NC" },
      { "@type": "City", name: "Huntersville, NC" },
      { "@type": "City", name: "Concord, NC" },
      { "@type": "City", name: "Cornelius, NC" },
      { "@type": "City", name: "Davidson, NC" },
      { "@type": "City", name: "Mooresville, NC" },
      { "@type": "City", name: "Waxhaw, NC" },
      { "@type": "City", name: "Weddington, NC" },
      { "@type": "City", name: "Indian Trail, NC" },
      { "@type": "City", name: "Mint Hill, NC" },
      { "@type": "City", name: "Fort Mill, SC" },
      { "@type": "City", name: "Lake Norman Area" },
      { "@type": "State", name: "North Carolina" },
    ],
    priceRange: "$$-$$$",
    openingHours: ["Monday-Friday 08:00-18:00", "Saturday 09:00-14:00"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Artificial Turf Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Artificial Turf Installation",
            description: "Professional artificial turf installation for Charlotte NC homes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Turf Installation",
            description: "Commercial artificial grass for Charlotte businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Putting Green Installation",
            description: "Custom backyard putting greens in Charlotte NC",
          },
        },
      ],
    },
    sameAs: ["https://www.facebook.com/turfprofessionals", "https://www.instagram.com/turfprofessionals"],
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

export function generateVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  contentUrl: string,
  uploadDate: string,
  duration?: string,
): VideoSchema {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    contentUrl: contentUrl,
    duration: duration,
    publisher: {
      "@type": "Organization",
      name: "Turf Professionals",
      logo: {
        "@type": "ImageObject",
        url: "https://www.turf-professionals.com/logo.png",
      },
    },
  }
}
