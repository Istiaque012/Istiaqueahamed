const publicDefaults = {
  apiVersion: '2024-06-01',
  dataset: 'production',
  projectId: 'gtq6sx9w',
} as const

function readPublicEnv(
  name: string,
  fallback: string,
  isValid: (value: string) => boolean,
): string {
  const value = process.env[name]?.trim() || fallback

  if (!isValid(value)) {
    throw new Error(`Invalid environment variable: ${name}`)
  }

  return value
}

export const apiVersion = readPublicEnv(
  'NEXT_PUBLIC_SANITY_API_VERSION',
  publicDefaults.apiVersion,
  (value) => /^\d{4}-\d{2}-\d{2}$/.test(value),
)

export const dataset = readPublicEnv(
  'NEXT_PUBLIC_SANITY_DATASET',
  publicDefaults.dataset,
  (value) => /^[a-z0-9][a-z0-9_-]*$/.test(value),
)

export const projectId = readPublicEnv(
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  publicDefaults.projectId,
  (value) => /^[a-z0-9-]+$/.test(value),
)
