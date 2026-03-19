import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    plugins: [
        react(),
        nodePolyfills({
            // This ensures 'stream', 'path', 'buffer', etc. are all covered
            include: ['stream', 'path', 'util', 'buffer'],
            globals: {
                Buffer: true,
                global: true,
                process: true,
            },
        }),
    ],
    build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 1000,
    },
    base: '/',
});