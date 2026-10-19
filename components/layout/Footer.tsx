import Link from "next/link";
import { direccionCompleta, local } from "@/data/local";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { CookieSettingsButton } from "./CookieBanner";
import { Logo } from "./Logo";
import styles from "./Footer.module.css";

const columnas = [
  {
    titulo: "Heladería",
    links: [
      { href: "/nosotros", label: "Nosotros" },
      { href: "/donde-estamos", label: "Dónde estamos" },
      { href: "/donde-estamos#horario", label: "Horario" },
    ],
  },
  {
    titulo: "Carta",
    links: [
      { href: "/#sabores", label: "Sabores de la semana" },
      { href: "/carta", label: "Carta completa" },
      { href: "/tarrinas", label: "Tarrinas para llevar" },
    ],
  },
];

const legales = [
  { href: "/legal/aviso-legal", label: "Aviso legal" },
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/cookies", label: "Cookies" },
];

/** Footer en ink · neón: lima · pastel: fresa (borde derretido superior). */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} on-dark`}>
      <svg
        className={styles.drip}
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 0h1200v12c-30 0-30 22-60 22s-28-18-58-18-30 26-62 26-30-24-60-24-32 12-62 12-28-20-58-20-32 28-64 28-30-26-60-26-30 14-60 14-30-18-60-18-32 24-62 24-30-22-60-22-30 10-60 10-30-16-60-16-32 26-62 26-30-24-60-24-30 12-60 12-30-20-60-20-32 22-62 22-30-18-60-18-30 8-60 8-30-14-60-14-32 20-60 20-30-16-60-16V0z" />
      </svg>

      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>
          <Logo />
          <p className="body">{local.eslogan}</p>
          <address className={`${styles.address} body`}>
            {direccionCompleta}
            <br />
            <a href={local.telefonoHref}>{local.telefono}</a>
          </address>
        </div>

        {columnas.map((col) => (
          <nav key={col.titulo} aria-label={col.titulo} className={styles.col}>
            <h2 className={`${styles.colTitle} label`}>{col.titulo}</h2>
            <ul className={styles.links}>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className={styles.col}>
          <h2 className={`${styles.colTitle} label`}>Redes</h2>
          <ul className={styles.social}>
            {local.redes.map((r) => (
              <li key={r.red}>
                <a
                  href={r.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${r.nombre} (${r.handle}), se abre en una pestaña nueva`}
                >
                  <SocialIcon red={r.red} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Legal" className={styles.col}>
          <h2 className={`${styles.colTitle} label`}>Legal</h2>
          <ul className={styles.links}>
            {legales.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton className={styles.link} />
            </li>
          </ul>
        </nav>
      </div>

      <div className={`${styles.bottom} container`}>
        <p className="label">
          © {year} {local.nombre} · Elda, Alicante
        </p>
        <p className="label">Aquí no se pide perdón, se pide otra bola.</p>
      </div>
    </footer>
  );
}
