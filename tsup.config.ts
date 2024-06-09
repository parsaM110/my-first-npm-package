import { defineConfig } from "tsup";

export default defineConfig({
    format: ["cjs", "esm"],
    entry: ["./src/index.ts"],
    dts: true,
    sourcemap: true,
    skipNodeModulesBundle: true,
    clean: true,
    });