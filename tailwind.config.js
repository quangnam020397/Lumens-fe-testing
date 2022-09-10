/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: 'var(--text-primary)',
        'grey-1': 'var(--text-grey-1)',
        'grey-2': 'var(--text-grey-2)',
        secondary: 'var(--text-secondary)',
        active: 'var(--text-active)',
        danger: 'var(--text-danger)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        base: 'var(--bg-base)',
        secondary: 'var(--bg-secondary)',
        danger: 'var(--bg-danger)',
      },
      borderColor: {
        secondary: 'var(--border-secondary)',
        'grey-1': 'var(--border-grey-1)',
        'grey-2': 'var(--border-grey-2)',
        'grey-3': 'var(--border-grey-3)',
        primary: 'var(--border-primary)',
        danger: 'var(--border-danger)',
      },
      fontSize: {
        32: [
          '32px',
          {
            lineHeight: '40px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.005em',
          },
        ],
      },
      boxShadow: {
        base: 'var(--card-shadow)',
      },
    },
  },
  plugins: [],
};
