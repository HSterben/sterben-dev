// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://hsterben.github.io",
  base: '/sterben-dev/',
  build: {
    assets: 'assets',
  }
});

// export default defineConfig({});
