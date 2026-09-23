import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        // Deep Cosmos Obsidian
        cosmos: {
          DEFAULT: '#050508',
          50: '#181822',
          100: '#12121c',
          200: '#0e0e16',
          300: '#0a0a10',
          400: '#08080d',
          500: '#050508',
          600: '#040406',
          700: '#030305',
          800: '#020203',
          900: '#010102',
        },
        // Metallic Gold & Champagne
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FDF8EC',
          100: '#F9ECC7',
          200: '#F4DC9E',
          300: '#E5C07B',
          400: '#D4AF37',
          500: '#C59E27',
          600: '#A68218',
          700: '#876711',
          800: '#684E0C',
          900: '#4B3708',
          champagne: '#E5C07B',
        },
        // Fiery Amber & Horizon Flare
        flare: {
          DEFAULT: '#FF6B00',
          amber: '#F59E0B',
          orange: '#FF5400',
          red: '#EF4444',
          gold: '#FFD700',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'horizon-glow': '0 0 100px 30px rgba(255, 107, 0, 0.45)',
        'gold-glow': '0 0 50px -10px rgba(212, 175, 55, 0.35)',
        'amber-glow': '0 0 45px -10px rgba(245, 158, 11, 0.35)',
        'glass-panel': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(212, 175, 55, 0.15)',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.98)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'beam-drift': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-10px) scaleY(1.05)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'beam-drift': 'beam-drift 8s ease-in-out infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}

export default config
