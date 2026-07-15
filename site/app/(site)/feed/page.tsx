import { WritingScaffold } from "@/components/writing";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.feed, noIndex: true });
export default function FeedPage() { return <WritingScaffold config={pageConfigs.feed} current="feed" />; }
