import type { Metadata } from "next"
import Link from "next/link"
import { ContactPageClient } from "@/app/contact/ContactPageClient"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Artificial Turf Subcontractor Charlotte NC | General Contractors | Atlantic Turf Specialists",
  description:
    "Atlantic Turf Specialists is Charlotte's preferred artificial turf subcontractor for general contractors and developers. 48-hour commercial quotes, licensed & insured, local portfolio. Request a sub bid today.",
  keywords: [
    "artificial turf subcontractor Charlotte NC",
    "turf sub bid Charlotte general contractor",
    "commercial turf subcontractor Charlotte",
    "synthetic grass GC Charlotte NC",
    "turf installation subcontractor Charlotte",
    "Atlantic Turf Specialists general contractors",
    "commercial turf bid Charlotte NC",
    "turf subcontractor Huntersville Concord Matthews",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialists.com/general-contractors",
  },
  openGraph: {
    title: "Artificial Turf Subcontractor Charlotte NC | Atlantic Turf Specialists",
    description:
      "Charlotte's preferred artificial turf subcontractor for general contractors. 48-hour commercial quotes, licensed & insured crew, local portfolio.",
    images: [
      {
        url: "/portfolio/grace-covenant-church-playground-04.webp",
        width: 1200,
        height: 630,
        alt: "Commercial artificial turf installation by Atlantic Turf Specialists — Charlotte NC",
      },
    ],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlanticturfspecialists.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "General Contractors",
          item: "https://www.atlanticturfspecialists.com/general-contractors",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Atlantic Turf Specialists",
      url: "https://www.atlanticturfspecialists.com",
      telephone: "+17049956265",
      email: "zach@atlanticturfspecialists.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Charlotte",
        addressRegion: "NC",
        addressCountry: "US",
      },
      areaServed: ["Charlotte, NC", "Huntersville, NC", "Matthews, NC", "Concord, NC", "Lake Norman, NC"],
    },
  ],
}

const stats = [
  { value: "48 hrs", label: "Quote Turnaround" },
  { value: "500+", label: "Projects Completed" },
  { value: "5★", label: "Google Rating" },
  { value: "100%", label: "Licensed & Insured" },
]

const reasons = [
  {
    number: "01",
    title: "48-Hour Sub Bid",
    body: "Send us the plans. We scope the job and return a detailed sub bid within 48 hours — no chasing, no delays.",
  },
  {
    number: "02",
    title: "Commercial-Grade Crew",
    body: "Our installation team is built for commercial volumes, tight timelines, and demanding specs. We show up and we deliver.",
  },
  {
    number: "03",
    title: "Fully Licensed & Insured",
    body: "We carry the coverage your project requires. Certificate of insurance on request — no surprises.",
  },
  {
    number: "04",
    title: "Local Charlotte Portfolio",
    body: "We are not a national franchise. We are a Charlotte crew. You can see our work in your market and talk to the owners who hired us.",
  },
]

const portfolioItems = [
  {
    src: "/portfolio/grace-covenant-church-playground-04.webp",
    alt: "Grace Covenant Church playground — Huntersville, NC",
    label: "Church Playground — Huntersville, NC",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/portfolio/grace-covenant-church-playground-06.webp",
    alt: "Grace Covenant Church courtyard — Huntersville, NC",
    label: "Church Courtyard — Huntersville, NC",
    span: "",
  },
  {
    src: "/portfolio/grace-covenant-church-playground-02.webp",
    alt: "Church playground turf detail — Huntersville, NC",
    label: "Playground Turf Detail",
    span: "",
  },
  {
    src: "/portfolio/artificial-turf-sports-field-install-01.webp",
    alt: "Backyard sports field — Charlotte, NC",
    label: "Sports Field — Charlotte, NC",
    span: "",
  },
  {
    src: "/portfolio/artificial-turf-side-yard-install-01.webp",
    alt: "Full backyard new construction — Charlotte, NC",
    label: "New Construction — Charlotte, NC",
    span: "",
  },
]

const steps = [
  {
    number: "01",
    title: "Submit Your Scope",
    body: "Fill out the form below or call us directly. Share your plans, square footage, and timeline.",
  },
  {
    number: "02",
    title: "Receive Your Sub Bid",
    body: "We review your commercial scope and return a detailed, line-item sub bid within 48 hours.",
  },
  {
    number: "03",
    title: "We Install. You Move On.",
    body: "Our crew arrives on schedule, installs to spec, cleans up, and clears the site. No babysitting required.",
  },
]

export default function GeneralContractorsPage() {
  return (
    <>
      <StructuredData data={structuredData} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="/portfolio/grace-covenant-church-playground-04.webp"
            alt="Commercial artificial turf installation — Grace Covenant Church Huntersville NC"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 max-w-6xl py-24">
          <div className="max-w-3xl">
            <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-6">
              For General Contractors &amp; Developers — Charlotte, NC
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] text-balance">
              The Turf Sub That{" "}
              <span className="text-primary">Hits Your Schedule.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              48-hour sub bids. Commercial-grade crew. Fully licensed and insured.
              Add us to your sub list and never chase a turf contractor again.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#sub-bid"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Request a Sub Bid
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+17049956265"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (704) 995-6265
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-6 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────── */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold tracking-widest text-xs uppercase mb-4">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight text-balance">
                Most Turf Subs Burn Your Timeline
              </h2>
            </div>
            <div className="space-y-4">
              {[
                "Two weeks to return a quote — if they return it at all.",
                "Product delivered that doesn't match the approved sample.",
                "Crew no-shows that push your punch list by weeks.",
                "No commercial insurance on your certificate request.",
              ].map((pain) => (
                <div key={pain} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ATLANTIC TURF ────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Why GCs Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
              Built for Commercial Work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r) => (
              <div
                key={r.number}
                className="bg-card border border-border rounded-2xl p-7 hover:border-primary/50 transition-colors group"
              >
                <p className="text-5xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors leading-none mb-4">
                  {r.number}
                </p>
                <h3 className="font-bold text-foreground mb-2 text-lg">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────────── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Our Work</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance leading-tight">
                Charlotte Projects,<br />Real Results
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-primary font-semibold text-sm hover:underline underline-offset-4 transition-colors flex items-center gap-1"
            >
              View Full Portfolio
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[480px]">
            {portfolioItems.map((item) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-xl group ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-semibold">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">The Process</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
              Simple. Fast. Done Right.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative bg-card border border-border rounded-2xl p-8">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 -right-3 z-10">
                    <svg className="h-6 w-6 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <p className="text-6xl font-extrabold text-primary/15 leading-none mb-5">{step.number}</p>
                <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <section className="py-12 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Licensed & Insured" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "48-Hour Quote Turnaround" },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", label: "Charlotte-Based Crew" },
              { icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", label: "5-Star Google Reviews" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-foreground">
                <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB BID FORM ─────────────────────────────────────── */}
      <section id="sub-bid" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — copy */}
            <div className="lg:sticky lg:top-24">
              <p className="text-primary font-bold tracking-widest text-xs uppercase mb-4">Ready to Partner?</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight text-balance mb-6">
                Request Your Sub Bid
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Fill out the form and we will respond with a full commercial scope and quote within 48 hours.
                No obligation, no runaround.
              </p>
              <div className="space-y-5">
                {[
                  "Detailed line-item sub bid within 48 hours",
                  "Commercial COI available on request",
                  "Crew available across the greater Charlotte market",
                  "Direct line to the owner — not a call center",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-5 bg-card border border-border rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Prefer to call?</p>
                <a href="tel:+17049956265" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
                  (704) 995-6265
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <ContactPageClient />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
