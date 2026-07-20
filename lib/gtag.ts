declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const FORM_CONVERSION_LABEL = process.env.NEXT_PUBLIC_FORM_CONVERSION_LABEL
const PHONE_CONVERSION_LABEL = process.env.NEXT_PUBLIC_PHONE_CONVERSION_LABEL

function fireConversion(label: string | undefined) {
  if (typeof window === "undefined" || !window.gtag || !GOOGLE_ADS_ID || !label) return

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
  })
}

export function trackFormConversion(): void {
  fireConversion(FORM_CONVERSION_LABEL)
}

export function trackPhoneConversion(): void {
  fireConversion(PHONE_CONVERSION_LABEL)
}
