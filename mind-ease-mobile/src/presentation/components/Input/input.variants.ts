import { cva } from 'class-variance-authority';

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
  }
);

