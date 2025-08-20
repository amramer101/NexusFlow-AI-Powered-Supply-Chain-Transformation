module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000e4d', // Dark Blue
        secondary: '#72d8f7', // Cyan Blue
        // use text-white when
        'white-primary': '#021048', // Header color when white background
        'white-text': '#0a1641', // Text color when white background
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
