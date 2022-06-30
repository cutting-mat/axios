const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/**
 * 构建 lib
 * */
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.js"),
      name: "index",
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "axios"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
