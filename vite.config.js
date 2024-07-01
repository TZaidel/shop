import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://176.37.226.184:8009',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
