/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        conecta: { DEFAULT: '#2563EB', light: '#DBEAFE', dark: '#1D4ED8' },
        conquista: { DEFAULT: '#16A34A', light: '#DCFCE7', dark: '#15803D' },
        fogo: { DEFAULT: '#EA580C', light: '#FFEDD5', dark: '#C2410C' },
        suave: '#F8FAFC',
        grafite: '#0F172A',
        // identidade visual da «expedição» (caderno de campo antártico): gelo e pergaminho de fundo,
        // aurora austral como destaque — usada em telas que mostram bichos, lugares e fatos de verdade
        gelo: { DEFAULT: '#EFF8FF', dark: '#0B1E33' },
        pergaminho: { DEFAULT: '#FBF3E3', dark: '#2A2113' },
        aurora: { DEFAULT: '#14B8A6', light: '#CCFBF1', dark: '#0F766E' },
      },
    },
  },
  plugins: [],
};
