/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e26894',
        neutral: {
          50: '#efefef',
          100: '#ccc',
          200: '#b4b4b4',
          300: '#929292',
          400: '#7d7d7d',
          500: '#5c5c5c',
          600: '#545454',
          700: '#414141',
          800: '#333',
          900: '#272727',
        },
      },
      fontFamily: {
        bevietnamproRegular: ['BeVietnamPro_400Regular'],
        bevietnamproMedium: ['BeVietnamPro_500Medium'],
        bevietnamproSemiBold: ['BeVietnamPro_600SemiBold'],
        bevietnamproBold: ['BeVietnamPro_700Bold'],
      },
    },
  },
  plugins: [],
};
