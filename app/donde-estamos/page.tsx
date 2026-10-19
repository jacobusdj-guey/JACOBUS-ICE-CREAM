import type { Metadata } from "next";
import { direccionCompleta, local, mapsDirectionsUrl, mapsEmbedUrl } from "@/data/local";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Tag } from "@/components/ui/Tag";
import styles from "../page-shell.module.css";
import own from "./donde.module.css";

export const metadata: Metadata = {
  title: "Dónde estamos",
  description: `Dirección y horario de ${local.nombre} en Elda (Alicante).`,
};

export default function DondeEstamosPage() {
  return (
    <>
      <PageHeader
        kicker="Dónde estamos"
        title="Ven a por otra"
        tone="vainilla"
        intro={<p>En pleno Elda. Si hay cola, es buena señal.</p>}
      />

      {/* neón: pink (CTA) · pastel: pistacho (tarjeta de datos) */}
      <section className={`${styles.section} container`} aria-label="Dirección, horario y mapa">
        <div className={styles.twoCol}>
          <div className={own.info}>
            <div className={styles.stack}>
              <h2 className="display-l underline-lime">Dirección</h2>
              {/* TODO: dirección exacta en data/local.ts */}
              <address className={`${own.address} title`}>{direccionCompleta}</address>
              <p className="body">
                Teléfono: <a href={local.telefonoHref}>{local.telefono}</a>
                <br />
                Email: <a href={`mailto:${local.email}`}>{local.email}</a>
              </p>
              <div id="como-llegar" className={own.cta}>
                <Button href={mapsDirectionsUrl}>Cómo llegar</Button>
              </div>
            </div>

            <div id="horario" className={own.schedule}>
              <h2 className="display-l">Horario</h2>
              {/* TODO: horario real en data/local.ts */}
              <table className={own.table}>
                <caption className="visually-hidden">Horario de apertura por días</caption>
                <tbody>
                  {local.horario.map((h) => (
                    <tr key={h.dia}>
                      <th scope="row" className="label">
                        {h.dia}
                      </th>
                      <td className="body">
                        {h.horas === "Cerrado" ? <Tag tone="orange">Cerrado</Tag> : h.horas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={own.map}>
            <iframe
              src={mapsEmbedUrl}
              title={`Mapa de ${local.nombre} en Google Maps`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
