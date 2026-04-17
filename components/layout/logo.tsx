import Link from "next/link"
import { cn } from "@/lib/utils"

export interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
        className,
      )}
      aria-label="Atlantic Turf Specialist – Home"
    >
      {/* Green wave accent mark */}
      <span className="flex-shrink-0 flex flex-col gap-[3px]" aria-hidden="true">
        <span className="block h-[3px] w-7 rounded-full bg-turf-green" />
        <span className="block h-[3px] w-5 rounded-full bg-turf-green" />
        <span className="block h-[3px] w-3 rounded-full bg-turf-green" />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight text-foreground uppercase">
          Atlantic Turf
        </span>
        <span className="text-[11px] font-semibold tracking-[0.18em] text-turf-green uppercase">
          Specialist
        </span>
      </span>
    </Link>
  )
}

export default Logo
