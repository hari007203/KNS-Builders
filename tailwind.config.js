/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1017',
          DEFAULT: '#101820',
          800: '#141E28',
          700: '#1A2634',
        },
        charcoal: {
          950: '#121417',
          DEFAULT: '#17191D',
          800: '#22252B',
          700: '#2F333B',
        },
        gold: {
          50: '#FAF6EE',
          100: '#F2E9D5',
          200: '#E4CFAB',
          300: '#D5B480',
          DEFAULT: '#C6A46A',
          500: '#B89255',
          600: '#99733D',
          700: '#75552B',
        },
        ivory: {
          light: '#FAF8F3',
          DEFAULT: '#F5F1E9',
          dark: '#EAE3D6',
        },
        silver: {
          DEFAULT: '#A7A7A7',
          light: '#CFCFCF',
          dark: '#6E6E6E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        number: ['"DM Sans"', 'Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFCA9B 0%, #C6A46A 50%, #9E7D47 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(16,24,32,0.95) 0%, rgba(23,25,29,0.98) 100%)',
        'radial-gold': 'radial-gradient(circle at 50% 50%, rgba(198,164,106,0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
