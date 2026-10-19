// TODO: sustituir por la carta real. Este archivo es la única fuente de sabores:
// edítalo sin tocar componentes.

export type Categoria = "cremas" | "sorbetes" | "veganos" | "sin-azucar";

export type Pastel = "fresa" | "pistacho" | "lavanda" | "vainilla";

/** Etiquetas del ticker y de las tarjetas. */
export type Etiqueta = "nuevo" | "ultimas-bolas" | "sin-gluten" | "vegano";

export type Alergeno =
  | "leche"
  | "huevo"
  | "frutos-secos"
  | "cacahuete"
  | "soja"
  | "gluten"
  | "sesamo";

export interface Sabor {
  id: string;
  nombre: string;
  descripcion: string;
  categorias: Categoria[];
  pastel: Pastel;
  /** Precio por bola en euros */
  precio: number;
  alergenos: Alergeno[];
  etiquetas: Etiqueta[];
  /** Disponible hoy → aparece en el ticker */
  hoy: boolean;
  /** Sale en "Sabores de la semana" */
  semana: boolean;
  /** Texto corto del sticker redondo (opcional, máx. ~8 caracteres por línea) */
  sticker?: string;
  /** TODO: ruta a la foto real en /public/sabores/… */
  foto?: string;
}

export const categoriaLabels: Record<Categoria, string> = {
  cremas: "Cremas",
  sorbetes: "Sorbetes",
  veganos: "Veganos",
  "sin-azucar": "Sin azúcar",
};

export const alergenoLabels: Record<Alergeno, string> = {
  leche: "Leche",
  huevo: "Huevo",
  "frutos-secos": "Frutos secos",
  cacahuete: "Cacahuete",
  soja: "Soja",
  gluten: "Gluten",
  sesamo: "Sésamo",
};

export const sabores: Sabor[] = [
  {
    id: "turron-de-jijona",
    nombre: "Turrón de Jijona",
    descripcion: "El de toda la vida, pero con la música más alta.",
    categorias: ["cremas"],
    pastel: "vainilla",
    precio: 3.5,
    alergenos: ["leche", "frutos-secos", "huevo"],
    etiquetas: [],
    hoy: true,
    semana: true,
    sticker: "Top ventas",
    foto: "/sabores/turron-de-jijona.jpg",
  },
  {
    id: "pistacho-salvaje",
    nombre: "Pistacho salvaje",
    descripcion: "Pistacho tostado y una pizca de sal. Sin colorantes, sin excusas.",
    categorias: ["cremas"],
    pastel: "pistacho",
    precio: 3.8,
    alergenos: ["leche", "frutos-secos"],
    etiquetas: ["sin-gluten"],
    hoy: true,
    semana: true,
    foto: "/sabores/pistacho-salvaje.jpg",
  },
  {
    id: "fresa-punk",
    nombre: "Fresa punk",
    descripcion: "Fresas de temporada con un golpe de pimienta rosa.",
    categorias: ["sorbetes", "veganos"],
    pastel: "fresa",
    precio: 3.5,
    alergenos: [],
    etiquetas: ["vegano", "nuevo"],
    hoy: true,
    semana: true,
    sticker: "¡Nuevo!",
    foto: "/sabores/fresa-punk.jpg",
  },
  {
    id: "lavanda-y-miel",
    nombre: "Lavanda y miel",
    descripcion: "Floral, raro y adictivo. Como un concierto en un jardín.",
    categorias: ["cremas"],
    pastel: "lavanda",
    precio: 3.8,
    alergenos: ["leche"],
    etiquetas: ["sin-gluten", "ultimas-bolas"],
    hoy: true,
    semana: true,
  },
  {
    id: "chocolate-negro-70",
    nombre: "Chocolate negro 70 %",
    descripcion: "Intenso y sin azúcar añadido. Para los que no piden perdón.",
    categorias: ["sin-azucar", "veganos"],
    pastel: "lavanda",
    precio: 3.8,
    alergenos: ["soja"],
    etiquetas: ["vegano", "sin-gluten"],
    hoy: true,
    semana: false,
    foto: "/sabores/chocolate-negro-70.jpg",
  },
  {
    id: "limon-de-elda",
    nombre: "Limón de la huerta",
    descripcion: "Sorbete ácido que despierta a todo el barrio.",
    categorias: ["sorbetes", "veganos"],
    pastel: "vainilla",
    precio: 3.2,
    alergenos: [],
    etiquetas: ["vegano", "sin-gluten"],
    hoy: true,
    semana: false,
  },
  {
    id: "membrillo",
    nombre: "Membrillo",
    // TODO: confirmar receta, alérgenos y precio
    descripcion: "El dulce de la abuela convertido en helado. Nadie lo pide la primera vez; todos repiten.",
    categorias: ["cremas"],
    pastel: "vainilla",
    precio: 3.8,
    alergenos: ["leche"],
    etiquetas: ["nuevo", "sin-gluten"],
    hoy: true,
    semana: true,
    sticker: "Rareza",
    foto: "/sabores/membrillo.jpg",
  },
  {
    id: "galleta-rota",
    nombre: "Galleta rota",
    descripcion: "Crema de vainilla con trozos de galleta casera. Ruido crujiente.",
    categorias: ["cremas"],
    pastel: "fresa",
    precio: 3.5,
    alergenos: ["leche", "gluten", "huevo"],
    etiquetas: ["nuevo"],
    hoy: false,
    semana: true,
  },
  {
    id: "yogur-sin-azucar",
    nombre: "Yogur griego sin azúcar",
    descripcion: "Cremoso, ácido y endulzado solo con fruta.",
    categorias: ["cremas", "sin-azucar"],
    pastel: "pistacho",
    precio: 3.5,
    alergenos: ["leche"],
    etiquetas: ["sin-gluten"],
    hoy: false,
    semana: false,
    foto: "/sabores/yogur-sin-azucar.jpg",
  },
  {
    id: "mango-chile",
    nombre: "Mango y chile",
    descripcion: "Dulce primero, picante después. Te avisamos.",
    categorias: ["sorbetes", "veganos"],
    pastel: "vainilla",
    precio: 3.5,
    alergenos: [],
    etiquetas: ["vegano", "ultimas-bolas"],
    hoy: true,
    semana: false,
  },
];

export const saboresDeHoy = sabores.filter((s) => s.hoy);
export const saboresDeLaSemana = sabores.filter((s) => s.semana);
export const novedades = sabores.filter((s) => s.etiquetas.includes("nuevo"));
