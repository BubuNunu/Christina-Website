import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The deploy workflow sets BASE_PATH from GitHub Pages: '/' once the
  // custom domain (ruishidesign.com) is on, '/Sherry-UX-work-website/' before.
  base: process.env.BASE_PATH || '/Sherry-UX-work-website/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
  }
})
