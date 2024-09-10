/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#48CFCB',
          light: '#48CFCB', // 메인 teal 색상
          dark: '#229799',  // 어두운 teal 색상
        },
        grey: {
          DEFAULT: '#F5F5F5', // 밝은 회색
          dark: '#424242',    // 어두운 회색
        },
        black: '#000000', // 검정
      },
    },
  },
  plugins: [],
};