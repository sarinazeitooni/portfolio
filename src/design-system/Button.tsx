import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "ds-btn ds-btn-primary",
  ghost: "ds-btn ds-btn-ghost",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={cx(variantClass[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cx(variantClass[variant], className)} {...props}>
      {children}
    </a>
  );
}
