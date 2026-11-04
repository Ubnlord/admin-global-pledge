import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset URLs support both project Pages paths and custom-domain roots.
  base: './',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
});
