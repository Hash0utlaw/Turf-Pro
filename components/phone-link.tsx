"use client"

import type React from "react"

interface PhoneLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean
  }
}

export function PhoneLink({ href, className, children }: PhoneLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
      e.preventDefault()
      window.gtag_report_conversion(href)
    }
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
