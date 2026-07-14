import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Beloved Father",
  description: "A quiet space for the man who shaped Istiaque Ahamed's path into medicine.",
};

export default function FatherPage() {
  return (
    <main className="father-page">
      <nav className="father-nav">
        <Link href="/" aria-label="Return to the home page">IA</Link>
        <Link href="/">Return home</Link>
      </nav>
      <section>
        <p className="section-label">My beloved father</p>
        <h1>A different room.</h1>
        <p className="father-page-lead">
          My journey in medicine began with my father. He was a doctor, and the life he lived
          shaped the path I chose.
        </p>
        <p className="father-page-note">
          This space will hold memories, photographs, and words written in Istiaque’s own voice.
        </p>
      </section>
    </main>
  );
}
