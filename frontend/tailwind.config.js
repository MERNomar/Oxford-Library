/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'react-blue' : '#149eca',
        'react-dark' : '#23272f',
        'react-light' : '#283541'
      }
    },
  },
  plugins: [],
}

