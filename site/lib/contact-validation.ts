export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  message: { min: 20, max: 3000 },
} as const

export type ContactPayload = {
  name: string
  email: string
  message: string
  company: string
}

export type ContactFieldErrors = Partial<Record<'name' | 'email' | 'message', string>>

type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: ContactFieldErrors }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function readString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export function validateContactPayload(input: unknown): ContactValidationResult {
  const source = input && typeof input === 'object' ? (input as Record<string, unknown>) : {}
  const data: ContactPayload = {
    name: readString(source.name),
    email: readString(source.email).toLowerCase(),
    message: readString(source.message),
    company: readString(source.company),
  }
  const errors: ContactFieldErrors = {}

  if (
    data.name.length < CONTACT_LIMITS.name.min ||
    data.name.length > CONTACT_LIMITS.name.max ||
    /[\r\n]/.test(data.name)
  ) {
    errors.name = `Use between ${CONTACT_LIMITS.name.min} and ${CONTACT_LIMITS.name.max} characters.`
  }

  if (!emailPattern.test(data.email) || data.email.length > CONTACT_LIMITS.email.max) {
    errors.email = 'Enter a valid email address.'
  }

  if (data.message.length < CONTACT_LIMITS.message.min || data.message.length > CONTACT_LIMITS.message.max) {
    errors.message = `Use between ${CONTACT_LIMITS.message.min} and ${CONTACT_LIMITS.message.max} characters.`
  }

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data }
}
