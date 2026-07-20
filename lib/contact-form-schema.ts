import { z } from "zod"

const NC_STATE_VALUES = new Set(["nc", "north carolina"])

function ncOnlyRefinement(data: { state: string }, ctx: z.RefinementCtx) {
  if (!NC_STATE_VALUES.has(data.state.trim().toLowerCase())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["state"],
      message: "We currently only serve North Carolina — please call or email us directly.",
    })
  }
}

const contactFormObjectSchema = z.object({
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

export const contactFormSchema = contactFormObjectSchema.superRefine(ncOnlyRefinement)

export type ContactFormInputs = z.infer<typeof contactFormObjectSchema>

const homeownerContactFormObjectSchema = contactFormObjectSchema.extend({
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
  budget: z.string().min(1, {
    message: "Please select a budget range.",
  }),
})

export const homeownerContactFormSchema = homeownerContactFormObjectSchema.superRefine(ncOnlyRefinement)

export type HomeownerContactFormInputs = z.infer<typeof homeownerContactFormObjectSchema>
