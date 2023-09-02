/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    /*container:{
      center : true,

    },*/
    colors:{
      'pale' : '#f6e700',
      'balck':'#000000',
      'transparent':'transparent',

    },
    fontFamily:{
      'noto' : 'Noto Sans, sans-serif',
      'namun':'Nanum Gothic Coding, cursive',
      'ops':'Black Ops One, cursive',

    },
    spacing:{
      '16' : '10rem',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '60px',

    },
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

