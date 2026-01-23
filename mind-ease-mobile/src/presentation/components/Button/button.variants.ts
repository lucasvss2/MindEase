import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  "flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-blue-50 border border-transparent shadow-sm active:bg-blue-50 active:border-blue-400",
        dashed: "bg-neutral-0 border border-dashed border-blue-400 shadow-sm active:bg-neutral-250",
        outlined: "bg-blue-50 border border-blue-400 shadow-sm active:bg-blue-200",
        neutral: "bg-neutral-100 border border-neutral-300 shadow-sm active:bg-neutral-200",
        link: "bg-transparent",
      },
      size: {
        sm: "font-lexend-regular",
        md: "font-lexend-medium",
      },
      disabled: {
        true: "opacity-50 grayscale",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);