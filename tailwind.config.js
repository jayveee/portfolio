/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-saans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-saans-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
