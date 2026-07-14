import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.feed, noIndex: true });
export default function FeedPage() { return <RoutePlaceholder config={pageConfigs.feed} />; }
