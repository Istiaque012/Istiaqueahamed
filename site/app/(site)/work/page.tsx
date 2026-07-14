import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.work, noIndex: true });
export default function WorkPage() { return <RoutePlaceholder config={pageConfigs.work} />; }
