// Plain HTML email template - no React components to avoid getOwner errors

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormEmailProps) {
  // Return plain HTML string instead of JSX to avoid React rendering issues
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px;">
      <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 600px; margin: 0 auto; padding: 30px;">
        
        <h1 style="color: #333333; font-size: 24px; font-weight: bold; margin-bottom: 20px; margin-top: 0;">
          🌱 New Contact Form Submission
        </h1>
        
        <p style="color: #333333; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
          You've received a new message from your Turf Pros website contact form.
        </p>

        <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
          <div style="margin-bottom: 10px; font-size: 14px; color: #333333;">
            <strong>Name:</strong> ${name}
          </div>
          <div style="margin-bottom: 10px; font-size: 14px; color: #333333;">
            <strong>Email:</strong> ${email}
          </div>
          ${phone ? `<div style="margin-bottom: 10px; font-size: 14px; color: #333333;">
            <strong>Phone:</strong> ${phone}
          </div>` : ''}
          <div style="margin-bottom: 10px; font-size: 14px; color: #333333;">
            <strong>Subject:</strong> ${subject}
          </div>
        </div>

        <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
          <div style="margin-bottom: 10px; font-size: 14px; color: #333333;">
            <strong>Message:</strong>
          </div>
          <div style="margin-top: 10px; font-size: 14px; line-height: 1.6; color: #333333; white-space: pre-wrap;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 30px;">
          <a href="mailto:${email}?subject=Re: ${subject}" 
             style="background-color: #22c55e; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; font-weight: bold; display: inline-block;">
            Reply to ${name}
          </a>
        </div>

        <p style="color: #666666; font-size: 12px; text-align: center; margin-top: 20px; margin-bottom: 0;">
          This email was sent from your Turf Pros website contact form.
        </p>
        
      </div>
    </body>
    </html>
  `;
}
