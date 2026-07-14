import { EditorialImage, SectionLabel, TextLink } from "@/components/ui";
import type { PageConfig } from "@/lib/page-config";

export default function RoutePlaceholder({ config }: { config: PageConfig }) {
  return (
    <main className={`route-placeholder route-placeholder--${config.tone ?? "dark"}`}>
      <section className="route-placeholder__hero">
        <SectionLabel index={config.session}>{config.eyebrow}</SectionLabel>
        <h1 className={config.title.length >= 12 ? "route-placeholder__title--compact" : undefined}>
          {config.title}
        </h1>
        <p>{config.intro}</p>
        <div className="route-placeholder__status">
          <span>Page in production</span>
          <span>Planned session {config.session}</span>
        </div>
      </section>

      <section className="route-placeholder__scene">
        {config.image ? (
          <EditorialImage
            alt={`Placeholder for ${config.image.label.toLowerCase()}`}
            altGuidance={config.image.altGuidance}
            caption="Personal photography remains pending and non-blocking."
            label={config.image.label}
            ratio={config.image.ratio}
          />
        ) : (
          <div className="route-placeholder__proof" aria-hidden="true">
            <span>{config.session}</span>
            <p>{config.eyebrow}</p>
          </div>
        )}
        <div>
          <SectionLabel>What happens next</SectionLabel>
          <h2>The final room is already reserved.</h2>
          <p>
            The route, metadata, navigation, responsive shell, and content register are live. Its
            dedicated production session will replace this honest scaffold with approved content.
          </p>
          <TextLink href="/">Return to Home</TextLink>
        </div>
      </section>
    </main>
  );
}

export function DetailPlaceholder({ kind, slug }: { kind: string; slug: string }) {
  const title = slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <main className="detail-placeholder">
      <SectionLabel>{kind} detail route</SectionLabel>
      <h1>{title || "Untitled draft"}</h1>
      <p>
        This address is ready for its future published document. Until approved content exists,
        the route stays out of search indexes and invents nothing.
      </p>
      <TextLink href={`/${kind.toLowerCase()}`}>Return to {kind}</TextLink>
    </main>
  );
}
