"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { contactFormSchema } from "@/lib/contact-form-schema"
import { sendContactEmail } from "./actions"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Loader2, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

type ContactFormInputs = z.infer<typeof contactFormSchema>

export default function ContactPageClient() {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(data: ContactFormInputs) {
    startTransition(async () => {
      const result = await sendContactEmail(data)
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you shortly.",
        })
        form.reset()
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.message || "There was a problem with your request. Please try again.",
        })
      }
    })
  }

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-brand-gray-light border-b">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray-text text-balance">
            We're here to answer any questions you have about our services. Reach out to us and we'll respond as soon as
            we can.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
              <p className="mt-2 text-brand-gray-text">Find us at our office, give us a call, or send an email.</p>
            </div>
            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-turf-green" />
                <div>
                  <span className="font-semibold">Our Office</span>
                  <br />
                  <span className="text-brand-gray-text">
                    [Your Business Address: e.g., 123 Turf Lane, Greenvalley, CA 90210]
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-turf-green" />
                <div>
                  <span className="font-semibold">Phone</span>
                  <br />
                  <a
                    href="tel:[YourPhoneNumberAsDigits:e.g.,+11234567890]"
                    className="text-brand-gray-text hover:text-turf-green transition-colors"
                  >
                    [Your Display Phone Number: e.g., (123) 456-7890]
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-turf-green" />
                <div>
                  <span className="font-semibold">Email</span>
                  <br />
                  <a
                    href="mailto:[YourContactEmail]"
                    className="text-brand-gray-text hover:text-turf-green transition-colors"
                  >
                    [YourContactEmail]
                  </a>
                </div>
              </li>
            </ul>
            <div className="aspect-video bg-brand-gray rounded-lg overflow-hidden shadow-soft mt-8">
              <Link
                href="https://maps.google.com/?q=[Your URL Encoded Business Address]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/greenvalley-california-map.png"
                  alt="Map to Turf Pros location"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-soft-md">
            <CardHeader>
              <CardTitle className="text-3xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll be in touch.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="focus-visible:ring-turf-green"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              {...field}
                              className="focus-visible:ring-turf-green"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(123) 456-7890"
                              {...field}
                              className="focus-visible:ring-turf-green"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Quote for a new lawn"
                            {...field}
                            className="focus-visible:ring-turf-green"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project or question..."
                            {...field}
                            rows={6}
                            className="focus-visible:ring-turf-green"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-turf-green text-white hover:bg-turf-green/90 focus-visible:ring-offset-2 focus-visible:ring-turf-green"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
