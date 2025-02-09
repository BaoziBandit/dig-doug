import html from 'rollup-plugin-html';
import nodePolyFils from 'rollup-plugin-polyfill-node';

export default {
	input: 'src/index.js',
	external: ['electron'],
	output: {
		format: 'iife',
		globals: {
			electron: 'electron'
		}
	},
	plugins: [
		html({
			include: '**/*.html'
		}),
		nodePolyFils()
	]
};
