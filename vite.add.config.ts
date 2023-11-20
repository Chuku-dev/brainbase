import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    outDir: ".vite/build/",
    rollupOptions: {
      external: ["better-sqlite3"],
    },
  },
  root: path.join(__dirname, "src", "add"),
});
