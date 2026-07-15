import Link from 'next/link'

import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import SanityPortableText from '@/components/SanityPortableText'
import { socialLinks } from '@/lib/navigation'
import type { ContactPage } from '@/lib/sanity/types'

import styles from './Contact.module.css'

export default function Contact({
  deliveryEnabled,
  page,
}: {
  deliveryEnabled: boolean
  page?: ContactPage | null
}) {
  const successMessage = page?.successMessage || 'Your message was delivered. Thank you for writing.'

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`section-shell ${styles.heroGrid}`}>
          <Reveal>
            <p className="section-label">An open door</p>
            <h1>Contact</h1>
          </Reveal>
          <Reveal className={styles.welcome} delay={0.08}>
            {page?.welcomeCopy?.length ? (
              <SanityPortableText value={page.welcomeCopy} />
            ) : (
              <p>
                A quiet route for thoughtful messages about medicine, systems, building,
                speaking, or meaningful collaboration.
              </p>
            )}
            <span>Messages stay private. The email address behind this form is not published.</span>
          </Reveal>
        </div>
      </header>

      <section className={styles.messageSection} aria-labelledby="contact-form-title">
        <div className={`section-shell ${styles.messageGrid}`}>
          <div className={styles.messageHeading}>
            <p className="section-label">Private message</p>
            <h2 id="contact-form-title">Write directly.</h2>
            <p>
              Name, email, and the message are used only to deliver and reply to this conversation.
              No public inbox is exposed here.
            </p>
          </div>
          <ContactForm enabled={deliveryEnabled} successMessage={successMessage} />
        </div>
      </section>

      <section className={styles.socials} aria-labelledby="contact-socials-title">
        <div className="section-shell">
          <div className={styles.socialHeading}>
            <p className="section-label">Elsewhere</p>
            <h2 id="contact-socials-title">Follow the work in public.</h2>
          </div>
          <ul className={styles.socialList}>
            {socialLinks.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} rel="me noreferrer" target="_blank">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.label}</strong>
                  <b aria-hidden="true">↗</b>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
