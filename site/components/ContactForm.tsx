'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/Controls'
import {
  CONTACT_LIMITS,
  type ContactFieldErrors,
  validateContactPayload,
} from '@/lib/contact-validation'

import styles from './Contact.module.css'

const emptyValues = { name: '', email: '', message: '' }

type FormStatus =
  | { kind: 'idle'; message: '' }
  | { kind: 'pending'; message: string }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string }

export default function ContactForm({ enabled, successMessage }: { enabled: boolean; successMessage: string }) {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const [status, setStatus] = useState<FormStatus>({ kind: 'idle', message: '' })

  function updateValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const key = event.target.name as keyof typeof emptyValues
    setValues((current) => ({ ...current, [key]: event.target.value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    if (status.kind !== 'idle') setStatus({ kind: 'idle', message: '' })
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!enabled || status.kind === 'pending') return

    const form = new FormData(event.currentTarget)
    const payload = {
      ...values,
      company: String(form.get('company') || ''),
    }
    const validation = validateContactPayload(payload)

    if (!validation.ok) {
      setErrors(validation.errors)
      setStatus({ kind: 'error', message: 'Please check the highlighted fields.' })
      const firstInvalidField = Object.keys(validation.errors)[0]
      if (firstInvalidField) {
        const control = event.currentTarget.elements.namedItem(firstInvalidField)
        if (control instanceof HTMLElement) control.focus()
      }
      return
    }

    setErrors({})
    setStatus({ kind: 'pending', message: 'Sending your message…' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data),
      })
      const result = await response.json() as {
        error?: string
        fieldErrors?: ContactFieldErrors
      }

      if (!response.ok) {
        setErrors(result.fieldErrors || {})
        setStatus({ kind: 'error', message: result.error || 'The message could not be sent.' })
        return
      }

      setValues(emptyValues)
      setStatus({ kind: 'success', message: successMessage })
    } catch {
      setStatus({ kind: 'error', message: 'The message could not be sent. Please try again later.' })
    }
  }

  const locked = !enabled || status.kind === 'pending'

  return (
    <form className={styles.form} noValidate onSubmit={submit}>
      <fieldset disabled={locked}>
        <legend className="sr-only">Send a private message</legend>
        <FormField
          autoComplete="name"
          disabled={locked}
          error={errors.name}
          label="Name"
          maxLength={CONTACT_LIMITS.name.max}
          minLength={CONTACT_LIMITS.name.min}
          name="name"
          onChange={updateValue}
          placeholder="Your name…"
          required
          value={values.name}
        />
        <FormField
          autoComplete="email"
          disabled={locked}
          error={errors.email}
          label="Email"
          maxLength={CONTACT_LIMITS.email.max}
          name="email"
          onChange={updateValue}
          placeholder="you@example.com…"
          required
          spellCheck={false}
          type="email"
          value={values.email}
        />
        <FormField
          disabled={locked}
          error={errors.message}
          hint={`${CONTACT_LIMITS.message.min}–${CONTACT_LIMITS.message.max} characters.`}
          label="Message"
          maxLength={CONTACT_LIMITS.message.max}
          minLength={CONTACT_LIMITS.message.min}
          name="message"
          onChange={updateValue}
          placeholder="What would you like to talk about?…"
          required
          rows={7}
          value={values.message}
        />
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input autoComplete="off" id="company" name="company" tabIndex={-1} type="text" />
        </div>
      </fieldset>

      <div className={styles.formFooter}>
        <Button disabled={locked} type="submit">
          {status.kind === 'pending' ? 'Sending…' : 'Send Message'}
        </Button>
        <p aria-live="polite" className={styles.formStatus} data-kind={status.kind} role="status">
          {!enabled
            ? 'Private message delivery is being connected. Please use a confirmed social link for now.'
            : status.message}
        </p>
      </div>
    </form>
  )
}
