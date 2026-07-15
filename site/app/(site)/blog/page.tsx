import { WritingScaffold } from "@/components/writing";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.blog, noIndex: true });
export default function BlogPage() { return <WritingScaffold config={pageConfigs.blog} current="blog" />; }
