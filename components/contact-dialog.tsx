"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

type ContactDialogProps = {
  triggerButtonText?: string
  className?: string
}

/**
 * Temporary shim so existing `ContactDialog` imports compile.
 * It simply renders a styled Link to `/contact`.
 */
export default function ContactDialog({ triggerButtonText = "Get a Free Quote", className }: ContactDialogProps) {
  return (
    <Button asChild className={className}>
      <Link href="/contact">{triggerButtonText}</Link>
    </Button>
  )
}
