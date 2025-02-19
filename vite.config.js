import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/poliservicios/",  // Asegura que todos los archivos usen este prefijo en las rutas
  build: {
    outDir: "dist",  // Carpeta donde se guardan los archivos finales
  },
});

