"use server"

import { Resend } from "resend"
import ContactFormEmail from "@/components/emails/contact-form-email"
import { contactFormSchema, type ContactFormInputs } from "@/lib/contact-form-schema"

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Server Action - sends the email and returns a typed result.
 */
export async function submitContactForm(values: ContactFormInputs): Promise<{ success: boolean; message: string }> {
  // Validate again on the server for safety
  const parsed = contactFormSchema.safeParse(values)
  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
    }
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? "you@example.com" // Fallback

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Sandbox sender
      to: [recipient],
      subject: "Turf Pros • New Contact Form Submission",
      react: ContactFormEmail(parsed.data),
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        message: "Unable to send message at the moment. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Your message has been sent. We’ll be in touch shortly!",
    }
  } catch (err) {
    console.error("Unexpected error:", err)
    return {
      success: false,
      message: "Something went wrong while sending your message. Please email us directly.",
    }
  }
}
