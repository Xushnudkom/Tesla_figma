import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@routes", replacement: "/src/router/routes.jsx" },
      { find: "@pages", replacement: "/src/pages/index.jsx" },
      { find: "@logo", replacement: "/src/assets/Logo.svg" },
      { find: "@search", replacement: "/src/assets/search.svg" },
      { find: "@accaunt", replacement: "/src/assets/accaunt.svg" },
      { find: "@hamburger", replacement: "/src/assets/hamburger.svg" },
      { find: "@rightArrow", replacement: "/src/assets/Right.svg" },
      { find: "@leftArrow", replacement: "/src/assets/left.svg" },
    ],
  },
})
