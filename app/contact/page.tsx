import { ContactPageClient } from "./ContactPageClient"
import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact Us | Free Turf Quote Charlotte NC | Atlantic Turf Specialists",
  description:
    "Contact Atlantic Turf Specialists for a free artificial turf quote in Charlotte NC. Reach us by phone at (704) 995-6265, email, or our online form. Serving Charlotte, Matthews, Huntersville, Concord & Lake Norman.",
  keywords: [
    "contact Atlantic Turf Specialists",
    "free turf quote Charlotte NC",
    "artificial turf estimate Charlotte",
    "turf installation quote Charlotte",
    "synthetic grass Charlotte NC contact",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialist.com/contact",
  },
  openGraph: {
    title: "Contact Us | Free Turf Quote Charlotte NC | Atlantic Turf Specialists",
    description:
      "Get a free artificial turf quote from Atlantic Turf Specialists. Call (704) 995-6265 or submit our online form. Serving Charlotte, NC and surrounding areas.",
    images: [{ url: "/contact-hero.jpg", width: 1200, height: 630, alt: "Atlantic Turf Specialists contact and service area - Charlotte NC" }],
  },
}

const PhoneIcon = () => (
  <svg className="h-5 w-5 text-turf-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="h-5 w-5 text-turf-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-5 w-5 text-turf-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function ContactPage() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || ""

  return (
    <>
      {googleMapsApiKey && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&loading=async`}
          strategy="afterInteractive"
        />
      )}

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/contact-hero.jpg"
          alt="Premium artificial turf installation by Atlantic Turf Specialists"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/80 drop-shadow">
            Ready to start your project? {"Let's"} talk.
          </p>
        </div>
      </div>

      <div className="bg-background">
        <main className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

              {/* Left column — form card (always first on mobile) */}
              <div className="order-1 bg-brand-gray-light border border-turf-green/20 rounded-2xl p-8 shadow-soft-lg">
                <h2 className="text-xl font-bold text-white mb-6">Request a Free Quote</h2>
                <ContactPageClient />
              </div>

              {/* Right column — contact info + map (second on mobile) */}
              <div className="order-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                  <p className="mt-2 text-brand-gray-text leading-relaxed">
                    Fill out the form and {"we'll"} get back to you as soon as possible. For immediate
                    assistance, give us a call.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <PhoneIcon />
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Phone</h3>
                      <a
                        href="tel:+17049956265"
                        className="text-brand-gray-text hover:text-turf-green-light transition-colors"
                      >
                        (704) 995-6265
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MailIcon />
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Email</h3>
                      <a
                        href="mailto:zach@atlanticturfspecialists.com"
                        className="text-brand-gray-text hover:text-turf-green-light transition-colors break-all"
                      >
                        zach@atlanticturfspecialists.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPinIcon />
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Service Area</h3>
                      <p className="text-brand-gray-text">Charlotte, NC and surrounding areas</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-turf-green/20" />

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-turf-green/20 h-64 md:h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416887.8313299085!2d-81.03484245849933!3d35.2270869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1720300955319!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Atlantic Turf Specialists service area map"
                  />
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}
