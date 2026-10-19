import { Button } from "@/components/ui/Button";
import { DripWord } from "@/components/ui/DripWord";
import { Photo } from "@/components/ui/Placeholder";
import { Sticker } from "@/components/ui/Sticker";
import styles from "./Hero.module.css";

/** Hero · neón: pink (bloque inclinado) · pastel: lavanda (foto/fondo). */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* TODO: foto real a sangre (mostrador, bola gigante, cola de gente…) */}
      <div className={styles.photo}>
        <Photo
          alt="Foto a sangre: helado artesano goteando sobre un cucurucho"
          tone="lavanda"
          rounded="none"
          className={styles.photoFill}
          priority
        />
      </div>

      <div className={`${styles.content} container`}>
        <div className={styles.block}>
          <DripWord as="p" className={styles.drip}>
            ¡Se derrite!
          </DripWord>
          <h1 id="hero-title" className="display-xl">
            Sabor sin permiso
          </h1>
          <p className={`${styles.subtitle} title`}>Helado artesano de Elda</p>
        </div>

        <div className={styles.actions}>
          <Button href="/carta" variant="dark">
            Ver la carta
          </Button>
          <Button href="/donde-estamos" variant="secondary">
            Dónde estamos
          </Button>
        </div>
      </div>

      <Sticker tone="lime" className={styles.sticker}>
        Hecho en Elda
      </Sticker>
    </section>
  );
}
