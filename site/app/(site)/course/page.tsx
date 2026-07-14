import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.course, noIndex: true });
export default function CoursePage() { return <RoutePlaceholder config={pageConfigs.course} />; }
