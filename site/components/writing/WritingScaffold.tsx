import WritingNavigation from "@/components/writing/WritingNavigation";
import { EditorialEmptyState, WritingCrossLinks } from "@/components/writing/EditorialPrimitives";
import type { PageConfig } from "@/lib/page-config";

export default function WritingScaffold({
  config,
  current,
}: {
  config: PageConfig;
  current: "feed" | "blog" | "journal";
}) {
  return (
    <main className={`writing-scaffold writing-scaffold--${current}`}>
      <WritingNavigation />
      <header className="writing-scaffold__header">
        <p className="section-label">{config.eyebrow}</p>
        <h1>{config.title}</h1>
        <p>{config.intro}</p>
        <span>Dedicated page production · Session {config.session}</span>
      </header>
      <section className="writing-scaffold__body" aria-label={`${config.title} publishing status`}>
        <EditorialEmptyState
          description="Published work will appear here automatically from Sanity. No sample article, date, or opinion has been invented for the empty state."
          title={current === "feed" ? "The Feed is quiet for now." : `The first ${config.title} pieces are being prepared.`}
        />
        <WritingCrossLinks current={current} />
      </section>
    </main>
  );
}
