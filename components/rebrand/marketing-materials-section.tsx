import { Package } from "lucide-react"

const materialCategories = [
  {
    category: "Vehicle Fleet",
    priority: "High",
    budget: "$800–$2,500 per vehicle",
    items: [
      { item: "Full or partial vehicle wrap redesign", note: "Most visible brand touchpoint. Replace on any vehicle with existing 'Turf Professionals' branding." },
      { item: "Magnetic door panels (interim option)", note: "Lower cost solution if wraps aren't in the budget. Use during Phase 1 transition." },
      { item: "Trailer decals", note: "Update any trailers hauling equipment. Co-brand with 'Atlantic Turf Specialist' + tagline + phone + website." },
    ],
    spec: "Vinyl specs: 3M IJ180 or equivalent. Colors: Deep Atlantic Green #1B4332 + White. Font: Inter Bold.",
  },
  {
    category: "Crew Uniforms & Apparel",
    priority: "High",
    budget: "$25–$60 per piece",
    items: [
      { item: "Embroidered polo shirts and t-shirts", note: "Use the ATS sub-mark for embroidery. Full wordmark for screen print." },
      { item: "Hats / Caps", note: "Richardson 112 or similar. Deep green with embroidered ATS sub-mark." },
      { item: "Safety vests", note: "Required for roadside jobs. Brand with company name on back." },
      { item: "Hoodies (seasonal)", note: "Optional but popular with crews. Good for social content too." },
    ],
    spec: "Thread colors for embroidery: White (on green garments) or Atlantic Green #1B4332 (on light garments).",
  },
  {
    category: "Print Marketing",
    priority: "Medium",
    budget: "$300–$1,200 for initial print run",
    items: [
      { item: "Business cards (per employee)", note: "Thick card stock. Deep green back with white logo. White front with name, role, phone, email, website." },
      { item: "Yard signs / job-site signs", note: "Corrugated plastic, 18x24'. Green background. Logo + 'Atlantic Turf Specialist' + phone + website." },
      { item: "Door hangers", note: "For prospecting in neighborhoods near active job sites. QR code to free quote page." },
      { item: "Brochure / service flyer", note: "4-panel: services overview, why ATS, service area map, contact + QR code." },
    ],
    spec: "Printer recommendation: 4OVER, GotPrint, or local Charlotte print shop for rush jobs.",
  },
  {
    category: "Digital Assets",
    priority: "Critical",
    budget: "$0 (in-house) or $200–$500 (designer)",
    items: [
      { item: "Updated email signature (all team members)", note: "Atlantic Turf Specialist | Role | Phone | New Website URL. Include logo image." },
      { item: "Invoice & estimate templates", note: "Update header in QuickBooks, Jobber, or whatever CRM/invoicing tool is used." },
      { item: "Google Ad creative", note: "Update all headline copy and display URL to reflect new brand name. Pause old ads during transition." },
      { item: "Email newsletter header", note: "Update Mailchimp/Klaviyo template header logo and brand colors." },
      { item: "Presentation deck template", note: "For commercial proposals. Replace all 'Turf Professionals' references." },
    ],
    spec: "Export all digital assets as PNG (transparent bg) and SVG. Keep a master Figma or Canva brand kit file.",
  },
  {
    category: "Signage",
    priority: "Low",
    budget: "$500–$3,000 depending on scale",
    items: [
      { item: "Office / shop exterior signage", note: "Replace or vinyl-overlay existing signage. Illuminated channel letters are ideal for long-term." },
      { item: "Trade show or event booth", note: "Retractable banner stand (33x80'). Table throw. Business card display." },
      { item: "Interior office wall graphic", note: "Brand wall with tagline. Instills pride internally and impresses walk-in clients." },
    ],
    spec: "Signage: coordinate with a local sign shop such as FASTSIGNS Charlotte or Signs Now.",
  },
]

const priorityBadge: Record<string, string> = {
  Critical: "bg-red-100 text-red-700 border-red-200",
  High: "bg-amber-50 text-amber-700 border-amber-200",
  Medium: "bg-[#52B788]/10 text-[#1B4332] border-[#52B788]/20",
  Low: "bg-[#F4F1EB] text-[#6B7280] border-[#D4C5A9]",
}

export function MarketingMaterialsSection() {
  return (
    <section id="marketing-materials" className="scroll-mt-32 py-16 border-b border-[#D4C5A9]">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-[#52B788]" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52B788]">Section 04</span>
      </div>

      <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3 leading-tight">Marketing Materials</h2>
      <p className="text-[#6B7280] max-w-2xl mb-12 leading-relaxed">
        Physical and digital materials are the daily brand impressions that existing and new clients encounter. Audit every customer-facing asset and prioritize replacements by visibility and client contact frequency.
      </p>

      <div className="space-y-6">
        {materialCategories.map((cat) => (
          <div key={cat.category} className="rounded-xl border border-[#D4C5A9] bg-white overflow-hidden">
            {/* Category header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F4F1EB] bg-[#FAFAF8]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1B4332] flex items-center justify-center shrink-0">
                  <Package className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0D1B2A] text-sm">{cat.category}</h3>
                  <p className="text-xs text-[#6B7280] mt-0.5">Est. cost: {cat.budget}</p>
                </div>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${priorityBadge[cat.priority]}`}>
                {cat.priority}
              </span>
            </div>

            {/* Items */}
            <div className="divide-y divide-[#F4F1EB]">
              {cat.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 px-5 py-4">
                  <div className="w-5 h-5 rounded border-2 border-[#D4C5A9] shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0D1B2A]">{item.item}</p>
                    <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Spec */}
            <div className="px-5 py-3 bg-[#F4F1EB] border-t border-[#D4C5A9]">
              <p className="text-xs text-[#6B7280] leading-relaxed">
                <span className="font-semibold text-[#0D1B2A]">Spec: </span>{cat.spec}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
