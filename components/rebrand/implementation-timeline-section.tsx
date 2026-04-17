const phases = [
  {
    phase: "Phase 1",
    title: "Internal Preparation",
    weeks: "Weeks 1–2",
    theme: "Build before you broadcast.",
    color: "#1B4332",
    milestones: [
      {
        week: "Week 1",
        tasks: [
          "Finalize and approve brand name: Atlantic Turf Specialist",
          "Select and lock final tagline from the three options",
          "Brief a designer to develop the full logo system (primary, reversed, sub-mark)",
          "Register domain: atlanticturfspecialist.com",
          "Register social media handles across all platforms (even if not yet active)",
          "Open a new LLC or update DBA filing if required (consult attorney)",
        ],
      },
      {
        week: "Week 2",
        tasks: [
          "Receive and approve final logo files (AI, SVG, PNG, dark/light variants)",
          "Develop brand style guide document (colors, fonts, logo rules, voice)",
          "Order vehicle magnetics or begin vehicle wrap quotes",
          "Order business cards and yard signs with new brand",
          "Brief and align the entire crew on the rebrand — purpose, timeline, talking points",
          "Prepare email signature templates for all staff",
        ],
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Soft Launch — Digital First",
    weeks: "Weeks 3–6",
    theme: "Update digital touchpoints before going public.",
    color: "#40916C",
    milestones: [
      {
        week: "Week 3",
        tasks: [
          "Set up new website on atlanticturfspecialist.com (or redeploy current site to new domain)",
          "Update all on-page content to reflect new brand name throughout",
          "Configure 301 permanent redirects from old domain to new",
          "Update Google Business Profile: name, website, description, photos",
          "Submit Google Search Console change of address",
          "Update structured data / schema markup on all pages",
        ],
      },
      {
        week: "Week 4",
        tasks: [
          "Update Facebook: page name, handle, about section, cover photo, logo",
          "Update Instagram: username, bio, profile photo, story highlights",
          "Update LinkedIn: company page name, logo, banner, description",
          "Audit and update all online directory listings (Angi, Yelp, BBB, HomeAdvisor, Houzz)",
          "Update email newsletter template header and footer",
          "Update invoice and estimate templates in CRM / accounting software",
        ],
      },
      {
        week: "Week 5",
        tasks: [
          "Launch targeted backlink outreach — contact top 20 referring domains for URL updates",
          "Update any active Google Ads campaigns: headlines, display URLs, landing pages",
          "Run a full site crawl to catch any remaining 'Turf Professionals' mentions",
          "Update email domain if transitioning from @turf-professionals.com addresses",
          "Set up email forwarding from old address to new (minimum 12-month forward)",
          "Distribute new business cards and uniform items to all crew members",
        ],
      },
      {
        week: "Week 6",
        tasks: [
          "Send rebrand announcement email to existing client list",
          "Post soft announcement on social media (brand-focused, not a hard launch yet)",
          "Review analytics: confirm 301 redirects are passing traffic correctly",
          "Confirm Google Business Profile update is live and accurate",
          "QA check all digital assets: consistent logo, colors, name across all channels",
          "Brief any subcontractors or vendor partners on the new brand name",
        ],
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Full Public Rollout",
    weeks: "Weeks 7–12",
    theme: "Go loud. Reinforce. Sustain.",
    color: "#52B788",
    milestones: [
      {
        week: "Weeks 7–8",
        tasks: [
          "Launch official social media brand announcement (prepared caption, reel, or video)",
          "Deploy vehicle wraps on priority vehicles (highest visibility first)",
          "Install/update exterior office signage if applicable",
          "Launch any PR outreach: local press, Charlotte neighborhood Facebook groups",
          "Begin consistent content calendar posting schedule under new brand",
          "Solicit and respond to first new reviews mentioning 'Atlantic Turf Specialist'",
        ],
      },
      {
        week: "Weeks 9–10",
        tasks: [
          "Monitor Google Search Console for crawl errors or ranking impacts",
          "Review organic traffic levels — flag if drop exceeds 25%",
          "Continue link-building and local citation cleanup",
          "Run a paid social campaign introducing the new brand to local audience",
          "Gather first round of client feedback on brand perception",
          "Update truck signage on remaining fleet vehicles",
        ],
      },
      {
        week: "Weeks 11–12",
        tasks: [
          "Final audit: any remaining 'Turf Professionals' mentions online or in materials",
          "Confirm old domain still forwarding correctly",
          "Review Google Business Profile for completeness and accuracy",
          "Assess social media follower growth and engagement since rebrand",
          "Document lessons learned and archive the brand style guide v1.0",
          "Celebrate the completed rebrand with the team",
        ],
      },
    ],
  },
]

const keyRisks = [
  {
    risk: "SEO Traffic Drop",
    likelihood: "High",
    mitigation: "Implement all 301 redirects before going public. Submit change of address in Search Console. Monitor weekly in Weeks 7–12.",
  },
  {
    risk: "Client Confusion",
    likelihood: "Medium",
    mitigation: "Send proactive email to all existing clients in Week 6 before the public announcement. Train crew with talking points.",
  },
  {
    risk: "Social Handle Unavailability",
    likelihood: "Low",
    mitigation: "Register all handles in Week 1 immediately. Have alternative handles ready (e.g., @AtlanticTurfSpec) as fallback.",
  },
  {
    risk: "Facebook Name Change Rejection",
    likelihood: "Low",
    mitigation: "Submit early (Week 3). If rejected, appeal with business documentation showing DBA or LLC name change.",
  },
]

const likelihoodColor: Record<string, string> = {
  High: "text-red-600 bg-red-50",
  Medium: "text-amber-600 bg-amber-50",
  Low: "text-[#1B4332] bg-[#52B788]/10",
}

export function ImplementationTimelineSection() {
  return (
    <section id="timeline" className="scroll-mt-32 py-16 border-b border-[#D4C5A9]">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-block w-8 h-px bg-[#52B788]" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52B788]">Section 05</span>
      </div>

      <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3 leading-tight">12-Week Implementation Timeline</h2>
      <p className="text-[#6B7280] max-w-2xl mb-12 leading-relaxed">
        A phased rollout protects existing business, minimizes confusion, and ensures every touchpoint is updated before the public launch. Do not skip phases or rush the sequence.
      </p>

      {/* Phase cards */}
      <div className="space-y-8 mb-14">
        {phases.map((phase, phaseIdx) => (
          <div key={phase.phase} className="rounded-2xl border border-[#D4C5A9] overflow-hidden">
            {/* Phase header */}
            <div className="flex items-start gap-5 p-6" style={{ backgroundColor: phase.color }}>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">{phaseIdx + 1}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/60">{phase.phase}</span>
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{phase.weeks}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <p className="text-sm text-white/70 mt-1 italic">&ldquo;{phase.theme}&rdquo;</p>
              </div>
            </div>

            {/* Weekly milestones */}
            <div className="divide-y divide-[#F4F1EB]">
              {phase.milestones.map((milestone) => (
                <div key={milestone.week} className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: phase.color }} />
                    <h4 className="text-sm font-semibold text-[#0D1B2A]">{milestone.week}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {milestone.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded border-2 border-[#D4C5A9] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#6B7280] leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Risk register */}
      <div>
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-5">Risk Register</h3>
        <div className="space-y-3">
          {keyRisks.map((risk, i) => (
            <div key={i} className="rounded-xl border border-[#D4C5A9] bg-white p-5 flex items-start gap-5">
              <div className="shrink-0 text-right min-w-[100px]">
                <p className="text-sm font-semibold text-[#0D1B2A]">{risk.risk}</p>
                <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded mt-1 ${likelihoodColor[risk.likelihood]}`}>
                  {risk.likelihood} Risk
                </span>
              </div>
              <div className="w-px self-stretch bg-[#D4C5A9] shrink-0" />
              <p className="text-sm text-[#6B7280] leading-relaxed">{risk.mitigation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
