/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      light: "#F3E0EC",
      secondary: "#778da9",
      accent: "#415a77",
      dark: "#1b263b",
      black: "#0d1b2a",
    },
  },
  plugins: [],
};
