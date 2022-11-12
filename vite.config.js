import { defineConfig } from 'vite'
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { ViteEjsPlugin } from "vite-plugin-ejs";
const { resolve } = require("path");
const commonData = {
  lastModified: Date.now(),
  title: "Сохраним парк Покровское-Стрешнево"
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // Vuetify
        VuetifyResolver(),
      ],
    }),
    ViteEjsPlugin(commonData),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aqua: resolve(__dirname, 'aqua/index.html'),
        lights: resolve(__dirname, 'lights/index.html'),
        police: resolve(__dirname, 'police/index.html'),
      }
    },
    outDir: 'docs',
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },  
});
