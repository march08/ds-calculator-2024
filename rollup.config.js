import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { svelteSVG } from 'rollup-plugin-svelte-svg';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const production = true;

const createRollupConfigBase = (foo) => {
	const defaultConfig = {
		input: 'src/main.ts',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: 'public/build/bundle.js'
		},
		plugins: [
			svelteSVG({
				// optional SVGO options
				// pass empty object to enable defaults
				svgo: {}
			}),
			svelte({
				preprocess: sveltePreprocess({
					sourceMap: !production,
					globalStyle: true,
					postcss: {
						plugins: [autoprefixer()]
					},
					scss: {}
				}),

				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production
				}
			}),
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css({ output: 'bundle.css' }),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			typescript({
				sourceMap: true,
				inlineSources: !production
			}),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			production && terser()
		],
		watch: {
			clearScreen: false
		}
	};

	return foo(defaultConfig);
};

export const createRollupConfigEmbed = (foo) => {
	const nextConfig = createRollupConfigBase((baseConfig) => {
		return {
			...baseConfig
			// any custom config for embed
		};
	});

	return foo(nextConfig);
};

export default createRollupConfigEmbed((config) => {
	return {
		...config,
		input: 'src/embed/embed.ts',
		output: {
			sourcemap: true,
			format: 'umd',
			exports: 'named',
			name: 'DocusignCalculator',
			file: 'build-embed/docusign-calculator/embed.js'
		}
	};
});
