import styles from "./Sticker.module.css";

interface StickerProps {
  children: string;
  tone?: "pink" | "lime" | "orange";
  size?: "s" | "m";
  className?: string;
}

/** Sticker redondo (radio 999px) con sombra dura, ligeramente girado. */
export function Sticker({ children, tone = "pink", size = "m", className }: StickerProps) {
  return (
    <span
      className={[styles.sticker, styles[tone], styles[size], "label", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
