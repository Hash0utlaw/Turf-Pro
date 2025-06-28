"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type FormState = {
  message: string
  status: "success" | "error" | "idle"
  errors?: Record<string, string[]>
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Here you would typically send an email or save to a database
  console.log("Form data submitted successfully:", validatedFields.data)
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    message: "Thank you for your message! We'll be in touch shortly.",
    status: "success",
  }
}
