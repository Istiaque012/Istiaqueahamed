import { cache } from "react";
import { notFound } from "next/navigation";
import FatherArticle from "@/components/FatherArticle";
import { createPageMetadata } from "@/lib/metadata";
import { fetchSanity } from "@/lib/sanity/fetch";
import { buildImageUrl, resolveSanityImage } from "@/lib/sanity/image";
import { fatherPieceBySlugQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { FatherPiece } from "@/lib/sanity/types";

type Props = { params: Promise<{ slug: string }> };

const getFatherPiece = cache((slug: string) =>
  fetchSanity<FatherPiece | null>({
    query: fatherPieceBySlugQuery,
    params: { slug },
    requestTag: `father-piece-${slug}`,
    tags: [SANITY_TAGS.fatherPiece],
  }),
);

const getFatherPieceMetadata = cache((slug: string) =>
  fetchSanity<FatherPiece | null>({
    query: fatherPieceBySlugQuery,
    params: { slug },
    requestTag: `father-piece-metadata-${slug}`,
    stega: false,
    tags: [SANITY_TAGS.fatherPiece],
  }),
);

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const piece = await getFatherPieceMetadata(slug);

  if (!piece) {
    return createPageMetadata({
      title: "Father piece not found",
      description: "The requested Father piece could not be found.",
      path: `/father/${slug}`,
      noIndex: true,
    });
  }

  const socialImage = buildImageUrl(piece.image, (image) =>
    image.width(1200).height(630).fit("crop").quality(82),
  );

  return createPageMetadata({
    title: `${piece.title} · My Beloved Father`,
    description: `An approved ${piece.format.toLowerCase()} by Istiaque Ahamed in My Beloved Father.`,
    path: `/father/${slug}`,
    type: "article",
    publishedTime: piece.publishedAt,
    modifiedTime: piece._updatedAt,
    section: `My Beloved Father · ${piece.format}`,
    imageUrl: socialImage,
    imageAlt: piece.image?.alt || `Archive image for ${piece.title}`,
  });
}

export default async function FatherDetailPage({ params }: Props) {
  const { slug } = await params;
  const piece = await getFatherPiece(slug);

  if (!piece) {
    notFound();
  }

  const image = resolveSanityImage(piece.image, {
    fallbackAlt: `Approved archive image for ${piece.title}`,
    width: 1800,
    height: 1200,
  });

  return <FatherArticle image={image} piece={piece} />;
}
