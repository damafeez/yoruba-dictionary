module.exports = {
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        'black-2': 'var(--black-2)',
        'off-white': 'var(--off-white)',
        'off-white-1': 'var(--off-white-1)',
        'off-white-2': 'var(--off-white-2)',
        gray: 'var(--gray)',
        'gray-2': 'var(--gray-2)',
        blue: 'var(--blue)',
        'blue-2': 'var(--blue-2)',
      },
      fontSize: {
        xl: '1.5rem',
        '2xl': '2.5rem',
        '3xl': '4rem',
        '4xl': '7rem',
        '5xl': '8rem',
        '6xl': '9rem',
      },
      // we can change these later
      boxShadow: {
        xs: '0px 1px 4px rgba(0, 0, 0, 0.1)',
        sm: '0px 0px 30px rgba(0, 0, 0, 0.01)',
        md: '5px 5px 40px rgba(0, 0, 0, 0.05)',
        lg:
          '0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      padding: {
        '5/100': '5%',
        '15/100': '15%',
      },
    },
  },
  darkMode: 'class',
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
}
