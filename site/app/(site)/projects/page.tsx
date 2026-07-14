import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.projects, noIndex: true });
export default function ProjectsPage() { return <RoutePlaceholder config={pageConfigs.projects} />; }
