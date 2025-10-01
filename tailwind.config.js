/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFCF7',
          100: '#FDF9F0',
          200: '#FAF0E6',
          300: '#F5E6D3',
          400: '#E6D7C3',
          500: '#D2C4B0',
          600: '#B8A082',
          700: '#8B6914',
          800: '#6B5B47',
          900: '#4A3F35'
        },
        bronze: {
          50: '#FDF6F0',
          100: '#F7E6D1',
          200: '#E8C5A0',
          300: '#D4A574',
          400: '#CD7F32',
          500: '#B87333',
          600: '#A0522D',
          700: '#8B4513',
          800: '#654321',
          900: '#3E2723'
        },
        gold: {
          50: '#FFFEF7',
          100: '#FFFACD',
          200: '#FFF8DC',
          300: '#F0E68C',
          400: '#DAA520',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#9A7B0A',
          800: '#7D6608',
          900: '#5D4E06'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
};
