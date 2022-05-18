import { defineConfig } from "vite";
const { resolve } = require("path");

export default defineConfig({
    base: '/ekweb/',
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
            },
        },
    }
})
