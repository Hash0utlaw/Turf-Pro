import type React from "react"
import { MinimalHeader } from "@/components/layout/minimal-header"
import { MinimalFooter } from "@/components/layout/minimal-footer"

export default function HomeownerLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MinimalHeader />
      <main className="flex-1">{children}</main>
      <MinimalFooter />
    </>
  )
}
