import { defineEnableDraftMode } from 'next-sanity/draft-mode'

import { previewClient } from '@/lib/sanity/client'
import { sanityReadToken } from '@/sanity/env'

const handler = defineEnableDraftMode({
  client: previewClient.withConfig({ token: sanityReadToken ?? 'missing-token' }),
})

export async function GET(request: Request) {
  if (!sanityReadToken) {
    return Response.json(
      { error: 'Draft preview is not configured. Set SANITY_API_READ_TOKEN first.' },
      { status: 503 },
    )
  }

  return handler.GET(request)
}
