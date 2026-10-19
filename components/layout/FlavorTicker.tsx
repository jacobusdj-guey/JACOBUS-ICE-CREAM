import Link from "next/link";
import { saboresDeHoy } from "@/data/sabores";
import { EtiquetaTag } from "@/components/ui/Tag";
import styles from "./FlavorTicker.module.css";

/**
 * Ticker de sabores del día, fijo bajo el header (el "marcador" de la heladería).
 * Neón: lima/naranja en las etiquetas · Pastel: vainilla de fondo.
 */
export function FlavorTicker() {
  return (
    <aside className={styles.ticker} aria-label="Sabores disponibles hoy">
      <p className={`${styles.badge} label`}>
        <span className={styles.dot} aria-hidden="true" />
        Hoy
      </p>
      <ul className={styles.track} tabIndex={0} aria-label="Lista de sabores de hoy, desliza para ver más">
        {saboresDeHoy.map((sabor) => (
          <li key={sabor.id}>
            <Link href={`/carta#${sabor.id}`} className={styles.chip}>
              <span className="label">{sabor.nombre}</span>
              {sabor.etiquetas.map((e) => (
                <EtiquetaTag key={e} etiqueta={e} />
              ))}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
