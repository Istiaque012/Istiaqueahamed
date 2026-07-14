'use client'

import { useEffect } from 'react'

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <main className="error-shell">
          <div className="error-panel">
            <p className="section-label">The site paused unexpectedly</p>
            <h1>Let&apos;s try that again.</h1>
            <p>
              A temporary problem interrupted the page. No information was submitted or changed.
            </p>
            <div className="error-actions">
              <button className="button button-light" type="button" onClick={reset}>
                Reload the page
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
