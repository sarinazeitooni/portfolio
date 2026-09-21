import type { ReactNode } from "react";

export function BulletList({
  items,
  accent = false,
}: {
  items: string[];
  accent?: boolean;
}) {
  return (
    <ul className="ds-bullet-list">
      {items.map((item) => (
        <li key={item}>
          <span
            className={`ds-bullet${accent ? " ds-bullet-accent" : ""}`}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="ds-eyebrow">{children}</p>;
}

export function Display({ children }: { children: ReactNode }) {
  return <h1 className="ds-display">{children}</h1>;
}

export function Body({
  children,
  large = false,
}: {
  children: ReactNode;
  large?: boolean;
}) {
  return (
    <p className={`ds-body${large ? " ds-body-lg" : ""}`.trim()}>{children}</p>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <h4 className="ds-label">{children}</h4>;
}
