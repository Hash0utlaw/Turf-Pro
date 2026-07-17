import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ContactPageClient } from "@/app/contact/ContactPageClient"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Premium Artificial Turf Installation Charlotte NC | Atlantic Turf Specialists",
  description:
    "Transform your Charlotte backyard into a luxury outdoor living space with Atlantic Turf Specialists. Custom putting greens, pool surrounds, and full lawn installs. Get your free quote today.",
  keywords: [
    "artificial turf Charlotte NC",
    "luxury backyard turf Charlotte",
    "premium putting green Charlotte NC",
    "pool surround turf Charlotte",
    "backyard turf installation Charlotte NC",
    "Atlantic Turf Specialists",
    "artificial grass Charlotte NC",
    "backyard transformation Charlotte",
  ],
  alternates: {
    canonical: "https://www.atlanticturfspecialists.com/general-contractors",
  },
  openGraph: {
    title: "Premium Artificial Turf Installation Charlotte NC | Atlantic Turf Specialists",
    description:
      "Transform your Charlotte backyard with premium artificial turf. Custom putting greens, pool surrounds, and full lawn installs by Atlantic Turf Specialists.",
    images: [
      {
        url: "/portfolio/artificial-turf-luxury-estate-install-01.webp",
        width: 1200,
        height: 630,
        alt: "Luxury backyard artificial turf installation by Atlantic Turf Specialists — Charlotte NC",
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
          name: "Get a Quote",
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

const stats = [
  { value: "500+", label: "Backyards Transformed" },
  { value: "5.0★", label: "Google Rating" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Licensed & Insured" },
]

const transformations = [
  {
    title: "Custom Putting Greens",
    description: "Play championship-quality golf steps from your back door. We design and install multi-hole greens that fit your yard, your vision, and your game.",
    src: "/portfolio/artificial-turf-putting-green-night-02.webp",
    alt: "Custom multi-hole putting green with night lighting — Charlotte NC",
  },
  {
    title: "Luxury Pool Surrounds",
    description: "Frame your pool in lush, perfectly maintained turf that stays cool, drains instantly, and looks flawless season after season.",
    src: "/portfolio/artificial-turf-pool-surround-install-01.webp",
    alt: "Luxury pool surround artificial turf installation — Charlotte NC",
  },
  {
    title: "Full Backyard Lawns",
    description: "Replace high-maintenance grass with a premium lawn that stays green year-round — no mowing, no irrigation, no brown patches.",
    src: "/portfolio/artificial-turf-side-yard-install-02.webp",
    alt: "Full backyard artificial turf lawn at luxury home — Charlotte NC",
  },
  {
    title: "Sports & Recreation",
    description: "From bocce courts to soccer fields to playground surfaces — we build outdoor spaces your family will live in.",
    src: "/portfolio/artificial-turf-sports-field-install-01.webp",
    alt: "Backyard sports field artificial turf — Charlotte NC",
  },
]

const whyUs = [
  {
    number: "01",
    title: "Precision Installation",
    body: "Every edge, seam, and border is cut and finished to exacting standards. We treat your property like it is our own.",
  },
  {
    number: "02",
    title: "Premium Materials Only",
    body: "We source commercial-grade turf products that look realistic, drain fast, and hold up for years under heavy use.",
  },
  {
    number: "03",
    title: "Charlotte-Based & Owner-Led",
    body: "You work directly with the owner — not a sales rep. We know the Charlotte climate, the soil, and the neighborhoods.",
  },
  {
    number: "04",
    title: "Zero-Maintenance Results",
    body: "No watering. No mowing. No fertilizing. Just a beautiful outdoor space every single day of the year.",
  },
]

const portfolioGrid = [
  {
    src: "/portfolio/artificial-turf-aerial-estate-drone-05.webp",
    alt: "Aerial view of luxury estate turf installation — Charlotte NC",
    label: "Estate Lawn — Charlotte, NC",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/portfolio/artificial-turf-putting-green-install-15.webp",
    alt: "Putting green with fringe turf — Charlotte NC",
    label: "Putting Green — Charlotte, NC",
    className: "",
  },
  {
    src: "/portfolio/artificial-turf-pool-surround-install-03.webp",
    alt: "Pool surround turf install — Charlotte NC",
    label: "Pool Surround — Charlotte, NC",
    className: "",
  },
  {
    src: "/portfolio/artificial-turf-putting-green-night-01.webp",
    alt: "Night-lit putting green beside pool patio — Charlotte NC",
    label: "Night-Lit Putting Green — Charlotte, NC",
    className: "",
  },
  {
    src: "/portfolio/artificial-turf-side-yard-pathway-install-01.webp",
    alt: "Side yard turf with river rock pathway — Charlotte NC",
    label: "Side Yard & Pathway — Charlotte, NC",
    className: "",
  },
]

const reviews = [
  {
    name: "Michael T.",
    location: "Myers Park, Charlotte NC",
    text: "The putting green they built for us is absolutely stunning. Our neighbors cannot stop asking about it. Atlantic Turf showed up on time, worked clean, and the finished product exceeded every expectation.",
    stars: 5,
  },
  {
    name: "Sarah & James K.",
    location: "Ballantyne, Charlotte NC",
    text: "We replaced our entire backyard lawn and added a pool surround. The transformation is unbelievable. It looks better than real grass and we have not touched it once since installation.",
    stars: 5,
  },
  {
    name: "David R.",
    location: "Lake Norman, NC",
    text: "From the first quote to the final cleanup, everything was professional and seamless. The crew was respectful of our property and the result is stunning. Highly recommend to anyone in the area.",
    stars: 5,
  },
]

export default function GeneralContractorsPage() {
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

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/portfolio/artificial-turf-aerial-estate-drone-05.webp"
            alt="Luxury backyard turf estate installation by Atlantic Turf Specialists — Charlotte NC"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 max-w-6xl pb-20 pt-48">
          <p className="text-primary font-semibold tracking-[0.25em] text-xs uppercase mb-5">
            Charlotte&apos;s Premium Turf Installer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95] text-balance mb-8 max-w-4xl">
            Your Backyard,{" "}
            <span className="text-primary">Elevated.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
            Premium artificial turf installations for Charlotte homeowners who expect the best.
            Putting greens, pool surrounds, and luxury lawns — designed for your property,
            installed to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#get-quote"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg text-base transition-colors"
            >
              Get Your Free Quote
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────── */}
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

      {/* ── INTRO ──────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight text-balance mb-6">
                Charlotte&apos;s Most Trusted Turf Installer
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Atlantic Turf Specialists has transformed hundreds of Charlotte backyards into
                stunning outdoor living spaces. We work directly with homeowners, architects, and
                luxury builders who demand a higher standard — and we deliver it every time.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you want a championship putting green, a resort-style pool surround, or a
                perfectly manicured lawn that never needs maintenance — our owner-led team brings
                the craft, the materials, and the attention to detail to make it happen.
              </p>
              <p className="text-sm text-muted-foreground/60 italic">
                Also serving general contractors and luxury builders as a preferred turf subcontractor across the greater Charlotte market.
              </p>
            </div>
            <div className="relative">
              <img
                src="/portfolio/artificial-turf-luxury-estate-install-01.webp"
                alt="Luxury turf installation at Charlotte NC estate home"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl px-6 py-4 shadow-xl">
                <p className="text-3xl font-extrabold">500+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATIONS ────────────────────────────────────── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4">What We Build</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
              Every Backyard, Transformed
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformations.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ─────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">Our Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance leading-tight">
                Real Projects.<br />Real Results.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-primary font-semibold text-sm hover:underline underline-offset-4 flex items-center gap-1"
            >
              View Full Portfolio
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[520px]">
            {portfolioGrid.map((item) => (
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

      {/* ── WHY ATLANTIC TURF ──────────────────────────────────── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4">The Difference</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
              Why Charlotte Homeowners Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((r) => (
              <div
                key={r.number}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group"
              >
                <p className="text-6xl font-extrabold text-primary/15 group-hover:text-primary/30 transition-colors leading-none mb-5">
                  {r.number}
                </p>
                <h3 className="font-bold text-foreground mb-3 text-lg">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4">5-Star Reviews</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-primary fill-primary" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ─────────────────────────────────────────── */}
      <section id="get-quote" className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — copy */}
            <div className="lg:sticky lg:top-24">
              <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4">Free Consultation</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight text-balance mb-6">
                Ready to Transform Your Backyard?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Tell us about your project and we will get back to you with a detailed, no-obligation
                quote within 48 hours. Our owner will personally review your scope and reach out directly.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  "Free, no-obligation design consultation",
                  "Detailed quote within 48 hours",
                  "Premium commercial-grade materials",
                  "Direct access to the owner — not a call center",
                  "Fully licensed & insured in North Carolina",
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
              <div className="p-5 bg-background border border-border rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">Email Us Directly</p>
                <a href="mailto:zach@atlanticturfspecialists.com" className="text-lg font-bold text-primary hover:text-primary/80 transition-colors">
                  zach@atlanticturfspecialists.com
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-xl">
              <ContactPageClient />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
