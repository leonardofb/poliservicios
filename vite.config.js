import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: "/poliservicios/", // Asegúrate que coincide con la URL
  build: {
    outDir: "dist",
  },
});




/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/poliservicios/",
  plugins: [react()],
})
*/

