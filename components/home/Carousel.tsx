"use client";

import Link from "next/link";
import { Children, useRef, type ReactNode } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  id: string;
  title: string;
  kicker?: string;
  link?: { href: string; label: string; external?: boolean };
  /** Fondo de la sección: crema o un pastel */
  tone?: "crema" | "fresa" | "pistacho" | "lavanda" | "vainilla";
  /** Ancho de cada elemento: tarjeta normal o story vertical */
  itemSize?: "card" | "story";
  children: ReactNode;
}

/** Carrusel horizontal con scroll-snap. En escritorio añade flechas. */
export function Carousel({
  id,
  title,
  kicker,
  link,
  tone = "crema",
  itemSize = "card",
  children,
}: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: "smooth" });
  };

  const titleId = `${id}-titulo`;

  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`} aria-labelledby={titleId}>
      <div className={`${styles.head} container`}>
        <div className={styles.titles}>
          {kicker && <p className="label">{kicker}</p>}
          <h2 id={titleId} className="display-l underline-lime">
            {title}
          </h2>
        </div>
        <div className={styles.controls}>
          {link &&
            (link.external ? (
              <a href={link.href} className={`${styles.more} label`} target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link href={link.href} className={`${styles.more} label`}>
                {link.label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          <div className={styles.arrows}>
            <button type="button" className={styles.arrow} onClick={() => scroll(-1)} aria-label={`Anterior en ${title}`}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className={styles.arrow} onClick={() => scroll(1)} aria-label={`Siguiente en ${title}`}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={trackRef}
        className={`${styles.track} ${styles[itemSize]}`}
        tabIndex={0}
        aria-label={`${title}: desliza para ver más`}
      >
        {Children.map(children, (child) => (
          <li className={styles.item}>{child}</li>
        ))}
      </ul>
    </section>
  );
}
