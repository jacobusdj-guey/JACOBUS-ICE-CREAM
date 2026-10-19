import Image from "next/image";
import styles from "./Placeholder.module.css";

interface PhotoProps {
  /** TODO: ruta real en /public. Si no hay, se muestra un hueco marcado. */
  src?: string;
  alt: string;
  ratio?: "1/1" | "4/3" | "3/4" | "9/16" | "16/9";
  tone?: "fresa" | "pistacho" | "lavanda" | "vainilla" | "ink";
  rounded?: "card" | "block" | "none";
  priority?: boolean;
  className?: string;
}

/**
 * Foto con fallback. Mientras no haya fotos reales, pinta un bloque
 * rayado con "FOTO · TODO" y el alt como pista de lo que va ahí.
 */
export function Photo({
  src,
  alt,
  ratio = "4/3",
  tone = "vainilla",
  rounded = "card",
  priority,
  className,
}: PhotoProps) {
  const cls = [styles.frame, styles[tone], styles[`r-${rounded}`], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
          priority={priority}
          className={styles.img}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={alt}>
          <span className="label">Foto · TODO</span>
          <span className={`${styles.hint} label`} aria-hidden="true">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
