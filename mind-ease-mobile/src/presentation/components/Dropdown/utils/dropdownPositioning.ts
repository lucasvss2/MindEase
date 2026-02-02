import { DROPDOWN_POSITIONS, DROPDOWN_ALIGNMENTS } from "../constants";

export type DropdownPosition = typeof DROPDOWN_POSITIONS[keyof typeof DROPDOWN_POSITIONS];
export type DropdownAlignment = typeof DROPDOWN_ALIGNMENTS[keyof typeof DROPDOWN_ALIGNMENTS];

export function getPositionClasses(position: DropdownPosition): string {
  const positionMap: Record<DropdownPosition, string> = {
    [DROPDOWN_POSITIONS.LEFT]: "left-0",
    [DROPDOWN_POSITIONS.RIGHT]: "right-0",
    [DROPDOWN_POSITIONS.CENTER]: "left-1/2 -translate-x-1/2",
  };

  return positionMap[position];
}

export function getAlignmentClasses(alignment: DropdownAlignment): string {
  const alignmentMap: Record<DropdownAlignment, string> = {
    [DROPDOWN_ALIGNMENTS.TOP]: "bottom-12",
    [DROPDOWN_ALIGNMENTS.BOTTOM]: "top-12",
  };

  return alignmentMap[alignment];
}
