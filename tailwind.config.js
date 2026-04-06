/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        bg: '#0a0a0f',
        surface: '#111118',
        border: '#1e1e2e',
        accent: '#7c6af7',
        'accent-light': '#a89cf8',
        muted: '#6b7280',
        bright: '#e2e8f0',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(124, 106, 247, 0.2)' },
          to: { boxShadow: '0 0 40px rgba(124, 106, 247, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
