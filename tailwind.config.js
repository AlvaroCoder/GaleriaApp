/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    
    extend: {
      colors : {
        'transparent-home' : '#272727',
        'background-home':'#F8F8F8',
        'border-gallery':'#615F5F',
        'card-hover':'rgba(27, 27, 27, 0.5)',
        'background-popup':'rgba(41, 37, 37, 0.46)',
        'navbar':'#353535',
        'orange':'#FE7F2D',
        'red':"#BC2121"
      },
      fontFamily:{
        'InriaSerif':'Inria Serif, serif'
      }
    },
  },
  plugins: [],
}
