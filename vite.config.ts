import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
      "theme_color": "#1D2026",
      "background_color": "#1D2026",
      "display": "standalone",
      "scope": "/",
      "start_url": "/",
      "short_name": "Weather",
      "description": "Weather forecast",
      "name": "Weather",
      "icons": [
            {
              "src": "/img/weather16x16.png",
              "sizes": "16x16",
              "type": "image/png"
            },
            {
              "src": "/img/weather24x24.png",
              "sizes": "24x24",
              "type": "image/png"
            },
            {
              "src": "/img/weather32x32.png",
              "sizes": "32x32",
              "type": "image/png"
          },
          {
              "src": "/img/weather64x64.png",
              "sizes": "64x64",
              "type": "image/png"
          },
          {
              "src": "/img/weather128x128.png",
              "sizes": "128x128",
              "type": "image/png"
          },
          {
              "src": "/img/weather256x256.png",
              "sizes": "256x256",
              "type": "image/png"
          },
          {
              "src": "/img/weather512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ],
  }}),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
})
