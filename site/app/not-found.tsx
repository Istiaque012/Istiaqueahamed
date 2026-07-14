import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { SectionLabel, TextLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div id="top" className="public-site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Nav />
      <main className="not-found-page" id="main-content">
        <SectionLabel index="404">Page not found</SectionLabel>
        <h1>This path ends here.</h1>
        <p>The page may have moved, or it may still be waiting for its place in the story.</p>
        <TextLink href="/">Return to Home</TextLink>
      </main>
      <Footer />
    </div>
  );
}
