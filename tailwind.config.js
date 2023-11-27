/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./login.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        tall: { raw: "(min-height: 800px)" },
      },
    },
  },
  plugins: [],
};
