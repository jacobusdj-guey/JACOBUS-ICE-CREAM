// TODO: enlazar vídeos reales de Instagram/TikTok y añadir su portada en /public/redes/…
import type { Pastel } from "./sabores";
import type { RedSocial } from "./local";

export interface PostRedes {
  id: string;
  red: Extract<RedSocial, "instagram" | "tiktok">;
  titulo: string;
  url: string;
  pastel: Pastel;
  portada?: string;
}

export const posts: PostRedes[] = [
  { id: "obrador", red: "instagram", titulo: "Así se hace el turrón", url: "https://www.instagram.com/", pastel: "vainilla" },
  { id: "nuevo-fresa", red: "tiktok", titulo: "Fresa punk, primera bola", url: "https://www.tiktok.com/", pastel: "fresa" },
  { id: "verano", red: "instagram", titulo: "Cola un sábado a las 23:00", url: "https://www.instagram.com/", pastel: "lavanda" },
  { id: "pistacho", red: "tiktok", titulo: "ASMR de pistacho", url: "https://www.tiktok.com/", pastel: "pistacho" },
  { id: "equipo", red: "instagram", titulo: "El equipo, sin filtros", url: "https://www.instagram.com/", pastel: "fresa" },
];
