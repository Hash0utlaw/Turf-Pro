import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  // Metadata must be exported from a Server Component
  title: "Contact Us | Turf Pros",
  description:
    "Get in touch with Turf Pros for a free quote or any questions about our artificial turf solutions. We serve the greater Green Valley area.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
