import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), //dai dien cho folder src
      '@components': path.resolve(__dirname, 'src/components'), //dai dien components
      '@style': path.resolve(__dirname, 'src/assets/style')
    }
  }
})
