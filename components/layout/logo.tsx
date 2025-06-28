import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

// This component is now more flexible. Its size is controlled by the Tailwind CSS classes
// passed to it, rather than fixed width/height props.
export default function Logo({ className }: LogoProps) {
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
