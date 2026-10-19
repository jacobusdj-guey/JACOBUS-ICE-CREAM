// Datos del local. TODO: sustituir todos los valores marcados con TODO por los reales.

export interface Horario {
  dia: string;
  horas: string; // "Cerrado" o "16:00 – 23:00"
}

export type RedSocial = "instagram" | "tiktok" | "facebook";

export const local = {
  nombre: "Jacobus Ice Cream",
  eslogan: "Hecho en Elda. Derretido en tu mano.",
  direccion: {
    calle: "Calle TODO, 00", // TODO: dirección exacta
    cp: "03600",
    ciudad: "Elda",
    provincia: "Alicante",
  },
  telefono: "600 000 000", // TODO
  telefonoHref: "tel:+34600000000", // TODO
  email: "hola@jacobusicecream.es", // TODO
  /** TODO: cambiar por la dirección exacta para que el mapa y "Cómo llegar" apunten al local */
  mapsQuery: "Elda, Alicante, España",
  // TODO: horario real
  horario: [
    { dia: "Lunes", horas: "Cerrado" },
    { dia: "Martes", horas: "16:00 – 22:30" },
    { dia: "Miércoles", horas: "16:00 – 22:30" },
    { dia: "Jueves", horas: "16:00 – 22:30" },
    { dia: "Viernes", horas: "16:00 – 00:00" },
    { dia: "Sábado", horas: "12:00 – 00:00" },
    { dia: "Domingo", horas: "12:00 – 22:30" },
  ] satisfies Horario[],
  // TODO: perfiles reales
  redes: [
    { red: "instagram", nombre: "Instagram", url: "https://www.instagram.com/", handle: "@jacobusicecream" },
    { red: "tiktok", nombre: "TikTok", url: "https://www.tiktok.com/", handle: "@jacobusicecream" },
    { red: "facebook", nombre: "Facebook", url: "https://www.facebook.com/", handle: "Jacobus Ice Cream" },
  ] satisfies { red: RedSocial; nombre: string; url: string; handle: string }[],
  // TODO: datos legales del titular
  legal: {
    titular: "TODO Nombre o razón social",
    nif: "TODO NIF/CIF",
  },
};

export const direccionCompleta = `${local.direccion.calle}, ${local.direccion.cp} ${local.direccion.ciudad} (${local.direccion.provincia})`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(local.mapsQuery)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(local.mapsQuery)}`;
