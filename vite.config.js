import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:5001', // Fallback to localhost if VITE_BACKEND_URL is not set
        changeOrigin: true,
        secure: false
      }
    }
  }
})
