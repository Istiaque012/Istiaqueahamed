import { createHash, randomBytes } from 'node:crypto'
import { type NextRequest, NextResponse } from 'next/server'

import { getContactDeliveryConfig } from '@/lib/contact-delivery'
import { validateContactPayload } from '@/lib/contact-validation'

export const runtime = 'nodejs'

const REQUEST_LIMIT_BYTES = 12_000
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const instanceSalt = randomBytes(16).toString('hex')
const rateBuckets = new Map<string, { count: number; resetAt: number }>()

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }
    return entities[character] ?? character
  })
}

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get('origin')

  if (!origin) {
    return false
  }

  try {
    return new URL(origin).host === new URL(request.url).host
  } catch {
    return false
  }
}

function rateLimitKey(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  const address = forwarded || request.headers.get('x-real-ip') || 'unknown'
  const userAgent = request.headers.get('user-agent')?.slice(0, 160) || 'unknown'

  return createHash('sha256').update(`${instanceSalt}:${address}:${userAgent}`).digest('hex')
}

function consumeRateLimit(request: NextRequest) {
  const now = Date.now()

  if (rateBuckets.size > 500) {
    for (const [key, bucket] of rateBuckets) {
      if (bucket.resetAt <= now) rateBuckets.delete(key)
    }
  }

  const key = rateLimitKey(request)
  const current = rateBuckets.get(key)

  if (!current || current.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true, retryAfter: 0 }
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((current.resetAt - now) / 1000) }
  }

  current.count += 1
  return { allowed: true, retryAfter: 0 }
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'This form must be submitted from the website.' }, { status: 403 })
  }

  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return NextResponse.json({ error: 'Unsupported request format.' }, { status: 415 })
  }

  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > REQUEST_LIMIT_BYTES) {
    return NextResponse.json({ error: 'Message is too large.' }, { status: 413 })
  }

  const rawBody = await request.text()
  if (rawBody.length > REQUEST_LIMIT_BYTES) {
    return NextResponse.json({ error: 'Message is too large.' }, { status: 413 })
  }

  let input: unknown
  try {
    input = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const validation = validateContactPayload(input)
  if (!validation.ok) {
    return NextResponse.json(
      { error: 'Please check the highlighted fields.', fieldErrors: validation.errors },
      { status: 400 },
    )
  }

  if (validation.data.company) {
    return NextResponse.json({ delivered: true })
  }

  const rateLimit = consumeRateLimit(request)
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Too many messages. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(rateLimit.retryAfter) } },
    )
  }

  const delivery = getContactDeliveryConfig()
  if (!delivery) {
    return NextResponse.json(
      { error: 'Message delivery is not available yet. Please use one of the social links for now.' },
      { status: 503 },
    )
  }

  const safeName = validation.data.name.replace(/[\r\n]+/g, ' ')
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${delivery.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: delivery.from,
      to: [delivery.to],
      reply_to: validation.data.email,
      subject: `Website message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${validation.data.email}\n\n${validation.data.message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(safeName)}</p><p><strong>Email:</strong> ${escapeHtml(validation.data.email)}</p><hr><p>${escapeHtml(validation.data.message).replace(/\n/g, '<br>')}</p>`,
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    console.error('Contact delivery failed', { provider: 'resend', status: response.status })
    return NextResponse.json(
      { error: 'The message could not be delivered. Please try again later.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ delivered: true })
}
