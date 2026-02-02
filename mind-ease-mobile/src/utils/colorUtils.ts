/**
 * Clareia uma cor hex (mistura com branco).
 * Útil para contornos claros, highlights, etc.
 * @param hex - Cor em hex (#RGB ou #RRGGBB)
 * @param factor - Fator de mistura com branco (0–1). Maior = mais claro. Padrão 0.92
 */
export function lightenHex(hex: string, factor = 0.92): string {
  const clean = hex.replace(/^#/, "");
  const r =
    clean.length === 3
      ? parseInt(clean[0] + clean[0], 16)
      : parseInt(clean.slice(0, 2), 16);
  const g =
    clean.length === 3
      ? parseInt(clean[1] + clean[1], 16)
      : parseInt(clean.slice(2, 4), 16);
  const b =
    clean.length === 3
      ? parseInt(clean[2] + clean[2], 16)
      : parseInt(clean.slice(4, 6), 16);
  const R = Math.round(r + (255 - r) * factor)
    .toString(16)
    .padStart(2, "0");
  const G = Math.round(g + (255 - g) * factor)
    .toString(16)
    .padStart(2, "0");
  const B = Math.round(b + (255 - b) * factor)
    .toString(16)
    .padStart(2, "0");
  return `#${R}${G}${B}`;
}
