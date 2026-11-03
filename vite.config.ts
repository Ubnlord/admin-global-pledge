import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // The admin app will be served from its own custom subdomain root.
  base: '/',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
});
