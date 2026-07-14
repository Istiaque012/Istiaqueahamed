import { DetailPlaceholder } from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({
    title: `${slug.replaceAll("-", " ")} · Projects`,
    description: "Reserved project detail route for an approved Istiaque Ahamed project.",
    path: `/projects/${slug}`,
    noIndex: true,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  return <DetailPlaceholder kind="Projects" slug={slug} />;
}
