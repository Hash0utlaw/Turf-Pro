import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import Logo from "./logo"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

const footerNavLinks = [
  { href: "/services", label: "All Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
]

function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border/40 text-brand-gray-text">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            {/* Adjusted logo size for footer. You can fine-tune these values. */}
            <Logo width={160} height={69} />
            <p className="text-sm">
              Your trusted partner for premium artificial turf solutions. We bring beauty and functionality to your
              outdoor spaces.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-dark hover:text-turf-green transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-turf-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-turf-green" />
                <span>[Your Business Address: e.g., 123 Turf Lane, Greenvalley, CA 90210]</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-turf-green" />
                <a
                  href="tel:[YourPhoneNumberAsDigits:e.g.,+11234567890]"
                  className="hover:text-turf-green transition-colors"
                >
                  [Your Display Phone Number: e.g., (123) 456-7890]
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-turf-green" />
                <a href="mailto:[YourContactEmail]" className="hover:text-turf-green transition-colors">
                  [YourContactEmail]
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Our Location</h4>
            <div className="aspect-video bg-brand-gray rounded-lg overflow-hidden shadow-soft">
              <Link
                href="https://maps.google.com/?q=[Your URL Encoded Business Address]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/greenvalley-california-map.png"
                  alt="Map to Turf Pros location"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/40 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Turf Professionals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Provide both a named and default export so consumers can use either style.
export { SiteFooter }
export default SiteFooter
