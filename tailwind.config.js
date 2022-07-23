/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  important: "#root",
  theme: {
    extend: {
      fontFamily:{
        italianno: ['Italianno', "cursive"],
        curs: ['Courgette', "cursive"]
      },
      colors:{
        goldenBrown: "#B5986D"
      }
      
    },
  },
  plugins: [],
}
