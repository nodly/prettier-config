import { resolve } from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/prettier.config.ts'),
      formats: ['es', 'cjs'],

      name: 'prettier.config',
      fileName: 'prettier.config',
    },
    rollupOptions: {},
  },
  plugins: [dts()],
});
