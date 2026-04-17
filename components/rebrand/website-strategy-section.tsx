import { AlertTriangle, CheckCircle, Globe, Search, Zap } from "lucide-react"

const domainTasks = [
  { task: "Register atlanticturfspecialist.com", priority: "Critical", status: "todo" },
  { task: "Set up 301 permanent redirect: turf-professionals.com → atlanticturfspecialist.com", priority: "Critical", status: "todo" },
  { task: "Update Google Search Console with new domain (change of address tool)", priority: "Critical", status: "todo" },
  { task: "Migrate SSL certificate to new domain", priority: "High", status: "todo" },
  { task: "Update all canonical tags site-wide", priority: "High", status: "todo" },
  { task: "Submit new sitemap in Google Search Console", priority: "High", status: "todo" },
  { task: "Update Bing Webmaster Tools", priority: "Medium", status: "todo" },
]

const contentUpdates = [
  { page: "Homepage", changes: "Update hero headline, swap logo, replace brand name in all copy, update meta title & description" },
  { page: "All Service Pages (x6)", changes: "Swap brand name in headings and body copy, update page titles to include 'Atlantic Turf Specialist'" },
  { page: "Location Pages (x7)", changes: "Update structured data business name, update header references, refresh city-specific copy" },
  { page: "Blog Posts", changes: "Update site name in author bylines and internal links; audit for outdated name mentions" },
  { page: "Contact Page", changes: "Update business name, verify phone number and address, update email domain if changing" },
  { page: "Footer & Header", changes: "New logo, updated brand name, refresh copyright line, update email addresses if applicable" },
  { page: "FAQ Page", changes: "Review Q&A for any brand name references; update 'About Turf Professionals' references" },
]

const seoConsiderations = [
  {
    icon: AlertTriangle,
    type: "warning",
    title: "Ranking Risk During Transition",
    body: "Expect a temporary 10–20% dip in organic traffic within the first 4–6 weeks of domain migration. This is normal and recovers with proper 301 redirects and consistent NAP updates.",
  },
  {
    icon: Search,
    type: "action",
    title: "NAP Consistency is Non-Negotiable",
    body: "Name, Address, Phone must be identical across every citation: Google Business Profile, Yelp, Angi, HomeAdvisor, BBB, Facebook, and any local directories. Inconsistency tanks local pack rankings.",
  },
  {
    icon: Zap,
    type: "action",
    title: "Preserve Existing Backlinks",
    body: "Run a backlink audit (Ahrefs or Semrush) before migration. Personally reach out to the top 20 referring domains and request link updates to the new URL and brand name.",
  },
  {
    icon: CheckCircle,
    type: "success",
    title: "Schema Markup Must Be Updated",
    body: "Update all LocalBusiness structured data: name, url, and sameAs properties. Also update OpenGraph metadata across all pages.",
  },
]

const typeColors: Record<string, string> = {
  warning: "bg-amber-50 border-amber-200 text-amber-700",
  action: "bg-[#52B788]/10 border-[#52B788]/30 text-[#1B4332]",
  success: "bg-blue-50 border-blue-200 text-blue-700",
}

const priorityColors: Record<string, string> = {
  Critical: "bg-red-100 text-red-700",
  High: "bg-amber-100 text-amber-700",
  Medium: "bg-[#52B788]/10 text-[#1B4332]",
}

export function WebsiteStrategySection() {
  return (
    <section id="website-strategy" className="scroll-mt-20 py-16 border-b border-[#D4C5A9]">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-[#52B788]" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52B788]">Section 02</span>
      </div>

      <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3 leading-tight">Website Redesign Strategy</h2>
      <p className="text-[#6B7280] max-w-2xl mb-12 leading-relaxed">
        The website is the highest-visibility customer touchpoint. The rebrand here requires both a technical migration plan and a content refresh — done in the right order to minimize SEO disruption.
      </p>

      {/* Domain strategy */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <Globe className="w-5 h-5 text-[#52B788]" />
          <h3 className="text-lg font-semibold text-[#0D1B2A]">Domain & Technical Migration</h3>
        </div>

        {/* Domain visual */}
        <div className="bg-[#0D1B2A] rounded-xl p-6 mb-6 font-mono">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40 w-16 shrink-0">OLD</span>
              <span className="text-white/50 text-sm line-through">www.turf-professionals.com</span>
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">DEPRECATED</span>
            </div>
            <div className="w-6 h-px bg-[#52B788]/50 ml-20" />
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40 w-16 shrink-0">NEW</span>
              <span className="text-[#52B788] text-sm font-semibold">www.atlanticturfspecialist.com</span>
              <span className="text-xs bg-[#52B788]/20 text-[#52B788] px-2 py-0.5 rounded">TARGET</span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <span className="text-xs text-white/30">301 Permanent Redirect · All subpages forwarded · Link equity preserved</span>
            </div>
          </div>
        </div>

        {/* Domain task list */}
        <div className="space-y-2">
          {domainTasks.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white border border-[#D4C5A9] rounded-lg px-4 py-3">
              <div className="w-5 h-5 rounded border-2 border-[#D4C5A9] shrink-0" />
              <span className="text-sm text-[#0D1B2A] flex-1">{item.task}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded shrink-0 ${priorityColors[item.priority]}`}>
                {item.priority}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content updates */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-5">Content Update Matrix</h3>
        <div className="rounded-xl border border-[#D4C5A9] overflow-hidden">
          <div className="grid grid-cols-[160px_1fr] bg-[#F4F1EB] px-5 py-3 border-b border-[#D4C5A9]">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Page / Section</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Required Changes</span>
          </div>
          {contentUpdates.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[160px_1fr] px-5 py-4 gap-4 border-b border-[#F4F1EB] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}
            >
              <span className="text-sm font-medium text-[#0D1B2A]">{row.page}</span>
              <span className="text-sm text-[#6B7280] leading-relaxed">{row.changes}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SEO considerations */}
      <div>
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-5">SEO Migration Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {seoConsiderations.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className={`rounded-xl border p-5 ${typeColors[item.type]}`}>
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm leading-relaxed opacity-80">{item.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
