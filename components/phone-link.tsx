"use client"

import * as React from "react"
import Link from "next/link"

import { trackPhoneConversion } from "@/lib/gtag"

type PhoneLinkProps = React.ComponentPropsWithoutRef<typeof Link>

export const PhoneLink = React.forwardRef<HTMLAnchorElement, PhoneLinkProps>(
  ({ onClick, children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        onClick={(event) => {
          trackPhoneConversion()
          onClick?.(event)
        }}
        {...props}
      >
        {children}
      </Link>
    )
  },
)
PhoneLink.displayName = "PhoneLink"
