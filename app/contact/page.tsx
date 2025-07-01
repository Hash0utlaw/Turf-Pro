import type { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "Contact Us | Turf Pros",
  description:
    "Reach out to Turf Pros for a free consultation on residential, commercial, or recreational artificial turf installations.",
  openGraph: {
    title: "Contact Turf Pros",
    description: "Let’s discuss how Turf Pros can transform your space with premium synthetic grass.",
    url: "/contact",
  },
}

const ContactPageClient = dynamic(() => import("./ContactPageClient"), {
  ssr: false,
})

export default function ContactPage() {
  return <ContactPageClient />
}
