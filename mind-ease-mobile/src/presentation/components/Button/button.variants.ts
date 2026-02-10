import { cva } from "class-variance-authority";

export const buttonSizeVariants = cva("", {
  variants: {
    size: {
      sm: "font-normal",
      md: "font-medium",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

