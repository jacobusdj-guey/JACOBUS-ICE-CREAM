import type { ReactNode } from "react";
import { DripWord } from "./DripWord";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  kicker: string;
  /** Máx. 4 palabras (display-xl) */
  title: string;
  /** La única palabra en drip de la página (opcional) */
  drip?: string;
  intro?: ReactNode;
  tone?: "fresa" | "pistacho" | "lavanda" | "vainilla";
  /** Neón dominante del titular */
  neon?: "pink" | "lime";
}

/** Cabecera de página interior · un neón (bloque del titular) + un pastel (fondo). */
export function PageHeader({ kicker, title, drip, intro, tone = "vainilla", neon = "pink" }: PageHeaderProps) {
  return (
    <header className={`${styles.header} ${styles[tone]}`}>
      <div className={`${styles.inner} container`}>
        <p className="label">{kicker}</p>
        <div className={styles.titleWrap}>
          <h1 className={`${styles.title} ${styles[neon]} display-xl`}>{title}</h1>
          {drip && <DripWord className={styles.drip}>{drip}</DripWord>}
        </div>
        {intro && <div className={`${styles.intro} body`}>{intro}</div>}
      </div>
    </header>
  );
}
