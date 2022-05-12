import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/memory-rock-fest/',
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
  root: './',
    build: {
        outDir: './build'
  },
  plugins: [react(), VitePWA({
    manifest: {
      "theme_color": "#ffffff",
      "background_color": "#000000",
      "display": "fullscreen",
      "scope": "https://bernethe.github.io/memory-rock-fest/",
      "start_url": "https://bernethe.github.io/memory-rock-fest/",
      "name": "Memory Rock Fest",
      "short_name": "Memory Rock Fest",
      "description": "Memory Rock Fest",
      "lang": "es-CR",
      "orientation": "portrait",
      "icons": [
        {
          "src": "./src/Assets/icon-144x144.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "any"
        },
        {
            "src": "./src/Assets/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "./src/Assets/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "./src/Assets/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "./src/Assets/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
      ]
  }

  })]
})
