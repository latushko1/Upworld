/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm': {'max': '470px'},
      'md': {'max': '768px'},
      'lg': {'max': '992px'},
      'xl': {'max': '1780px'},
      'ad':{'max':'360px'},
    },

    container:{
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        pinkBtn: '#B8A4FD',
        primary: '#202020',
        secondary: '#E2DBFB',
      },
    },


  },
  plugins: [],
}
