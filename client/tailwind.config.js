/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-1': '#FF6B6B',
        'yellow-1': '#FFD93D',
        'green-1': '#6BCB77',
        'blue-1': '#4D96FF',
        'white-1': '#ece1e1',
        'white-2': '#f6f1f1',
        'white-3': '#c3bcbf',
        'black-1': '#1f2937',
        'black-2': '#353e4b',
        'black-3': '#787e87',
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

