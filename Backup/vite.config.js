/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
}) */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig, loadEnv } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
export default defineConfig(function (_a) {
    var command = _a.command;
    process.env = __assign(__assign({}, process.env), loadEnv(command, process.cwd()));
    var config = {
        build: {
            outDir: "build",
            sourcemap: true,
            rollupOptions: {
                // plugins: [analyse()],
                cache: false,
                maxParallelFileOps: 2,
                output: {
                    manualChunks: function (id) {
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
