import 'server-only'

import type { QueryParams } from 'next-sanity'

import { getSanityFetchMode, sanityFetch } from '@/lib/sanity/live'

type FetchOptions = {
  query: string
  params?: QueryParams
  tags?: string[]
  requestTag: string
  stega?: boolean
}

export async function fetchSanity<T>({
  query,
  params = {},
  requestTag,
  tags = [],
  stega: stegaOverride,
}: FetchOptions): Promise<T> {
  const { perspective, stega } = await getSanityFetchMode()
  const { data } = await sanityFetch({
    query,
    params,
    perspective,
    stega: stegaOverride ?? stega,
    tags,
    requestTag,
  })

  return data as T
}
