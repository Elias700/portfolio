
const defaultTheme = require('tailwindcss/defaultTheme'); 

/** @type {import('tailwindcss').Config} */
module.exports = { 
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
                'sans': ['Inter', ...defaultTheme.fontFamily.sans], 
                
                'heading': ['Montserrat', ...defaultTheme.fontFamily.sans],
                
                'subheading': ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}