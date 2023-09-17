import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  // Define module aliases for easier imports
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // Server configuration for development
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5050,
  },
});
