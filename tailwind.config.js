/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./login.html",
    "./sharer.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        tall: { raw: "(min-height: 1000px)" },
        "3xl": { raw: "(min-width: 2000px)" },
      },
      animation: {
        "bounce-slow": "bounce 700ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
