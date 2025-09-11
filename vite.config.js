
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SanketPol_portfolio/'   // तुमच्या repo नावानुसार
})
