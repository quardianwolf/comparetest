/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constant/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gap: {
        '120': '34rem',
      },
    },
    container: {
      center: true,
    },
    
  },
  plugins: [],
}