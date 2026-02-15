import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark palette with light accent colors
        'synthiv-light': '#0F172A', // dark navy base
        'synthiv-dark': '#1E293B', // slightly lighter dark
        'synthiv-accent': '#00D9FF', // cyan neon
        'synthiv-accent2': '#FF006E', // hot pink
        'synthiv-accent3': '#8B5CF6', // purple
        'synthiv-neutral': '#94A3B8', // light gray
      },
      fontFamily: {
        'gt-america': ['GT America', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '900' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 24px rgba(0, 217, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
    },
  },
  plugins: [],
}
export default config
