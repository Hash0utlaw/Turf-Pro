"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

const colorPalette = [
  {
    name: "Atlantic Deep",
    hex: "#1B4332",
    hsl: "HSL 152° 41% 18%",
    usage: "Primary brand color. Logo, headers, CTAs, footer.",
    role: "Primary",
  },
  {
    name: "Seafoam",
    hex: "#52B788",
    hsl: "HSL 152° 39% 52%",
    usage: "Accent elements, hover states, highlights, icons.",
    role: "Accent",
  },
  {
    name: "Shore Sand",
    hex: "#F4F1EB",
    hsl: "HSL 42° 27% 93%",
    usage: "Page backgrounds, card fills, light section panels.",
    role: "Background",
  },
  {
    name: "Charcoal Navy",
    hex: "#0D1B2A",
    hsl: "HSL 214° 52% 11%",
    usage: "Primary body text, navigation text, headlines.",
    role: "Text",
  },
  {
    name: "Warm Stone",
    hex: "#D4C5A9",
    hsl: "HSL 38° 31% 74%",
    usage: "Dividers, subtle borders, secondary backgrounds.",
    role: "Neutral",
  },
]

const taglineOptions = [
  {
    line: "Where Precision Meets the Green",
    notes: "Evokes craftsmanship and the turf product itself. Works well for residential and putting-green markets.",
    recommended: true,
  },
  {
    line: "Built for the Long Haul. Installed to Last.",
    notes: "Speaks directly to durability—strong for commercial clients and ROI-focused buyers.",
    recommended: false,
  },
  {
    line: "Your Outdoor Vision. Expertly Installed.",
    notes: "Customer-first framing. Appeals to homeowners seeking a collaborative, premium experience.",
    recommended: false,
  },
]

const brandVoice = [
  { trait: "Authoritative", description: "Speak with the confidence of a regional market leader. Avoid hedging language." },
  { trait: "Clear & Direct", description: "No jargon. Every sentence should be immediately understood by a homeowner or facilities manager." },
  { trait: "Regional Pride", description: "Reference the Carolinas, Lake Norman, and Atlantic coast service area. Roots matter." },
  { trait: "Solution-Oriented", description: "Frame every message around the customer's problem solved, not the product sold." },
]

const logoGuidelines = [
  "Wordmark should always use the full name: Atlantic Turf Specialist (never abbreviate to ATS in customer-facing materials)",
  "Minimum clear space = 1x the height of the letter 'A' on all sides",
  "Approved on: Deep Atlantic Green background (white mark), white/cream background (green mark), and dark photography (white mark)",
  "Never rotate, distort, recolor, or add drop shadows to the logo",
  "Sub-mark (standalone wave-leaf icon) approved for social profile images and embroidery only",
]

export function BrandIdentitySection() {
  const [expandedColor, setExpandedColor] = useState<string | null>(null)

  return (
    <section id="brand-identity" className="scroll-mt-20 py-16 border-b border-[#D4C5A9]">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-[#52B788]" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52B788]">Section 01</span>
      </div>

      <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3 leading-tight">
        Brand Identity System
      </h2>
      <p className="text-[#6B7280] max-w-2xl mb-12 leading-relaxed">
        The Atlantic Turf Specialist identity is built on authority, regional pride, and the promise of a precision installation. Every visual and verbal element should reinforce these three pillars.
      </p>

      {/* Logo concept */}
      <div className="mb-14">
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-6">Logo System</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Primary on light */}
          <div className="rounded-xl border border-[#D4C5A9] bg-[#F4F1EB] p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#52B788] mb-1">ATLANTIC</span>
              <span className="text-2xl font-bold text-[#1B4332] tracking-tight leading-none">Turf Specialist</span>
              <div className="w-full h-px bg-[#52B788] my-2" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#1B4332]">Charlotte, NC</span>
            </div>
            <span className="text-[11px] text-[#6B7280] mt-2">Primary — Light Background</span>
          </div>
          {/* Reversed on brand */}
          <div className="rounded-xl bg-[#1B4332] p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#52B788] mb-1">ATLANTIC</span>
              <span className="text-2xl font-bold text-white tracking-tight leading-none">Turf Specialist</span>
              <div className="w-full h-px bg-[#52B788] my-2" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/70">Charlotte, NC</span>
            </div>
            <span className="text-[11px] text-white/50 mt-2">Reversed — Brand Background</span>
          </div>
          {/* Sub-mark */}
          <div className="rounded-xl border border-[#D4C5A9] bg-[#0D1B2A] p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#1B4332] border-2 border-[#52B788] flex items-center justify-center">
                <span className="text-xl font-bold text-white">ATS</span>
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/50">Sub-mark — Social / Embroidery</span>
            </div>
            <span className="text-[11px] text-white/30 mt-2">Favicon / Profile Image</span>
          </div>
        </div>

        <div className="bg-[#F4F1EB] rounded-xl p-6">
          <h4 className="text-sm font-semibold text-[#0D1B2A] mb-4">Logo Usage Guidelines</h4>
          <ul className="space-y-2">
            {logoGuidelines.map((g, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#6B7280] leading-relaxed">
                <Check className="w-4 h-4 text-[#52B788] mt-0.5 shrink-0" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Color palette */}
      <div className="mb-14">
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-6">Color Palette</h3>
        <div className="space-y-3">
          {colorPalette.map((color) => (
            <div
              key={color.hex}
              className="rounded-xl border border-[#D4C5A9] bg-white overflow-hidden cursor-pointer"
              onClick={() => setExpandedColor(expandedColor === color.hex ? null : color.hex)}
            >
              <div className="flex items-center gap-4 p-4">
                <div
                  className="w-12 h-12 rounded-lg shrink-0 border border-black/10"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-[#0D1B2A] text-sm">{color.name}</span>
                    <span className="text-xs bg-[#F4F1EB] text-[#6B7280] px-2 py-0.5 rounded font-mono">{color.hex}</span>
                    <span className="text-xs text-[#52B788] font-medium px-2 py-0.5 bg-[#52B788]/10 rounded">{color.role}</span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-1 truncate">{color.hsl}</p>
                </div>
                <div className="shrink-0 text-[#6B7280]">
                  {expandedColor === color.hex ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
              {expandedColor === color.hex && (
                <div className="px-4 pb-4 pt-1 border-t border-[#F4F1EB]">
                  <p className="text-sm text-[#6B7280] leading-relaxed">{color.usage}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="mb-14">
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-6">Typography System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[#D4C5A9] bg-[#F4F1EB] p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">Display & Headings</span>
            <p className="text-4xl font-bold text-[#0D1B2A] mt-3 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Playfair Display
            </p>
            <p className="text-xl text-[#1B4332] mt-1" style={{ fontFamily: "Georgia, serif" }}>Bold · Semi-Bold</p>
            <div className="mt-4 pt-4 border-t border-[#D4C5A9] space-y-1">
              <p className="text-xs text-[#6B7280]">Used for: Page titles, section headers, hero headlines</p>
              <p className="text-xs font-mono text-[#6B7280]">Google Fonts · Free · Web-safe</p>
            </div>
          </div>
          <div className="rounded-xl border border-[#D4C5A9] bg-[#F4F1EB] p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">Body & UI</span>
            <p className="text-4xl font-bold text-[#0D1B2A] mt-3 leading-tight">
              Inter
            </p>
            <p className="text-xl text-[#1B4332] mt-1">Regular · Medium · Semi-Bold</p>
            <div className="mt-4 pt-4 border-t border-[#D4C5A9] space-y-1">
              <p className="text-xs text-[#6B7280]">Used for: Body copy, navigation, buttons, captions, forms</p>
              <p className="text-xs font-mono text-[#6B7280]">Google Fonts · Free · Currently in use</p>
            </div>
          </div>
        </div>
      </div>

      {/* Taglines */}
      <div className="mb-14">
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2">Brand Tagline Options</h3>
        <p className="text-sm text-[#6B7280] mb-6">Present these to ownership for final selection. One tagline, used consistently across all touchpoints.</p>
        <div className="space-y-3">
          {taglineOptions.map((t) => (
            <div
              key={t.line}
              className={`rounded-xl border p-5 flex items-start gap-4 ${t.recommended ? "border-[#52B788] bg-[#52B788]/5" : "border-[#D4C5A9] bg-white"}`}
            >
              <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${t.recommended ? "border-[#52B788] bg-[#52B788]" : "border-[#D4C5A9]"}`}>
                {t.recommended && <Check className="w-3 h-3 text-white" />}
              </div>
              <div>
                <p className="font-semibold text-[#0D1B2A] text-base leading-snug">
                  &ldquo;{t.line}&rdquo;
                  {t.recommended && <span className="ml-2 text-xs font-medium text-[#52B788] bg-[#52B788]/10 px-2 py-0.5 rounded">Recommended</span>}
                </p>
                <p className="text-sm text-[#6B7280] mt-1 leading-relaxed">{t.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand voice */}
      <div>
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-6">Brand Voice & Personality</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {brandVoice.map((v) => (
            <div key={v.trait} className="rounded-xl border border-[#D4C5A9] bg-white p-5">
              <div className="w-8 h-8 rounded-lg bg-[#1B4332] flex items-center justify-center mb-3">
                <span className="text-white text-xs font-bold">{v.trait[0]}</span>
              </div>
              <h4 className="font-semibold text-[#0D1B2A] mb-1">{v.trait}</h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
