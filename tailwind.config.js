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
        'tela-desk': '1180px',
        'container': '1200px',
        'texto-inicio': '590px',
        'texto-skill': '250px'
      },
      maxHeight: {
        'skills': '500px',
      },
      width: {
        '250': '250px',
        '330': '330px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '524': '524px',
        '900': '900px',
      },
      height: {
        '55': '55px',
        '65': '65px',
        '100': '100px',
        '180': '180px',
        '185': '185px',
        '200': '200px',
        '350': '350px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '675': '675px',
        '750': '750px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
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
        '22': '22px',
        '18': '18px',
        '16': '16px',
      },
      borderRadius: {
        '50': '50px',
      },
      gap: {
        '24': '24px',
      },
      margin: {
        '32': '32px',
        '16': '16px',
      }
    },
  },
  plugins: [],
}

