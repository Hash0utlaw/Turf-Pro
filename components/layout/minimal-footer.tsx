import Link from "next/link"
import { PhoneLink } from "@/components/phone-link"

export function MinimalFooter() {
  return (
    <footer className="bg-brand-gray-light border-t border-turf-green/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-brand-gray-text">Fully licensed &amp; insured in North Carolina</p>

          <div className="flex items-center gap-6">
            <PhoneLink href="tel:+17049956265" className="font-semibold text-turf-green hover:text-turf-green/80 transition-colors">
              (704) 995-6265
            </PhoneLink>
            <a
              href="mailto:zach@atlanticturfspecialists.com"
              className="text-brand-gray-text hover:text-turf-green-light transition-colors"
            >
              zach@atlanticturfspecialists.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-brand-gray-text hover:text-turf-green-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-brand-gray-text hover:text-turf-green-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MinimalFooter
