import type { Metadata } from "next";
import { sabores } from "@/data/sabores";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { Button } from "@/components/ui/Button";
import { DripWord } from "@/components/ui/DripWord";
import { Sticker } from "@/components/ui/Sticker";
import { EtiquetaTag, Tag } from "@/components/ui/Tag";
import styles from "./styleguide.module.css";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const colores = [
  { token: "--color-crema", hex: "#fff6ec", uso: "Fondo de página por defecto", dark: false },
  { token: "--color-ink", hex: "#16121a", uso: "Texto principal; única tinta sobre neones y pasteles", dark: true },
  { token: "--color-ink-soft", hex: "#5a5160", uso: "Texto secundario", dark: true },
  { token: "--color-neon-pink", hex: "#ff2e93", uso: "Neón principal: bloques, stickers, botón primario", dark: false },
  { token: "--color-neon-lime", hex: "#c6ff1a", uso: "Subrayados, “NUEVO”, detalles sobre ink", dark: false },
  { token: "--color-neon-orange", hex: "#ff6b1a", uso: "Ofertas y avisos. Uso puntual", dark: false },
  { token: "--color-pastel-fresa", hex: "#ffc8dd", uso: "Tarjetas y fondos de sección", dark: false },
  { token: "--color-pastel-pistacho", hex: "#cdefc4", uso: "Tarjetas y fondos de sección", dark: false },
  { token: "--color-pastel-lavanda", hex: "#d9ccff", uso: "Tarjetas, “VEGANO”, “SIN GLUTEN”", dark: false },
  { token: "--color-pastel-vainilla", hex: "#fff0b3", uso: "Tarjetas y fondos de sección", dark: false },
];

const espacios = ["--space-4", "--space-8", "--space-16", "--space-32"];

const radios = [
  { token: "--radius-block", label: "4px · bloques" },
  { token: "--radius-card", label: "16px · tarjetas" },
  { token: "--radius-pill", label: "999px · píldoras" },
];

export default function StyleguidePage() {
  const ejemplo = sabores.find((s) => s.sticker) ?? sabores[0];
  const otros = sabores.filter((s) => s.id !== ejemplo.id).slice(0, 2);

  return (
    <div className={styles.page}>
      {/* Intro · neón: pink · pastel: vainilla */}
      <header className={styles.intro}>
        <div className="container">
          <p className="label">Jacobus Ice Cream · Sistema de diseño</p>
          <h1 className={`display-xl ${styles.introTitle}`}>Styleguide</h1>
          <p className="body">
            Todo lo que ves aquí sale de las variables de <code>app/globals.css</code>. Si un
            color no está en esta página, no existe.
          </p>
        </div>
      </header>

      {/* Colores · neón: lime (subrayado) · pastel: todos */}
      <section className={`${styles.section} container`} aria-labelledby="sg-colores">
        <h2 id="sg-colores" className={`display-l ${styles.h2}`}>
          Colores
        </h2>
        <ul className={styles.swatches}>
          {colores.map((c) => (
            <li key={c.token} className={styles.swatch}>
              <span
                className={styles.chip}
                style={{ background: `var(${c.token})` }}
                aria-hidden="true"
              />
              <span className={styles.swatchText}>
                <code className="label">{c.token}</code>
                <span className="label text-soft">{c.hex}</span>
                <span className="body">{c.uso}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.rule}>
          <p className="title">Regla del choque</p>
          <p className="body">
            Cada sección mezcla al menos un neón y un pastel. Un neón dominante por pieza, máximo
            dos. Sobre neones y pasteles, solo tinta ink. El rosa nunca va como texto pequeño sobre
            crema; el lima sobre crema solo como fondo con texto ink.
          </p>
        </div>
      </section>

      {/* Tipografía · neón: pink · pastel: fresa */}
      <section className={`${styles.section} ${styles.bandFresa}`} aria-labelledby="sg-tipos">
        <div className="container">
          <h2 id="sg-tipos" className={`display-l ${styles.h2}`}>
            Tipografía
          </h2>
          <dl className={styles.typeList}>
            <div className={styles.typeRow}>
              <dt className="label">display-xl · Dela Gothic One · 72/0.92 · máx. 4 palabras</dt>
              <dd className="display-xl">Sabor sin permiso</dd>
            </div>
            <div className={styles.typeRow}>
              <dt className="label">display-l · Dela Gothic One · 40/1 · títulos de sección</dt>
              <dd className="display-l">Sabores de la semana</dd>
            </div>
            <div className={styles.typeRow}>
              <dt className="label">drip · Rubik Wet Paint · 48 · UNA palabra por pieza</dt>
              <dd>
                <DripWord className={styles.dripSample}>¡Se derrite!</DripWord>
              </dd>
            </div>
            <div className={styles.typeRow}>
              <dt className="label">title · Space Grotesk bold · 22/28</dt>
              <dd className="title">Turrón de Jijona</dd>
            </div>
            <div className={styles.typeRow}>
              <dt className="label">body · Space Grotesk · 16/24</dt>
              <dd className="body">
                Aquí no se pide perdón, se pide otra bola. Hecho en Elda. Derretido en tu mano.
              </dd>
            </div>
            <div className={styles.typeRow}>
              <dt className="label">label · Space Grotesk bold · 12/16 · 0.08em · MAYÚSCULAS</dt>
              <dd className="label">Precio 3,50 € · Pide ya</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Botones · neón: pink · pastel: pistacho */}
      <section className={`${styles.section} container`} aria-labelledby="sg-botones">
        <h2 id="sg-botones" className={`display-l ${styles.h2}`}>
          Botones
        </h2>
        <div className={styles.demoGrid}>
          <div className={`${styles.demo} ${styles.demoCrema}`}>
            <p className="label">Sobre crema</p>
            <div className={styles.row}>
              <Button>Pide ya</Button>
              <Button variant="secondary">Ver la carta</Button>
            </div>
          </div>
          <div className={`${styles.demo} ${styles.demoPistacho}`}>
            <p className="label">Sobre pastel</p>
            <div className={styles.row}>
              <Button>Cómo llegar</Button>
              <Button variant="dark">Tarrinas</Button>
            </div>
          </div>
          <div className={`${styles.demo} ${styles.demoInk} on-dark`}>
            <p className="label">Sobre ink</p>
            <div className={styles.row}>
              <Button>Pide ya</Button>
              <Button variant="secondary">Nosotros</Button>
            </div>
          </div>
        </div>
        <p className="body text-soft">
          El rosa se reserva para la acción principal: un solo botón primario por bloque.
        </p>
      </section>

      {/* Etiquetas y sticker · neones: lime + orange · pastel: lavanda */}
      <section className={`${styles.section} ${styles.bandLavanda}`} aria-labelledby="sg-etiquetas">
        <div className="container">
          <h2 id="sg-etiquetas" className={`display-l ${styles.h2}`}>
            Etiquetas y stickers
          </h2>
          <div className={styles.row}>
            <EtiquetaTag etiqueta="nuevo" />
            <EtiquetaTag etiqueta="ultimas-bolas" />
            <EtiquetaTag etiqueta="sin-gluten" />
            <EtiquetaTag etiqueta="vegano" />
            <Tag>Leche</Tag>
            <Tag>Frutos secos</Tag>
          </div>
          <div className={`${styles.row} ${styles.stickers}`}>
            <Sticker>¡Nuevo!</Sticker>
            <Sticker tone="orange">2x1 hoy</Sticker>
            <Sticker tone="lime" size="s">
              Top ventas
            </Sticker>
          </div>
        </div>
      </section>

      {/* Tarjeta de sabor · neón: pink (sticker) · pastel: los de cada tarjeta */}
      <section className={`${styles.section} container`} aria-labelledby="sg-tarjeta">
        <h2 id="sg-tarjeta" className={`display-l ${styles.h2}`}>
          Tarjeta de sabor
        </h2>
        <div className={styles.cards}>
          <FlavorCard sabor={ejemplo} />
          {otros.map((s) => (
            <FlavorCard key={s.id} sabor={s} />
          ))}
        </div>
      </section>

      {/* Espaciado, radios y sombra · neón: lime · pastel: vainilla */}
      <section className={`${styles.section} ${styles.bandVainilla}`} aria-labelledby="sg-medidas">
        <div className="container">
          <h2 id="sg-medidas" className={`display-l ${styles.h2}`}>
            Medidas
          </h2>
          <div className={styles.demoGrid}>
            <div>
              <p className="title">Espaciado</p>
              <ul className={styles.spaces}>
                {espacios.map((t) => (
                  <li key={t} className={styles.spaceRow}>
                    <span
                      className={styles.spaceBar}
                      style={{ width: `var(${t})`, height: `var(${t})` }}
                      aria-hidden="true"
                    />
                    <code className="label">{t}</code>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="title">Radios</p>
              <ul className={styles.radii}>
                {radios.map((r) => (
                  <li key={r.token} className={styles.radiusItem}>
                    <span
                      className={styles.radiusBox}
                      style={{ borderRadius: `var(${r.token})` }}
                      aria-hidden="true"
                    />
                    <span className="label">{r.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="title">Sombra sticker</p>
              <div className={styles.shadowBox}>
                <code className="label">4px 4px 0 ink</code>
              </div>
              <p className="body text-soft">Prohibidas las sombras difusas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
