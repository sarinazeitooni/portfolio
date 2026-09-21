import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  as?: "article" | "div" | "section";
  interactive?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

export function Card({
  as = "div",
  interactive = false,
  className = "",
  children,
  ...props
}: CardProps) {
  const classes = `ds-card${interactive ? " ds-card-interactive" : ""} ${className}`.trim();

  if (as === "article") {
    return (
      <article className={classes} {...props}>
        {children}
      </article>
    );
  }

  if (as === "section") {
    return (
      <section className={classes} {...props}>
        {children}
      </section>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
