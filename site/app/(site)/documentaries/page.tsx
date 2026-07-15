import Documentaries, { type DocumentaryView } from "@/components/Documentaries";
import { documentaryAnchorId } from "@/lib/editorial";
import { stringifyJsonLd, videoJsonLd } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage } from "@/lib/sanity/image";
import { documentariesQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { Documentary } from "@/lib/sanity/types";
import { extractYouTubeId, youtubeThumbnailUrl } from "@/lib/youtube";

export const metadata = createPageMetadata({ ...pageConfigs.documentaries });

export default async function DocumentariesPage() {
  const documents = await fetchSanity<Documentary[]>({
    query: documentariesQuery,
    requestTag: "documentaries-index",
    tags: [SANITY_TAGS.documentary],
  });

  const films: DocumentaryView[] = (documents ?? []).map((film) => {
    const videoId = extractYouTubeId(film.youtubeUrl);
    const thumbnail = resolveSanityImage(film.thumbnail, {
      fallbackAlt: `Thumbnail for ${film.title} by Istiaque Ahamed`,
      height: 900,
      width: 1600,
    });
    const themes = [film.topic, ...(film.themes ?? [])].filter(
      (theme, index, all): theme is string => Boolean(theme?.trim()) && all.indexOf(theme) === index,
    );

    return {
      date: film.publishedAt,
      description: film.description,
      id: film._id,
      themes,
      thumbnail,
      title: film.title,
      videoId,
    };
  });

  const videos = films
    .map((film) => videoJsonLd({
      title: film.title,
      description: film.description,
      path: `/documentaries#${documentaryAnchorId(film.id)}`,
      uploadDate: film.date,
      thumbnailUrl: film.thumbnail?.src || (film.videoId ? youtubeThumbnailUrl(film.videoId, true) : undefined),
      videoId: film.videoId,
    }))
    .filter((video) => video !== null);

  return (
    <>
      {videos.length ? (
        <script
          dangerouslySetInnerHTML={{ __html: stringifyJsonLd(videos) }}
          type="application/ld+json"
        />
      ) : null}
      <Documentaries films={films} />
    </>
  );
}
