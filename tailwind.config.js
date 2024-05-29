/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        yellow: "#E7B34E",
        yellow1: "#E3BF7A",
        black: "#000",
        grey: "#2D2B33",
        blue: "rgba(152, 230, 241, 0.2)",
        green: "#B2D15A",
        beige: "#F5EAD9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};