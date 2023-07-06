/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-1': '#FF8989',
        'red-2': '#FF4141',
        'yellow-1': '#FFD93D',
        'green-1': '#8AD592',
        'blue-1': '#71A9FE',
        'white-1': '#F7F8FA', //for backgrounds
        'white-2': '#FFFFFF', //for modals/tooltips/popups
        'white-3': '#c3bcbf',
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

