import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: "/poliservicios/", // Mantiene la base para despliegue en GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html') // Asegura que el HTML sea la entrada principal
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg|gif|webp)$/.test(assetInfo.name)) {
            return 'assets/images/[name][extname]'; // Mantiene la estructura de imágenes
          }
          if (/\.(woff|woff2|ttf|otf)$/.test(assetInfo.name)) {
            return 'assets/webfonts/[name][extname]'; // Mantiene la estructura de fuentes
          }
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]'; // Mantiene la estructura de CSS
          }
          if (assetInfo.name?.endsWith('.js')) {
            return 'assets/js/[name]-[hash][extname]'; // Mantiene la estructura de JS
          }
          return 'assets/[name]-[hash][extname]'; // Para otros tipos de archivos
        }
      }
    }
  }
});