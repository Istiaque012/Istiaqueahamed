'use client'

import Link from 'next/link'
import { useEffect } from 'react'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="error-shell">
      <div className="error-panel">
        <p className="section-label">A brief interruption</p>
        <h1>Something went wrong.</h1>
        <p>
          This page could not be shown just now. Try it once more, or return to the beginning.
        </p>
        <div className="error-actions">
          <button className="button button-light" type="button" onClick={reset}>
            Try again
          </button>
          <Link className="button button-line" href="/">
            Return home
          </Link>
        </div>
      </div>
    </main>
  )
}
