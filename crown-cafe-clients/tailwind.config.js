/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cinezl: '"Cinzel", serif',
        Ineter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}