import { DetailPlaceholder } from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({
    title: `${slug.replaceAll("-", " ")} · Journal`,
    description: "Reserved Journal detail route for an approved Istiaque Ahamed entry.",
    path: `/journal/${slug}`,
    noIndex: true,
  });
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  return <DetailPlaceholder kind="Journal" slug={slug} />;
}
