"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Cookie } from "lucide-react"

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent_turf_pros")
    if (consent !== "accepted") {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_turf_pros", "accepted")
    setIsVisible(false)
    // Here you might also trigger loading of analytics scripts or similar
    // that were deferred pending consent.
    console.log("Cookie consent accepted.")
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[100] bg-background border-t border-border/60 shadow-soft-lg p-4 md:p-6 transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start text-sm text-brand-gray-text">
          <Cookie className="h-6 w-6 text-turf-green mr-3 mt-0.5 flex-shrink-0" />
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
            traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
            <Link href="/privacy-policy" className="underline hover:text-turf-green font-medium">
              Learn More
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          {/* <Button variant="outline" size="sm" onClick={() => setIsVisible(false)} className="bg-transparent text-foreground hover:bg-accent">
            Decline
          </Button> */}
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-turf-green hover:bg-turf-green-dark text-white shadow-soft hover:shadow-soft-md transition-shadow"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}

export { CookieConsentBanner }
