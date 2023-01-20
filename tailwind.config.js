module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'primary-blue': '#1B4DB1',
        'primary-yellow': '#F3F243',
        'primary-pink': '#FF64BC',
        'primary-black': '#000000',
        'primary-blackLight': '#1A1E2E',
        'primary-grayDark': '#6E6A6C',
        'primary-gray': '#A7A6A7',
        'primary-grayLight': '#D9D9D9,',
        'primary-grayLighter': '#F8F7FA',
        'secondary-red': '#EF3F47',
      },
      styles: {
        'h900-normal--48px': {
          'font-family': 'Roboto',
          'font-style': ' normal',
          'font-weight': '900',
          'font-size': '48px',
          'line-height': '56px',
        },
        'h500-normal-16px': {
          'font-family': 'Roboto',
          'font-style': 'normal',
          'font-weight': '500',
          'font-size': '16px',
          'line-height': '19px',
        },
        'h500-normal-24px': {
          'font-family': 'Roboto',
          'font-style': 'normal',
          'font-weight': '500',
          'font-size': '24px',
          'line-height': '28px',
        },
        'h400-normal-16px': {
          'font-family': 'Roboto',
          'font-style': 'normal',
          'font-weight': '400',
          'font-size': '16px',
          'line-height': '19px',
        },
        'h600-medium--20px': {
          'font-family': 'Roboto',
          'font-style': 'normal',
          'font-weight': '600',
          'font-size': '20px',
          'line-height': '23px',
        },
        'h400-medium-15px': {
          'font-family': 'Roboto',
          'font-style': 'normal',
          'font-weight': '400',
          'font-size': '15px',
          'line-height': '18px',
        },
        'h500-medium-14px': {
          'font-family': 'Roboto',
          'font-style': 'normal',
          'font-weight': '500',
          'font-size': '14px',
          'line-height': '16px',
        },
      },
      dropShadow: {
        'drop-shadow': 'drop-shadow(0 2 4 000000)',
      },
    },
  },
  plugins: [],
};
