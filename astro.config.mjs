import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tinyact.app',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  }
});
