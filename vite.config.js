import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/personalPortfolio/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html',
          dest: '.'  // Esto lo copia directamente a /dist
        }
      ]
    })
  ]
})
