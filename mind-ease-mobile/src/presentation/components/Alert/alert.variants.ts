import { TOKENS } from "@/presentation/constants";

export const alertVariants = {
  low: {
    info: {
      borderColor: TOKENS.COLORS.blue[350],
      backgroundColor: TOKENS.COLORS.blue[125],
      color: TOKENS.COLORS.blue[700],
    },
    warning: {
      borderColor: TOKENS.COLORS.yellow[200],
      backgroundColor: TOKENS.COLORS.yellow[50],
      color: TOKENS.COLORS.yellow[800],
    },
    danger: {
      borderColor: TOKENS.COLORS.red[150],
      backgroundColor: TOKENS.COLORS.red[50],
      color: TOKENS.COLORS.red[750],
    },
  },
  moderate: {
    info: {
      borderColor: TOKENS.COLORS.blue[550],
      backgroundColor: TOKENS.COLORS.blue[250],
      color: TOKENS.COLORS.blue[950],
    },
    warning: {
      borderColor: TOKENS.COLORS.yellow[650],
      backgroundColor: TOKENS.COLORS.yellow[150],
      color: TOKENS.COLORS.yellow[950],
    },
    danger: {
      borderColor: TOKENS.COLORS.red[515],
      backgroundColor: TOKENS.COLORS.red[200],
      color: TOKENS.COLORS.red[925],
    },
  },
  high: {
    info: {
      borderColor: TOKENS.COLORS.blue[600],
      backgroundColor: TOKENS.COLORS.blue[300],
      color: TOKENS.COLORS.neutral[930],
    },
    warning: {
      borderColor: TOKENS.COLORS.yellow[200],
      backgroundColor: TOKENS.COLORS.yellow[50],
      color: TOKENS.COLORS.yellow[800],
    },
    danger: {
      borderColor: TOKENS.COLORS.red[500],
      backgroundColor: TOKENS.COLORS.red[100],
      color: TOKENS.COLORS.neutral[1000],
    },
  },
};

