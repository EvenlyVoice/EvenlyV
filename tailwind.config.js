/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0e0d0b',
        ink: '#ede7da',
        accent: '#d6fb41',
        muted: '#9a927f',
        line: 'rgba(237,231,218,.14)',
        paper: '#ece7dc',
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Golos Text', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}