import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
    base: '/',
    root: resolve(__dirname, 'src'),
    assetsInclude: ["./assets/**/*.*"],
    resolve: {
        alias: {
          '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
          '~jquery': resolve(__dirname, 'node_modules/jquery')
        }
      },
    server: {
        port: 8080,
        hot: true
      },
    build: {
        emptyOutDir: true,
        outDir: '../dist',
        rollupOptions: {
            input: {
              index: resolve(__dirname, "./src/index.html"),
              jquery: resolve(__dirname, "./node_modules/jquery/dist/jquery")
            },
            output: {
              entryFileNames: "assets/js/[name].js",
              assetFileNames: ({ name }) => {
                  if (/\.webp$/.test(name ?? '')) {
                      return 'assets/images/[name]-[hash][extname]';
                  }

                  if (/\.(svg|gif|jpe?g|png)$/.test(name ?? '')) {
                      return 'assets/images/[name][extname]';
                  }

                  if (/\.css$/.test(name ?? '')) {
                      return 'assets/css/[name][extname]';
                  }

                  if (/\.ttf$/.test(name ?? '')) {
                      return 'assets/fonts/[name][extname]';
                  }

                  if (/\.mp4$/.test(name ?? '')) {
                      return 'assets/media/video/[name][extname]';
                  }

                  return 'assets/[name]-[hash][extname]';
              },
            },
    }
}})
