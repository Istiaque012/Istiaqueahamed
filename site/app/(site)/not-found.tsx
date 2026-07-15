import { SectionLabel, TextLink } from "@/components/ui";

export default function SiteNotFound() {
  return (
    <main className="not-found-page">
      <SectionLabel index="404">Page not found</SectionLabel>
      <h1>This path ends here.</h1>
      <p>The page may have moved, or it may still be waiting for its place in the story.</p>
      <TextLink href="/">Return to Home</TextLink>
    </main>
  );
}
