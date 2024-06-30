/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{html,js}', // Ajusta según la estructura de tu proyecto
    './node_modules/flowbite/**/*.js',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',

  ],
  darkMode: 'class', // Habilitar el modo oscuro con la clase 'class'
  theme: {
    extend: {
      colors: {
        green: {
          light: '#6EE7B7',
          DEFAULT: '#10B981',
          dark: '#047857'
        },
        gray: colors.gray,
        blue: colors.sky,
        black: colors.black, // Añadido el color negro
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px'
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // Fuente recomendada
        serif: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace']
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
