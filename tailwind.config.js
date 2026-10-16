/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // a cor de destaque do app (item 18 do PENDENTES.md): variáveis de CSS, trocadas no Perfil
        // (`services/cor-destaque.ts`); o padrão, em global.css, é o azul de sempre
        conecta: {
          DEFAULT: 'rgb(var(--conecta-600) / <alpha-value>)',
          light: 'rgb(var(--conecta-100) / <alpha-value>)',
          dark: 'rgb(var(--conecta-700) / <alpha-value>)',
          50: 'rgb(var(--conecta-50) / <alpha-value>)',
          100: 'rgb(var(--conecta-100) / <alpha-value>)',
          200: 'rgb(var(--conecta-200) / <alpha-value>)',
          300: 'rgb(var(--conecta-300) / <alpha-value>)',
          400: 'rgb(var(--conecta-400) / <alpha-value>)',
          500: 'rgb(var(--conecta-500) / <alpha-value>)',
          600: 'rgb(var(--conecta-600) / <alpha-value>)',
          700: 'rgb(var(--conecta-700) / <alpha-value>)',
          800: 'rgb(var(--conecta-800) / <alpha-value>)',
          900: 'rgb(var(--conecta-900) / <alpha-value>)',
          950: 'rgb(var(--conecta-950) / <alpha-value>)',
        },
        conquista: { DEFAULT: '#16A34A', light: '#DCFCE7', dark: '#15803D' },
        fogo: { DEFAULT: '#EA580C', light: '#FFEDD5', dark: '#C2410C' },
        suave: '#F8FAFC',
        grafite: '#0F172A',
        // identidade visual da «expedição» (caderno de campo antártico): gelo e pergaminho de fundo,
        // aurora austral como destaque — usada em telas que mostram bichos, lugares e fatos de verdade.
        // Antártica (não outro continente) por ser neutra: não pertence a nenhum país, nenhuma cultura
        // específica — um tema de fundo que cabe igual pra quem estuda qualquer um dos idiomas do app.
        gelo: { DEFAULT: '#EFF8FF', dark: '#0B1E33' },
        pergaminho: { DEFAULT: '#FBF3E3', dark: '#2A2113' },
        aurora: { DEFAULT: '#14B8A6', light: '#CCFBF1', dark: '#0F766E' },
      },
    },
  },
  plugins: [],
};
