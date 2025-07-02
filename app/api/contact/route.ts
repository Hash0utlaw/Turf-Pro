import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { contactFormSchema } from "@/lib/contact-form-schema"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Validation failed. Please check your inputs." },
        { status: 400 },
      )
    }

    const { name, email, message } = parsed.data

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_RECIPIENT_EMAIL } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_RECIPIENT_EMAIL) {
      console.error("Missing one or more SMTP environment variables")
      return NextResponse.json(
        { success: false, message: "Server configuration error. Unable to send email." },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number.parseInt(SMTP_PORT, 10),
      secure: Number.parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`, // The "from" address must be the authenticated user
      to: CONTACT_RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email, // Set the sender's email as the reply-to address
      text: message,
      html: `<p>You have a new contact form submission:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br>")}</p>`,
    })

    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 },
    )
  }
}
