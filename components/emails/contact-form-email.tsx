interface ContactFormEmailProps {
  name: string
  email: string
  phone?: string
  message: string
}

export default function ContactFormEmail({ name, email, phone, message }: ContactFormEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
      <h1 style={{ color: "#1a472a" }}>New Inquiry from Turf Pros Website</h1>
      <p>You have received a new message from your website's contact form.</p>
      <hr style={{ borderColor: "#eaeaea" }} />
      <h2 style={{ color: "#1a472a" }}>Sender's Details:</h2>
      <ul>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </li>
        {phone && (
          <li>
            <strong>Phone:</strong> {phone}
          </li>
        )}
      </ul>
      <h2 style={{ color: "#1a472a" }}>Message:</h2>
      <p style={{ whiteSpace: "pre-wrap", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "5px" }}>
        {message}
      </p>
    </div>
  )
}
