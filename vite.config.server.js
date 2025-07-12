import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: path.resolve(__dirname, 'src/server-entry.jsx'),
    outDir: 'dist/server',
    rollupOptions: {
      output: {
        format: 'cjs', // Ensures compatibility with Node.js
        entryFileNames: '[name].cjs'
      },
    },
  },
});