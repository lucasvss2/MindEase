/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/app/styles/global.css"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EFF6FF",
          100: "#E4F0FF",
          200: "#DBEBFF",
          300: "#CADDFF",
          400: "#5EA4FE",
          500: "#3BA2F3",
          600: "#008FFF", 
        },
        red: {
          100: "#FFB1A3",
          500: "#F84929",
          700: "#C9280C",
          800: "#751721",
          900: "#6E2215",
        },
        yellow: {
          100: "#FFF2BC",
          600: "#9F8000",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F8F9F9",
          100: "#F5F5F5",
          200: "#EDEDED",
          250: "#E8E8E8",
          300: "#E3DDDD",
          400: "rgba(138, 133, 133, 0.09)",  
          600: "#79747E",
          800: "#3B3A3A",
          850: "#383838",
          900: "#2F2E2E",
          925: "#2B2B2B",
          930: "#292929",
          950: "#1B2332",
          1000: "#000000",
        },
        teal: {
          900: "#004239",
        },
      },
      boxShadow: {
        "sm": "0 4px 8px 0 rgba(88, 84, 84, 0.25)",
      },
      fontFamily: {
        "lexend-light": "Lexend_300Light",
        "lexend-regular": "Lexend_400Regular",
        "lexend-medium": "Lexend_500Medium",
        "lexend-semi-bold": "Lexend_600SemiBold",
        "lexend-bold": "Lexend_700Bold",
        "lexend-extra-bold": "Lexend_800ExtraBold",
        "lexend-black": "Lexend_900Black",
      }
    },
  },
  plugins: [],
}

