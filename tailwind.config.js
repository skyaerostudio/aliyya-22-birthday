/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#F5EEFF',
          100: '#F5EEFF',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#B48CEC',
          500: '#a855f7',
          600: '#9B71E8',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#2A123C',
        },
        ink: {
          DEFAULT: '#2A123C'
        },
        surface: {
          DEFAULT: '#F5EEFF'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'script': ['Caveat', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
