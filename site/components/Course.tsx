import { stegaClean } from '@sanity/client/stega'
import Link from 'next/link'

import Reveal from '@/components/Reveal'
import SanityPortableText from '@/components/SanityPortableText'
import type { CoursePage } from '@/lib/sanity/types'

import styles from './Course.module.css'

type CourseTheme = {
  _key: string
  title: string
  description?: string
}

const fallbackThemes: CourseTheme[] = [
  { _key: 'clinical-work', title: 'Clinical work', description: 'Where AI is entering the tools and systems around care.' },
  { _key: 'learning', title: 'Learning', description: 'How doctors can think clearly about AI-assisted information work.' },
  { _key: 'responsibility', title: 'Responsibility', description: 'The judgment, limits, and accountability healthcare requires.' },
]

const statusLabels = {
  comingLater: 'Coming later',
  inDevelopment: 'In development',
  available: 'Available',
} as const

export default function Course({ page }: { page?: CoursePage | null }) {
  const status = stegaClean(page?.status) || 'comingLater'
  const statusLabel = statusLabels[status as keyof typeof statusLabels] ?? statusLabels.comingLater
  const headline = page?.headline || 'AI in healthcare, for doctors.'
  const audience = page?.intendedAudience?.length
    ? page.intendedAudience
    : ['Doctors exploring AI’s role in clinical work, learning, communication, and healthcare systems.']
  const themes = page?.themes?.length ? page.themes : fallbackThemes
  const writingLink = page?.writingLink?.href && page.writingLink.label
    ? page.writingLink
    : { href: '/feed', label: 'Open the Feed' }
  const courseAction = status === 'available' && page?.primaryAction?.href && page.primaryAction.label
    ? page.primaryAction
    : null
  const writingExternal = /^https?:\/\//.test(writingLink.href || '')
  const actionExternal = /^https?:\/\//.test(courseAction?.href || '')

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`section-shell ${styles.heroGrid}`}>
          <Reveal className={styles.titleBlock}>
            <p className="section-label">Course · {statusLabel}</p>
            <h1>{headline}</h1>
          </Reveal>
          <Reveal className={styles.statusBlock} delay={0.08}>
            <span className={styles.status}>{statusLabel}</span>
            <div className={styles.body}>
              {page?.body?.length ? (
                <SanityPortableText value={page.body} />
              ) : (
                <p>
                  This is an intentional place for a future course. Curriculum, format, dates,
                  enrolment, and outcomes have not been announced.
                </p>
              )}
            </div>
            {courseAction ? (
              <Link
                className={styles.primaryLink}
                href={courseAction.href || '/course'}
                rel={actionExternal ? 'noreferrer' : undefined}
                target={actionExternal ? '_blank' : undefined}
              >
                {courseAction.label} <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
          </Reveal>
        </div>
      </header>

      <section className={styles.audience} aria-labelledby="course-audience-title">
        <div className={`section-shell ${styles.audienceGrid}`}>
          <p className="section-label">Intended audience</p>
          <div>
            <h2 id="course-audience-title">A direction, not a promise.</h2>
            <ul>
              {audience.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.themes} aria-labelledby="course-themes-title">
        <div className="section-shell">
          <div className={styles.sectionHeading}>
            <p className="section-label">Questions worth exploring</p>
            <h2 id="course-themes-title">The territory is already visible.</h2>
          </div>
          <ol className={styles.themeList}>
            {themes.map((theme, index) => (
              <li key={theme._key}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{theme.title}</h3>
                {theme.description ? <p>{theme.description}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.writing} aria-labelledby="course-writing-title">
        <div className={`section-shell ${styles.writingGrid}`}>
          <div>
            <p className="section-label">Read what exists now</p>
            <h2 id="course-writing-title">The thinking begins before the course.</h2>
          </div>
          <div>
            <p>
              Essays and notes are where ideas about medicine, technology, learning, and systems
              can develop in public—without pretending a finished course already exists.
            </p>
            <Link
              className={styles.writingLink}
              href={writingLink.href || '/blog'}
              rel={writingExternal ? 'noreferrer' : undefined}
              target={writingExternal ? '_blank' : undefined}
            >
              {writingLink.label} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
