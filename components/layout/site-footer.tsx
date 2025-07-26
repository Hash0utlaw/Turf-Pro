import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Logo from "./logo"

function SiteFooter() {
  return (
    <footer className="bg-brand-gray-light border-t border-brand-gray">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 lg:col-span-5">
              <Logo className="h-12 w-auto" />
              <p className="mt-4 text-brand-gray-text max-w-xs">
                Your trusted partner for premium artificial turf solutions.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6 text-brand-gray-dark hover:text-turf-green transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-6 w-6 text-brand-gray-dark hover:text-turf-green transition-colors" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6 text-brand-gray-dark hover:text-turf-green transition-colors" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/residential-lawn-turf"
                      className="text-base text-brand-gray-text hover:text-turf-green"
                    >
                      Residential
                    </Link>
                  </li>
                  <li>
                    <Link href="/commercial-turf" className="text-base text-brand-gray-text hover:text-turf-green">
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link href="/putting-greens" className="text-base text-brand-gray-text hover:text-turf-green">
                      Putting Greens
                    </Link>
                  </li>
                  <li>
                    <Link href="/pet-friendly-turf" className="text-base text-brand-gray-text hover:text-turf-green">
                      Pet Turf
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/#about" className="text-base text-brand-gray-text hover:text-turf-green">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-base text-brand-gray-text hover:text-turf-green">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-brand-gray-text hover:text-turf-green">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-brand-gray-text hover:text-turf-green">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-base text-brand-gray-text hover:text-turf-green">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-base text-brand-gray-text hover:text-turf-green">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-gray py-6 text-center text-sm text-brand-gray-dark">
          <p>&copy; {new Date().getFullYear()} Turf Professionals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
export default SiteFooter
