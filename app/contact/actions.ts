"use server"

import { contactFormSchema, type ContactFormInputs } from "@/lib/contact-form-schema"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL

export type SendContactEmailResult = { success: boolean; message: string }

export async function sendContactEmail(values: ContactFormInputs): Promise<SendContactEmailResult> {
  if (!RESEND_API_KEY || !RECIPIENT) {
    console.error("Missing Resend API key or recipient email.")
    return {
      success: false,
      message: "Server configuration error. Could not send email.",
    }
  }

  const parsed = contactFormSchema.safeParse(values)
  if (!parsed.success) {
    return { success: false, message: "Validation failed. Please check your inputs." }
  }

  const { name, email, phone, service, message } = parsed.data

  // Plain text version for email clients that don't support HTML
  const text = `New contact form submission from ${name} (${email}).\n\nService Inquiry: ${service}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`

  const payload = {
    // For Resend's free tier, 'from' must be 'onboarding@resend.dev'
    from: "onboarding@resend.dev",
    // The 'to' address must be your verified Resend account email on the free tier
    to: [RECIPIENT],
    subject: `Turf Pros • New Inquiry for ${service}`,
    html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Service Inquiry:</strong> ${service}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    // Add the plain text version
    text: text,
    // The 'reply_to' field allows you to reply directly to the user
    reply_to: email,
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const errorBody = await res.text()
      console.error("Resend API error:", errorBody)
      return {
        success: false,
        message: "Unable to send your message right now. Please try again later.",
      }
    }

    return { success: true, message: "Your message has been sent. We'll be in touch shortly!" }
  } catch (err) {
    console.error("Unexpected error while sending email:", err)
    return {
      success: false,
      message: "Something went wrong while sending your message. Please email us directly.",
    }
  }
}
