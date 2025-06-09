/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        coffee: {
          50: '#F8F5F2',
          100: '#E8DFD8',
          200: '#D7C8BB',
          300: '#C6B19E',
          400: '#B49A81',
          500: '#9A7B5F',
          600: '#7D5F45',
          700: '#5F462F',
          800: '#3D2314',
          900: '#271B0C',
        },
        cream: {
          50: '#FFFCF7',
          100: '#F5F0E5',
          200: '#EAE0D0',
          300: '#DFD0BB',
          400: '#D4C0A6',
          500: '#C9B091',
        },
        forest: {
          50: '#F2F5F3',
          100: '#DEEAE0',
          200: '#C0D6C4',
          300: '#A2C2A8',
          400: '#84AD8C',
          500: '#5E8F67',
          600: '#2C5530',
          700: '#214023',
          800: '#162A17',
          900: '#0B150B',
        },
        gold: {
          50: '#FBF9F0',
          100: '#F6EFD6',
          200: '#EFE2B0',
          300: '#E8D68A',
          400: '#D4AF37',
          500: '#C19B20',
          600: '#A37F1A',
          700: '#856314',
          800: '#67470E',
          900: '#482F08',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/4496679/pexels-photo-4496679.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'coffee-farm': "url('https://images.pexels.com/photos/977896/pexels-photo-977896.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'coffee-beans': "url('https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};