/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'titulo': ['Poppins', 'sans-serif'],
      'texto': ['Inter', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        'tela-desk': '1280px',
        'texto-inicio': '470px',
      },
      width: {
        '250': '250px',
        '400': '400px',
        '524': '524',
      },
      height: {
        '65': '65px',
        '675': '675px',
        '800': '800px',
        '350': '350px',
        '55': '55px',
      },
      colors: {
        'c0': '#F1F1F1',
        'c1': '#D9D9D9',
        'c2': '#BFBFBF',
        'c3': '#151515',
        'c4': '#161616',
        'c5': '#121212',
        'e1': '#48A8FF',
        'e2': '#148FFF',
        'e3': '#0075E0',
        'e4': '#0063BE',
        'e5': '#00407A',
      },
      fontSize: {
        '42': '42px',
        '38': '38px',
        '32': '32px',
        '16': '16px',
      },
      borderRadius: {
        '50': '50px',
      },
    },
  },
  plugins: [],
}

