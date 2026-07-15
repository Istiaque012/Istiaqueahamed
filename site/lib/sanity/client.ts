import { createClient } from 'next-sanity'

import { SITE_URL } from '@/lib/person'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // CDN is fine for published, public content; disable if you need fresh drafts.
  useCdn: true,
  perspective: 'published',
  stega: {
    studioUrl: `${SITE_URL}/studio`,
  },
})

export const previewClient = client.withConfig({
  useCdn: false,
  perspective: 'drafts',
})
