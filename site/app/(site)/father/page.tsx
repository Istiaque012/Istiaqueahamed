import Father from "@/components/Father";
import { createPageMetadata } from "@/lib/metadata";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage } from "@/lib/sanity/image";
import { fatherPageQuery, fatherPiecesQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { FatherPage as FatherPageContent, FatherPiece } from "@/lib/sanity/types";

export const metadata = createPageMetadata({
  title: "My Beloved Father",
  description:
    "A quiet space for the man whose example shaped Istiaque Ahamed's path into medicine.",
  path: "/father",
});

export default async function FatherPage() {
  const [fatherPage, pieces] = await Promise.all([
    fetchSanity<FatherPageContent | null>({
      query: fatherPageQuery,
      requestTag: "father-page",
      tags: [SANITY_TAGS.fatherPage],
    }),
    fetchSanity<FatherPiece[]>({
      query: fatherPiecesQuery,
      requestTag: "father-pieces",
      tags: [SANITY_TAGS.fatherPiece],
    }),
  ]);

  const archiveImages = (fatherPage?.archiveImages ?? []).slice(0, 5).map((item) => ({
    image: resolveSanityImage(item.image, {
      fallbackAlt: "Approved archive photograph of Istiaque Ahamed's father",
      width: 1800,
      height: 1200,
    }),
    caption: item.caption?.trim() || item.image?.caption?.trim(),
  }));

  return <Father archiveImages={archiveImages} fatherPage={fatherPage} pieces={pieces ?? []} />;
}
