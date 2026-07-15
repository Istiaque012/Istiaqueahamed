import { WritingScaffold } from "@/components/writing";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";

export const metadata = createPageMetadata({ ...pageConfigs.journal, noIndex: true });
export default function JournalPage() { return <WritingScaffold config={pageConfigs.journal} current="journal" />; }
