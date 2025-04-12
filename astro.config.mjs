// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://hsterben.github.io",
  base: '/sterben-dev/',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry-[name]-[hash].js',
          chunkFileNames: 'chunks/chunk-[name]-[hash].js',
          assetFileNames: 'assets/asset-[name]-[hash][extname]'
        }
      }
    }
  }
});

// export default defineConfig({});
