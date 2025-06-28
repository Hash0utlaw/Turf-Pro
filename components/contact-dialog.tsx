"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
  /** Text that appears inside the button (defaults to “Get a Free Quote”). */
  triggerButtonText?: string
  /** Any extra Tailwind / class names to append. */
  className?: string
  /** shadcn/ui variant (e.g. "default", "outline"). */
  triggerButtonVariant?: React.ComponentProps<typeof Button>["variant"]
  /** shadcn/ui size (e.g. "sm", "lg"). */
  triggerButtonSize?: React.ComponentProps<typeof Button>["size"]
}

/**
 * Temporary shim to satisfy older imports.
 * Renders a styled Link wrapped in shadcn/ui Button that navigates to /contact.
 */
export default function ContactDialog({
  triggerButtonText = "Get a Free Quote",
  className,
  triggerButtonVariant = "default",
  triggerButtonSize = "lg",
}: Props) {
  return (
    <Button asChild className={className} variant={triggerButtonVariant} size={triggerButtonSize}>
      <Link href="/contact">{triggerButtonText}</Link>
    </Button>
  )
}
