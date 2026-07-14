import { DetailPlaceholder } from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({
    title: `${slug.replaceAll("-", " ")} · Blog`,
    description: "Reserved Blog detail route for an approved Istiaque Ahamed essay.",
    path: `/blog/${slug}`,
    noIndex: true,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  return <DetailPlaceholder kind="Blog" slug={slug} />;
}
