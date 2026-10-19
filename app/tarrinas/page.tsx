import type { Metadata } from "next";
import { local } from "@/data/local";
import { tarrinas } from "@/data/tarrinas";
import { TarrinaCard } from "@/components/flavors/TarrinaCard";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import styles from "../page-shell.module.css";

export const metadata: Metadata = {
  title: "Tarrinas para llevar",
  description: "Tarrinas y packs de helado artesano para llevar a casa desde Elda.",
};

const pasos = [
  { n: "1", titulo: "Elige formato", texto: "Tarrina de medio litro, de litro o un pack." },
  { n: "2", titulo: "Elige sabores", texto: "Los que haya en vitrina ese día. Te aconsejamos sin rodeos." },
  { n: "3", titulo: "A casa rápido", texto: "Te lo damos bien frío y aislado. El congelador hace el resto." },
];

export default function TarrinasPage() {
  const sueltas = tarrinas.filter((t) => t.tipo === "tarrina");
  const packs = tarrinas.filter((t) => t.tipo === "pack");

  return (
    <>
      <PageHeader
        kicker="Para llevar"
        title="Llévatelo a casa"
        tone="pistacho"
        intro={
          <p>
            Lo mismo que en la vitrina, pero en tu congelador. Para cumpleaños o cenas, encárgalo
            con 24 horas y lo tenemos listo.
          </p>
        }
      />

      {/* neón: pink (CTA) · pastel: tarjetas */}
      <section className={`${styles.section} container`} aria-labelledby="tarrinas-titulo">
        <h2 id="tarrinas-titulo" className="display-l underline-lime">
          Tarrinas
        </h2>
        <ul className={styles.grid}>
          {sueltas.map((t) => (
            <li key={t.id}>
              <TarrinaCard tarrina={t} />
            </li>
          ))}
        </ul>
      </section>

      {/* neón: naranja (ofertas) · pastel: vainilla */}
      <section className={`${styles.band} ${styles.bandVainilla}`} aria-labelledby="packs-titulo">
        <div className={`${styles.stack} container`}>
          <h2 id="packs-titulo" className="display-l">
            Packs
          </h2>
          <ul className={styles.grid}>
            {packs.map((t) => (
              <li key={t.id}>
                <TarrinaCard tarrina={t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} container`} aria-labelledby="como-titulo">
        <h2 id="como-titulo" className="display-l underline-lime">
          Cómo funciona
        </h2>
        <ol className={styles.grid}>
          {pasos.map((p) => (
            <li key={p.n} className={styles.stack}>
              <span className="display-l" aria-hidden="true">
                {p.n}
              </span>
              <h3 className="title">{p.titulo}</h3>
              <p className="body">{p.texto}</p>
            </li>
          ))}
        </ol>
        <div>
          {/* TODO: si hay pedidos online o WhatsApp, cambiar este enlace */}
          <Button href={local.telefonoHref}>Encarga por teléfono</Button>
        </div>
      </section>
    </>
  );
}
