import { TOKENS } from "@/presentation/constants";
import { cva } from "class-variance-authority";

export const messageVariants = cva("font-lexend-regular mt-1", {
  variants: {
    variant: {
      default: "text-neutral-930",
      error: "text-red-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const formColorByContrast = {
  low: {
    error: TOKENS.COLORS.red[600],
    default: TOKENS.COLORS.neutral[600],
  },
  moderate: {
    error: TOKENS.COLORS.red[850],
    default: TOKENS.COLORS.neutral[930],
  },
  high: {
    error: TOKENS.COLORS.red[950],
    default: TOKENS.COLORS.neutral[1000],
  },
};

