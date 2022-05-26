import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";
import typescript from "@rollup/plugin-typescript";

/** @type {import('rollup').RollupOptions} */
const config = {
    treeshake: true,
    input: "./src/index.ts",
    output: {
        format: "es",
        dir: "dist",
        plugins: [],
    },
    plugins: [
        nodeResolve(),
        babel({ babelHelpers: "bundled" }),
        terser(),
        del({
            targets: ["dist/*"],
        }),
        typescript({ tsconfig: "./tsconfig.json" }),
    ],
};

export default config;
