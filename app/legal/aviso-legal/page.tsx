import type { Metadata } from "next";
import { direccionCompleta, local } from "@/data/local";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Aviso legal" };

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal">
      <h2>Titular del sitio web</h2>
      <p className="body">
        En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE),
        te informamos de que este sitio pertenece a:
      </p>
      <ul className="body">
        <li>Titular: {local.legal.titular}</li>
        <li>NIF/CIF: {local.legal.nif}</li>
        <li>Domicilio: {direccionCompleta}</li>
        <li>Email: {local.email}</li>
        <li>Teléfono: {local.telefono}</li>
      </ul>

      <h2>Uso del sitio</h2>
      <p className="body">
        Esta web es informativa: carta, horario y ubicación de la heladería. Los precios y sabores
        pueden cambiar sin previo aviso según la producción del día.
      </p>

      <h2>Propiedad intelectual</h2>
      <p className="body">
        Textos, fotografías, logotipos y diseño son propiedad de {local.nombre} o se usan con
        permiso. No se pueden reproducir sin autorización.
      </p>

      <h2>Legislación aplicable</h2>
      <p className="body">
        Este aviso se rige por la legislación española. Para cualquier conflicto, las partes se
        someten a los juzgados y tribunales que correspondan conforme a la normativa vigente.
      </p>
    </LegalPage>
  );
}
