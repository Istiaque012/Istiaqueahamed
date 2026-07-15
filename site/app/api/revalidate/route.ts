import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

import { tagsForDocumentType } from '@/lib/sanity/tags'
import { sanityRevalidateSecret } from '@/sanity/env'

type WebhookDocument = {
  _id: string
  _type: string
}

export async function POST(request: NextRequest) {
  if (!sanityRevalidateSecret) {
    return NextResponse.json(
      { error: 'Revalidation is not configured. Set SANITY_REVALIDATE_SECRET first.' },
      { status: 503 },
    )
  }

  const { body, isValidSignature } = await parseBody<WebhookDocument>(
    request,
    sanityRevalidateSecret,
    true,
  )

  if (!isValidSignature) {
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 401 })
  }

  if (!body?._type) {
    return NextResponse.json({ error: 'Missing document type.' }, { status: 400 })
  }

  const tags = tagsForDocumentType(body._type)
  tags.forEach((tag) => revalidateTag(tag, 'max'))

  return NextResponse.json({ revalidated: true, tags })
}
