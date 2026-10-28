
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      rollup: '@rollup/wasm-node',
    },
  },
  optimizeDeps: {
    force: true,
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [],
    },
  },
  base: '/',
});
