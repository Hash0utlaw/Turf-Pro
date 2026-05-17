"use server"

import { Resend } from "resend"
import { contactFormSchema, type ContactFormInputs } from "@/lib/contact-form-schema"

export type SendContactEmailResult = { success: boolean; message: string }

export async function sendContactEmail(values: ContactFormInputs): Promise<SendContactEmailResult> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL

  if (!RESEND_API_KEY || !RECIPIENT) {
    console.error("[sendContactEmail] Missing RESEND_API_KEY or CONTACT_RECIPIENT_EMAIL")
    return {
      success: false,
      message: "Server configuration error. Could not send email.",
    }
  }

  const parsed = contactFormSchema.safeParse(values)
  if (!parsed.success) {
    console.error("[sendContactEmail] Validation failed:", parsed.error.flatten())
    return { success: false, message: "Validation failed. Please check your inputs." }
  }

  const { name, email, phone, service, message, address, street, city, state, zipCode } = parsed.data

  const location = city && state ? `${city}, ${state}` : state || city || "Address Provided"

  const resend = new Resend(RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: "Atlantic Turf Specialists <onboarding@resend.dev>",
    to: [RECIPIENT],
    reply_to: email,
    subject: `New Inquiry: ${service} — ${location}`,
    html: `
      <!DOCTYPE html>
      <html>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; margin: 0; padding: 20px;">
        <div style="background: #ffffff; border-radius: 8px; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e0e0e0;">
          <h2 style="color: #166534; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td>${phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; font-weight: bold;">Service</td><td>${service}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <h3 style="color: #166534; margin-top: 0;">Project Address</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Full Address</td><td>${address}</td></tr>
            ${street ? `<tr><td style="padding: 8px 0; font-weight: bold;">Street</td><td>${street}</td></tr>` : ""}
            ${city ? `<tr><td style="padding: 8px 0; font-weight: bold;">City</td><td>${city}</td></tr>` : ""}
            ${state ? `<tr><td style="padding: 8px 0; font-weight: bold;">State</td><td>${state}</td></tr>` : ""}
            ${zipCode ? `<tr><td style="padding: 8px 0; font-weight: bold;">Zip Code</td><td>${zipCode}</td></tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <h3 style="color: #166534; margin-top: 0;">Message</h3>
          <p style="font-size: 14px; color: #333; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">Sent via the Atlantic Turf Specialists contact form</p>
        </div>
      </body>
      </html>
    `,
    text: `New contact form submission from ${name} (${email}).\n\nService: ${service}\nPhone: ${phone || "Not provided"}\nAddress: ${address}${street ? `\nStreet: ${street}` : ""}${city ? `\nCity: ${city}` : ""}${state ? `\nState: ${state}` : ""}${zipCode ? `\nZip: ${zipCode}` : ""}\n\nMessage:\n${message}`,
  })

  if (error) {
    console.error("[sendContactEmail] Resend error:", JSON.stringify(error))
    return {
      success: false,
      message: "Unable to send your message right now. Please try again later.",
    }
  }

  console.log("[sendContactEmail] Email sent successfully, id:", data?.id)
  return { success: true, message: "Your message has been sent. We'll be in touch shortly!" }
}
