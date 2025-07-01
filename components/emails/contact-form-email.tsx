import type { ContactFormInputs } from "@/lib/contact-form-schema"

/**
 * Very small dependency-free JSX email for Resend.
 */
export default function ContactFormEmail({ name, email, phone, message }: ContactFormInputs) {
  return (
    <div>
      <h2>New Contact Form Submission</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      {phone && (
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      )}
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  )
}
