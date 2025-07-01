import { z } from "zod"

/**
 * Zod schema shared by the client form and the server action.
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional().describe("Phone number is optional but helps us reach you faster."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

/**
 * Inferred TypeScript type for react-hook-form.
 */
export type ContactFormInputs = z.infer<typeof contactFormSchema>
