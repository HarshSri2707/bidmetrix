import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Dev server
  server: {
    port: 3000,
    open: true
  },

  // Preview server
  preview: {
    port: 4173
  },

  build: {
    outDir: 'dist',

    // Production me false better hota hai (SEO + perf)
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
          animations: ['framer-motion']
        }
      }
    }
  }
})
