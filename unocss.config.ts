import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
	theme: {
		colors: {
			blurple: {
				50: '#e0e3ff',
				100: '#cdd2ff',
				200: '#9ea7ff',
				300: '#7782fa',
				DEFAULT: '#5865F2',
				500: '#3d48c3',
				600: '#293294',
				700: '#1a2165',
				800: '#0e1137',
				900: '#020208',
			},
		},
	},
	presets: [presetUno({ dark: 'class' })],
});
