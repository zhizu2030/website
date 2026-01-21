import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://openapi.beschannels.com',
        changeOrigin: true,
        // 不需要重写路径，因为我们要保持/api前缀
      },
    },
  },
})