module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          text: 'var(--color-text)',
          heading: 'var(--color-heading)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          dot: 'var(--color-dot)',
          'hover-bg': 'var(--color-hover-bg)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
          'card-hover': 'var(--color-card-hover)',
        },
      },
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
    },
  },
  plugins: [],
};
