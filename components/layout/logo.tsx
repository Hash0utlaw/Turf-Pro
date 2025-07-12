import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface LogoProps {
  className?: string
}

/**
 * Turf Pros Logo
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
        "relative flex items-center h-12 w-28 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
        className,
      )}
    >
      <Image
        src="/turf-pros-logo.png"
        alt="Turf Pros Logo"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
      />
    </Link>
  )
}

export default Logo
