import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Turf Pros",
  description:
    "Get in touch with Turf Pros for a free quote on your artificial turf project. We serve the greater Green Valley area and are ready to help.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
