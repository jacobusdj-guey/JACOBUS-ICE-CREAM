"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./CookieBanner.module.css";

const STORAGE_KEY = "jacobus-cookies";
const OPEN_EVENT = "jacobus:abrir-cookies";

type Consent = "aceptadas" | "rechazadas";

function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "aceptadas" || v === "rechazadas" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Aviso de cookies. Hoy la web solo usa almacenamiento técnico (esta misma
 * preferencia). TODO: si se añade analítica, cargarla solo con "aceptadas".
 * Aceptar y rechazar tienen la misma prominencia (criterio AEPD).
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const save = (value: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* navegación privada: no pasa nada */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section className={styles.banner} role="region" aria-label="Aviso de cookies">
      <p className="body">
        <strong>Cookies, las justas.</strong> Usamos solo las necesarias para que la web funcione.
        Si algún día añadimos analítica, te preguntaremos aquí.{" "}
        <Link href="/legal/cookies">Más info</Link>
      </p>
      <div className={styles.actions}>
        <Button variant="secondary" onClick={() => save("rechazadas")}>
          Rechazar
        </Button>
        <Button variant="dark" onClick={() => save("aceptadas")}>
          Aceptar
        </Button>
      </div>
    </section>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      Configurar cookies
    </button>
  );
}
