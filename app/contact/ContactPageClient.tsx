"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { submitContactForm, type FormState } from "./actions"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
import Image from "next/image"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-turf-green hover:bg-turf-green-dark text-white shadow-soft hover:shadow-soft-md transition-shadow"
    >
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPageClient() {
  const initialState: FormState = { message: "", status: "idle" }
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      })
      formRef.current?.reset()
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <>
      <section className="py-12 md:py-20 bg-brand-gray-light">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-turf-green-dark">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray-text md:text-xl">
            Have a question or ready to start your project? Fill out the form below or use the contact information to
            get in touch.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Get a Free Quote</h2>
                <p className="text-brand-gray-text mt-2">
                  Fill out our form and a turf specialist will get back to you as soon as possible.
                </p>
              </div>
              <Card className="bg-card text-card-foreground rounded-2xl shadow-soft">
                <CardContent className="p-6">
                  <form ref={formRef} action={formAction} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                      {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                      {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        required
                        rows={5}
                      />
                      {state.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
                    </div>
                    <SubmitButton />
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                <p className="text-brand-gray-text mt-2">
                  Reach out to us directly through phone, email, or visit our office.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-turf-green-extralight rounded-full">
                    <Phone className="h-6 w-6 text-turf-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                    <a href="tel:123-456-7890" className="text-brand-gray-text hover:text-turf-green">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-turf-green-extralight rounded-full">
                    <Mail className="h-6 w-6 text-turf-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <a href="mailto:contact@turfpros.com" className="text-brand-gray-text hover:text-turf-green">
                      contact@turfpros.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-turf-green-extralight rounded-full">
                    <MapPin className="h-6 w-6 text-turf-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Office</h3>
                    <p className="text-brand-gray-text">123 Turf Lane, Green Valley, CA 90210</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Image
                  src="/greenvalley-california-map.png"
                  alt="Map showing the location of Turf Pros in Green Valley"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-soft-md object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
