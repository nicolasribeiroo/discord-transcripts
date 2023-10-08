import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts(), Unocss({ configFile: '../../unocss.config.ts' })],
	build: {
		lib: {
			entry: ['src/lib/index.ts', 'src/lib/components/Messages.tsx'],
			formats: ['es'],
			name: 'ui',
		},

		rollupOptions: {
			external: ['react', 'react-dom'],
		},
	},
});
