import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blur: resolve(__dirname, 'blur.html'),
        correcteur: resolve(__dirname, 'correcteur.html')
      }
    }
  }
});
