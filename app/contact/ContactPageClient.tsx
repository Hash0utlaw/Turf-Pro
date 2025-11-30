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
    const initializeAutocomplete = () => {
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        return
      }

      if (!addressInputRef.current) {
        return
      }

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

    const checkGoogleMaps = setInterval(() => {
      if (window.google?.maps?.places) {
        clearInterval(checkGoogleMaps)
        initializeAutocomplete()
      }
    }, 100)

    const timeout = setTimeout(() => {
      clearInterval(checkGoogleMaps)
      if (!isAutocompleteReady) {
        setIsAutocompleteReady(false)
      }
    }, 10000)

    return () => {
      clearInterval(checkGoogleMaps)
      clearTimeout(timeout)
      if (autocompleteRef.current && window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [form, isAutocompleteReady])

  const onSubmit = async (values: ContactFormInputs) => {
    if (!values.street || !values.city || !values.state || !values.zipCode) {
      toast.error("Please select a complete address from the autocomplete suggestions")
      setAddressValidated(false)
      return
    }

    const result: SendContactEmailResult = await sendContactEmail(values)

    if (result.success) {
      toast.success("Message Sent!", {
        description: result.message,
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
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    addressValidated === true
                      ? "border-green-500 focus-visible:ring-green-500"
                      : addressValidated === false
                        ? "border-red-500 focus-visible:ring-red-500"
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
