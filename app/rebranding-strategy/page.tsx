"use client"

import { useState, useEffect } from "react"
import { RebrandHero } from "@/components/rebrand/rebrand-hero"
import { BrandIdentitySection } from "@/components/rebrand/brand-identity-section"
import { WebsiteStrategySection } from "@/components/rebrand/website-strategy-section"
import { SocialMediaSection } from "@/components/rebrand/social-media-section"
import { MarketingMaterialsSection } from "@/components/rebrand/marketing-materials-section"
import { ImplementationTimelineSection } from "@/components/rebrand/implementation-timeline-section"
import { MasterChecklistSection } from "@/components/rebrand/master-checklist-section"

const navItems = [
  { id: "brand-identity", label: "Brand Identity" },
  { id: "website-strategy", label: "Website" },
  { id: "social-media", label: "Social Media" },
  { id: "marketing-materials", label: "Materials" },
  { id: "timeline", label: "Timeline" },
  { id: "checklist", label: "Checklist" },
]

export default function RebrandingStrategyPage() {
  const [activeSection, setActiveSection] = useState("brand-identity")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" },
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      // 64px site header + 48px section nav = 112px total offset
      const offset = 120
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F1EB]">
      <RebrandHero />

      {/* Sticky section nav */}
      <div className="sticky top-16 z-40 bg-white border-b border-[#D4C5A9] shadow-sm">
        <div className="container mx-auto max-w-5xl px-6">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0.5" aria-label="Rebrand strategy sections">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`shrink-0 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                  activeSection === item.id
                    ? "border-[#1B4332] text-[#1B4332]"
                    : "border-transparent text-[#6B7280] hover:text-[#0D1B2A]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-5xl px-6">
        <BrandIdentitySection />
        <WebsiteStrategySection />
        <SocialMediaSection />
        <MarketingMaterialsSection />
        <ImplementationTimelineSection />
        <MasterChecklistSection />

        {/* Footer note */}
        <div className="py-12 border-t border-[#D4C5A9] text-center">
          <p className="text-sm text-[#6B7280]">
            Atlantic Turf Specialist Rebranding Strategy &mdash; Confidential Internal Document
          </p>
          <p className="text-xs text-[#D4C5A9] mt-1">
            Version 1.0 &bull; Charlotte, NC
          </p>
        </div>
      </div>
    </div>
  )
}
