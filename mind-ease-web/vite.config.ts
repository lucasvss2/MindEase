/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
}) */

import { defineConfig, loadEnv } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  process.env = { ...process.env, ...loadEnv(command, process.cwd()) };

  const config = {
    build: {
      outDir: "build",
      sourcemap: true,
      rollupOptions: {
        // plugins: [analyse()],
        cache: false,
        maxParallelFileOps: 2,
        output: {
          manualChunks: (id: any) => {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
    server: {
      hot: true,
      port: 3000,
      fs: {
        deny: [".env", ".env.*"],
      },
    },

    plugins: [viteTsConfigPaths()],
    extensions: [".ts", ".tsx"],
  };

  return config;
});
