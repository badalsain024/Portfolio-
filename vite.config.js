import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("three") || id.includes("@react-three")) return "three";
          if (id.includes("framer-motion") || id.includes("gsap")) return "motion";
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
});
