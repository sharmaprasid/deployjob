import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
// vite.config.js
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        // target: 'https://jobfinderserver.vercel.app/',
        target: "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
