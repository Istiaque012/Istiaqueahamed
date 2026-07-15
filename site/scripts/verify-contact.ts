import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { validateContactPayload } from '../lib/contact-validation'

const root = process.cwd()

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message)
}

function read(path: string) {
  return readFileSync(join(root, path), 'utf8')
}

for (const file of [
  'app/api/contact/route.ts',
  'components/Contact.tsx',
  'components/ContactForm.tsx',
  'lib/contact-delivery.ts',
  'lib/contact-validation.ts',
]) {
  assert(existsSync(join(root, file)), `Missing Contact implementation file: ${file}`)
}

const valid = validateContactPayload({
  name: 'Test Visitor',
  email: 'visitor@example.com',
  message: 'This is a deliberately valid contact form test message.',
  company: '',
})
assert(valid.ok, 'A valid message must pass shared validation')

for (const invalid of [
  { name: 'T', email: 'visitor@example.com', message: 'This message is long enough.', company: '' },
  { name: 'Test Visitor', email: 'invalid', message: 'This message is long enough.', company: '' },
  { name: 'Test Visitor', email: 'visitor@example.com', message: 'Too short', company: '' },
]) {
  assert(!validateContactPayload(invalid).ok, 'Invalid contact payload must fail closed')
}

const route = read('app/api/contact/route.ts')
for (const protection of ['isSameOrigin', 'REQUEST_LIMIT_BYTES', 'consumeRateLimit', 'company']) {
  assert(route.includes(protection), `Contact endpoint must include ${protection} protection`)
}
assert(route.includes("https://api.resend.com/emails"), 'Contact endpoint must target the selected delivery API')
assert(route.includes('getContactDeliveryConfig'), 'Contact endpoint must fail closed without private delivery config')

const envExample = read('.env.example')
for (const variable of ['CONTACT_FORM_ENABLED', 'RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL']) {
  assert(envExample.includes(`${variable}=`), `.env.example must document ${variable}`)
}

console.log('Contact verified: shared validation, abuse controls, fail-closed config, and provider handoff.')
