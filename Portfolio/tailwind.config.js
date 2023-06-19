/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      light: "#f1faee",
      secondary: "a8dadc",
      accent: "#457b9d",
      dark: "#1d3557",
      black: "#000000",
    },
  },
  plugins: [],
};
