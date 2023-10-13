module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'myblue': '#2F3B5D', // Defina sua cor personalizada aqui
        'mygreen': '#685a35', // Outra cor personalizada
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui")

  ],
};
