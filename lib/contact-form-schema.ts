import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9\-+() ]{7,20}$/.test(val), "Please enter a valid phone number."),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
})

export type ContactFormInputs = z.infer<typeof contactFormSchema>
