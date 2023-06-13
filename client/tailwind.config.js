/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-1': '#FF6B6B',
        'red-2': '#FF4141',
        'yellow-1': '#FFD93D',
        'green-1': '#6BCB77',
        'blue-1': '#4D96FF',
        'white-1': '#ece1e1',
        'white-2': '#dbcccc',
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

