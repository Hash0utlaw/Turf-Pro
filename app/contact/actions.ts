"use server"

import { Resend } from "resend"
import { z } from "zod"
import ContactFormEmail from "@/components/emails/contact-form-email"
import { contactFormSchema, type ContactFormInputs } from "@/lib/contact-form-schema"

// This line reads your secret API key from the .env.local file.
const resend = new Resend(process.env.RESEND_API_KEY)

// This helper function safely gets the recipient email from your environment variables.
function getRecipientAddress(): string {
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL
  const validation = z.string().email().safeParse(recipient)

  // If the environment variable is missing or invalid, it uses a fallback.
  // IMPORTANT: Update this fallback to your Resend account email.
  if (validation.success) return validation.data

  console.warn("CONTACT_RECIPIENT_EMAIL env var is missing or invalid. Using fallback.")
  return "davis@summitroofingprofessionals.com" // Fallback for Resend sandbox
}

export async function submitContactForm(data: ContactFormInputs) {
  const parsed = contactFormSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, message: "Invalid form data." }
  }

  const { name, email, phone, message } = parsed.data
  const recipientEmail = getRecipientAddress()

  try {
    const { error } = await resend.emails.send({
      from: "Turf Pros Website <onboarding@resend.dev>", // Sandbox-safe from address
      to: [recipientEmail], // Sends to your verified Resend email
      subject: `New Inquiry from ${name}`,
      reply_to: email,
      react: <ContactFormEmail name={name} email={email} phone={phone} message={message} />,
    })

    if (error) {
      console.error("Resend API Error:", error)
      return { success: false, message: "Failed to send message. Please try again later." }
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (exception) {
    console.error("Submission Error:", exception)
    return { success: false, message: "An unexpected error occurred." }
  }
}
