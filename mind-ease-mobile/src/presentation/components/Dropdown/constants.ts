/**
 * Constantes do componente Dropdown
 */
export const DROPDOWN_DEFAULTS = {
  WIDTH: 320,
  MAX_HEIGHT: 384,
  OVERLAY_OFFSET: 1000,
  BADGE_POSITION: {
    TOP: 4,
    RIGHT: 4,
  },
} as const;

export const DROPDOWN_POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center",
} as const;

export const DROPDOWN_ALIGNMENTS = {
  TOP: "top",
  BOTTOM: "bottom",
} as const;
