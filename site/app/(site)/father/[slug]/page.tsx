import { DetailPlaceholder } from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({
    title: `${slug.replaceAll("-", " ")} · My Beloved Father`,
    description: "Reserved Father detail route for Istiaque Ahamed's approved words.",
    path: `/father/${slug}`,
    noIndex: true,
  });
}

export default async function FatherDetailPage({ params }: Props) {
  const { slug } = await params;
  return <DetailPlaceholder kind="Father" slug={slug} />;
}
