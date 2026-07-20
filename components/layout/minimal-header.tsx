import Link from "next/link"
import { PhoneLink } from "@/components/phone-link"

export function MinimalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-turf-green/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#top" className="flex items-center gap-2" aria-label="Atlantic Turf Specialists">
          <span className="flex flex-col justify-center gap-[3px] shrink-0" aria-hidden="true">
            <span className="block h-[4px] w-6 rounded-full bg-turf-green" />
            <span className="block h-[4px] w-4 rounded-full bg-turf-green" />
            <span className="block h-[4px] w-2 rounded-full bg-turf-green" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight text-foreground uppercase">
              Atlantic Turf
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-turf-green uppercase">
              Specialists
            </span>
          </span>
        </Link>

        <PhoneLink
          href="tel:+17049956265"
          className="inline-flex items-center gap-2 text-sm font-bold text-turf-green hover:text-turf-green/80 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (704) 995-6265
        </PhoneLink>
      </div>
    </header>
  )
}

export default MinimalHeader
