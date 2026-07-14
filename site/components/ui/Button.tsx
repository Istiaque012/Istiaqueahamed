"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "quiet";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};

export function Button({
  children,
  className = "",
  disabled = false,
  href,
  onClick,
  type = "button",
  variant = "solid",
}: ButtonProps) {
  const classes = `ui-button ui-button--${variant} ${className}`.trim();

  if (href && !disabled) {
    return (
      <Link className={classes} href={href}>
        <span>{children}</span>
        <span aria-hidden="true">↗</span>
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} type={type} onClick={onClick}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </button>
  );
}

type IconButtonProps = {
  "aria-label": string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function IconButton({ children, disabled, onClick, ...label }: IconButtonProps) {
  return (
    <button className="ui-icon-button" disabled={disabled} type="button" onClick={onClick} {...label}>
      {children}
    </button>
  );
}

export function TextLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link className="ui-text-link" href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
