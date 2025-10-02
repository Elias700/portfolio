/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {
        colors: {
          'cor-primaria': '#00B58C',
          'cor-secundaria': '#205251',
          'fundo-escuro': '#20272F',
          'texto-claro': '#CBCCD1',
          'cor-destaque': '#00B58C',
          'sombra-escura': '#2E3138',
        },
        fontFamily: {
          'oswald': ['Oswald', 'sans-serif'],
          'protest': ['Protest Revolution', 'sans-serif'],
          'dancing': ['Dancing Script', 'cursive'],
        },
     },
   },
   plugins: [],
}