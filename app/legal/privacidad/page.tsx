import type { Metadata } from "next";
import { local } from "@/data/local";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Privacidad" };

export default function PrivacidadPage() {
  return (
    <LegalPage title="Privacidad">
      <h2>Responsable del tratamiento</h2>
      <p className="body">
        {local.legal.titular} ({local.legal.nif}). Contacto: {local.email}.
      </p>

      <h2>Qué datos tratamos</h2>
      <p className="body">
        Esta web no tiene formularios ni registro. Solo tratamos los datos que tú nos envíes por
        email, teléfono o redes sociales para responder a tu consulta o preparar un encargo.
      </p>

      <h2>Base legal y conservación</h2>
      <p className="body">
        Tratamos tus datos con tu consentimiento o para gestionar tu encargo. Los conservamos solo
        el tiempo necesario para atenderte y cumplir las obligaciones legales.
      </p>

      <h2>Tus derechos</h2>
      <p className="body">
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y
        portabilidad escribiendo a {local.email}. También puedes reclamar ante la Agencia Española
        de Protección de Datos (aepd.es).
      </p>

      <h2>Servicios de terceros</h2>
      <p className="body">
        El mapa de “Dónde estamos” lo sirve Google Maps y los enlaces a redes sociales llevan a
        Instagram, TikTok y Facebook, que tienen sus propias políticas de privacidad.
      </p>
    </LegalPage>
  );
}
