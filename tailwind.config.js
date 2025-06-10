/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3A3A3A',
          500: '#4A4A4A',
        },
        gold: {
          500: '#F9C416',
          400: '#FFD700',
          300: '#D4AF37',
          200: '#E6C86F',
          100: '#F5E1A7',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F9C416 0%, #D4AF37 100%)',
        'charcoal-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(249, 196, 22, 0.5)',
        'gold-glow-lg': '0 0 40px rgba(249, 196, 22, 0.3)',
      }
    },
  },
  plugins: [],
};