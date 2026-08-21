/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0B0E14',
          'dark-elevated': '#111722',
          'dark-card': '#141D2B',
          'dark-border': '#1E293B',
          light: '#F8FAFC',
          'light-elevated': '#FFFFFF',
          'light-card': '#FFFFFF',
          'light-border': '#E2E8F0',
        },
        brand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#0EA5E9', // primary confident accent (cyan/sky)
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          accent: '#0EA5E9',
          'accent-secondary': '#10B981', // emerald for vector/secondary distinction
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      transitionDuration: {
        'fast': '180ms',
        'normal': '300ms',
        'complex': '500ms',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'flow-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'flow-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'flow-right': 'flow-right 2s linear infinite',
        'flow-down': 'flow-down 2s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'fade-up': 'fade-up 0.4s ease-out forwards',
      }
    },
  },
  plugins: [],
};
