import type { ReactNode } from "react";
import type { Etiqueta } from "@/data/sabores";
import styles from "./Tag.module.css";

export type TagTone = "lime" | "orange" | "lavanda" | "outline";

const etiquetaConfig: Record<Etiqueta, { label: string; tone: TagTone }> = {
  nuevo: { label: "Nuevo", tone: "lime" },
  "ultimas-bolas": { label: "Últimas bolas", tone: "orange" },
  "sin-gluten": { label: "Sin gluten", tone: "lavanda" },
  vegano: { label: "Vegano", tone: "lavanda" },
};

interface TagProps {
  tone?: TagTone;
  children: ReactNode;
}

/** Etiqueta rectangular tipo cartel (radio 4px), texto label en ink. */
export function Tag({ tone = "outline", children }: TagProps) {
  return <span className={`${styles.tag} ${styles[tone]} label`}>{children}</span>;
}

/** Etiqueta a partir de un tipo de `data/sabores.ts`. */
export function EtiquetaTag({ etiqueta }: { etiqueta: Etiqueta }) {
  const { label, tone } = etiquetaConfig[etiqueta];
  return <Tag tone={tone}>{label}</Tag>;
}
