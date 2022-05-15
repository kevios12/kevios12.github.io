import { defineConfig } from "vite";

export default defineConfig({
    base: '/ekweb/',
    root: "src",
    assetsInclude: ["./assets/**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    }
})