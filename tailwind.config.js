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
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      animation: {
        'falling': 'falling 5s infinite ease-in-out',
        'falling2': 'falling2 5s infinite ease-in-out',
        'falling3': 'falling3 5s infinite ease-in-out',
      },
      keyframes: {
        falling: {
          '0%': { transform: 'translate3d(300px, 0, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(-350px, 700px, 0) rotate(90deg)', opacity: '0' }
        },
        falling2: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(90deg)' },
          '100%': { transform: 'translate3d(-400px, 680px, 0) rotate(0deg)', opacity: '0' }
        },
        falling3: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(-20deg)' },
          '100%': { transform: 'translate3d(-230px, 640px, 0) rotate(-70deg)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
};