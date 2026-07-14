import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.blog, noIndex: true });
export default function BlogPage() { return <RoutePlaceholder config={pageConfigs.blog} />; }
