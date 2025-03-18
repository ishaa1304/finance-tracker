import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    
    port: 5173, // optional, can be any port
    proxy: {
      '/api': 'http://localhost:5000',
    }
  },
});

