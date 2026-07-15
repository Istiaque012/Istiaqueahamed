import Course from '@/components/Course'
import { createPageMetadata } from '@/lib/metadata'
import { pageConfigs } from '@/lib/page-config'
import { fetchSanity } from '@/lib/sanity/fetch'
import { coursePageQuery } from '@/lib/sanity/queries'
import { SANITY_TAGS } from '@/lib/sanity/tags'
import type { CoursePage as CoursePageDocument } from '@/lib/sanity/types'

export const metadata = createPageMetadata({ ...pageConfigs.course })

export default async function CoursePage() {
  const page = await fetchSanity<CoursePageDocument | null>({
    query: coursePageQuery,
    requestTag: 'course-page',
    tags: [SANITY_TAGS.coursePage],
  })

  return <Course page={page} />
}
