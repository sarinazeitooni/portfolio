import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://sarinazeitooni.github.io/portfolio/
export default defineConfig({
  base: "/",
  plugins: [react()],
});
