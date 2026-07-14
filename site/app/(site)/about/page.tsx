import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.about, noIndex: true });
export default function AboutPage() { return <RoutePlaceholder config={pageConfigs.about} />; }
