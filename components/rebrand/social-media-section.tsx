const platforms = [
  {
    name: "Google Business Profile",
    handle: "Atlantic Turf Specialist",
    priority: "Critical",
    icon: "G",
    color: "#4285F4",
    steps: [
      "Update business name to 'Atlantic Turf Specialist'",
      "Upload new logo as profile photo",
      "Update website URL to new domain",
      "Revise business description with new brand messaging",
      "Update photo album cover images with new brand watermark",
      "Post an announcement update to existing followers",
    ],
    note: "Google Business Profile is the #1 local SEO touchpoint. Prioritize this above all other platforms.",
  },
  {
    name: "Facebook Business Page",
    handle: "@AtlanticTurfSpecialist",
    priority: "Critical",
    icon: "f",
    color: "#1877F2",
    steps: [
      "Update Page name (submit name change request to Facebook)",
      "Update username/handle to @AtlanticTurfSpecialist",
      "Replace profile photo and cover image with new brand assets",
      "Update 'About' section with new business name, tagline, and website",
      "Pin a brand announcement post to the top of the page",
      "Update any active ad campaigns with new brand assets",
    ],
    note: "Facebook name changes require review. Submit early in Phase 1 as approval can take 1–3 business days.",
  },
  {
    name: "Instagram",
    handle: "@atlantic_turf_specialist",
    priority: "High",
    icon: "IG",
    color: "#E1306C",
    steps: [
      "Change username to @atlantic_turf_specialist",
      "Update profile photo to new sub-mark logo",
      "Rewrite bio: 'Atlantic Turf Specialist | Premium Artificial Turf | Charlotte, NC | Free Quotes ↓'",
      "Update website link in bio to new domain",
      "Post a brand announcement reel or carousel (3–5 slides covering the 'why' behind the rebrand)",
      "Add a Story Highlight titled 'New Look, Same Team'",
    ],
    note: "Handle changes on Instagram are instant but can disrupt tagged mentions from past posts.",
  },
  {
    name: "LinkedIn",
    handle: "Atlantic Turf Specialist",
    priority: "Medium",
    icon: "in",
    color: "#0A66C2",
    steps: [
      "Update company page name and tagline",
      "Upload new logo and banner image",
      "Refresh 'About' section with updated brand positioning",
      "Announce the rebrand via a company post",
      "Ensure all employee profiles reference the correct company name",
    ],
    note: "LinkedIn is key for commercial clients and B2B outreach. Ensure consistency with any employee profiles.",
  },
  {
    name: "TikTok",
    handle: "@atlanticturfspecialist",
    priority: "Low",
    icon: "TT",
    color: "#010101",
    steps: [
      "Update username and display name",
      "Update profile photo and bio",
      "Post a 'big reveal' video — before/after of brand + a project showcase",
    ],
    note: "If TikTok is not actively managed, deprioritize and address in Phase 3.",
  },
]

const announcementCopy = {
  caption: `Big news from the team: We're officially rebranding as Atlantic Turf Specialist.

Same crew. Same expert installations. Same commitment to Charlotte and surrounding communities — with a name that better reflects where we're heading.

Atlantic Turf Specialist was built to signal what we've always stood for: regional expertise, specialist-level installations, and results that last.

Got a project in mind? Quotes are always free. Link in bio.

#AtlanticTurfSpecialist #ArtificialTurf #CharlotteNC #TurfInstallation`,
  emailSubjectLine: "Exciting news — we've updated our name",
  emailOpener:
    "You've trusted us with your property, and we want to make sure you hear it from us first: Turf Professionals has officially rebranded as Atlantic Turf Specialist. Your account, quote history, and our team remain exactly the same.",
}

const contentPillars = [
  { pillar: "Project Showcases", frequency: "3x/week", format: "Before/after photos, short-form video walkthroughs" },
  { pillar: "Education & Tips", frequency: "2x/week", format: "Carousel posts: 'How we install', 'Turf vs. grass cost breakdown'" },
  { pillar: "Client Testimonials", frequency: "1x/week", format: "Graphic quotes with job-site photography background" },
  { pillar: "Behind the Scenes", frequency: "1x/week", format: "Team videos, truck wraps, equipment unboxing" },
  { pillar: "Local Community", frequency: "As relevant", format: "Charlotte events, area spotlights, Carolinas sports tie-ins" },
]

const priorityBadge: Record<string, string> = {
  Critical: "bg-red-100 text-red-700",
  High: "bg-amber-100 text-amber-700",
  Medium: "bg-[#52B788]/10 text-[#1B4332]",
  Low: "bg-[#D4C5A9]/50 text-[#6B7280]",
}

export function SocialMediaSection() {
  return (
    <section id="social-media" className="scroll-mt-32 py-16 border-b border-[#D4C5A9]">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-[#52B788]" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52B788]">Section 03</span>
      </div>

      <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3 leading-tight">Digital & Social Media</h2>
      <p className="text-[#6B7280] max-w-2xl mb-12 leading-relaxed">
        Social and local search channels must be updated in a coordinated wave — not piecemeal. Inconsistency across platforms confuses prospects and hurts local SEO. Follow the priority order below.
      </p>

      {/* Platform-by-platform */}
      <div className="space-y-5 mb-14">
        {platforms.map((platform) => (
          <div key={platform.name} className="rounded-xl border border-[#D4C5A9] bg-white overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4 border-b border-[#F4F1EB]">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: platform.color }}
              >
                {platform.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-semibold text-[#0D1B2A] text-sm">{platform.name}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${priorityBadge[platform.priority]}`}>
                    {platform.priority}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#6B7280] mt-0.5">{platform.handle}</p>
              </div>
            </div>
            <div className="px-5 py-4">
              <ul className="space-y-2 mb-3">
                {platform.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#6B7280]">
                    <div className="w-5 h-5 rounded border-2 border-[#D4C5A9] shrink-0 mt-0.5" />
                    {step}
                  </li>
                ))}
              </ul>
              {platform.note && (
                <div className="mt-3 bg-[#F4F1EB] rounded-lg px-4 py-3">
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    <span className="font-semibold text-[#0D1B2A]">Note: </span>{platform.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Announcement copy */}
      <div className="mb-14">
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-5">Launch Announcement Templates</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-xl border border-[#D4C5A9] bg-white p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">Social Caption</span>
            </div>
            <pre className="text-sm text-[#0D1B2A] leading-relaxed whitespace-pre-wrap font-sans bg-[#F4F1EB] rounded-lg p-4">
              {announcementCopy.caption}
            </pre>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#D4C5A9] bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788] block mb-2">Email Subject Line</span>
              <p className="text-sm font-medium text-[#0D1B2A] bg-[#F4F1EB] rounded-lg px-4 py-3">
                {announcementCopy.emailSubjectLine}
              </p>
            </div>
            <div className="rounded-xl border border-[#D4C5A9] bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788] block mb-2">Email Opening Paragraph</span>
              <p className="text-sm text-[#6B7280] leading-relaxed bg-[#F4F1EB] rounded-lg px-4 py-3">
                {announcementCopy.emailOpener}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content pillars */}
      <div>
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-5">Post-Launch Content Pillars</h3>
        <div className="rounded-xl border border-[#D4C5A9] overflow-hidden">
          <div className="grid grid-cols-[1fr_120px_1fr] bg-[#F4F1EB] px-5 py-3 border-b border-[#D4C5A9]">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Pillar</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Frequency</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Format</span>
          </div>
          {contentPillars.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_120px_1fr] px-5 py-4 gap-4 border-b border-[#F4F1EB] last:border-0 items-start ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}
            >
              <span className="text-sm font-medium text-[#0D1B2A]">{row.pillar}</span>
              <span className="text-sm text-[#52B788] font-medium">{row.frequency}</span>
              <span className="text-sm text-[#6B7280] leading-relaxed">{row.format}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
