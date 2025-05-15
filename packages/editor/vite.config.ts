import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    }),
  ],
  build: {
    cssCodeSplit: false, // Tạo một file CSS duy nhất
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EditorReact',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lexical'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          suneditor: 'SunEditor',
        },
        assetFileNames: 'style.[ext]', // Output CSS as style.css 
      },
    },
  },
}); 