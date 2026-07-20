import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(7, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(5, {
    message: "Please enter your complete address.",
  }),
  street: z.string().default(""),
  city: z.string().default(""),
  state: z.string().default(""),
  zipCode: z.string().default(""),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
})

export type ContactFormInputs = z.infer<typeof contactFormSchema>

export const homeownerContactFormSchema = contactFormSchema.extend({
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
  budget: z.string().min(1, {
    message: "Please select a budget range.",
  }),
})

export type HomeownerContactFormInputs = z.infer<typeof homeownerContactFormSchema>
