/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'monospace', 'system-ui', '-apple-system', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        gold: {
          DEFAULT: '#ffcc3f',
          hover: '#f5bd23',
          soft: 'rgba(255, 204, 63, 0.12)',
        },
        zinc: {
          950: '#09090b',
          900: '#18181b',
          850: '#202025',
          800: '#27272a',
          700: '#3f3f46',
        }
      }
    },
  },
  plugins: [],
}
