import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Photo } from "@/components/ui/Placeholder";
import { Sticker } from "@/components/ui/Sticker";
import styles from "../page-shell.module.css";
import local from "./nosotros.module.css";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "La historia de Jacobus Ice Cream: helado artesano hecho en Elda, sin pedir permiso.",
};

// TODO: fotos reales del obrador
const fotos = [
  { alt: "El obrador por la mañana, con las mantecadoras en marcha", tone: "pistacho" as const },
  { alt: "Manos removiendo crema de turrón en una cubeta", tone: "vainilla" as const },
  { alt: "Fresas recién lavadas sobre la mesa de trabajo", tone: "fresa" as const },
  { alt: "La vitrina llena antes de abrir", tone: "lavanda" as const },
];

const principios = [
  { titulo: "Cada día, desde cero", texto: "Nada de bases industriales. Leche, fruta, frutos secos y paciencia." },
  { titulo: "Producto de aquí", texto: "Turrón de Jijona, almendra de la Marina, fruta de la huerta cuando toca." },
  { titulo: "Sin pedir permiso", texto: "Si un sabor raro nos convence, sale a la vitrina. Si no gusta, se va." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        kicker="Nosotros"
        title="Helado serio, estética ruidosa"
        drip="¡Elda!"
        tone="fresa"
        neon="lime"
      />

      {/* neón: lima (titular) · pastel: fresa / fotos */}
      <section className={`${styles.section} container`} aria-labelledby="historia-titulo">
        <div className={styles.twoCol}>
          <div className={styles.stack}>
            <h2 id="historia-titulo" className="display-l underline-lime">
              La historia
            </h2>
            {/* TODO: historia real */}
            <p className="body">
              Jacobus nace en Elda con una idea simple: hacer el mejor helado artesano de la
              comarca y no parecerse a ninguna otra heladería. Vitrina de toda la vida, música
              alta y sabores que no piden perdón.
            </p>
            <p className="body">
              Cada mañana el obrador arranca temprano: se cuecen las cremas, se pela la fruta y se
              tuesta el pistacho. Lo que sale a la vitrina se ha hecho ese mismo día, a pocos metros
              de donde te lo comes.
            </p>
            <p className="body">
              Hecho en Elda. Derretido en tu mano.
            </p>
            <div>
              <Button href="/carta" variant="dark">
                Ver la carta
              </Button>
            </div>
          </div>
          <div className={local.featured}>
            <Photo alt="Retrato del equipo de Jacobus detrás del mostrador" ratio="4/3" tone="lavanda" />
            <Sticker className={local.sticker}>Desde Elda</Sticker>
          </div>
        </div>
      </section>

      {/* neón: pink (sticker) · pastel: vainilla */}
      <section className={`${styles.band} ${styles.bandVainilla}`} aria-labelledby="obrador-titulo">
        <div className={`${styles.stack} container`}>
          <h2 id="obrador-titulo" className="display-l">
            El obrador
          </h2>
          <ul className={local.gallery}>
            {fotos.map((f) => (
              <li key={f.alt}>
                <Photo alt={f.alt} ratio="1/1" tone={f.tone} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} container`} aria-labelledby="principios-titulo">
        <h2 id="principios-titulo" className="display-l underline-lime">
          Lo que no negociamos
        </h2>
        <ul className={styles.grid}>
          {principios.map((p) => (
            <li key={p.titulo} className={local.principle}>
              <h3 className="title">{p.titulo}</h3>
              <p className="body">{p.texto}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
