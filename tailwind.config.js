/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airline: {
          dark: '#0a1628',
          blue: '#1e3a5f',
          light: '#3d5a80',
          accent: '#5c8aae',
          silver: '#c0c5ce',
          white: '#f8f9fa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
