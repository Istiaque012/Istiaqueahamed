import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  Button,
  EditorialImage,
  FilterButton,
  FormField,
  IconButton,
  SectionLabel,
  TextLink,
  TextReveal,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Visual Lab",
  robots: { index: false, follow: false },
};

const longTitle =
  "A doctor shaped by inheritance, interested in the systems around care, and willing to build what should exist.";

export default function VisualLabPage() {
  return (
    <main className="visual-lab">
      <section className="visual-lab__intro">
        <SectionLabel index="00">Private visual system</SectionLabel>
        <h1><TextReveal text="Cinematic editorial, reduced to its essentials." /></h1>
        <p>
          A working room for type, controls, image states, motion, long language, and the quieter
          Father register. This route is excluded from indexing.
        </p>
      </section>

      <section className="visual-lab__section">
        <SectionLabel index="01">Actions & focus</SectionLabel>
        <div className="visual-lab__row">
          <Button href="/">Primary action</Button>
          <Button variant="outline">Secondary action with deliberately long language</Button>
          <Button variant="quiet">Quiet action</Button>
          <IconButton aria-label="Open image detail">↗</IconButton>
          <TextLink href="/father">Enter the Father room</TextLink>
        </div>
        <div className="visual-lab__row" aria-label="Example filters">
          <FilterButton pressed>All</FilterButton>
          <FilterButton pressed={false}>Medicine</FilterButton>
          <FilterButton pressed={false}>Technology and systems</FilterButton>
        </div>
      </section>

      <section className="visual-lab__section visual-lab__media-grid">
        <Reveal>
          <EditorialImage
            alt="Placeholder for a defining portrait of Istiaque Ahamed"
            altGuidance="A vertical, calm portrait with direct eye contact and generous shadow"
            caption="Home portrait · 4:5 · personal photograph pending"
            label="Defining portrait"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <EditorialImage
            alt="Placeholder for an archival photograph of Istiaque Ahamed's father"
            altGuidance="A respectful family archive photograph, reproduced without decorative effects"
            caption="Father archive · original caption required"
            label="Father archive photograph"
            ratio="landscape"
          />
        </Reveal>
      </section>

      <section className="visual-lab__section visual-lab__register register-light">
        <SectionLabel index="02">Light editorial register</SectionLabel>
        <h2>{longTitle}</h2>
        <p>
          The light register appears only where narrative pacing benefits from contrast. It remains
          soft ivory rather than pure white, with ink-black text and the same disciplined hairlines.
        </p>
      </section>

      <section className="visual-lab__section visual-lab__register register-father">
        <SectionLabel index="03">Father register</SectionLabel>
        <blockquote>“The first reason I understood medicine as a life of service.”</blockquote>
        <p>More silence, slower rhythm, warmer paper, and no invented memory.</p>
      </section>

      <section className="visual-lab__section visual-lab__form">
        <SectionLabel index="04">Form language</SectionLabel>
        <FormField label="Your name" name="lab-name" placeholder="How should I address you?" required />
        <FormField
          error="Use a complete email address so a reply can reach you."
          label="Email"
          name="lab-email"
          placeholder="name@example.com"
          type="email"
        />
        <FormField
          hint="This is a private visual example; it does not submit anything."
          label="Message"
          name="lab-message"
          placeholder="A thoughtful note…"
          rows={5}
        />
        <Button disabled>Submit example</Button>
      </section>
    </main>
  );
}
