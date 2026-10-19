import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/layout/CookieBanner";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <LegalPage title="Cookies">
      <h2>Qué usamos</h2>
      <p className="body">
        Esta web solo guarda en tu navegador una preferencia técnica: si has aceptado o rechazado
        el aviso de cookies (clave <code>jacobus-cookies</code>). No usamos cookies de analítica ni
        de publicidad.
      </p>

      <h2>Terceros</h2>
      <p className="body">
        El mapa de Google Maps de la página “Dónde estamos” puede instalar sus propias cookies
        cuando lo cargas. Consulta la política de Google para más información.
      </p>

      <h2>Cambiar tu elección</h2>
      <p className="body">
        Puedes volver a abrir el aviso cuando quieras: <CookieSettingsButton />
      </p>
      <p className="body">
        También puedes borrar las cookies y datos del sitio desde la configuración de tu navegador.
      </p>
    </LegalPage>
  );
}
