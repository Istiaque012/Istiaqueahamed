import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.father, noIndex: true });
export default function FatherPage() { return <RoutePlaceholder config={pageConfigs.father} />; }
