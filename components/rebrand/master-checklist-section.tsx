"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const checklistData = [
  {
    category: "Legal & Administrative",
    items: [
      "File DBA ('doing business as') for Atlantic Turf Specialist with county/state",
      "Update business license with new operating name",
      "Notify bank — update business account name and order new checks",
      "Update business insurance certificates with new name",
      "Update any bonding or contractor license paperwork",
      "Notify accountant / CPA of name change for tax records",
      "Update contracts and service agreement templates",
    ],
  },
  {
    category: "Digital & Online Presence",
    items: [
      "Register atlanticturfspecialist.com domain",
      "Implement 301 redirect from old domain to new",
      "Update website: all content, logo, metadata, structured data",
      "Google Business Profile: name, URL, description, photos",
      "Google Search Console: submit change of address",
      "Bing Webmaster Tools: update site",
      "Yelp business listing update",
      "Angi / HomeAdvisor listing update",
      "BBB profile update",
      "Houzz profile update",
      "Nextdoor business profile update",
      "Apple Maps Connect listing update",
    ],
  },
  {
    category: "Social Media",
    items: [
      "Facebook Page: name change request submitted",
      "Facebook Page: handle, cover, profile photo, about updated",
      "Instagram: username, bio, profile photo updated",
      "LinkedIn: company page name, logo, banner, about updated",
      "TikTok: username, bio, profile photo updated",
      "YouTube channel: name, banner, about updated (if applicable)",
      "Pinterest account updated (if applicable)",
      "Brand announcement post published on all active platforms",
    ],
  },
  {
    category: "Physical Materials",
    items: [
      "Business cards ordered with new brand",
      "Yard signs ordered with new brand",
      "Vehicle magnetics or wraps ordered",
      "Uniform embroidery/printing ordered for all crew",
      "Hats/caps ordered",
      "Door hangers updated (if used)",
      "Brochures / flyers updated",
      "Trade show materials updated (if applicable)",
      "Office/shop exterior signage updated",
    ],
  },
  {
    category: "Client & Partner Communication",
    items: [
      "Rebrand announcement email sent to all existing clients",
      "Announcement sent to active leads / open quotes",
      "Vendor and supplier partners notified",
      "Subcontractors notified",
      "Referral partners notified",
      "Chamber of Commerce or trade associations notified",
    ],
  },
  {
    category: "Internal Team",
    items: [
      "Full team briefing conducted",
      "Brand talking points document distributed",
      "Email signatures updated for all staff",
      "Email forwarding set up from old addresses to new",
      "CRM / job management software updated (company name, logo)",
      "Invoice and estimate templates updated",
      "Quote documents and proposals updated",
      "Internal folder structure and shared drive renamed",
    ],
  },
]

export function MasterChecklistSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const totalItems = checklistData.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = Object.values(checked).filter(Boolean).length
  const progress = Math.round((checkedCount / totalItems) * 100)

  return (
    <section id="checklist" className="scroll-mt-20 py-16">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-[#52B788]" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52B788]">Section 06</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3 leading-tight">Master Rebrand Checklist</h2>
          <p className="text-[#6B7280] max-w-2xl leading-relaxed">
            Use this as your living task tracker throughout the 12-week rollout. Check items off as they are completed. Items persist in your browser session.
          </p>
        </div>
        {/* Progress */}
        <div className="shrink-0 bg-white border border-[#D4C5A9] rounded-xl px-5 py-4 min-w-[200px]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Progress</span>
            <span className="text-sm font-bold text-[#0D1B2A]">{checkedCount}/{totalItems}</span>
          </div>
          <div className="w-full h-2 bg-[#F4F1EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#52B788] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-[#6B7280] mt-2">{progress}% complete</p>
        </div>
      </div>

      <div className="space-y-6">
        {checklistData.map((cat) => {
          const catChecked = cat.items.filter((item) => checked[`${cat.category}:${item}`]).length
          return (
            <div key={cat.category} className="rounded-xl border border-[#D4C5A9] bg-white overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#F4F1EB] bg-[#FAFAF8]">
                <h3 className="font-semibold text-[#0D1B2A] text-sm">{cat.category}</h3>
                <span className="text-xs text-[#6B7280]">
                  {catChecked}/{cat.items.length} done
                </span>
              </div>
              <div className="divide-y divide-[#F4F1EB]">
                {cat.items.map((item) => {
                  const key = `${cat.category}:${item}`
                  const isChecked = !!checked[key]
                  return (
                    <button
                      key={key}
                      onClick={() => toggleItem(key)}
                      className="w-full flex items-start gap-4 px-5 py-3.5 text-left hover:bg-[#F4F1EB]/50 transition-colors"
                    >
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? "bg-[#1B4332] border-[#1B4332]" : "border-[#D4C5A9]"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`text-sm leading-relaxed ${isChecked ? "line-through text-[#6B7280]/60" : "text-[#6B7280]"}`}>
                        {item}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Completion message */}
      {progress === 100 && (
        <div className="mt-8 rounded-2xl bg-[#1B4332] p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#52B788] flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Rebrand Complete</h3>
          <p className="text-white/70 max-w-md mx-auto leading-relaxed">
            Atlantic Turf Specialist is fully launched across all channels. Archive this document and begin the standard content calendar.
          </p>
        </div>
      )}
    </section>
  )
}
