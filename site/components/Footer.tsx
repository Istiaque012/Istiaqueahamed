import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-hairline bg-surface-2">
      <div className="mx-auto max-w-content px-6 py-20 text-center md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Let&rsquo;s talk.
          </h2>
          <Link href="mailto:ias.ndc@gmail.com" className="btn-ghost">
            Get in touch →
          </Link>
          <p className="mt-8 text-xs text-faint">
            © {new Date().getFullYear()} Istiaque Ahamed · istiaqueahamed.com
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
