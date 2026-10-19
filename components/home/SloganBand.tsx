import { Sticker } from "@/components/ui/Sticker";
import styles from "./SloganBand.module.css";

/** Banda de eslogan · neón: naranja (oferta) · pastel: vainilla. */
export function SloganBand() {
  return (
    <section className={styles.band} aria-label="Nuestro lema">
      <div className={`${styles.inner} container`}>
        <p className={`${styles.text} display-l`}>
          Aquí no se pide perdón, se pide otra bola.
        </p>
        {/* TODO: confirmar la oferta real o quitar el sticker */}
        <Sticker tone="orange" className={styles.sticker}>
          2x1 los martes
        </Sticker>
      </div>
    </section>
  );
}
