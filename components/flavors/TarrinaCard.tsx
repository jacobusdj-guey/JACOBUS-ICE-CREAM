import type { Tarrina } from "@/data/tarrinas";
import { formatPrice } from "@/lib/format";
import { Photo } from "@/components/ui/Placeholder";
import { Tag } from "@/components/ui/Tag";
import styles from "./FlavorCard.module.css";

/** Tarjeta de tarrina o pack: misma anatomía que la tarjeta de sabor. */
export function TarrinaCard({ tarrina, headingLevel: Heading = "h3" }: { tarrina: Tarrina; headingLevel?: "h2" | "h3" }) {
  return (
    <article className={`${styles.card} ${styles[tarrina.pastel]}`}>
      <Photo
        src={tarrina.foto}
        alt={`${tarrina.nombre} para llevar (${tarrina.formato})`}
        ratio="4/3"
        tone={tarrina.pastel}
      />
      <div className={styles.body}>
        <div className={styles.tags}>
          <Tag>{tarrina.tipo === "pack" ? "Pack" : "Tarrina"}</Tag>
          {tarrina.oferta && <Tag tone="orange">{tarrina.oferta}</Tag>}
        </div>
        <Heading className="title">{tarrina.nombre}</Heading>
        <p className="body">{tarrina.descripcion}</p>
        <div className={styles.footer}>
          <span className="label">{tarrina.formato}</span>
          <p className={`${styles.price} label`}>
            <span className="visually-hidden">Precio: </span>
            {formatPrice(tarrina.precio)}
          </p>
        </div>
      </div>
    </article>
  );
}
