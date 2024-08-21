import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  build: {
    outDir: path.resolve(__dirname, "./dist")
  },
  server: {
    // https: true,
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1',
    //     changeOrigin: true
    //   }
    // }
  },
  lintOnSave: true
})