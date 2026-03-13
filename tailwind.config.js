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
          DEFAULT: '#0F4C81',
          50: '#EBF2F9',
          100: '#C5D9EE',
          200: '#9FC0E3',
          300: '#79A7D8',
          400: '#538ECD',
          500: '#2D75C2',
          600: '#0F4C81',
          700: '#0B3A62',
          800: '#072843',
          900: '#031624',
        },
        teal: {
          DEFAULT: '#0A6C74',
          50: '#E6F3F4',
          100: '#B3D9DC',
          200: '#80BFC4',
          300: '#4DA5AC',
          400: '#1A8B94',
          500: '#0A6C74',
          600: '#085A61',
          700: '#06474D',
          800: '#04353A',
          900: '#022226',
        },
        surface: '#F7F9FC',
        card: '#FFFFFF',
        border: '#E6EAF0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(15, 76, 129, 0.07), 0 10px 20px -2px rgba(15, 76, 129, 0.04)',
        'card': '0 4px 24px -4px rgba(15, 76, 129, 0.10), 0 1px 4px rgba(15, 76, 129, 0.05)',
        'hover': '0 12px 40px -8px rgba(15, 76, 129, 0.20), 0 4px 12px rgba(15, 76, 129, 0.08)',
        'glow': '0 0 40px rgba(10, 108, 116, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F4C81' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}