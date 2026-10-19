// TODO: formatos y precios reales de tarrinas y packs para llevar.
import type { Pastel } from "./sabores";

export interface Tarrina {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: "tarrina" | "pack";
  formato: string;
  precio: number;
  pastel: Pastel;
  /** Oferta puntual → etiqueta naranja */
  oferta?: string;
  foto?: string;
}

export const tarrinas: Tarrina[] = [
  {
    id: "tarrina-500",
    nombre: "Tarrina mediana",
    descripcion: "Hasta 2 sabores. Para el sofá, la peli y nadie más.",
    tipo: "tarrina",
    formato: "500 ml",
    precio: 9.5,
    pastel: "fresa",
  },
  {
    id: "tarrina-1000",
    nombre: "Tarrina grande",
    descripcion: "Hasta 3 sabores. Compartir es opcional.",
    tipo: "tarrina",
    formato: "1 litro",
    precio: 16,
    pastel: "pistacho",
  },
  {
    id: "pack-fiesta",
    nombre: "Pack fiesta",
    descripcion: "4 tarrinas de 500 ml + cucuruchos. Para cumpleaños con ruido.",
    tipo: "pack",
    formato: "4 × 500 ml",
    precio: 34,
    pastel: "lavanda",
    oferta: "Ahorra 4 €",
  },
  {
    id: "pack-degustacion",
    nombre: "Pack degustación",
    descripcion: "6 mini tarrinas de sabores distintos. El tour completo.",
    tipo: "pack",
    formato: "6 × 120 ml",
    precio: 18,
    pastel: "vainilla",
  },
];
