import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    postcss: {
      plugins: [
        postcss(),
        tailwindcss(),
      ],
    },
  },
});
