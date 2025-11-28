import { z } from "zod"

const services = [
  "Residential Lawn Turf",
  "Commercial Turf",
  "Pet-Friendly Turf",
  "Backyard Putting Greens",
  "Recreational & Sports Turf",
  "General Turf Installation",
] as const

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  service: z.enum(services, {
    errorMap: () => ({ message: "Please select a service category." }),
  }),
  // Address fields
  address: z.string().min(5, {
    message: "Please enter your complete address.",
  }),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export type ContactFormInputs = z.infer<typeof contactFormSchema>
