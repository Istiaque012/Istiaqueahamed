import 'server-only'

export type ContactDeliveryConfig = {
  apiKey: string
  from: string
  to: string
}

export function getContactDeliveryConfig(): ContactDeliveryConfig | null {
  if (process.env.CONTACT_FORM_ENABLED !== 'true') {
    return null
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.CONTACT_FROM_EMAIL?.trim()
  const to = process.env.CONTACT_TO_EMAIL?.trim()

  return apiKey && from && to ? { apiKey, from, to } : null
}

export function isContactDeliveryConfigured() {
  return getContactDeliveryConfig() !== null
}
