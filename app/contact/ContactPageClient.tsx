"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useEffect, useRef, useState, useCallback } from "react"
import type { google } from "googlemaps"

import { contactFormSchema, type ContactFormInputs } from "@/lib/contact-form-schema"
import { sendContactEmail, type SendContactEmailResult } from "./actions"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

declare global {
  interface Window {
    google: typeof google
    initAutocomplete?: () => void
  }
}

const services = [
  "Residential Lawn Turf",
  "Commercial Turf",
  "Pet-Friendly Turf",
  "Backyard Putting Greens",
  "Recreational & Sports Turf",
  "General Turf Installation",
] as const

export function ContactPageClient() {
  const [isAutocompleteReady, setIsAutocompleteReady] = useState(false)
  const [addressValidated, setAddressValidated] = useState<boolean | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const addressInputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      address: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      message: "",
    },
  })

  const setAddressInputRef = useCallback((node: HTMLInputElement | null) => {
    addressInputRef.current = node
  }, [])

  useEffect(() => {
    // Prevent re-initialization if already set up
    if (autocompleteRef.current) return

    const initializeAutocomplete = () => {
      if (!window.google?.maps?.places) return
      if (!addressInputRef.current) return
      // Already initialized
      if (autocompleteRef.current) return

      try {
        const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
          types: ["address"],
          componentRestrictions: { country: "us" },
        })

        autocomplete.setFields(["address_components", "formatted_address"])

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace()

          if (!place.address_components) {
            setAddressValidated(false)
            toast.error("Please select a valid address from the dropdown")
            return
          }

          let street = ""
          let city = ""
          let state = ""
          let zipCode = ""

          place.address_components.forEach((component) => {
            const types = component.types

            if (types.includes("street_number")) {
              street = component.long_name + " "
            }
            if (types.includes("route")) {
              street += component.long_name
            }
            if (types.includes("locality")) {
              city = component.long_name
            }
            if (types.includes("administrative_area_level_1")) {
              state = component.short_name
            }
            if (types.includes("postal_code")) {
              zipCode = component.long_name
            }
          })

          if (!street || !city || !state || !zipCode) {
            setAddressValidated(false)
            toast.error("Please select a complete address with street, city, state, and zip code")
            return
          }

          form.setValue("address", place.formatted_address || "")
          form.setValue("street", street)
          form.setValue("city", city)
          form.setValue("state", state)
          form.setValue("zipCode", zipCode)

          setAddressValidated(true)
          toast.success("Address validated successfully")
        })

        autocompleteRef.current = autocomplete
        setIsAutocompleteReady(true)
      } catch (error) {
        console.error("Error initializing autocomplete:", error)
        setIsAutocompleteReady(false)
      }
    }

    // Poll every 150ms until the Google Maps Places library is available (max 15s)
    const checkGoogleMaps = setInterval(() => {
      if (window.google?.maps?.places) {
        clearInterval(checkGoogleMaps)
        clearTimeout(timeout)
        initializeAutocomplete()
      }
    }, 150)

    const timeout = setTimeout(() => {
      clearInterval(checkGoogleMaps)
    }, 15000)

    return () => {
      clearInterval(checkGoogleMaps)
      clearTimeout(timeout)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form])

  const onSubmit = async (values: ContactFormInputs) => {
    setSubmitSuccess(false)
    
    // If Google autocomplete is available but user hasn't selected from dropdown,
    // show a warning but still allow manual entry
    if (isAutocompleteReady && (!values.street || !values.city || !values.state || !values.zipCode)) {
      toast.warning("For best results, please select an address from the suggestions", {
        description: "We'll process your manually entered address.",
      })
    }

    const result: SendContactEmailResult = await sendContactEmail(values)

    if (result.success) {
      setSubmitSuccess(true)
      toast.success("Message Sent Successfully!", {
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      })
      form.reset()
      setAddressValidated(null)
    } else {
      toast.error("Something went wrong", {
        description: result.message,
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {submitSuccess && (
          <div className="rounded-lg bg-turf-green-extralight p-4 border border-turf-green/40">
            <div className="flex items-start gap-3">
              <svg
                className="h-5 w-5 text-turf-green-light flex-shrink-0 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-white">Message sent successfully!</h3>
                <p className="mt-1 text-sm text-brand-gray-text">
                  Thank you for contacting us. We&apos;ll review your message and get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        )}
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
                <Input placeholder="you@example.com" {...field} />
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
                <Input placeholder="(555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Address</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder={
                    isAutocompleteReady ? "Start typing your address..." : "Enter your full address with zip code"
                  }
                  {...field}
                  ref={(node) => {
                    setAddressInputRef(node)
                    if (typeof field.ref === "function") {
                      field.ref(node)
                    }
                  }}
                  onChange={(e) => {
                    field.onChange(e)
                    setAddressValidated(null)
                  }}
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    addressValidated === true
                      ? "border-turf-green focus-visible:ring-turf-green"
                      : addressValidated === false
                        ? "border-destructive focus-visible:ring-destructive"
                        : "border-input"
                  }`}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Hidden fields for parsed address components */}
        <input type="hidden" {...form.register("street")} />
        <input type="hidden" {...form.register("city")} />
        <input type="hidden" {...form.register("state")} />
        <input type="hidden" {...form.register("zipCode")} />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service you're interested in" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  )
}
