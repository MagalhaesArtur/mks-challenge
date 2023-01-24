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
      boxShadow: {
        shadowzin: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
