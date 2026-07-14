import Link from "next/link";
import { footerNavigation, socialLinks } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="global-footer__intro">
        <p className="global-footer__name">Istiaque Ahamed</p>
        <p>Medical doctor, public health professional, and healthcare systems builder.</p>
        <Link href="/contact">Start a thoughtful conversation <span aria-hidden="true">↗</span></Link>
      </div>

      <div className="global-footer__directory" aria-label="Site directory">
        {footerNavigation.map((group) => (
          <div key={group.label}>
            <p>{group.label}</p>
            {group.items.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        ))}
      </div>

      <div className="global-footer__base">
        <p>© {new Date().getFullYear()} Istiaque Ahamed</p>
        <div>
          {socialLinks.map((item) => (
            <Link href={item.href} key={item.label} rel="me noreferrer" target="_blank">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
