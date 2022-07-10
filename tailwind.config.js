/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        italianno: ['Italianno', "cursive"],
      },
      colors:{
        goldenBrown: "#B5986D"
      }
      
    },
  },
  plugins: [],
}
