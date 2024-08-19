import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://66bf1a1242533c4031450ec8.mockapi.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
