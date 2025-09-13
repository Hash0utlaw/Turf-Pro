"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/layout/logo"
import React from "react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Residential Lawn Turf",
    href: "/residential-lawn-turf",
    description: "Get a lush, green lawn that's perfect for families and requires minimal maintenance.",
  },
  {
    title: "Commercial Turf",
    href: "/commercial-turf",
    description: "Enhance your business's curb appeal with durable, attractive artificial turf solutions.",
  },
  {
    title: "Putting Greens",
    href: "/putting-greens",
    description: "Practice your putt in your own backyard with a custom-designed putting green.",
  },
  {
    title: "Pet-Friendly Turf",
    href: "/pet-friendly-turf",
    description: "A safe, clean, and durable surface for your furry friends to play on.",
  },
  {
    title: "Recreational & Sports Turf",
    href: "/recreational-turf",
    description: "High-performance turf for sports fields, playgrounds, and recreational areas.",
  },
  {
    title: "General Turf Installation",
    href: "/general-turf-installation",
    description: "Comprehensive installation services ensuring a flawless finish for any project.",
  },
]

const mainNavLinks = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
]

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center space-x-2 md:flex">
          <nav className="flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {services.map((component) => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {mainNavLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href={link.href}>{link.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="ml-2">
            <Button asChild className="bg-turf-green text-white hover:bg-turf-green-dark">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <span className="text-sm">☰</span>
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="mb-6">
                <Logo />
              </div>
              <nav className="flex flex-col space-y-2">
                <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Services</p>
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <p className="mt-3 px-3 py-2 text-sm font-semibold text-muted-foreground">Company</p>
                {mainNavLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="pt-6">
                  <Button asChild className="w-full bg-turf-green text-white hover:bg-turf-green-dark">
                    <Link href="/contact" onClick={() => setIsSheetOpen(false)}>
                      Get a Free Quote
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
