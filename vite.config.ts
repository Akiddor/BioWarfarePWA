import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'icon-512.png',
        'icon-384.png',
        'icon-256.png',
        'icon-192.png',
        'icon-180.png',
        'icon-144.png',
        'icon-128.png',
        'icon-96.png',
        'icon-72.png',
        'icon-32.png',
        'icon-16.png'
      ], 

      manifest: {
        name: 'Bio Warfare Data',
        short_name: 'BW Data',
        description: 'Datos sobre el videojuego Biowarfare, como su historia, clasificación de los grimmers, tips para jugar y más.',
        background_color: "#0a0a0a",
        theme_color: "#16a34a",
        orientation: 'any', 
        display: 'standalone',

        icons: [
          // Máxima resolución / Splash Screen (Maskable)
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
          // Intermedias
          { src: 'icon-384.png', sizes: '384x384', type: 'image/png' },
          { src: 'icon-256.png', sizes: '256x256', type: 'image/png' },
          // Mínima de Android (Maskable)
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
          // iOS Touch Icon
          { src: 'icon-180.png', sizes: '180x180', type: 'image/png' },
          { src: 'icon-144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icon-128.png', sizes: '128x128', type: 'image/png' },
          { src: 'icon-96.png', sizes: '96x96', type: 'image/png' },
          { src: 'icon-72.png', sizes: '72x72', type: 'image/png' },
          // Favicons
          { src: 'icon-32.png', sizes: '32x32', type: 'image/png' },
          { src: 'icon-16.png', sizes: '16x16', type: 'image/png' }
        ],
      }
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});