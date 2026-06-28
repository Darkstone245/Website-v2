import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import compress from 'vite-plugin-compression'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),

    compress({
      algorithm: 'brotliCompress',
      ext: '.br',

      // IMPORTANT: include html + assets
      filter: (file) =>
        /\.(html|js|css|svg|json)$/.test(file),

      // keep original files (so index.html stays)
      deleteOriginFile: false,

      // ensures correct placement (same dir as original)
      threshold: 0,
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    assetsDir: 'assets', // <-- ensures everything non-html goes here

    rollupOptions: {
      output: {
        // keep JS/CSS in assets/
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})