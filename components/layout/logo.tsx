import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export default function Logo({ className, width = 140, height = 60 }: LogoProps) {
  // Adjusted default width and height. You may need to fine-tune these
  // based on the logo's intrinsic aspect ratio to prevent distortion.
  // The provided image seems to be roughly 2.33:1 width to height.
  // So, if width is 140, height would be around 140 / 2.33 = ~60.
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/turf-pros-logo.png" // Using the provided PNG file
        alt="Turf Pros Logo"
        width={width}
        height={height}
        priority // Good for LCP if logo is above the fold
        className="object-contain" // Ensures the logo scales nicely within the dimensions
      />
    </Link>
  )
}
