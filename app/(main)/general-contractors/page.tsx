import type { Metadata } from "next"
import Script from "next/script"
import { ContactPageClient } from "@/app/(main)/contact/ContactPageClient"
import { StructuredData } from "@/components/structured-data"
import { PhoneLink } from "@/components/phone-link"

export const metadata: Metadata = {
  title: "Turf Subcontractor for General Contractors Charlotte NC | Atlantic Turf Specialists",
  description:
    "Atlantic Turf Specialists is Charlotte's trusted artificial turf subcontractor for general contractors, custom home builders, and commercial developers. Licensed, insured, bid-ready.",
  keywords: [
    "artificial turf subcontractor Charlotte NC",
    "turf installer for general contractors Charlotte",
    "commercial turf installation Charlotte NC",
    "turf sub bid Charlotte",
    "artificial turf GC Charlotte NC",
    "Atlantic Turf Specialists subcontractor",
    "turf installation contractor Charlotte",
    "commercial artificial grass Charlotte NC",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialists.com/general-contractors",
  },
  openGraph: {
    title: "Turf Subcontractor for General Contractors | Atlantic Turf Specialists — Charlotte NC",
    description:
      "Fast, reliable artificial turf subcontractor for GCs and builders across Charlotte NC. Licensed, insured, and experienced on commercial and residential scopes.",
    images: [
      {
        url: "/portfolio/artificial-turf-commercial-install-01.webp",
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

const credentials = [
  { value: "Licensed", label: "& Insured in NC" },
  { value: "48hr", label: "Bid Turnaround" },
  { value: "500+", label: "Projects Delivered" },
  { value: "5.0★", label: "Google Rating" },
]

const painPoints = [
  {
    problem: "Sub no-shows on deadline day",
    solution: "We show up. Every time. Your schedule is our schedule.",
  },
  {
    problem: "Sloppy seams and bad installs",
    solution: "Commercial-grade precision cuts, tight seams, clean borders.",
  },
  {
    problem: "Can't verify licensing or insurance",
    solution: "Fully licensed and insured. COI available same-day on request.",
  },
  {
    problem: "Slow bids that hold up the project",
    solution: "Detailed scoped bids returned within 48 hours, guaranteed.",
  },
]

const scopes = [
  {
    title: "Residential New Construction",
    body: "We work with custom home builders to spec and install premium backyard turf — putting greens, pool surrounds, full lawns — as a seamless part of your project closeout.",
    src: "/portfolio/artificial-turf-luxury-estate-install-01.webp",
    alt: "Luxury residential new construction turf install — Charlotte NC",
  },
  {
    title: "Commercial Developments",
    body: "From mixed-use courtyards to HOA common areas to corporate campuses — we deliver commercial-grade installations that hold up under heavy traffic and scrutiny.",
    src: "/portfolio/artificial-turf-commercial-install-02.webp",
    alt: "Commercial turf installation at a Charlotte NC development",
  },
  {
    title: "Playground & Recreational",
    body: "ADA-compliant playground surfacing, sports fields, and recreational spaces. We have direct experience on church campuses, schools, and multi-use recreational properties.",
    src: "/portfolio/grace-covenant-church-playground-04.webp",
    alt: "Church playground artificial turf installation — Huntersville NC",
  },
  {
    title: "Hardscape Integration",
    body: "We coordinate directly with your concrete, pavers, and landscaping trades to ensure clean transitions, proper drainage, and a finished product that makes your whole job look great.",
    src: "/portfolio/artificial-turf-side-yard-pathway-install-01.webp",
    alt: "Turf integrated with hardscape and river rock pathway — Charlotte NC",
  },
]

const proofPhotos = [
  {
    src: "/portfolio/artificial-turf-installation-in-progress-01.webp",
    alt: "Atlantic Turf Specialists crew installing commercial turf on site",
    label: "In Progress — Charlotte, NC",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/portfolio/artificial-turf-commercial-install-03.webp",
    alt: "Completed commercial turf installation — Charlotte NC",
    label: "Commercial Install — Charlotte, NC",
    className: "",
  },
  {
    src: "/portfolio/grace-covenant-church-playground-06.webp",
    alt: "Grace Covenant Church playground turf — Huntersville NC",
    label: "Church Playground — Huntersville, NC",
    className: "",
  },
  {
    src: "/portfolio/artificial-turf-aerial-backyard-drone-01.webp",
    alt: "Aerial drone shot of completed turf installation — Charlotte NC",
    label: "Aerial View — Charlotte, NC",
    className: "",
  },
  {
    src: "/portfolio/artificial-turf-courtyard-install-01.webp",
    alt: "Courtyard turf installation — Charlotte NC",
    label: "Courtyard Install — Charlotte, NC",
    className: "",
  },
]

const whyUs = [
  {
    number: "01",
    title: "We Work to Your Timeline",
    body: "We understand that turf is often one of the last trades on site. We build our schedule around yours and communicate proactively — no chasing required.",
  },
  {
    number: "02",
    title: "Clean Jobsite Standards",
    body: "Our crew respects your site. We bring everything we need, stage materials properly, and leave every workday clean so other trades aren't impacted.",
  },
  {
    number: "03",
    title: "Scope Flexibility",
    body: "Whether it's 200 sq ft or 20,000 sq ft, a single residential lot or a multi-phase commercial development — we can scope it, price it, and deliver it.",
  },
  {
    number: "04",
    title: "Owner-Direct Communication",
    body: "You talk to the owner, not a sales rep. Decisions get made fast, problems get solved on the spot, and nothing falls through the cracks.",
  },
]

const CheckIcon = () => (
  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const XIcon = () => (
  <svg className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function GeneralContractorsLandingPage() {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || ""

  return (
    <>
      <StructuredData data={structuredData} />
      {googleMapsApiKey && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&loading=async`}
          strategy="afterInteractive"
        />
      )}

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/portfolio/artificial-turf-installation-in-progress-02.webp"
            alt="Atlantic Turf Specialists crew installing commercial-grade artificial turf on a Charlotte NC job site"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        </div>

        {/* Top trust bar */}
        <div className="absolute top-0 left-0 right-0 z-10 border-b border-white/10 bg-black/60 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-6xl py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-6 text-xs text-white/60 font-medium tracking-wide uppercase">
              <span className="flex items-center gap-1.5"><CheckIcon /> Licensed & Insured NC</span>
              <span className="flex items-center gap-1.5"><CheckIcon /> COI Available Same-Day</span>
              <span className="flex items-center gap-1.5"><CheckIcon /> 48-Hour Bid Turnaround</span>
            </div>
            <a
              href="mailto:zach@atlanticturfspecialists.com"
              className="text-xs text-primary font-semibold hover:underline underline-offset-2 tracking-wide"
            >
              zach@atlanticturfspecialists.com
            </a>
          </div>
        </div>

        <div className="relative container mx-auto px-4 max-w-6xl pb-20 pt-48">
          <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-5">
            Turf Subcontractor — Charlotte, NC
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-white leading-[0.93] text-balance mb-8 max-w-4xl">
            The Turf Sub{" "}
            <span className="text-primary">GCs Can Count On.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
            Atlantic Turf Specialists is Charlotte&apos;s go-to artificial turf subcontractor for
            general contractors, custom builders, and commercial developers. We deliver on scope,
            on schedule, and on budget — every single time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#sub-bid"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg text-base transition-colors"
            >
              Request a Sub Bid
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <PhoneLink
              href="tel:+17049956265"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (704) 995-6265
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* ── CREDENTIAL BAR ────────────────────────────────────────── */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {credentials.map((c) => (
              <div key={c.label} className="px-6 py-5 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-white">{c.value}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mt-1">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4">Sound Familiar?</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-balance mb-6">
                Tired of Turf Subs That Let You Down?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Bad subcontractors cost you time, money, and client relationships. We built our
                business around being the kind of trade partner GCs actually want on their roster.
              </p>
              <div className="space-y-5">
                {painPoints.map((p) => (
                  <div key={p.problem} className="grid grid-cols-[auto_1fr] gap-4 items-start border border-white/10 rounded-xl p-5 bg-white/5">
                    <div className="space-y-1 col-span-2">
                      <div className="flex items-start gap-3">
                        <XIcon />
                        <p className="text-white/50 text-sm font-medium line-through">{p.problem}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="text-white text-sm font-semibold">{p.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/portfolio/artificial-turf-commercial-install-01.webp"
                alt="Atlantic Turf Specialists commercial installation — Charlotte NC"
                className="w-full h-[520px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-xl px-6 py-5 shadow-2xl max-w-[200px]">
                <p className="text-4xl font-extrabold leading-none">48hr</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mt-1">Guaranteed Bid Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCOPE OF WORK ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#141414] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4">What We Cover</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-balance">
              We Handle Any Scope
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Residential new construction to large commercial developments — we have the crew, equipment, and experience to execute.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {scopes.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO PROOF ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-3">On the Job</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white text-balance leading-tight">
                Proven on Job Sites<br />Across Charlotte.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[500px]">
            {proofPhotos.map((item) => (
              <div key={item.src} className={`relative overflow-hidden rounded-xl group ${item.className}`}>
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

      {/* ── WHY ATLANTIC TURF ─────────────────────────────────────── */}
      <section className="py-24 bg-[#141414] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4">Why We Work</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-balance">
              Built for the Way GCs Operate
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((r) => (
              <div
                key={r.number}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors group"
              >
                <p className="text-6xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors leading-none mb-5">
                  {r.number}
                </p>
                <h3 className="font-bold text-white mb-3 text-lg">{r.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ─────────────────────────────────────────── */}
      <section className="py-12 bg-primary/10 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {[
              "Licensed & Insured in NC",
              "COI Available Same-Day",
              "48-Hour Bid Turnaround",
              "500+ Projects Completed",
              "5-Star Google Rating",
              "Owner-Direct Communication",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB BID FORM ──────────────────────────────────────────── */}
      <section id="sub-bid" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — copy */}
            <div className="lg:sticky lg:top-24">
              <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4">Request a Sub Bid</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-balance mb-6">
                Ready to Add Us to Your Roster?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Send us the project address, your contact info, and any notes — we will get you a
                detailed, scoped bid back within 48 hours. No back-and-forth. No fluff.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Bids returned within 48 hours",
                  "COI and licensing docs on request",
                  "Works within your project schedule",
                  "All scopes: residential, commercial, recreational",
                  "Charlotte-based — we know the local codes",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">Prefer to reach out directly?</p>
                <a
                  href="mailto:zach@atlanticturfspecialists.com"
                  className="text-primary font-semibold text-base hover:underline underline-offset-4"
                >
                  zach@atlanticturfspecialists.com
                </a>
                <PhoneLink
                  href="tel:+17049956265"
                  className="block mt-2 text-primary font-semibold text-base hover:underline underline-offset-4"
                >
                  (704) 995-6265
                </PhoneLink>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
              <ContactPageClient />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
