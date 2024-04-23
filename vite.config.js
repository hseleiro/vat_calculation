import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/myLibrary.js',
      name: 'myLibrary',
      fileName: (format) => `myLibrary.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
