import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet au serveur de répondre à toutes les interfaces réseau
    port: 5173, // Le port que tu utilises
  },
})
