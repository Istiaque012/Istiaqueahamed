import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.bookshelf, noIndex: true });
export default function BookshelfPage() { return <RoutePlaceholder config={pageConfigs.bookshelf} />; }
