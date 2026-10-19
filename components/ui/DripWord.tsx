import type { ElementType } from "react";

interface DripWordProps {
  /** UNA sola palabra o exclamación por pieza. Nunca párrafos ni precios. */
  children: string;
  as?: ElementType;
  className?: string;
}

export function DripWord({ children, as: Tag = "span", className }: DripWordProps) {
  if (process.env.NODE_ENV !== "production" && children.trim().split(/\s+/).length > 2) {
    console.warn(`[DripWord] "${children}" tiene demasiadas palabras: drip es para UNA palabra.`);
  }
  return <Tag className={["drip", className].filter(Boolean).join(" ")}>{children}</Tag>;
}
