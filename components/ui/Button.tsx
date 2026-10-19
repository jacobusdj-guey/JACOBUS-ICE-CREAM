import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "dark";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;
type ButtonAsButton = BaseProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    "className" | "children"
  >;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Botón píldora con sombra sticker. Texto en label (MAYÚSCULAS).
 * - primary: neon-pink, reservado para la acción principal.
 * - secondary: crema con borde ink.
 * - dark: ink con texto crema (para fondos pastel o neón).
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", children, className } = props;
  const cls = [styles.button, styles[variant], "label", className]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    const { variant: _v, children: _c, className: _cn, href, ...rest } = props;
    const external = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { variant: _v, children: _c, className: _cn, href: _h, ...rest } = props;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
