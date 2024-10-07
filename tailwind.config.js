/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#1ABC9C', // Add your custom hex color here
      },
    },
  },
  plugins: [],
}
