import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo13.png"],
      manifest: {
        name: "Expense Tracker",
        short_name: "ExpenseTracker",
        description: "Track your income and expenses easily",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/logo13.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logo13.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/logo13.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
});