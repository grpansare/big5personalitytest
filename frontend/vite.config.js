import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the base path matches your Netlify domain or subpath
  build: {
    outDir: 'dist', // Default build directory
  },
  server: {
    host: '0.0.0.0', // Allow external access
    port: process.env.PORT || 5173, // Use Render's port
  }
})
