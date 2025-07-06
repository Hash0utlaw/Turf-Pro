"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (consent !== "given") {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "given")
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        "border-t border-border/40 shadow-soft-lg",
      )}
    >
      <div className="container mx-auto max-w-screen-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground text-center sm:text-left">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking &quot;Accept&quot;,
          you consent to our use of cookies. Read our{" "}
          <Link href="/privacy-policy" className="font-medium underline hover:text-turf-green transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex-shrink-0">
          <Button onClick={handleAccept} className="bg-turf-green hover:bg-turf-green-dark text-white">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}

export { CookieConsentBanner }
export default CookieConsentBanner
