"use client";

import { useState } from "react";
import { categoriaLabels, type Categoria, type Sabor } from "@/data/sabores";
import { FlavorCard } from "./FlavorCard";
import styles from "./FlavorFilter.module.css";

type Filtro = Categoria | "todos";

const filtros: Filtro[] = ["todos", "cremas", "sorbetes", "veganos", "sin-azucar"];

/** Listado filtrable de la carta con filtros tipo chip. */
export function FlavorFilter({ sabores }: { sabores: Sabor[] }) {
  const [activo, setActivo] = useState<Filtro>("todos");

  const visibles = activo === "todos" ? sabores : sabores.filter((s) => s.categorias.includes(activo));

  const count = (f: Filtro) =>
    f === "todos" ? sabores.length : sabores.filter((s) => s.categorias.includes(f)).length;

  return (
    <div className={styles.wrap}>
      <div className={styles.filters} role="group" aria-label="Filtrar por categoría">
        {filtros.map((f) => (
          <button
            key={f}
            type="button"
            className={`${styles.chip} label`}
            aria-pressed={activo === f}
            onClick={() => setActivo(f)}
          >
            {f === "todos" ? "Todos" : categoriaLabels[f]}
            <span className={styles.count}>{count(f)}</span>
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">
        {visibles.length} sabores mostrados
      </p>

      <ul className={styles.grid}>
        {visibles.map((s) => (
          <li key={s.id} id={s.id} className={styles.item}>
            <FlavorCard sabor={s} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
