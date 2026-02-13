import { TOKENS } from "@/presentation/constants";
import { cva } from "class-variance-authority";

export const inputContainerVariants = cva(
  "flex-row items-center border rounded-md bg-neutral-0",
  {
    variants: {
      variant: {
        default: "border-neutral-300 focus:border-blue-400",
        error: "border-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const inputColorsVariant = {
  low: {
    default: TOKENS.COLORS.neutral[600],
    error: TOKENS.COLORS.red[600],
  },
  moderate: {
    default: TOKENS.COLORS.neutral[800],
    error: TOKENS.COLORS.red[850],
  },
  high: {
    default: TOKENS.COLORS.neutral[1000],
    error: TOKENS.COLORS.red[950],
  },
};

