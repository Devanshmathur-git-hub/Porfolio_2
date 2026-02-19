/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#3b82f6', // Subtle blue accent
      },
    },
  },
  plugins: [],
}
