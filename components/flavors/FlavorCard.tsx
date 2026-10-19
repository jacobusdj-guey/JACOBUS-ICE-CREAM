import { alergenoLabels, type Sabor } from "@/data/sabores";
import { formatPrice } from "@/lib/format";
import { Photo } from "@/components/ui/Placeholder";
import { Sticker } from "@/components/ui/Sticker";
import { EtiquetaTag, Tag } from "@/components/ui/Tag";
import styles from "./FlavorCard.module.css";

interface FlavorCardProps {
  sabor: Sabor;
  headingLevel?: "h2" | "h3" | "h4";
}

/** Tarjeta de sabor: fondo pastel, foto, nombre, descripción, alérgenos, precio y sticker opcional. */
export function FlavorCard({ sabor, headingLevel: Heading = "h3" }: FlavorCardProps) {
  return (
    <article className={`${styles.card} ${styles[sabor.pastel]}`}>
      {sabor.sticker && (
        <Sticker size="s" className={styles.sticker}>
          {sabor.sticker}
        </Sticker>
      )}

      <Photo
        src={sabor.foto}
        alt={`Bola de helado de ${sabor.nombre.toLowerCase()}`}
        ratio="4/3"
        tone={sabor.pastel}
        focus={sabor.encuadre}
      />

      <div className={styles.body}>
        {sabor.etiquetas.length > 0 && (
          <div className={styles.tags}>
            {sabor.etiquetas.map((e) => (
              <EtiquetaTag key={e} etiqueta={e} />
            ))}
          </div>
        )}

        <Heading className="title">{sabor.nombre}</Heading>
        <p className="body">{sabor.descripcion}</p>

        <div className={styles.footer}>
          <div className={styles.allergens}>
            <span className="visually-hidden">Alérgenos:</span>
            {sabor.alergenos.length === 0 ? (
              <Tag>Sin alérgenos</Tag>
            ) : (
              sabor.alergenos.map((a) => <Tag key={a}>{alergenoLabels[a]}</Tag>)
            )}
          </div>
          <p className={`${styles.price} label`}>
            <span className="visually-hidden">Precio por bola: </span>
            {formatPrice(sabor.precio)}
          </p>
        </div>
      </div>
    </article>
  );
}
