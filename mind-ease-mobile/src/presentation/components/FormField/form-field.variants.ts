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