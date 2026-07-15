import imageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

import { dataset, projectId } from '@/sanity/env'
import type { SanityImageWithMetadata } from '@/lib/sanity/types'

const builder = imageUrlBuilder({ projectId, dataset })

export function urlForImage(source: SanityImageWithMetadata) {
  return builder.image(source)
}

type SanityImageOptions = {
  fallbackAlt: string
  height?: number
  quality?: number
  width?: number
}

export type ResolvedSanityImage = {
  alt: string
  blurDataURL?: string
  caption?: string
  height?: number
  placeholder?: 'blur'
  src: string
  width?: number
}

export function buildImageUrl(
  source: SanityImageWithMetadata | null | undefined,
  configure?: (image: ImageUrlBuilder) => ImageUrlBuilder,
): string | undefined {
  if (!source?.asset) {
    return undefined
  }

  const image = configure ? configure(urlForImage(source)) : urlForImage(source)
  return image.auto('format').url()
}

export function resolveSanityImage(
  source: SanityImageWithMetadata | null | undefined,
  { fallbackAlt, height, quality = 82, width = 1600 }: SanityImageOptions,
): ResolvedSanityImage | undefined {
  if (!source) {
    return undefined
  }

  const src = buildImageUrl(source, (image) =>
    image.width(width).height(height ?? Math.round(width * 0.625)).fit('max').quality(quality),
  )

  if (!src) {
    return undefined
  }

  const dimensions =
    source?.asset && 'metadata' in source.asset ? source.asset.metadata?.dimensions : undefined
  const blurDataURL = source?.asset && 'metadata' in source.asset ? source.asset.metadata?.lqip : undefined

  return {
    alt: source.alt?.trim() || fallbackAlt,
    blurDataURL,
    caption: source.caption,
    height: dimensions?.height,
    placeholder: blurDataURL ? 'blur' : undefined,
    src,
    width: dimensions?.width,
  }
}
