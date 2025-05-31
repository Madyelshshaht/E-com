import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  base: "/E-com/",
  plugins: [react(), svgr() ],
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@hooks': path.resolve('src/hooks'),
      '@pages': path.resolve('src/pages'),
      '@routes': path.resolve('src/routes'),
      '@store': path.resolve('src/store'),
      '@styles': path.resolve('src/styles'),
      '@layouts': path.resolve('src/layouts'),
      '@util': path.resolve('src/util'),
      '@services': path.resolve('src/services'),
      '@customTypes' : path.resolve('src/types'),
      '@validation': path.resolve('src/validation'),
    }
  }
})
