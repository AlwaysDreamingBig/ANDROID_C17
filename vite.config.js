import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    host: true  // This makes the server accessible externally, which is needed for Render
  },
  preview: {
    port: process.env.PORT || 3000,
    host: true  // This makes the server accessible externally, which is needed for Render
  }
});
