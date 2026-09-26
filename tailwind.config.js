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
      },
    },
  },
  plugins: [],
};
