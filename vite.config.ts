import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://<user>.github.io/Rishi-Portfolio/
// Override locally with VITE_BASE_PATH=/ if you need to test from a subpath.
const base = process.env.VITE_BASE_PATH ?? '/Rishi-Portfolio/'

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
})
