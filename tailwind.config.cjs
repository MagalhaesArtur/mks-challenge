/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        azulzin: {
          500: "#0F52BA",
        },
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
