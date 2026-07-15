import { cache } from "react";
import { notFound } from "next/navigation";
import FatherArticle from "@/components/FatherArticle";
import { createPageMetadata } from "@/lib/metadata";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage } from "@/lib/sanity/image";
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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const piece = await getFatherPiece(slug);

  if (!piece) {
    return createPageMetadata({
      title: "Father piece not found",
      description: "The requested Father piece could not be found.",
      path: `/father/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${piece.title} · My Beloved Father`,
    description: `An approved ${piece.format.toLowerCase()} by Istiaque Ahamed in My Beloved Father.`,
    path: `/father/${slug}`,
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
