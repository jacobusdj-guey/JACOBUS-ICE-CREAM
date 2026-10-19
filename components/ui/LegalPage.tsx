import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import styles from "./LegalPage.module.css";

/** Plantilla de texto legal. TODO: revisar todos los textos con un profesional. */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHeader kicker="Legal" title={title} tone="lavanda" neon="lime" />
      <article className={`${styles.legal} container`}>
        <p className={`${styles.todo} label`}>
          TODO: texto base orientativo. Completar los datos del titular y revisarlo antes de publicar.
        </p>
        {children}
      </article>
    </>
  );
}
