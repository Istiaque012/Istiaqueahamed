const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/

function validId(value: string | null | undefined) {
  const candidate = value?.trim()
  return candidate && YOUTUBE_ID.test(candidate) ? candidate : undefined
}

export function extractYouTubeId(value?: string | null) {
  if (!value) return undefined

  try {
    const url = new URL(value)
    const host = url.hostname.replace(/^www\./, '').replace(/^m\./, '')

    if (host === 'youtu.be') {
      return validId(url.pathname.split('/').filter(Boolean)[0])
    }

    if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      const segments = url.pathname.split('/').filter(Boolean)
      if (segments[0] === 'embed' || segments[0] === 'shorts' || segments[0] === 'live') {
        return validId(segments[1])
      }
      return validId(url.searchParams.get('v'))
    }
  } catch {
    return undefined
  }

  return undefined
}

export function youtubeEmbedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
}

export function youtubeThumbnailUrl(videoId: string, fallback = false) {
  return `https://i.ytimg.com/vi/${videoId}/${fallback ? 'hqdefault' : 'maxresdefault'}.jpg`
}
