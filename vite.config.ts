import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    base: "/dev-portfolio/",
    plugins: [react()],
    server: {
        host: true,
        port: 8000,
        open: "index.html",
    },
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
    },
})
