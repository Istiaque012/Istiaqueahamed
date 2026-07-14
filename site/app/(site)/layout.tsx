import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import ScrollManager from "@/components/ScrollManager";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="public-site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Nav />
      <ScrollManager />
      <div id="main-content" tabIndex={-1}>
        <PageTransition>{children}</PageTransition>
      </div>
      <Footer />
    </div>
  );
}
