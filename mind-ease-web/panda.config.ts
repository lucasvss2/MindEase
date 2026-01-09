import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { value: "#94d956" },
          darkGreen: { value: "#2b4c2b" },
          white: { value: "#ffffff" },
          text: { value: "#333333" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/shared/styles/styled-system",
});
