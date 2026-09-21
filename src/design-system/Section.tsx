import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`ds-container ds-section ${className}`.trim()}>
      {title ? <h2 className="ds-section-title">{title}</h2> : null}
      {children}
    </section>
  );
}
