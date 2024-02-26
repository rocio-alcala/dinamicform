/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'AXA': ['"Source Sans Pro"', 'Arial', 'sans-serif'],
    },
    backgroundImage: {
      'AXA': "url(https://www.axa-assistance-segurodeviaje.es/o/neo-travel-axa-theme/css/images/cover.jpg)"    },
    extend: {},
  },
  plugins: [],
}

