import type { ReactNode } from "react";

export function SectionLabel({ children, index }: { children: ReactNode; index?: string }) {
  return (
    <p className="ui-section-label">
      {index ? <span>{index}</span> : null}
      {children}
    </p>
  );
}
