const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: {
    enabled: true,
    content: ['index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend : {
      fontFamily: {
        'body': ['Lexend Deca'],
        'header': ['Big Shoulders Display']
      },
      screens: {
        'xsm': '375px',
        '1xl': '1440px'
      },
      colors: {
        brightOrange: '#e38826',
        cyan: {
          100: '#006970',
          200: '#004241'
        },
        transparentWhite: '#ffffff',
        VeryLghtGray: '#f2f2f2' 
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}
