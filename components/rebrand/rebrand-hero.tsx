import { ArrowRight, Calendar, MapPin } from "lucide-react"

export function RebrandHero() {
  return (
    <div className="relative bg-[#0D1B2A] overflow-hidden">
      {/* Background texture lines */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-x-0 border-t border-white"
            style={{ top: `${(i + 1) * 8}%` }}
          />
        ))}
      </div>

      {/* Green accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#52B788]" />

      <div className="relative container mx-auto max-w-5xl px-6 py-20 md:py-28">
        {/* Transition tag */}
        <div className="inline-flex items-center gap-2 bg-[#1B4332] border border-[#52B788]/30 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52B788]">
            Active Rebranding Initiative
          </span>
        </div>

        {/* Brand transition */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4">
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">From</p>
              <p className="text-xl sm:text-2xl font-semibold text-white/50 line-through decoration-[#52B788] decoration-2">
                Turf Professionals
              </p>
            </div>
            <ArrowRight className="w-6 h-6 text-[#52B788] hidden sm:block shrink-0" />
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#52B788] mb-1">To</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                Atlantic Turf Specialist
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] text-balance">
          Complete Rebranding<br />
          <span className="text-[#52B788]">Strategy & Playbook</span>
        </h1>

        <p className="text-lg text-white/60 max-w-2xl mb-10 leading-relaxed">
          A step-by-step guide covering brand identity, website redesign, social media migration, marketing materials, and a phased implementation timeline — all designed to transition smoothly while retaining existing clientele and strengthening market presence.
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-6 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>12-Week Rollout Plan</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Charlotte, NC &amp; surrounding areas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#52B788]" />
            <span>6 Strategy Sections</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#52B788]/20" />
    </div>
  )
}
