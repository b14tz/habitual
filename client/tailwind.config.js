/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-1': '#E8505B',
        'red-2': '#FF4141',
        'yellow-1': '#F9D56E',
        'green-1': '#6BCB77',
        'blue-1': '#71A9FE',
        'white-1': '#F7F8FA', //for backgrounds
        'white-2': '#FFFFFF', //for modals/tooltips/popups
        'white-3': '#D9D9D9',
        'black-1': '#1f2937',
        'black-2': '#353e4b',
        'black-3': '#787e87',
        'green-2': '#72d48c',
        'gray-1': '#574f4f'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

