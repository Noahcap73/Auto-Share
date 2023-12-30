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
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-80%)" },
          "50%": { transform: "none" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 700ms ease-in infinite",
      },
    },
  },
  plugins: [],
};
