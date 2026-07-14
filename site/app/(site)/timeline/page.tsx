import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.timeline, noIndex: true });
export default function TimelinePage() { return <RoutePlaceholder config={pageConfigs.timeline} />; }
