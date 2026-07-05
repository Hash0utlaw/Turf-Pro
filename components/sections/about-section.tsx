import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const differentiators = [
  {
    number: "01",
    title: "Premium Materials Only",
    body: "We source exclusively from top-tier manufacturers — the same turf used on professional sports fields.",
  },
  {
    number: "02",
    title: "Precision Installation",
    body: "Every seam is invisible. Every edge is clean. Our crew treats your yard like a showroom floor.",
  },
  {
    number: "03",
    title: "Local Charlotte Experts",
    body: "We know the Carolina climate inside and out. Our installs are engineered to handle NC heat, rain, and UV.",
  },
  {
    number: "04",
    title: "Guaranteed Satisfaction",
    body: "We stand behind every project. If something isn't right, we make it right — no exceptions.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-28 bg-background overflow-hidden">
      <div className="container px-4 md:px-8">
        {/* Top: two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: real job photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/portfolio/artificial-turf-putting-green-install-15.webp"
              alt="Atlantic Turf Specialists precision putting green installation — Charlotte NC"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dark overlay badge */}
            <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-white font-bold text-lg leading-none">Atlantic Turf Specialists</p>
              <p className="text-turf-green text-xs font-semibold tracking-widest uppercase mt-1">Charlotte, NC</p>
            </div>
          </div>

          {/* Right: copy */}
          <div className="space-y-6">
            <p className="text-turf-green text-sm font-semibold tracking-[0.2em] uppercase">Who We Are</p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground text-balance leading-tight">
              Built on Craft.<br />Driven by Results.
            </h2>
            <p className="text-brand-gray-text text-lg leading-relaxed">
              Atlantic Turf Specialists was built with one mission: deliver the highest-quality artificial turf
              installations in the Charlotte area — on time, on budget, and built to last decades.
            </p>
            <p className="text-brand-gray-text text-base leading-relaxed">
              Every member of our crew is trained in precision installation techniques. We don&apos;t cut corners, we
              cut turf — and we cut it perfectly.
            </p>
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="bg-turf-green hover:bg-turf-green-dark text-white h-12 px-8 text-base rounded-lg font-semibold transition-all"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom: differentiator grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.number}
              className="bg-card border border-border rounded-2xl p-6 hover:border-turf-green/50 transition-colors group"
            >
              <span className="text-4xl font-extrabold text-turf-green/20 group-hover:text-turf-green/40 transition-colors leading-none block mb-4">
                {item.number}
              </span>
              <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-brand-gray-text leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
