import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
	input: "index.js",
	output: {
		file: "index.cjs",
		format: "cjs",
	},
	plugins: [nodeResolve()],
};