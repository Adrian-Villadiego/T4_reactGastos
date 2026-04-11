import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'icons.svg',
        'img/bomba.jpg',
        'img/otraimg.png',
        'img/pwa.png',
        'robots.txt'
      ],
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg}']
        },
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'The best app in the world',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',

        screenshots: [
          {
            src: '/img/logjuni.jpg',
            sizes: '640x480',
            type: 'image/png',
            form_factor: 'narrow'
          },
          {
            src: '/img/pwa.png',
            sizes: '225x225',
            type: 'image/png',
            form_factor: 'wide'
          }
        ],

        icons: [
          {
            src: '/img/bomba.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: '/img/otraimg.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})