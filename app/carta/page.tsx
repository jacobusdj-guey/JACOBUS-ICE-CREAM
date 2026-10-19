import type { Metadata } from "next";
import { sabores } from "@/data/sabores";
import { FlavorFilter } from "@/components/flavors/FlavorFilter";
import { PageHeader } from "@/components/ui/PageHeader";
import styles from "../page-shell.module.css";

export const metadata: Metadata = {
  title: "Carta",
  description: "Cremas, sorbetes, veganos y sin azúcar. Toda la carta de Jacobus Ice Cream en Elda.",
};

export default function CartaPage() {
  return (
    <>
      <PageHeader
        kicker="La carta"
        title="Elige sin miedo"
        drip="¡Ñam!"
        tone="lavanda"
        intro={
          <p>
            Cremas, sorbetes, veganos y sin azúcar. Todo se hace cada mañana en el obrador, así que
            la vitrina cambia. Lo que ves en el ticker de arriba es lo que hay hoy.
          </p>
        }
      />
      {/* neón: lima (filtro activo) · pastel: tarjetas */}
      <section className={`${styles.section} container`} aria-label="Sabores">
        <FlavorFilter sabores={sabores} />
        <p className="body text-soft">
          Precio por bola. ¿Alergias? Pregúntanos siempre en el mostrador: trabajamos con frutos
          secos, leche, huevo y gluten en el mismo obrador.
        </p>
      </section>
    </>
  );
}
