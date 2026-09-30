import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        surface: {
          primary:  'var(--surface-primary)',
          secondary:'var(--surface-secondary)',
          elevated: 'var(--surface-elevated)',
          card:     'var(--surface-card)',
          overlay:  'var(--surface-overlay)',
          border:   'var(--surface-border)',
          'border-accent': 'var(--surface-border-accent)',
        },
        content: {
          primary:  'var(--content-primary)',
          secondary:'var(--content-secondary)',
          tertiary: 'var(--content-tertiary)',
          inverse:  'var(--content-inverse)',
        },
        accent: {
          glow:   'var(--accent-glow)',
          subtle: 'var(--accent-subtle)',
          strong: 'var(--accent-strong)',
        },
        status: {
          success: '#22c55e',
          error:   '#ef4444',
          warning: '#f59e0b',
          info:    '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['5.5rem',  { lineHeight: '1.0',  letterSpacing: '-0.03em',  fontWeight: '700' }],
        'display-xl':  ['4.5rem',  { lineHeight: '1.06', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display':     ['3.75rem', { lineHeight: '1.1',  letterSpacing: '-0.02em',  fontWeight: '700' }],
        'heading-1':   ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading-2':   ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.01em',  fontWeight: '600' }],
        'heading-3':   ['1.875rem',{ lineHeight: '1.25',                            fontWeight: '600' }],
        'heading-4':   ['1.5rem',  { lineHeight: '1.3',                             fontWeight: '600' }],
        'body-lg':     ['1.125rem',{ lineHeight: '1.7' }],
        'body':        ['1rem',    { lineHeight: '1.7' }],
        'body-sm':     ['0.875rem',{ lineHeight: '1.6' }],
        'caption':     ['0.75rem', { lineHeight: '1.5' }],
        'micro':       ['0.6875rem',{ lineHeight: '1.4', letterSpacing: '0.08em'  }],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg:   '0.75rem',
        xl:   '1rem',
        '2xl':'1.5rem',
        '3xl':'2rem',
        '4xl':'2.5rem',
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.12)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(129,140,248,0.12)',
        'elevated':   '0 16px 60px rgba(0,0,0,0.5)',
        'glow':       '0 0 24px rgba(99,102,241,0.25)',
        'glow-sm':    '0 0 12px rgba(99,102,241,0.18)',
        'glow-lg':    '0 0 60px rgba(99,102,241,0.3)',
        'inner-highlight': 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
        'bezel':      '0 0 0 1px rgba(255,255,255,0.05), 0 24px 64px rgba(0,0,0,0.5)',
      },
      screens: {
        xs:   '475px',
        '2xl':'1536px',
        '3xl':'1920px',
      },
      backgroundImage: {
        'gradient-radial':        'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':         'conic-gradient(var(--tw-gradient-stops))',
        'gradient-premium':       'linear-gradient(135deg, var(--surface-primary), var(--surface-secondary))',
        'gradient-brand':         'linear-gradient(135deg, #4f46e5, #818cf8)',
        'gradient-brand-hover':   'linear-gradient(135deg, #4338ca, #6366f1)',
        'gradient-glass':         'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-mesh':          'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(167,139,250,0.1) 0%, transparent 50%)',
        'shimmer':                'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow':  '42rem',
        'wide':    '90rem',
      },
      transitionDuration: {
        DEFAULT: '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'smooth':     'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
        'decelerate': 'cubic-bezier(0.0, 0.0, 0.2, 1.0)',
        'spring':     'cubic-bezier(0.32, 0.72, 0, 1)',
        'premium':    'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up':   'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':   'fade-in 0.5s ease-out forwards',
        'slide-up':  'slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow':'pulse-glow 3s ease-in-out infinite',
        'shimmer':   'shimmer 2.5s linear infinite',
        'float':     'float 4s ease-in-out infinite',
        'draw-line': 'draw-line 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow':  'spin-slow 8s linear infinite',
        'marquee':    'marquee 28s linear infinite',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)', filter: 'blur(4px)' },
          to:   { opacity: '1', transform: 'translateY(0)',    filter: 'blur(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '0.75' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        'draw-line': {
          from: { strokeDashoffset: '1000' },
          to:   { strokeDashoffset: '0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
