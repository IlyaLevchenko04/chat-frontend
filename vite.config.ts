import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "public"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
});
