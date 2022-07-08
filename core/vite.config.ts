import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import libCss from 'vite-plugin-libcss'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    libCss(),
    dts({
      tsConfigFilePath: './tsconfig.json',
      cleanVueFileName: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'pick',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
