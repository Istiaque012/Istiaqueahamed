import 'server-only'

import { cookies, draftMode } from 'next/headers'
import {
  defineLive,
  resolvePerspectiveFromCookies,
  type LivePerspective,
} from 'next-sanity/live'

import { client } from '@/lib/sanity/client'
import { sanityReadToken } from '@/sanity/env'

const token = sanityReadToken ?? false

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: token,
  serverToken: token,
  strict: true,
})

export type SanityFetchMode = {
  perspective: LivePerspective
  stega: boolean
}

export async function getSanityFetchMode(): Promise<SanityFetchMode> {
  const { isEnabled } = await draftMode()

  if (!isEnabled || !sanityReadToken) {
    return { perspective: 'published', stega: false }
  }

  const perspective = await resolvePerspectiveFromCookies({ cookies: await cookies() })

  return {
    perspective: perspective ?? 'drafts',
    stega: true,
  }
}
