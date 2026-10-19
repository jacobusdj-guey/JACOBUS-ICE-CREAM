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
  /** Ancho que ocupa la foto en pantalla (para servir el tamaño justo) */
  sizes?: string;
  /** Punto de encuadre; por defecto algo por encima del centro, donde suele estar la bola */
  focus?: string;
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
  sizes = "(max-width: 600px) 100vw, 320px",
  focus = "50% 30%",
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
          sizes={sizes}
          priority={priority}
          className={styles.img}
          style={{ objectPosition: focus }}
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
