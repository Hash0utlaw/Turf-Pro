"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import React from "react"
import { cn } from "@/lib/utils"
import Logo from "./logo"

const servicePageLinks = [
  {
    href: "/residential-lawn-turf",
    label: "Residential Lawns",
    description: "Beautiful, low-maintenance lawns for your home.",
  },
  { href: "/putting-greens", label: "Putting Greens", description: "Custom backyard and professional golf greens." },
  {
    href: "/pet-friendly-turf",
    label: "Pet-Friendly Turf",
    description: "Safe, durable, and clean turf for your pets.",
  },
  {
    href: "/recreational-turf",
    label: "Recreational Turf",
    description: "Versatile turf for play areas and sports fields.",
  },
  {
    href: "/commercial-turf",
    label: "Commercial Turf",
    description: "Durable, cost-effective solutions for businesses.",
  },
  {
    href: "/general-turf-installation",
    label: "Installation Services",
    description: "Expert installation for any project, big or small.",
  },
  { href: "/services", label: "All Services", description: "Explore our complete range of turf solutions." },
]

const mainSiteLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#about", label: "About Us" },
]

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={props.href || "#"}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo className="h-10 w-24 md:h-12 md:w-28" />
        <div className="hidden md:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4 md:w-[300px] lg:w-[350px]">
                    {servicePageLinks.map((item) => (
                      <ListItem key={item.label} href={item.href} title={item.label}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {mainSiteLinks.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "bg-transparent text-foreground hover:bg-accent")}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-2">
            <Button asChild className="shadow-soft hover:shadow-soft-md transition-shadow">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-transparent text-foreground hover:bg-accent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="mb-6 pt-2">
                <Logo className="h-12 w-28" />
              </div>
              <nav className="flex flex-col space-y-1">
                <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Services</p>
                {servicePageLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="px-3 py-2 mt-3 text-sm font-semibold text-muted-foreground">Company</p>
                {mainSiteLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6">
                  <Button asChild className="w-full">
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

export { SiteHeader } // named export
export default SiteHeader // default export
