import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Ecoy Hymns',
        short_name: 'Ecoy Hymns',
        description: '⚡ Powered By SamPhis.',
        start_url: '/hymn',
        display: 'standalone',
        background_color: '#2b2640',
        theme_color: '#2c3e50',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            // Cache Appwrite API calls for hymns
            urlPattern:
              /^https:\/\/cloud\.appwrite\.io\/v1\/databases\/.*\/documents\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'appwrite-api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
              networkTimeoutSeconds: 10,
            },
          },
          {
            // Cache static CDN assets like fonts/images
            urlPattern: /\.(?:js|css|woff2?|png|svg|jpg|jpeg|gif|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
