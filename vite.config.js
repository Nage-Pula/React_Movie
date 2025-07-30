/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Add the 'base' config below
export default defineConfig({
  base: '/React_Movie/',
  plugins: [react()],
})

