import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel serves the site at the root. The GitHub Pages workflow sets BASE_PATH
  // ('/' with the custom domain, '/Sherry-UX-work-website/' without).
  base: process.env.BASE_PATH || (process.env.VERCEL ? '/' : '/Sherry-UX-work-website/'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
  }
})
