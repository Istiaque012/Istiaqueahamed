import Image from 'next/image'
import Link from 'next/link'
import { PortableText, type PortableTextComponents } from '@portabletext/react'

import { resolveSanityImage } from '@/lib/sanity/image'
import type { PortableTextBlock, SanityImageWithMetadata } from '@/lib/sanity/types'

type SanityPortableTextProps = {
  value?: PortableTextBlock[] | null
}

const components: PortableTextComponents = {
  types: {
    imageWithMetadata: ({ value }) => {
      const image = resolveSanityImage(value as SanityImageWithMetadata, {
        fallbackAlt: 'Article image uploaded in Sanity',
        width: 1800,
      })

      if (!image) {
        return null
      }

      return (
        <figure className="portable-image">
          <Image
            alt={image.alt}
            blurDataURL={image.blurDataURL}
            height={image.height ?? 1125}
            placeholder={image.placeholder}
            sizes="(max-width: 768px) 100vw, 760px"
            src={image.src}
            width={image.width ?? 1800}
          />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : ''
      const isExternal = /^https?:\/\//.test(href)

      if (!href) {
        return <>{children}</>
      }

      return (
        <Link href={href} rel={isExternal ? 'noreferrer' : undefined} target={isExternal ? '_blank' : undefined}>
          {children}
        </Link>
      )
    },
  },
}

export default function SanityPortableText({ value }: SanityPortableTextProps) {
  if (!value?.length) {
    return null
  }

  return <PortableText components={components} value={value} />
}
