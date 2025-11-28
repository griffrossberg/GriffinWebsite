/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forest Theme
        forest: {
          primary: '#064e3b',      // Emerald 900
          accent: '#047857',       // Emerald 700 (darker)
          bg: '#fafaf9',          // Stone 50
          text: '#292524',        // Stone 800
        },
        // Bright Theme
        bright: {
          primary: '#2563eb',     // Blue 600
          accent: '#f97316',      // Orange 500
          bg: '#f8fafc',         // Slate 50
          text: '#0f172a',       // Slate 900
        }
      }
    },
  },
  plugins: [],
}
