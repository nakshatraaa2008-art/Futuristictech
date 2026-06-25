/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060f',
          900: '#0a0b1a',
          800: '#11122a',
          700: '#1a1b3a',
          600: '#25274f',
        },
        cyber: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec5ff',
          400: '#59a6ff',
          500: '#3380ff',
          600: '#1f63f5',
          700: '#174ce0',
          800: '#173fb5',
          900: '#193a8f',
        },
        plasma: {
          50: '#f5f0ff',
          100: '#ece0ff',
          200: '#d9c2ff',
          300: '#bd97ff',
          400: '#9d63ff',
          500: '#8338ff',
          600: '#7320ee',
          700: '#6018c9',
          800: '#4f17a3',
          900: '#421884',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid': "linear-gradient(rgba(51,128,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(51,128,255,0.07) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(circle at center, rgba(131,56,255,0.25), transparent 70%)',
      },
    },
  },
  plugins: [],
};
