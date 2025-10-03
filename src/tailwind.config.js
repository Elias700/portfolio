// tailwind.config.js

// 🚨 MUDANÇA: Usando 'require' para máxima compatibilidade com o Tailwind
const defaultTheme = require('tailwindcss/defaultTheme'); 

/** @type {import('tailwindcss').Config} */
module.exports = { // 🚨 MUDANÇA: Mudando de 'export default' para 'module.exports'
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // ... (Suas cores customizadas)
                'cor-primaria': '#00B58C',
                'cor-secundaria': '#205251',
                'fundo-escuro': '#20272F',
                'texto-claro': '#CBCCD1',
                'cor-destaque': '#00B58C',
                'sombra-escura': '#2E3138',
            },
            fontFamily: {
                // Inter para o corpo do texto (padrão 'sans')
                'sans': ['Inter', ...defaultTheme.fontFamily.sans], 
                
                // Montserrat para títulos (h1)
                'heading': ['Montserrat', ...defaultTheme.fontFamily.sans],
                
                // Poppins para subtítulos (h2)
                'subheading': ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}