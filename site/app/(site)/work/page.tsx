import Work from "@/components/Work";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage } from "@/lib/sanity/image";
import { workPageQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { WorkPage as WorkPageContent } from "@/lib/sanity/types";

export const metadata = createPageMetadata({ ...pageConfigs.work });

export default async function WorkPage() {
  const page = await fetchSanity<WorkPageContent | null>({
    query: workPageQuery,
    requestTag: "work-page",
    tags: [SANITY_TAGS.workPage],
  });
  const image = resolveSanityImage(page?.workImage, {
    fallbackAlt: "Istiaque Ahamed working with calm concentration",
    height: 900,
    width: 1600,
  });
  const cvUrl = page?.cvEnabled ? page.cvFile?.asset?.url : undefined;

  return <Work cvUrl={cvUrl} image={image} page={page} />;
}
