"use client";

import Image from "next/image";
import { useState } from "react";
import { youtubeEmbedUrl, youtubeThumbnailUrl } from "@/lib/youtube";

export default function YouTubeFacade({
  customThumbnail,
  title,
  videoId,
}: {
  customThumbnail?: { alt: string; src: string };
  title: string;
  videoId?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [thumbnailFallback, setThumbnailFallback] = useState(0);

  if (!videoId) {
    return (
      <div className="film-player film-player--unavailable" role="img" aria-label={`Video unavailable for ${title}`}>
        <span>IA</span>
        <small>Playback link needs attention</small>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="film-player">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={youtubeEmbedUrl(videoId)}
          title={`Watch ${title}`}
        />
      </div>
    );
  }

  const thumbnailSrc = customThumbnail?.src
    ? customThumbnail.src
    : youtubeThumbnailUrl(videoId, thumbnailFallback === 1);
  const showImage = Boolean(customThumbnail?.src) ? thumbnailFallback === 0 : thumbnailFallback < 2;

  return (
    <div className="film-player">
      <button
        aria-label={`Play ${title}`}
        className="film-player__facade"
        onClick={() => setPlaying(true)}
        type="button"
      >
        {showImage ? (
          <Image
            alt={customThumbnail?.alt || `YouTube thumbnail for ${title}`}
            fill
            onError={() => setThumbnailFallback((value) => (customThumbnail?.src ? 1 : Math.min(value + 1, 2)))}
            sizes="(max-width: 760px) 100vw, 80vw"
            src={thumbnailSrc}
          />
        ) : (
          <span className="film-player__plate" aria-hidden="true">IA</span>
        )}
        <span className="film-player__shade" aria-hidden="true" />
        <span className="film-player__play" aria-hidden="true"><span>▶</span></span>
        <span className="film-player__label">Play film</span>
      </button>
    </div>
  );
}
