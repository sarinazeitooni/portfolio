import type { HTMLAttributes, ReactNode } from "react";

type TagProps = HTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
};

export function Tag({ children, className = "", ...props }: TagProps) {
  return (
    <li className={`ds-tag ${className}`.trim()} {...props}>
      {children}
    </li>
  );
}

export function TagList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
