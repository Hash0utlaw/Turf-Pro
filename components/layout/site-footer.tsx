import Link from "next/link"
import Logo from "./logo"

// Custom SVG components for icons
const FacebookIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.08c0 2.597.011 2.917.058 3.96.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
)

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
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-brand-gray-dark hover:text-turf-green transition-colors"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="text-brand-gray-dark hover:text-turf-green transition-colors"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-brand-gray-dark hover:text-turf-green transition-colors"
                >
                  <TwitterIcon />
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

          <div className="mt-12 pt-8 border-t border-brand-gray">
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 text-center">
              Serving Charlotte NC & Surrounding Areas
            </h4>
            <p className="text-center text-base text-brand-gray-text leading-relaxed">
              Charlotte | Matthews | Huntersville | Concord | Mooresville | Lake Norman | Waxhaw | Indian Trail | Mint
              Hill | Fort Mill SC | Ballantyne | Myers Park | South Park | Dilworth | NoDa | Uptown Charlotte |
              Cornelius | Davidson
            </p>
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
