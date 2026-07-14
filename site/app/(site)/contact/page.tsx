import RoutePlaceholder from "@/components/RoutePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.contact, noIndex: true });
export default function ContactPage() { return <RoutePlaceholder config={pageConfigs.contact} />; }
