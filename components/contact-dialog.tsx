"use client"

import React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

interface ContactDialogProps {
  triggerButtonText?: string
  triggerButtonVariant?: ButtonProps["variant"]
  className?: string
}

export default function ContactDialog({
  triggerButtonText = "Contact Us",
  triggerButtonVariant = "default",
  className,
}: ContactDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const { toast } = useToast()
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", Object.fromEntries(formData))

    toast({
      title: "Quote Request Sent!",
      description: "Thank you for your interest. We'll be in touch shortly.",
    })
    setIsOpen(false)
    formRef.current?.reset()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={triggerButtonVariant}
          className={cn("shadow-soft hover:shadow-soft-md transition-shadow", className)}
        >
          {triggerButtonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] bg-background rounded-2xl shadow-soft-lg p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-semibold text-foreground">Get a Free Quote</DialogTitle>
          <DialogDescription className="text-brand-gray-text">
            Fill out the form below and one of our turf specialists will contact you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} ref={formRef} className="px-6 space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-foreground">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="bg-brand-gray-light border-brand-gray focus:border-turf-green"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              required
              className="bg-brand-gray-light border-brand-gray focus:border-turf-green"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="bg-brand-gray-light border-brand-gray focus:border-turf-green"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-foreground">
              Project Details
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project (e.g., backyard size, type of turf needed, putting green interest)"
              required
              rows={4}
              className="bg-brand-gray-light border-brand-gray focus:border-turf-green"
            />
          </div>
          <DialogFooter className="py-6 px-6 border-t border-border/40">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="bg-transparent text-foreground hover:bg-accent"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              className="bg-turf-green hover:bg-turf-green-dark text-white shadow-soft hover:shadow-soft-md transition-shadow"
            >
              Submit Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
