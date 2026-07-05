import type { Metadata } from "next"
import Link from "next/link"
import { ContactPageClient } from "@/app/contact/ContactPageClient"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"

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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.atlanticturfspecialists.com",
        },
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
      description:
        "Charlotte's preferred artificial turf subcontractor for general contractors and developers. Commercial-grade crew, 48-hour quotes, licensed and insured.",
    },
  ],
}

const stats = [
  {
    value: "PLACEHOLDER",
    label: "Largest Commercial Install (sq ft)",
    note: "— client to supply",
  },
  {
    value: "PLACEHOLDER",
    label: "Commercial Projects Completed",
    note: "— client to supply",
  },
  {
    value: "PLACEHOLDER",
    label: "GC Partners to Date",
    note: "— client to supply",
  },
  {
    value: "48 hrs",
    label: "Average Quote Turnaround",
    note: "",
  },
]

const portfolioProjects = [
  {
    src: "/portfolio/grace-covenant-church-playground-04.webp",
    alt: "Grace Covenant Church playground — Huntersville, NC",
    caption: "Commercial Playground — PLACEHOLDER sq ft",
  },
  {
    src: "/portfolio/grace-covenant-church-playground-06.webp",
    alt: "Grace Covenant Church courtyard pathway — Huntersville, NC",
    caption: "Church Courtyard — PLACEHOLDER sq ft",
  },
  {
    src: "/portfolio/artificial-turf-sports-field-install-01.webp",
    alt: "Backyard sports field artificial turf — Charlotte, NC",
    caption: "Sports Field Install — PLACEHOLDER sq ft",
  },
  {
    src: "/portfolio/artificial-turf-side-yard-install-01.webp",
    alt: "Full backyard turf at modern craftsman home — Charlotte, NC",
    caption: "Residential New Construction — PLACEHOLDER sq ft",
  },
]

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    body: "Submit the form below or call us directly. Share your plans, scope, and timeline.",
  },
  {
    number: "02",
    title: "We Scope & Quote in 48 Hours",
    body: "Our team reviews your commercial scope and returns a detailed sub bid within 48 hours.",
  },
  {
    number: "03",
    title: "We Install",
    body: "Our licensed, insured crew shows up on schedule, delivers a clean install, and gets out of your way.",
  },
]

const testimonials = [
  {
    quote:
      "PLACEHOLDER — We've worked with a lot of turf subs, and Atlantic is one of the few that actually hits their schedule and delivers what was sampled. Replace with real GC testimonial before launch.",
    name: "PLACEHOLDER GC Name",
    company: "PLACEHOLDER Construction Co.",
  },
  {
    quote:
      "PLACEHOLDER — Got a quote back in less than 48 hours and the finished product was exactly what we needed for our client. Replace with real testimonial before launch.",
    name: "PLACEHOLDER Project Manager",
    company: "PLACEHOLDER Development LLC",
  },
]

export default function GeneralContractorsPage() {
  return (
    <>
      <StructuredData data={structuredData} />

      {/* Hero */}
      <section className="relative bg-background py-24 md:py-32 border-b border-turf-green/10">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-turf-green font-semibold tracking-widest text-sm uppercase mb-4">
            For General Contractors & Developers
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
            {"Charlotte's"} Preferred Artificial Turf Subcontractor
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-gray-text max-w-2xl mx-auto text-pretty">
            Fast commercial quotes, a licensed and insured crew, and a local Charlotte portfolio — so you can add us to
            your sub list with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base px-8">
              <a href="#sub-bid">Request a Sub Bid</a>
            </Button>
            <a
              href="tel:+17049956265"
              className="text-turf-green-light hover:text-turf-green font-semibold text-base transition-colors"
            >
              (704) 995-6265
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">The Problem with Most Turf Subs</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            GCs get burned by turf subcontractors who bail mid-project, take two weeks to return a quote, or deliver a
            finished product that {"doesn't"} match the sample the client approved. That kills your timeline, your
            margin, and your relationship with the owner.
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-background border-y border-turf-green/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why GCs Choose Atlantic Turf</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "48-Hour Quote Turnaround",
                body: "We review commercial scopes and return a detailed sub bid within 48 hours — so your schedule never waits on us.",
              },
              {
                title: "Commercial-Grade Crew & Materials",
                body: "Our installation crew and product line are built for commercial volumes, high-traffic areas, and demanding specs.",
              },
              {
                title: "Fully Licensed & Insured",
                body: "We carry the coverage your project requires. No surprises on your certificate of insurance request.",
              },
              {
                title: "Local Charlotte Portfolio",
                body: "We are a Charlotte-based crew, not a national franchise. You can see our work in the market and talk to owners who hired us.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-brand-gray-light border border-turf-green/20 rounded-xl p-6 shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-turf-green flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-brand-gray-text text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Scale — Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Proof of Scale</h2>
            <p className="mt-2 text-gray-500 text-sm italic">
              Placeholder numbers below — client to supply real figures before launch.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <p className="text-3xl font-bold text-turf-green">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-700">{stat.label}</p>
                {stat.note && <p className="text-xs text-gray-400 mt-1">{stat.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16 bg-background border-y border-turf-green/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Portfolio Highlights</h2>
            <p className="mt-3 text-brand-gray-text max-w-2xl mx-auto">
              Real commercial and recreational projects completed in the Charlotte market. Client to add sq footage and
              additional commercial photos before launch.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioProjects.map((project) => (
              <div key={project.src} className="group overflow-hidden rounded-xl border border-turf-green/20">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 bg-brand-gray-light">
                  <p className="text-xs text-brand-gray-text">{project.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] h-px bg-turf-green/30" />
                )}
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-turf-green text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background border-y border-turf-green/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What GCs Are Saying</h2>
            <p className="mt-2 text-brand-gray-text text-sm italic">
              Placeholder testimonials — client to supply real GC quotes before launch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-brand-gray-light border border-turf-green/20 rounded-2xl p-8 shadow-soft"
              >
                <svg
                  className="h-8 w-8 text-turf-green/40 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-brand-gray-text leading-relaxed mb-6 text-sm italic">{t.quote}</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-turf-green text-xs">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Sub Bid — Form */}
      <section id="sub-bid" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Request a Sub Bid</h2>
            <p className="mt-3 text-gray-600">
              Fill out the form and {"we'll"} get back to you with a commercial scope and quote within 48 hours.
            </p>
          </div>
          <div className="bg-brand-gray-light border border-turf-green/20 rounded-2xl p-8 shadow-soft-lg">
            <ContactPageClient />
          </div>
        </div>
      </section>
    </>
  )
}
