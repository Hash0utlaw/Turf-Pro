"use client"

import type React from "react"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormInputs } from "@/lib/contact-form-schema"
import { submitContactForm } from "./actions"
import { useToast } from "@/hooks/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function ContactPageClient() {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: ContactFormInputs) {
    startTransition(async () => {
      const result = await submitContactForm(values)
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        })
        form.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    })
  }

  return (
    <>
      <section className="bg-brand-gray-light py-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold text-turf-green-dark sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray-text">
            Ready to transform your space? Fill out the form, and our team will get back to you shortly to discuss your
            project.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Card className="rounded-2xl border-none shadow-soft">
              <CardContent className="p-8">
                <h2 className="mb-6 text-3xl font-bold">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                            <Input placeholder="(123) 456-7890" {...field} />
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
                          <FormLabel>How can we help?</FormLabel>
                          <FormControl>
                            <Textarea rows={5} placeholder="Tell us about your project..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isPending} className="w-full">
                      {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <div className="space-y-6">
                <InfoRow icon={Phone} label="Phone" text="(123) 456-7890" href="tel:1234567890" />
                <InfoRow icon={Mail} label="Email" text="contact@turfpros.com" href="mailto:contact@turfpros.com" />
                <InfoRow icon={MapPin} label="Office" text="123 Turf Lane, Green Valley CA 90210" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft-md">
                <Image
                  src="/greenvalley-california-map.png"
                  alt="Map showing location of Turf Pros office"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function InfoRow({
  icon: Icon,
  label,
  text,
  href,
}: {
  icon: React.ElementType
  label: string
  text: string
  href?: string
}) {
  const content = (
    <div className="flex items-start">
      <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-turf-green" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-brand-gray-text">
          {href ? (
            <a href={href} className="hover:text-turf-green hover:underline">
              {text}
            </a>
          ) : (
            text
          )}
        </p>
      </div>
    </div>
  )
  return content
}
