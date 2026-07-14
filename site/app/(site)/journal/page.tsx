import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.journal, noIndex: true });
export default function JournalPage() { return <RoutePlaceholder config={pageConfigs.journal} />; }
