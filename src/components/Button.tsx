import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps =
  | {
      children: ReactNode;
      to: string;
      href?: never;
      className?: string;
    }
  | {
      children: ReactNode;
      href: string;
      to?: never;
      className?: string;
      target?: "_blank";
      rel?: string;
    };

export function Button(props: ButtonProps) {
  const { children, className = "" } = props;

  const styles = `
    heading-4
    inline-block
    rounded-[5px]
    bg-primary
    px-3
    py-1.5
    desktop:px-3.5
    desktop:py-2
    ${className}
  `;

  const content = (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden="true">•</span>
      <span>{children}</span>
    </span>
  );

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      className={styles}
    >
      {content}
    </a>
  );
}
