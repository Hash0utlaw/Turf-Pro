import Link from "next/link"
import { cn } from "@/lib/utils"

export interface LogoProps {
  className?: string
}

/**
 * Atlantic Turf Specialist Logo
 *
 * • Provides BOTH a named and default export so it can be imported with:
 *      import { Logo } from "@/components/layout/logo"
 *   or
 *      import Logo from "@/components/layout/logo"
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
        className,
      )}
      aria-label="Atlantic Turf Specialist — Home"
    >
      {/* Icon mark: three stacked grass-blade bars */}
      <span className="flex flex-col justify-center gap-[3px] shrink-0" aria-hidden="true">
        <span className="block h-[4px] w-6 rounded-full bg-turf-green" />
        <span className="block h-[4px] w-4 rounded-full bg-turf-green" />
        <span className="block h-[4px] w-2 rounded-full bg-turf-green" />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-tight text-foreground uppercase">
          Atlantic Turf
        </span>
        <span className="text-[10px] font-semibold tracking-[0.18em] text-turf-green uppercase">
          Specialist
        </span>
      </span>
    </Link>
  )
}

export default Logo
