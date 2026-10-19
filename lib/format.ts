const priceFormatter = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** 3.5 → "3,50 €" (coma decimal y € detrás, con espacio fino no separable) */
export function formatPrice(value: number): string {
  return `${priceFormatter.format(value)} €`;
}
