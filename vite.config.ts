import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    // Una sola copia de React (evita useState/useContext sobre null).
    // No usar alias absolutos a node_modules/react: en dev pueden romper imports dinámicos.
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
  test: {
    // Vitest configuration
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    fileParallelism: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/services/**', 'src/context/**', 'src/components/**'],
      exclude: ['src/__tests__/**'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React + react-dom + scheduler + router + framer-motion en el MISMO chunk
          // para que motion no cargue otra instancia de React (useContext/useState null).
          if (id.includes('node_modules')) {
            if (
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-router') ||
              id.includes('node_modules/scheduler/') ||
              id.includes('framer-motion')
            ) {
              return 'vendor-react';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('idb')) {
              return 'vendor-db';
            }
          }
          // Data chunks
          if (id.includes('/data/levels/')) {
            return 'data-levels';
          }
          if (id.includes('/data/grammar')) {
            return 'data-grammar';
          }
          if (id.includes('/data/vocabulary') || id.includes('/data/tech-vocabulary')) {
            return 'data-vocabulary';
          }
          if (id.includes('/data/communicative') || id.includes('/data/idioms') || 
              id.includes('/data/phrasal') || id.includes('/data/modals') ||
              id.includes('/data/irregular') || id.includes('/data/pronunciation') ||
              id.includes('/data/writing') || id.includes('/data/listening') ||
              id.includes('/data/conversations') || id.includes('/data/gamification')) {
            return 'data-misc';
          }
          // Activity components
          if (id.includes('/components/activities/')) {
            return 'activities';
          }
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
})
