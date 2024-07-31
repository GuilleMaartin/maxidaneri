/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },

    extend: {
      colors:{
        brightBlueDark:'rgb(30,31,40)',
        brightBlueWhite:'rgb(33,158,188)',
      },
    },
  },
  plugins: [],
}
