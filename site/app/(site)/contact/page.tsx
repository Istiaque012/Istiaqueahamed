import Contact from '@/components/Contact'
import { isContactDeliveryConfigured } from '@/lib/contact-delivery'
import { createPageMetadata } from '@/lib/metadata'
import { pageConfigs } from '@/lib/page-config'
import { fetchSanity } from '@/lib/sanity/fetch'
import { contactPageQuery } from '@/lib/sanity/queries'
import { SANITY_TAGS } from '@/lib/sanity/tags'
import type { ContactPage as ContactPageDocument } from '@/lib/sanity/types'

export const metadata = createPageMetadata({ ...pageConfigs.contact })

export default async function ContactPage() {
  const page = await fetchSanity<ContactPageDocument | null>({
    query: contactPageQuery,
    requestTag: 'contact-page',
    tags: [SANITY_TAGS.contactPage],
  })
  const deliveryEnabled = Boolean(page?.formEnabled) && isContactDeliveryConfigured()

  return <Contact deliveryEnabled={deliveryEnabled} page={page} />
}
