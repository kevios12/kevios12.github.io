import { defineConfig } from "vite";
const { resolve } = require("path");

export default defineConfig({
    base: '/',
    root: "src",
    assetsInclude: ["./assets/**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./src/index.html"),
                about: resolve(__dirname, "./src/about.html"),
                team: resolve(__dirname, "./src/team.html"),
                support: resolve(__dirname, "./src/support.html"),
                recovery: resolve(__dirname, "./src/recovery.html"),
                kernel: resolve(__dirname, "./src/kernel.html"),
                guide: resolve(__dirname, "./src/guide.html"),
                404: resolve(__dirname, "./src/404.html"),
            },
        },
    }
})
