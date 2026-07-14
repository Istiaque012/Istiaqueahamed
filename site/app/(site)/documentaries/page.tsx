import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.documentaries, noIndex: true });
export default function DocumentariesPage() { return <RoutePlaceholder config={pageConfigs.documentaries} />; }
