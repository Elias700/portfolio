// tailwind.config.js
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
        'cor-destaque': '#00BD95',
        'sombra-escura': '#2E3138',
      },
    },
  },
  plugins: [],
}
