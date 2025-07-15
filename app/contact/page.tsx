import { Mail, MapPin, Phone } from "lucide-react"
import { ContactPageClient } from "./ContactPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Turf Professionals",
  description:
    "Get in touch with Turf Professionals for a free quote on your artificial turf project. Contact us via phone, email, or our online form. We serve Charlotte, NC and surrounding areas.",
}

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <header className="bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Contact Us</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Have a question or ready to start your project? We're here to help. Reach out to us, and let's create the
            perfect green space for you.
          </p>
        </div>
      </header>

      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Get in Touch</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Fill out the form, and we'll get back to you as soon as possible. For immediate assistance, please
                  call us.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50">Phone</h3>
                    <a
                      href="Call now"
                      className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                    >
                      (704) 995-6265
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50">Email</h3>
                    <a
                      href="mailto:zach@turf-professionals.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                    >
                      zach@turf-professionals.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50">Service Area</h3>
                    <p className="text-gray-600 dark:text-gray-400">Charlotte, NC and surrounding areas</p>
                  </div>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416887.8313299085!2d-81.03484245849933!3d35.2270869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1720300955319!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <ContactPageClient />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
