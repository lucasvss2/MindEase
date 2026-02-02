import wyw from '@wyw-in-js/vite';
import { defineConfig, loadEnv } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  process.env = { ...process.env, ...loadEnv(command, process.cwd()) };

  const config = {
    build: {
      outDir: "build",
      sourcemap: true,
      rollupOptions: {
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

    plugins: [
      wyw({
        include: ['**/*.{ts,tsx}'],
        babelOptions: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
        },
      }),
      viteTsConfigPaths(),
    ],
    extensions: [".ts", ".tsx"],
  };

  return config;
});
